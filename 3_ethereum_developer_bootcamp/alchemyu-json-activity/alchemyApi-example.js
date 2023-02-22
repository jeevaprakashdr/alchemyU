const { Network, Alchemy } = require("alchemy-sdk");

const settings = {
    apiKey: "MObe_SiSvUYioO5PV0g7jjxduvfm6M7o",
    network: Network.ETH_GOERLI
}

const alchemy = new Alchemy(settings);

async function main() {
    const latestBlock = await alchemy.core.getBlockNumber();
    console.log(`The latest block number is ${latestBlock}`);
}

main();