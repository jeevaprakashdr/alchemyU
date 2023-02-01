"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("../src/index");
describe("Tests", () => {
    it("Get latest block number", () => __awaiter(void 0, void 0, void 0, function* () {
        const expectedBlockNumber = 123;
        const callback = () => __awaiter(void 0, void 0, void 0, function* () { return new Promise((res, _) => res(123)); });
        const blockNumber = yield (0, index_1.getLatestBlockNumber)(callback);
        (0, chai_1.expect)(blockNumber).to.equal(expectedBlockNumber);
    }));
    it("Get latest block number in OO way", () => __awaiter(void 0, void 0, void 0, function* () {
        // arrange
        const expectedBlockNumber = 123;
        const blockChainProviderStub = new class stub {
            getLatestBlockNumber() {
                return Promise.resolve(123);
            }
        };
        // act 
        const blockNumber = yield blockChainProviderStub.getLatestBlockNumber();
        // assert
        (0, chai_1.expect)(blockNumber).to.equal(expectedBlockNumber);
    }));
});
