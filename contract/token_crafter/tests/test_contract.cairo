// use starknet::ContractAddress;
//  token classhash 0x0230e0efc805f2ee0ae1240d12456034ef68aac6c63fcb37d0ecebc8971c99e4

//  crafter addr : 0x027ab745a65da819da3a1310f3aaa3f0ba294bca91442c6cd327d8915e049f27

//  crafter hash 0x016d810ebddb1930032890a8a71037ae42354f7e8965d3c05882842e02f35510

// stark sepolia classhash 0x0699053487675242dc0958e192c17fe4dd57d22238ad78e2e1807fa7919ffde0

// stark addrsss 0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d

// sncast --account argent_sep  deploy --url
// https://starknet-sepolia.g.alchemy.com/starknet/version/rpc/v0_7/b_sdu08GWr-RfrACQZWZFgf0KBfv_MED
// --class-hash 0x01efc7e6e1f0828212e07e00825b766a2d9c65bec0f176027d872660b1f12c7f
// --constructor-calldata 0x050Ed5ff1d8cC5815B414DDc4BcB268bAB4dc3971dEED6014ea19eA1547909aC
// 0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d
// 0x0476c3119379b56549dfe8e60b4ec9795659de90a31cefbc2a8a1c1e6ee0d76c

// sncast --account argent_sep  declare --url
// https://starknet-sepolia.g.alchemy.com/starknet/version/rpc/v0_7/b_sdu08GWr-RfrACQZWZFgf0KBfv_MED
// --contract-name TokenCrafter

// invoke

// sncast --account argent_sep invoke --url
// https://starknet-sepolia.g.alchemy.com/starknet/version/rpc/v0_7/e_mDS7fktL2_Ljamc4QBPXV9rhofY0r1
// --contract-address 0x01463d0add4e07d942fbe9f2594dc2a9d742580c729dd6d13ae0573be44c712f --function
// deploy_token --arguments '"maywoa", "mm", 199909, 439855772532' --fee-token eth

// use snforge_std::{declare, ContractClassTrait, DeclareResultTrait};

// use token_crafter::IHelloStarknetSafeDispatcher;
// use token_crafter::IHelloStarknetSafeDispatcherTrait;
// use token_crafter::IHelloStarknetDispatcher;
// use token_crafter::IHelloStarknetDispatcherTrait;

// fn deploy_contract(name: ByteArray) -> ContractAddress {
//     let contract = declare(name).unwrap().contract_class();
//     let (contract_address, _) = contract.deploy(@ArrayTrait::new()).unwrap();
//     contract_address
// }

// #[test]
// fn test_increase_balance() {
//     let contract_address = deploy_contract("HelloStarknet");

//     let dispatcher = IHelloStarknetDispatcher { contract_address };

//     let balance_before = dispatcher.get_balance();
//     assert(balance_before == 0, 'Invalid balance');

//     dispatcher.increase_balance(42);

//     let balance_after = dispatcher.get_balance();
//     assert(balance_after == 42, 'Invalid balance');
// }

// // #[test]
// // #[feature("safe_dispatcher")]
// // fn test_cannot_increase_balance_with_zero_value() {
// //     let contract_address = deploy_contract("HelloStarknet");

// //     let safe_dispatcher = IHelloStarknetSafeDispatcher { contract_address };

// //     let balance_before = safe_dispatcher.get_balance().unwrap();
// //     assert(balance_before == 0, 'Invalid balance');

// //     match safe_dispatcher.increase_balance(0) {
// //         Result::Ok(_) => core::panic_with_felt252('Should have panicked'),
// //         Result::Err(panic_data) => {
// //             assert(*panic_data.at(0) == 'Amount cannot be 0', *panic_data.at(0));
// //         }
// //     };
// // }
