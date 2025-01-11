// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts for Cairo ^0.20.0
use core::starknet::{ContractAddress};
#[starknet::interface]
pub trait IMyToken<TContractState> {
    fn initialize(
        ref self: TContractState,
        recipient: ContractAddress,
        name: ByteArray,
        symbol: ByteArray,
        initial_supply: u256
    );
}

#[starknet::contract]
mod MyToken {
    use openzeppelin::token::erc20::{ERC20Component, ERC20HooksEmptyImpl};
    use starknet::ContractAddress;

    component!(path: ERC20Component, storage: erc20, event: ERC20Event);

    // External
    #[abi(embed_v0)]
    impl ERC20MixinImpl = ERC20Component::ERC20MixinImpl<ContractState>;

    // Internal
    impl ERC20InternalImpl = ERC20Component::InternalImpl<ContractState>;

    #[storage]
    struct Storage {
        #[substorage(v0)]
        erc20: ERC20Component::Storage,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        #[flat]
        ERC20Event: ERC20Component::Event,
    }
    #[abi(embed_v0)]
    impl IMyTokenImpl of super::IMyToken<ContractState> {
        fn initialize(
            ref self: ContractState,
            recipient: ContractAddress,
            name: ByteArray,
            symbol: ByteArray,
            initial_supply: u256
        ) {
            self.erc20.initializer(name, symbol);

            self.erc20.mint(recipient, initial_supply);
        }
    }
}
