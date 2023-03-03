const hre = require("hardhat");

const CONTRACT_ADDR = "0xD1E05DE18d959DeDBC37196C1c075E3a643A1d1c"
async function main() {

    const emojiContract = await hre.ethers.getContractAt("Emoji", CONTRACT_ADDR);

    let value = await emojiContract.getCurrentEmoji();
    console.log(`current emoji is ${value}`);
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
})