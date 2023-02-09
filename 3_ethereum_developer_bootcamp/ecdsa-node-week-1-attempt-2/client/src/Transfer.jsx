import { useState } from "react";
import server from "./server";
import { sign } from "ethereum-cryptography/secp256k1";
import { keccak256 } from "ethereum-cryptography/keccak";
import { utf8ToBytes } from "ethereum-cryptography/utils";

function Transfer({ address, setBalance }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const setValue = (setter) => (evt) => setter(evt.target.value);

  function hashMessage(message) {
    let messageBytes = utf8ToBytes(message);
    return keccak256(messageBytes);
  }

  async function signMessage(message, privateKey) {
    const hashedMessage = hashMessage(message);
    return await sign(hashedMessage, privateKey, { recovered: true });
  }

  async function test(evt) {
    evt.preventDefault();
    const message = {};
    const senderPrivateKey = "751a7f160e79d7360515fcbfc6c1047c1494bfde42a1ba09b6b90e489807cba8"
    message.senderAddress = "0401b9926001651e1ee51ae34c0b339cb30b3ef7d334c8c16f8bedf2f2c4b0a6ce6bec098926a14b59a62c2e5c4e09cd273aefa715711ee23e2cecd2e64fba17a6";
    message.receiverAddress = "0426d0d2f2ad811c865f01003e60fce7cc78db4a0ed3df2926701bcb0d36d44958d5a41d1a1566f141a1c88b2bad19ac78567cc3cd287037818a804797661fbc6b";
    message.amount = 10;
    message.nonce = 1;

    const messageHash = hashMessage(JSON.stringify(message));
    const signature = await signMessage(JSON.stringify(message), senderPrivateKey);

    try {
      const {
        data: { balance },
      } = await server.post(`test`, {
        message,
        messageHash,
        signature,
      });
      setBalance(balance);
    } catch (ex) {
      alert(ex.response.data.message);
    }
  }

  async function transfer(evt) {
    evt.preventDefault();

    try {
      const {
        data: { balance },
      } = await server.post(`send`, {
        sender: address,
        amount: parseInt(sendAmount),
        recipient,
      });
      setBalance(balance);
    } catch (ex) {
      alert(ex.response.data.message);
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

      <input type="submit" className="button" value="Transfer" />

      <input type="button" className="button" value="Test" onClick={test} />
    </form>
  );
}

export default Transfer;
