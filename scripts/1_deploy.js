async function main() {
  console.log(`Preparing deployment...\n`)

  // Fetch contract to deploy
  const Token = await ethers.getContractFactory('Token')
  const Exchange = await ethers.getContractFactory('Exchange')

  // Fetch accounts
  const accounts = await ethers.getSigners()

  console.log(`Accounts fetched:\n${accounts[0].address}\n${accounts[1].address}\n`)

  // Deploy contracts
  const LDX = await Token.deploy('Lasdex Token', 'LDX', '1000000')
  await LDX.deployed()
  console.log(`LDX Token Deployed to: ${LDX.address}`)

  const mwETH = await Token.deploy('Mock Wrapped Ether', 'mwETH', '1000000')
  await mwETH.deployed()
  console.log(`mwETH Token Deployed to: ${mwETH.address}`)

  const mDAI = await Token.deploy('Mock Dai', 'mDAI', '1000000')
  await mDAI.deployed()
  console.log(`mDAI Token Deployed to: ${mDAI.address}`)

  const mUSDT = await Token.deploy('Mock Tether USD', 'mUSDT', '1000000')
  await mUSDT.deployed()
  console.log(`mUSDT Token Deployed to: ${mUSDT.address}`)

  const mwBTC = await Token.deploy('Mock Wrapped BTC', 'mwBTC', '1000000')
  await mwBTC.deployed()
  console.log(`mwBTC Token Deployed to: ${mwBTC.address}`)

  const mUSDC = await Token.deploy('Mock USD Coin', 'mUSDC', '1000000')
  await mUSDC.deployed()
  console.log(`mUSDC Token Deployed to: ${mUSDC.address}`)

  const mBNB = await Token.deploy('Mock BNB', 'mBNB', '1000000')
  await mBNB.deployed()
  console.log(`mBNB Token Deployed to: ${mBNB.address}`)

  const mTRX = await Token.deploy('Mock Tron', 'mTRX', '1000000')
  await mTRX.deployed()
  console.log(`mTRX Token Deployed to: ${mTRX.address}`)

  const mMATIC = await Token.deploy('Mock Matic Token', 'mMATIC', '1000000')
  await mMATIC.deployed()
  console.log(`mMATIC Token Deployed to: ${mMATIC.address}`)

  const exchange = await Exchange.deploy(accounts[1].address, 1)
  await exchange.deployed()
  console.log(`Exchange Deployed to: ${exchange.address}`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
