const express = require("express");
const cors = require("cors");

const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

const { randomPrivateKey } = require("./scripts/generate");
const app = express();

const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "048bb448863989baedb3d1c04c25163c4610f512f8999a81d4f84f35ed5fd3b3f8623ed7c19f92ae11fbd134c7c94d15392ad2e667c81e0032da5c761f0135235d": 100,
  "0492a38c8a34f97d337d2a70272d9f08dc95d104f459f4ee2c509a3994a8abd990768581b94a2a5d7dc7a9c282a8e660d12d255a55d492b7034140a2801685b843": 50,
  "04a9e2107d4dff558dcd3d31b2def3accf8eab293e1bf785bd19d4e40c85f05e0ce0679abb277d00c4eff322988a94ae9216ce8b9867184e319e9332ab6231db27": 75,
  "0401b9926001651e1ee51ae34c0b339cb30b3ef7d334c8c16f8bedf2f2c4b0a6ce6bec098926a14b59a62c2e5c4e09cd273aefa715711ee23e2cecd2e64fba17a6": 10,
  "0426d0d2f2ad811c865f01003e60fce7cc78db4a0ed3df2926701bcb0d36d44958d5a41d1a1566f141a1c88b2bad19ac78567cc3cd287037818a804797661fbc6b": 0,
};

app.get("/walletIds", (req, res) => {
  res.send(randomPrivateKey());
});

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.post("/test", async (req, res) => {
  const { message, signature } = req.body;
  const { senderAddress, amount, receiverAddress} = message;
  const [sig, recoveryBit] = signature;

  const publicKey = await recoverKey(JSON.stringify(message), sig, recoveryBit);

  if (secp.utils.bytesToHex(publicKey) != senderAddress) {
    res.status(400).send({ message: "data miss match" });
  } else {
    balances[senderAddress] -= amount;
    balances[receiverAddress] += amount;
    res.status(200).send({ message: "balance updated to receiver" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}

function hashMessage(message) {
  let messageBytes = utf8ToBytes(message);
  return keccak256(messageBytes);
}

async function recoverKey(message, signature, recoveryBit) {
  const hash = hashMessage(message);
  try {
    return secp.recoverPublicKey(hash, Uint8Array.from(Object.values(signature)), recoveryBit)
  } catch (ex) {
    throw ex;
  }
}
