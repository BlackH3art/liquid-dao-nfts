const main = async () => {

  const TeamLiquidNFTs = await hre.ethers.getContractFactory("TeamLiquidNFTs");

  const teamLiquidNFTs = await TeamLiquidNFTs.deploy();

  await teamLiquidNFTs.deployed();

  console.log("**** DEPLOYED ****");

  console.log("TeamLiquidNFTs deployed to:", teamLiquidNFTs.address);
  console.log(`Verify with: \n npx hardhat verify --network mumbai ${teamLiquidNFTs.address}`);

}



const deployTeamLiquidNFTs = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}


deployTeamLiquidNFTs();