require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'jazz arch suspect venture story rifle spice modify guess kite slot genius'; 
let testAccounts = [
"0x4ab8160b415ceb0c3bdb4002432f6902970b14bfd3ac6816999c66601b7af7ad",
"0xdb1b541689f2ed8cf5271da9170926d997c419d1b1fa8c21c5590d689572b523",
"0x3d6598666cd5247b03c13d972c7aa2ada88bc72093df76253c2592d4e2fc037f",
"0x25e7cde94d285c019140a8138588549d0fd84c04cf766e9aad78a93191aca653",
"0xb656c9bb22d7cfd510b7ba1d0e31e0d816253b83c7bdbaee5a847f318713b2ab",
"0xd3bb6d271095c75a89a636801fa2c181397383c76a9787c8569631bcc414fc95",
"0x2c55fbb62160999f8fd47b95ec4634ee63d8e4a23ab0266e1a3d9d9ac562208c",
"0x26d6788e16f8133e239300dcd9c6c2c0eea83d7efd1ec8b55d9b9b5b519cae21",
"0x40a099a48756d6b59cbc78b1836e3665a1e8826e0a10246318f42a9d240cadaa",
"0xb53834a2a9948060e13e23485e5309b9e7a02ae2510c45032b0ac0a2df58c663"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


