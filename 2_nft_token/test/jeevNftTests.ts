import { expect } from "chai";
import { ethers } from "hardhat";

describe("jeevNFT", function () {

    it("Get jeevNFT contract", async function () {
        const contract = await ethers.getContractFactory("JeevNFT");
    });
});