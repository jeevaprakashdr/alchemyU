const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");


// generate public and private ket object
function  generateKeys() {
    keys = {};
    for(let i =0; i < 3; i++){
        const privateKey = toHex(secp.utils.randomPrivateKey());
        const publicKey = toHex(secp.getPublicKey(privateKey));;
        const address = publicKey.slice(-20);
        keys["keys" + i] = [privateKey, publicKey, address];
    }

    return keys;
}

console.log(generateKeys());



//     keys0: [
//       '280f7a749d3277a1a3a0d1078ff259a24dfc1a18c8b4773b97d8a395742ef975',
//       '048bb448863989baedb3d1c04c25163c4610f512f8999a81d4f84f35ed5fd3b3f8623ed7c19f92ae11fbd134c7c94d15392ad2e667c81e0032da5c761f0135235d',
//       '0032da5c761f0135235d'
//     ],
//     keys1: [
//       '7b92e0264b77fd5e6d8d0d28f148addd68a214a5d7639a67f8b95ff4b4cd1260',
//       '0492a38c8a34f97d337d2a70272d9f08dc95d104f459f4ee2c509a3994a8abd990768581b94a2a5d7dc7a9c282a8e660d12d255a55d492b7034140a2801685b843',
//       'b7034140a2801685b843'
//     ],
//     keys2: [
//       'd64903b556c980ba6d9b4f9b25068d9e3ebb8b58656728cb39dc7c702abde476',
//       '04a9e2107d4dff558dcd3d31b2def3accf8eab293e1bf785bd19d4e40c85f05e0ce0679abb277d00c4eff322988a94ae9216ce8b9867184e319e9332ab6231db27',
//       '4e319e9332ab6231db27'
//     ]
