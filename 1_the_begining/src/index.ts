import { Network, Alchemy } from "alchemy-sdk";

const settings = {
    apikey: "hfbkXarnnvxWntWYHm5plmSd9QsJQoWy",
    network: Network.ETH_MAINNET
}

const alchemy : Alchemy = new Alchemy(settings);

async function main() {
    const latestBlockNumber: number = await getLatestBlockNumber(alchemy.core.getBlockNumber);
    console.log(`the latest block number is ${latestBlockNumber}`);
}

export async function getLatestBlockNumber(getBlockNumber: () => Promise<number>): Promise<number> {
    return await getBlockNumber();
}

main();