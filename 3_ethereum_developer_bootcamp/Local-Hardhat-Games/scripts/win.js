// add the game address here and update the contract name if necessary
const gameAddr = "0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1";
const contractName = "Game4";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    
    // Game 2
    // await game.setX(25);
    // await game.setY(25);
    // const tx = await game.win();

    // game 3
    //const tx = await game.win(45);

    // game 4
    // const tx = await game.win(46);

    // game 5
    // await game.giveMeAllowance(10000);
    // await game.mint(10000);
    // const tx = await game.win();

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
