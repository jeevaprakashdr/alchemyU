const axios = require('axios');

const ALCHEMY_URL = "https://eth-goerli.g.alchemy.com/v2/MObe_SiSvUYioO5PV0g7jjxduvfm6M7o";

axios.post(ALCHEMY_URL, {
  jsonrpc: "2.0",
  id: 1,
  method: "eth_getBlockByNumber",
  params: ["latest", false]
}).then((response) => {
  console.log(response.data.result);
});