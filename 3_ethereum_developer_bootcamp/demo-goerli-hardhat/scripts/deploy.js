const hre = require("hardhat");

async function main() {
  const Emoji = await hre.ethers.getContractFactory("Emoji");
  const emoji = await Emoji.deploy();

  await emoji.deployed();

  console.log(`Emoji contract deployed in the address ${emoji.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
