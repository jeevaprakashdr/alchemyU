const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  
  const merkleTree = new MerkleTree(niceList);
  const name = "Beth Stracke123"
  const proof = merkleTree.getProof(niceList.findIndex(x => x == name));

  const requestData = { proof: proof, leaf: name};
  const { data: gift } = await axios.post(`${serverUrl}/gift`, requestData);

  console.log({ gift });
}

main();