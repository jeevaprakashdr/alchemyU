import { expect } from "chai";
import { getLatestBlockNumber } from "../src/index"
import { BlockChainProvider } from "../src/BlockChainProvider";

describe("Tests", () => {
    it("Get latest block number", async () => {
        const expectedBlockNumber: number = 123;
        const callback = async () => new Promise<number>((res, _) => res(123))
        const blockNumber: number = await getLatestBlockNumber(callback);
        expect(blockNumber).to.equal(expectedBlockNumber);
    });   

    it("Get latest block number in OO way", async () => {
        // arrange
        const expectedBlockNumber: number = 123;
        
        const blockChainProviderStub = new class stub implements BlockChainProvider {
            getLatestBlockNumber(): Promise<number> {
                return Promise.resolve(123);
            }
        } 
        
        // act 
        const blockNumber: number = await blockChainProviderStub.getLatestBlockNumber();
        
        // assert
        expect(blockNumber).to.equal(expectedBlockNumber);
    });   
});
