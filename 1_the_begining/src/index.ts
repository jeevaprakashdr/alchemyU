import { Network, Alchemy } from "alchemy-sdk";

const settings = {
    apikey: "hfbkXarnnvxWntWYHm5plmSd9QsJQoWy",
    network: Network.ETH_MAINNET
}

const alchemy : Alchemy = new Alchemy(settings);

async function main() {
    const latestBlockNumber: number = await alchemy.core.getBlockNumber();
    console.log(`the latest block number is ${latestBlockNumber}`);
}

main();