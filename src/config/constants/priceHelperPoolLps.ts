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
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.fork,
    quoteToken: tokens.wbnb,
  },
  {
    pid: null,
    lpSymbol: 'HIGH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xe98ac95a1db2fcaaa9c7d4ba7ecfce4877ca2bea',
    },
    token: tokens.high,
    quoteToken: tokens.busd,
  },
   {
    pid: null,
    lpSymbol: 'TINC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0d5b9A0f4315a4bcE36D1Ea7d6B6d3123167aFAa',
    },
    token: tokens.tinc,
    quoteToken: tokens.wbnb,
  },
   {
    pid: null,
    lpSymbol: 'CEEK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x046A9B3A9b743340eE2Bc4C6dDD35543E237C6c2',
    },
    token: tokens.ceek,
    quoteToken: tokens.wbnb,
  },
  {
    pid: null,
    lpSymbol: 'KMZ-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x1Fa03A54e58C2f8a786B2b35402093DB8e261CDB',
    },
    token: tokens.kmz,
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
    lpSymbol: 'CSIX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x990403f188f6B4316B35accA436Bf6b76414656F',
    },
    token: tokens.csix,
    quoteToken: tokens.wbnb,
  }, 
 

]

export default priceHelperPoolLps
