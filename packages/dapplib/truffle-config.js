require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind concert gesture forest flat sketch'; 
let testAccounts = [
"0x8198d088cc420f2ccaccbfa6f5dd8b77458e12bb34e3862e1760e80b5b07c965",
"0x15876ad2c716edbdaf2248fbda5bb6ec6cb6eb4978253de85b8424aecc78ef55",
"0x6036045c25660d74b7604c9bb3c637d806b3f3f47359374ffa663746068f9da8",
"0xe7db86342b50af4812499de4e420ea8bc0f6bcb7dc2be51d20dbd153ab39b908",
"0x37676726a9718deeb9538f73ac2b3d5f23f16fd5e82c45e379d07615f507ffb1",
"0x533a3ced3ba15c97c51d90c2845c593783a16a2ee0cf176a3af2b317de2ddedb",
"0xf2817f99cb43c8666c9c2369508ade82ac6ce5d10c3d2f88374985536e0dff81",
"0xfc33bdd4005cd103fbff8d65582770cbc09b4cfcaf422397d59322ab89f2aa5a",
"0xedc725a3ff9dcca6a79d0395b3c0ef3af4fb03bdc14108b08f158cecf9a9c8cd",
"0x5268ceb413fc235328aace94ae13bf53347e028749604897b80d1eeb3fbf79ab"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


