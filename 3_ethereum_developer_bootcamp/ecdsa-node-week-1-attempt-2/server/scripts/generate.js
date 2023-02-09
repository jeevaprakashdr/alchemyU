const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

function random() {
    const privateKey = secp.utils.randomPrivateKey();
    const publickey = secp.getPublicKey(privateKey);

    console.log(`privateKey ${ toHex(privateKey) }`);
    console.log(`publicKey ${ toHex(publickey) }`);
}