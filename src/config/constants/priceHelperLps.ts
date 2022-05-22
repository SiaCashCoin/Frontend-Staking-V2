import tokens from './tokens'
import { FarmConfig } from './types'

const priceHelperLps: FarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for MasterChef LPs (farms.ts).
   * This list is added to the MasterChefLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
   * The absense of a PID means the masterchef contract calls are skipped for this farm.
   * Prices are then fetched for all farms (masterchef + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
  {
    pid: null,
    lpSymbol: 'QSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7b3ae32eE8C532016f3E31C8941D937c59e055B9',
    },
    token: tokens.qsd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: null,
    lpSymbol: 'PRAISE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x56f4032Ff29385F3eb5A90021A6e747345F02996',
    },
    token: tokens.praise,
    quoteToken: tokens.wbnb,
  },
  {
    pid: null,
    lpSymbol: 'LILX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x302D700cf9bE848cF57B49f93f488A7486D11238',
    },
    token: tokens.lilx,
    quoteToken: tokens.wbnb,
  }, 
  {
    pid: null,
    lpSymbol: 'MWF-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9BedF5B6eA1634d21607fcEC5c97c031d60c2123',
    },
    token: tokens.mwf,
    quoteToken: tokens.wbnb,
  }, 
]

export default priceHelperLps
