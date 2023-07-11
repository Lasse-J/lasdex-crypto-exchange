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
        <option value={`${config[chainId].LDX.address},${config[chainId].mwETH.address}`}>LDX / mwETH</option>
      	<option value={`${config[chainId].LDX.address},${config[chainId].mUSDT.address}`}>LDX / mUSDT</option>
        <option value={`${config[chainId].LDX.address},${config[chainId].mwBTC.address}`}>LDX / mwBTC</option>
      	<option value={`${config[chainId].mwETH.address},${config[chainId].mUSDT.address}`}>mwETH / mUSDT</option>
      	<option value={`${config[chainId].mDAI.address},${config[chainId].mUSDT.address}`}>mDAI / mUSDT</option>
      	<option value={`${config[chainId].mwBTC.address},${config[chainId].mUSDT.address}`}>mwBTC / mUSDT</option>
      	<option value={`${config[chainId].mUSDC.address},${config[chainId].mUSDT.address}`}>mUSDC / mUSDT</option>
      	<option value={`${config[chainId].mBNB.address},${config[chainId].mUSDT.address}`}>mBNB / mUSDT</option>
      	<option value={`${config[chainId].mTRX.address},${config[chainId].mUSDT.address}`}>mTRX / mUSDT</option>
      	<option value={`${config[chainId].mMATIC.address},${config[chainId].mUSDT.address}`}>mMATIC / mUSDT</option>
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
