const config = require('../src/config.json')

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

const wait = (seconds) => {
  const milliseconds = seconds * 1000
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function main() {
  // Fetch accounts from wallet, these are unlocked
  const accounts = await ethers.getSigners()

  // Fetch network
  const { chainId } = await ethers.provider.getNetwork()
  console.log("Using chainId:", chainId)

  // Fetch deployed tokens
  const LDX = await ethers.getContractAt('Token', config[chainId].LDX.address)
  console.log(`LDX Token fetched: ${LDX.address}`)

  const mwETH = await ethers.getContractAt('Token', config[chainId].mwETH.address)
  console.log(`mwETH Token fetched: ${mwETH.address}`)

  const mDAI = await ethers.getContractAt('Token', config[chainId].mDAI.address)
  console.log(`mDAI Token fetched: ${mDAI.address}`)

  const mUSDT = await ethers.getContractAt('Token', config[chainId].mUSDT.address)
  console.log(`mUSDT Token fetched: ${mUSDT.address}`)

  const mwBTC = await ethers.getContractAt('Token', config[chainId].mwBTC.address)
  console.log(`mwBTC Token fetched: ${mwBTC.address}`)

  const mUSDC = await ethers.getContractAt('Token', config[chainId].mUSDC.address)
  console.log(`mUSDC Token fetched: ${mUSDC.address}`)

  const mBNB = await ethers.getContractAt('Token', config[chainId].mBNB.address)
  console.log(`mBNB Token fetched: ${mBNB.address}`)

  const mTRX = await ethers.getContractAt('Token', config[chainId].mTRX.address)
  console.log(`mTRX Token fetched: ${mTRX.address}`)

  const mMATIC = await ethers.getContractAt('Token', config[chainId].mMATIC.address)
  console.log(`mMATIC Token fetched: ${mMATIC.address}\n`)

  // Fetch the deployed exchange
  const exchange = await ethers.getContractAt('Exchange', config[chainId].exchange.address)
  console.log(`Exchange fetched: ${exchange.address}\n`)  

  // Give tokens to account[1]
  const sender = accounts[0]
  const receiver = accounts[1]
  let amount = tokens(200000)

  // user1 transfers 10,000 mwETH, mDAI, mUSDT, mwBTC, mUSDC, mBNB, mTRX, mMATIC to WALLET...
  let transaction, result
  transaction = await mwETH.connect(sender).transfer(receiver.address, amount)
  console.log(`Transferred ${amount} mwETH tokens from ${sender.address} to ${receiver.address}`)

  transaction = await mDAI.connect(sender).transfer(receiver.address, amount)
  console.log(`Transferred ${amount} mDAI tokens from ${sender.address} to ${receiver.address}`)

  transaction = await mUSDT.connect(sender).transfer(receiver.address, amount)
  console.log(`Transferred ${amount} mUSDT tokens from ${sender.address} to ${receiver.address}`)

  transaction = await mwBTC.connect(sender).transfer(receiver.address, amount)
  console.log(`Transferred ${amount} mwBTC tokens from ${sender.address} to ${receiver.address}`)

  transaction = await mUSDC.connect(sender).transfer(receiver.address, amount)
  console.log(`Transferred ${amount} mUSDC tokens from ${sender.address} to ${receiver.address}`)

  transaction = await mBNB.connect(sender).transfer(receiver.address, amount)
  console.log(`Transferred ${amount} mBNB tokens from ${sender.address} to ${receiver.address}`)

  transaction = await mTRX.connect(sender).transfer(receiver.address, amount)
  console.log(`Transferred ${amount} mTRX tokens from ${sender.address} to ${receiver.address}`)

  transaction = await mMATIC.connect(sender).transfer(receiver.address, amount)
  console.log(`Transferred ${amount} mMATIC tokens from ${sender.address} to ${receiver.address}`)

  // Set up exchange users
  const user1 = accounts[0]
  const user2 = accounts[1]
  amount2 = tokens(100000)

  // user1 approves LDX
  transaction = await LDX.connect(user1).approve(exchange.address, amount2)
  await transaction.wait()
  console.log(`Approved ${amount2} LDX tokens from ${user1.address}`)

  // user1 deposits 100,000 LDX
  transaction = await exchange.connect(user1).depositToken(LDX.address, amount2)
  await transaction.wait()
  console.log(`Deposited ${amount2} LDX tokens from ${user1.address}`)

  // user1 approves mwETH
  transaction = await mwETH.connect(user1).approve(exchange.address, amount2)
  await transaction.wait()
  console.log(`Approved ${amount2} mwETH tokens from ${user1.address}`)

  // user1 deposits 100,000 mwETH
  transaction = await exchange.connect(user1).depositToken(mwETH.address, amount2)
  await transaction.wait()
  console.log(`Deposited ${amount2} mwETH tokens from ${user1.address}`)

  // user1 approves mDAI
  transaction = await mDAI.connect(user1).approve(exchange.address, amount2)
  await transaction.wait()
  console.log(`Approved ${amount2} mDAI tokens from ${user1.address}`)

  // user1 deposits 100,000 mDAI
  transaction = await exchange.connect(user1).depositToken(mDAI.address, amount2)
  await transaction.wait()
  console.log(`Deposited ${amount2} mDAI tokens from ${user1.address}`)

  // user1 approves mUSDT
  transaction = await mUSDT.connect(user1).approve(exchange.address, amount2)
  await transaction.wait()
  console.log(`Approved ${amount2} mUSDT tokens from ${user1.address}`)

  // user1 deposits 100,000 mUSDT
  transaction = await exchange.connect(user1).depositToken(mUSDT.address, amount2)
  await transaction.wait()
  console.log(`Deposited ${amount2} mUSDT tokens from ${user1.address}`)

  // user1 approves mwBTC
  transaction = await mwBTC.connect(user1).approve(exchange.address, amount2)
  await transaction.wait()
  console.log(`Approved ${amount2} mwBTC tokens from ${user1.address}`)

  // user1 deposits 100,000 mwBTC
  transaction = await exchange.connect(user1).depositToken(mwBTC.address, amount2)
  await transaction.wait()
  console.log(`Deposited ${amount2} mwBTC tokens from ${user1.address}`)

  // user1 approves mUSDC
  transaction = await mUSDC.connect(user1).approve(exchange.address, amount2)
  await transaction.wait()
  console.log(`Approved ${amount2} mUSDC tokens from ${user1.address}`)

  // user1 deposits 100,000 mUSDC
  transaction = await exchange.connect(user1).depositToken(mUSDC.address, amount2)
  await transaction.wait()
  console.log(`Deposited ${amount2} mUSDC tokens from ${user1.address}`)

  // user1 approves mBNB
  transaction = await mBNB.connect(user1).approve(exchange.address, amount2)
  await transaction.wait()
  console.log(`Approved ${amount2} mBNB tokens from ${user1.address}`)

  // user1 deposits 100,000 mBNB
  transaction = await exchange.connect(user1).depositToken(mBNB.address, amount2)
  await transaction.wait()
  console.log(`Deposited ${amount2} mBNB tokens from ${user1.address}`)

  // user1 approves mTRX
  transaction = await mTRX.connect(user1).approve(exchange.address, amount2)
  await transaction.wait()
  console.log(`Approved ${amount2} mTRX tokens from ${user1.address}`)

  // user1 deposits 100,000 mTRX
  transaction = await exchange.connect(user1).depositToken(mTRX.address, amount2)
  await transaction.wait()
  console.log(`Deposited ${amount2} mTRX tokens from ${user1.address}`)

  // user1 approves mMATIC
  transaction = await mMATIC.connect(user1).approve(exchange.address, amount2)
  await transaction.wait()
  console.log(`Approved ${amount2} mMATIC tokens from ${user1.address}`)

  // user1 deposits 100,000 mMATIC
  transaction = await exchange.connect(user1).depositToken(mMATIC.address, amount2)
  await transaction.wait()
  console.log(`Deposited ${amount2} mMATIC tokens from ${user1.address}`)

  // user2 approves mwETH
  transaction = await mwETH.connect(user2).approve(exchange.address, amount2)
  await transaction.wait()
  console.log(`Approved ${amount2} mwETH tokens from ${user2.address}`)

  // user2 deposits 100,000 mwETH
  transaction = await exchange.connect(user2).depositToken(mwETH.address, amount2)
  await transaction.wait()
  console.log(`Deposited ${amount2} mwETH tokens from ${user2.address}`)

  // user2 approves mwETH
  transaction = await mwETH.connect(user2).approve(exchange.address, amount2)
  await transaction.wait()
  console.log(`Approved ${amount2} mwETH tokens from ${user2.address}`)

  // user2 deposits 100,000 mwETH
  transaction = await exchange.connect(user2).depositToken(mwETH.address, amount2)
  await transaction.wait()
  console.log(`Deposited ${amount2} mwETH tokens from ${user2.address}`)

  // user2 approves mDAI
  transaction = await mDAI.connect(user2).approve(exchange.address, amount2)
  await transaction.wait()
  console.log(`Approved ${amount2} mDAI tokens from ${user2.address}`)

  // user2 deposits 100,000 mDAI
  transaction = await exchange.connect(user2).depositToken(mDAI.address, amount2)
  await transaction.wait()
  console.log(`Deposited ${amount2} mDAI tokens from ${user2.address}`)

  // user2 approves mUSDT
  transaction = await mUSDT.connect(user2).approve(exchange.address, amount2)
  await transaction.wait()
  console.log(`Approved ${amount2} mUSDT tokens from ${user2.address}`)

  // user2 deposits 100,000 mUSDT
  transaction = await exchange.connect(user2).depositToken(mUSDT.address, amount2)
  await transaction.wait()
  console.log(`Deposited ${amount2} mUSDT tokens from ${user2.address}`)

  // user2 approves mwBTC
  transaction = await mwBTC.connect(user2).approve(exchange.address, amount2)
  await transaction.wait()
  console.log(`Approved ${amount2} mwBTC tokens from ${user2.address}`)

  // user2 deposits 100,000 mwBTC
  transaction = await exchange.connect(user2).depositToken(mwBTC.address, amount2)
  await transaction.wait()
  console.log(`Deposited ${amount2} mwBTC tokens from ${user2.address}`)

  // user2 approves mUSDC
  transaction = await mUSDC.connect(user2).approve(exchange.address, amount2)
  await transaction.wait()
  console.log(`Approved ${amount2} mUSDC tokens from ${user2.address}`)

  // user2 deposits 100,000 mUSDC
  transaction = await exchange.connect(user2).depositToken(mUSDC.address, amount2)
  await transaction.wait()
  console.log(`Deposited ${amount2} mUSDC tokens from ${user2.address}`)

  // user2 approves mBNB
  transaction = await mBNB.connect(user2).approve(exchange.address, amount2)
  await transaction.wait()
  console.log(`Approved ${amount2} mBNB tokens from ${user2.address}`)

  // user2 deposits 100,000 mBNB
  transaction = await exchange.connect(user2).depositToken(mBNB.address, amount2)
  await transaction.wait()
  console.log(`Deposited ${amount2} mBNB tokens from ${user2.address}`)

  // user2 approves mTRX
  transaction = await mTRX.connect(user2).approve(exchange.address, amount2)
  await transaction.wait()
  console.log(`Approved ${amount2} mTRX tokens from ${user2.address}`)

  // user2 deposits 100,000 mTRX
  transaction = await exchange.connect(user2).depositToken(mTRX.address, amount2)
  await transaction.wait()
  console.log(`Deposited ${amount2} mTRX tokens from ${user2.address}`)

  // user2 approves mMATIC
  transaction = await mMATIC.connect(user2).approve(exchange.address, amount2)
  await transaction.wait()
  console.log(`Approved ${amount2} mMATIC tokens from ${user2.address}`)

  // user2 deposits 100,000 mMATIC
  transaction = await exchange.connect(user2).depositToken(mMATIC.address, amount2)
  await transaction.wait()
  console.log(`Deposited ${amount2} mMATIC tokens from ${user2.address}`)

  /////////////////////////////////////////
  // Seed a Cancelled Order

  // User 1 makes order to get tokens
  let orderId
  transaction = await exchange.connect(user1).makeOrder(mwETH.address, tokens(200), LDX.address, tokens(10))
  result = await transaction.wait()
  console.log(`Made order from ${user1.address}`)

  // User 1 cancels order
  orderId = result.events[0].args.id
  transaction = await exchange.connect(user1).cancelOrder(orderId)
  result = await transaction.wait()
  console.log(`Cancelled order from ${user1.address}\n`)

  // Wait 1 second
  await wait(1)

  /////////////////////////////////////////
  // Seed Filled Orders

  // User 1 makes order
  transaction = await exchange.connect(user1).makeOrder(mwETH.address, tokens(10), LDX.address, tokens(200))
  result = await transaction.wait()
  console.log(`Made order from ${user1.address}`)

  // User 2 fills order
  orderId = result.events[0].args.id
  transaction = await exchange.connect(user2).fillOrder(orderId)
  result = await transaction.wait()
  console.log(`Filled order from ${user1.address}\n`)

  // Wait 1 second
  await wait(1)

  // User 1 makes another order
  transaction = await exchange.connect(user1).makeOrder(mwETH.address, tokens(15), LDX.address, tokens(305))
  result = await transaction.wait()
  console.log(`Made order from ${user1.address}`)

  // User 2 fills another order
  orderId = result.events[0].args.id
  transaction = await exchange.connect(user2).fillOrder(orderId)
  result = await transaction.wait()
  console.log(`Filled order from ${user1.address}\n`)

  // Wait 1 second
  await wait(1)

  // User 1 makes final order
  transaction = await exchange.connect(user1).makeOrder(mwETH.address, tokens(20), LDX.address, tokens(395))
  result = await transaction.wait()
  console.log(`Made order from ${user1.address}`)

  // User 2 fills final order
  orderId = result.events[0].args.id
  transaction = await exchange.connect(user2).fillOrder(orderId)
  result = await transaction.wait()
  console.log(`Filled order from ${user1.address}\n`)

  // Wait 1 second
  await wait(1)

  //////////////////////////////////////
  // Seed orders

  // User 1 makes 10 orders (LDX/mwETH)
  for(let i = 1; i <= 10; i++) {
    transaction = await exchange.connect(user1).makeOrder(mwETH.address, tokens(10 + i), LDX.address, tokens(200))
    result = await transaction.wait()

    console.log(`Made order from ${user1.address}`)

  // Wait 1 second
  await wait(1)
  }

  // User 2 makes 10 orders (LDX/mwETH)
  for(let i = 1; i <= 10; i++) {
    transaction = await exchange.connect(user2).makeOrder(LDX.address, tokens(200), mwETH.address, tokens(10 - i / 2))
    result = await transaction.wait()

    console.log(`Made order from ${user2.address}`)

  // Wait 1 second
  await wait(1)
  }

  // User 1 makes 10 orders (LDX/mUSDT)
  for(let i = 1; i <= 10; i++) {
    transaction = await exchange.connect(user1).makeOrder(mUSDT.address, tokens(100 + i), LDX.address, tokens(1))
    result = await transaction.wait()

    console.log(`Made order from ${user1.address}`)

  // Wait 1 second
  await wait(1)
  }

  // User 2 makes 10 orders (LDX/mUSDT)
  for(let i = 1; i <= 10; i++) {
    transaction = await exchange.connect(user2).makeOrder(LDX.address, tokens(1), mUSDT.address, tokens(100 - i))
    result = await transaction.wait()

    console.log(`Made order from ${user2.address}`)

  // Wait 1 second
  await wait(1)
  }

  // User 1 makes 10 orders (LDX/mwBTC)
  for(let i = 1; i <= 10; i++) {
    transaction = await exchange.connect(user1).makeOrder(mwBTC.address, tokens(0.5 + 0.001 * i), LDX.address, tokens(150))
    result = await transaction.wait()

    console.log(`Made order from ${user1.address}`)

  // Wait 1 second
  await wait(1)
  }

  // User 2 makes 10 orders (LDX/mwBTC)
  for(let i = 1; i <= 10; i++) {
    transaction = await exchange.connect(user2).makeOrder(LDX.address, tokens(150), mwBTC.address, tokens(0.5 - 0.001 * i))
    result = await transaction.wait()

    console.log(`Made order from ${user2.address}`)

  // Wait 1 second
  await wait(1)
  }

  // User 1 makes 10 orders (mwETH/mUSDT)
  for(let i = 1; i <= 10; i++) {
    transaction = await exchange.connect(user1).makeOrder(mUSDT.address, tokens(2000 + i), mwETH.address, tokens(1))
    result = await transaction.wait()

    console.log(`Made order from ${user1.address}`)

  // Wait 1 second
  await wait(1)
  }

  // User 2 makes 10 orders (mwETH/mUSDT)
  for(let i = 1; i <= 10; i++) {
    transaction = await exchange.connect(user2).makeOrder(mwETH.address, tokens(1), mUSDT.address, tokens(2000 - i))
    result = await transaction.wait()

    console.log(`Made order from ${user2.address}`)

  // Wait 1 second
  await wait(1)
  }

  // User 1 makes 10 orders (mDAI/mUSDT)
  for(let i = 1; i <= 10; i++) {
    transaction = await exchange.connect(user1).makeOrder(mUSDT.address, tokens(1 + 0.001 * i), mDAI.address, tokens(1))
    result = await transaction.wait()

    console.log(`Made order from ${user1.address}`)

  // Wait 1 second
  await wait(1)
  }

  // User 2 makes 10 orders (mDAI/mUSDT)
  for(let i = 1; i <= 10; i++) {
    transaction = await exchange.connect(user2).makeOrder(mDAI.address, tokens(1), mUSDT.address, tokens(1 - 0.001 * i))
    result = await transaction.wait()

    console.log(`Made order from ${user2.address}`)

  // Wait 1 second
  await wait(1)
  }

  // User 1 makes 10 orders (mwBTC/mUSDT)
  for(let i = 1; i <= 10; i++) {
    transaction = await exchange.connect(user1).makeOrder(mUSDT.address, tokens(30000 + 10 * i), mwBTC.address, tokens(1))
    result = await transaction.wait()

    console.log(`Made order from ${user1.address}`)

  // Wait 1 second
  await wait(1)
  }

  // User 2 makes 10 orders (mwBTC/mUSDT)
  for(let i = 1; i <= 10; i++) {
    transaction = await exchange.connect(user2).makeOrder(mwBTC.address, tokens(1), mUSDT.address, tokens(30000 - 10 * i))
    result = await transaction.wait()

    console.log(`Made order from ${user2.address}`)

  // Wait 1 second
  await wait(1)
  }

  // User 1 makes 10 orders (mUSDC/mUSDT)
  for(let i = 1; i <= 10; i++) {
    transaction = await exchange.connect(user1).makeOrder(mUSDT.address, tokens(1 + 0.001 * i), mUSDC.address, tokens(1))
    result = await transaction.wait()

    console.log(`Made order from ${user1.address}`)

  // Wait 1 second
  await wait(1)
  }

  // User 2 makes 10 orders (mUSDC/mUSDT)
  for(let i = 1; i <= 10; i++) {
    transaction = await exchange.connect(user2).makeOrder(mUSDC.address, tokens(1), mUSDT.address, tokens(1 - 0.001 * i))
    result = await transaction.wait()

    console.log(`Made order from ${user2.address}`)

  // Wait 1 second
  await wait(1)
  }

  // User 1 makes 10 orders (mBNB/mUSDT)
  for(let i = 1; i <= 10; i++) {
    transaction = await exchange.connect(user1).makeOrder(mUSDT.address, tokens(250 + i), mBNB.address, tokens(1))
    result = await transaction.wait()

    console.log(`Made order from ${user1.address}`)

  // Wait 1 second
  await wait(1)
  }

  // User 2 makes 10 orders (mBNB/mUSDT)
  for(let i = 1; i <= 10; i++) {
    transaction = await exchange.connect(user2).makeOrder(mBNB.address, tokens(1), mUSDT.address, tokens(250 - i))
    result = await transaction.wait()

    console.log(`Made order from ${user2.address}`)

  // Wait 1 second
  await wait(1)
  }

  // User 1 makes 10 orders (mTRX/mUSDT)
  for(let i = 1; i <= 10; i++) {
    transaction = await exchange.connect(user1).makeOrder(mUSDT.address, tokens(0.08 + 0.0001 * i), mTRX.address, tokens(1))
    result = await transaction.wait()

    console.log(`Made order from ${user1.address}`)

  // Wait 1 second
  await wait(1)
  }

  // User 2 makes 10 orders (mTRX/mUSDT)
  for(let i = 1; i <= 10; i++) {
    transaction = await exchange.connect(user2).makeOrder(mTRX.address, tokens(1), mUSDT.address, tokens(0.08 - 0.0001 * i))
    result = await transaction.wait()

    console.log(`Made order from ${user2.address}`)

  // Wait 1 second
  await wait(1)
  }

  // User 1 makes 10 orders (mMATIC/mUSDT)
  for(let i = 1; i <= 10; i++) {
    transaction = await exchange.connect(user1).makeOrder(mUSDT.address, tokens(0.75 + 0.001 * i), mMATIC.address, tokens(1))
    result = await transaction.wait()

    console.log(`Made order from ${user1.address}`)

  // Wait 1 second
  await wait(1)
  }

  // User 2 makes 10 orders (mMATIC/mUSDT)
  for(let i = 1; i <= 10; i++) {
    transaction = await exchange.connect(user2).makeOrder(mMATIC.address, tokens(1), mUSDT.address, tokens(0.75 - 0.001 * i))
    result = await transaction.wait()

    console.log(`Made order from ${user2.address}`)

  // Wait 1 second
  await wait(1)
  }

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
