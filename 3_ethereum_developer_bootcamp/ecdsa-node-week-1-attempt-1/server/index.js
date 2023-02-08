const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "048bb448863989baedb3d1c04c25163c4610f512f8999a81d4f84f35ed5fd3b3f8623ed7c19f92ae11fbd134c7c94d15392ad2e667c81e0032da5c761f0135235d": 100,
  "0492a38c8a34f97d337d2a70272d9f08dc95d104f459f4ee2c509a3994a8abd990768581b94a2a5d7dc7a9c282a8e660d12d255a55d492b7034140a2801685b843": 50,
  "04a9e2107d4dff558dcd3d31b2def3accf8eab293e1bf785bd19d4e40c85f05e0ce0679abb277d00c4eff322988a94ae9216ce8b9867184e319e9332ab6231db27": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {

  // TODO :  get a signature  from the client side application
  // recover the public key form the signature and use as a sender
  const { sender, recipient, amount, name } = req.body;

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

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
