import tokens from './tokens'
import { FarmConfig } from './types'

const priceHelperPoolLps: FarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for Pools without a farm.
   */

  {
    pid: null,
    lpSymbol: 'TEM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x5cAe5B4B23a2921314E8624e4D9ae3b52E855CB2',
    },
    token: tokens.tem,
    quoteToken: tokens.wbnb,
  },
   {
    pid: null,
    lpSymbol: 'LILX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xEfE360243F4Fcb6644c6847C81113e0BC7362f40',
    },
    token: tokens.lilx,
    quoteToken: tokens.wbnb,
  },

]

export default priceHelperPoolLps
