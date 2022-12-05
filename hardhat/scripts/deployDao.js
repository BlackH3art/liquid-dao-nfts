const main = async () => {

  const TeamLiquidDAO = await hre.ethers.getContractFactory("TeamLiquidDAO");

  const teamLiquidDAO = await TeamLiquidDAO.deploy();

  await teamLiquidDAO.deployed();

  console.log("**** DEPLOYED ****");

  console.log("TeamLiquidDAO deployed to:", teamLiquidDAO.address);
  console.log(`Verify with: \n npx hardhat verify --network mumbai ${teamLiquidDAO.address}`);

}



const deployTeamLiquidDAO = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}


deployTeamLiquidDAO();