import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import config from '../config.json';

import {
  loadProvider,
  loadNetwork,
  loadAccount,
  loadTokens,
  loadExchange
} from '../store/interactions';

import Navbar from './Navbar'

function App() {
  const dispatch = useDispatch()

  const loadBlockchainData = async () => {
    // Connect Ethers to blockchain (the connection to blockchain)
    const provider = loadProvider(dispatch)

    // Fetch current network's chainId (e.g. hardhat: 31337, goerli: 5)
    const chainId = await loadNetwork(provider, dispatch)

    // Reload page when network changes
    window.ethereum.on('chainChanged', () => {
      window.location.reload()
    })

    // Fetch current account & balance from MetaMask when changed
    window.ethereum.on('accountsChanged', () => {
       loadAccount(provider, dispatch)
    })

    // Load Token Smart Contract
    const LDX = config[chainId].LDX
    const mwETH = config[chainId].mwETH
    const mDAI = config[chainId].mDAI
    const mUSDT = config[chainId].mUSDT
    const mwBTC = config[chainId].mwBTC
    const mUSDC = config[chainId].mUSDC
    const mBNB = config[chainId].mBNB
    const mTRX = config[chainId].mTRX
    const mMATIC = config[chainId].mMATIC
    await loadTokens(
      provider,
      [LDX.address,
      mwETH.address,
      mDAI.address,
      mUSDT.address,
      mwBTC.address,
      mUSDC.address,
      mBNB.address,
      mTRX.address,
      mMATIC.address],
      dispatch)

    // Load Exchange Smart Contract
    const exchangeConfig = config[chainId].exchange
    await loadExchange(provider, exchangeConfig.address, dispatch)

  }

  useEffect(() => {
    loadBlockchainData()
  })

  return (
    <div>

      <Navbar />

      <main className='exchange grid'>
        <section className='exchange__section--left grid'>

          {/* Markets */}

          {/* Balance */}

          {/* Order */}

        </section>
        <section className='exchange__section--right grid'>

          {/* PriceChart */}

          {/* Transactions */}

          {/* Trades */}

          {/* OrderBook */}

        </section>
      </main>

      {/* Alert */}

    </div>
  );
}

export default App;