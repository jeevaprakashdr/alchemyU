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
exports.getLatestBlockNumber = void 0;
const alchemy_sdk_1 = require("alchemy-sdk");
const settings = {
    apikey: "hfbkXarnnvxWntWYHm5plmSd9QsJQoWy",
    network: alchemy_sdk_1.Network.ETH_MAINNET
};
const alchemy = new alchemy_sdk_1.Alchemy(settings);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const latestBlockNumber = yield getLatestBlockNumber(alchemy.core.getBlockNumber);
        console.log(`the latest block number is ${latestBlockNumber}`);
    });
}
function getLatestBlockNumber(getBlockNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield getBlockNumber();
    });
}
exports.getLatestBlockNumber = getLatestBlockNumber;
main();
