
export interface BlockChainProvider {
    getLatestBlockNumber(): Promise<number>;
}
