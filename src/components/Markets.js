import { useSelector, useDispatch } from 'react-redux'

import config from '../config.json'

import { loadTokens } from '../store/interactions'

const Markets = () => {
  const provider = useSelector(state => state.provider.connection)
  const chainId = useSelector(state => state.provider.chainId)

  const dispatch = useDispatch()

  const marketHandler = async (e) => {
  	loadTokens(provider, (e.target.value).split(','), dispatch)
  }

  return(
    <div className='component exchange__markets'>
      <div className='component__header'>
      	<h2>Select Trading Pair</h2>
      </div>

      {chainId && config[chainId] ? (
      <select name="markets" id="markets" onChange={marketHandler}>
      	<option value={`${config[chainId].LDX.address},${config[chainId].mUSDT.address}`}>LDX / USDT</option>
      	<option value={`${config[chainId].mwETH.address},${config[chainId].mUSDT.address}`}>wETH / USDT</option>
      	<option value={`${config[chainId].mDAI.address},${config[chainId].mUSDT.address}`}>DAI / USDT</option>
      	<option value={`${config[chainId].mwBTC.address},${config[chainId].mUSDT.address}`}>wBTC / USDT</option>
      	<option value={`${config[chainId].mUSDC.address},${config[chainId].mUSDT.address}`}>USDC / USDT</option>
      	<option value={`${config[chainId].mBNB.address},${config[chainId].mUSDT.address}`}>BNB / USDT</option>
      	<option value={`${config[chainId].mTRX.address},${config[chainId].mUSDT.address}`}>TRX / USDT</option>
      	<option value={`${config[chainId].mMATIC.address},${config[chainId].mUSDT.address}`}>MATIC / USDT</option>
      	<option value={`${config[chainId].LDX.address},${config[chainId].mwETH.address}`}>LDX / wETH</option>
      	<option value={`${config[chainId].LDX.address},${config[chainId].mwBTC.address}`}>LDX / wBTC</option>
      </select>
      ) : (
      	<div>
      		<p>Not Deployed to Network</p>
      	</div>
      )}

      <hr />
    </div>
  )
}

export default Markets;