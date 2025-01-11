use core::starknet::{ContractAddress};
use openzeppelin::token::erc20::interface::{IERC20Dispatcher, IERC20DispatcherTrait};
#[starknet::interface]
pub trait ICrafter<TContractState> {
    fn get_user_balance(self: @TContractState, twitter_user: felt252) -> u256;
    fn deploy_token(
        ref self: TContractState,
        name: ByteArray,
        symbol: ByteArray,
        initial_supply: u256,
        twitter_user: felt252
    ) -> (IERC20Dispatcher, ContractAddress);
    fn deposit(
        ref self: TContractState, amount: u256, twitter_user: felt252, user_address: ContractAddress
    );
    fn get_num_deployed_tokens(self: @TContractState) -> u256;
    fn get_useable_balance(self: @TContractState) -> u256;
}

#[starknet::contract]
mod TokenCrafter {
    use core::starknet::{ContractAddress, get_caller_address, get_contract_address};
    use openzeppelin::token::erc20::interface::{IERC20Dispatcher, IERC20DispatcherTrait};
    // use core::num::traits::Zero;
    use core::integer::{u256};
    use core::starknet::storage::{
        StoragePointerReadAccess, StoragePointerWriteAccess, Map, StoragePathEntry
    };
    use starknet::{syscalls::deploy_syscall, SyscallResultTrait, ClassHash};
    use token_crafter::erc20::{IMyTokenDispatcher, IMyTokenDispatcherTrait};
    // use openzeppelin::token::erc20;

    #[storage]
    struct Storage {
        deployer: ContractAddress,
        payment_token: ContractAddress,
        user_balance: Map<felt252, u256>,
        user_handle_to_address: Map<felt252, ContractAddress>,
        useable_balance: u256,
        no_of_deployed_tokens: u256,
        fee: u256,
        erc20_hash: felt252
    }

    #[constructor]
    fn constructor(
        ref self: ContractState,
        deployer: ContractAddress,
        stark_address: ContractAddress,
        hash: felt252
    ) {
        let fee: u256 = 1; // 100000000000000000; //1e17 
        self.deployer.write(deployer);
        self.payment_token.write(stark_address);
        self.fee.write(fee);
        self.erc20_hash.write(hash);
    }

    #[abi(embed_v0)]
    impl CrafterImpl of super::ICrafter<ContractState> {
        fn get_user_balance(self: @ContractState, twitter_user: felt252) -> u256 {
            let balance = self.user_balance.read(twitter_user);
            balance
        }

        fn deposit(
            ref self: ContractState,
            amount: u256,
            twitter_user: felt252,
            user_address: ContractAddress
        ) {
            let stark_address = self.payment_token.read();
            let token = IERC20Dispatcher { contract_address: stark_address };
            let deployer = self.deployer.read();
            let this_contract = get_contract_address();
            let caller_address = get_caller_address();
            self.user_handle_to_address.entry(twitter_user).write(user_address);
            self.user_balance.entry(twitter_user).write(amount + self.user_balance.read(twitter_user));
            assert(token.balance_of(caller_address) >= amount, 'Insufficient balance');
            assert(
                token.allowance(caller_address, this_contract) >= amount, 'Insufficient allowance'
            );

            let _transfer = token.transfer_from(caller_address, deployer, amount);
        }

        fn deploy_token(
            ref self: ContractState,
            name: ByteArray,
            symbol: ByteArray,
            initial_supply: u256,
            twitter_user: felt252
        ) -> (IERC20Dispatcher, ContractAddress) {
            let recipient = self.user_handle_to_address.read(twitter_user);
            let initial_balance = self.user_balance.read(twitter_user);
            let fee = self.fee.read();
            assert(initial_balance > 0, 'insufficient balance');
            let final_balance = initial_balance - self.fee.read();
            let protocol_balance = self.useable_balance.read();
            let hash: ClassHash = self.erc20_hash.read().try_into().unwrap();
            let salt1 : felt252 = self.no_of_deployed_tokens.read().try_into().unwrap();
            let salt2 : felt252 = recipient.try_into().unwrap();
            self.user_balance.entry(twitter_user).write(final_balance);
            self.useable_balance.write(protocol_balance + fee / 10); // who knows.
            self.no_of_deployed_tokens.write(self.no_of_deployed_tokens.read() + 1);

            let (contract_address, _) = deploy_syscall(
                hash, salt1 + salt2, array![].span(), false
            )
                .unwrap_syscall();
            let token_dispatch = IMyTokenDispatcher { contract_address };
            token_dispatch.initialize(recipient, name, symbol, initial_supply);
            (IERC20Dispatcher { contract_address }, contract_address)
        }

        fn get_num_deployed_tokens(self: @ContractState) -> u256 {
            self.no_of_deployed_tokens.read()
        }

        fn get_useable_balance(self: @ContractState) -> u256 {
            self.useable_balance.read()
        }
    }
    //
}
