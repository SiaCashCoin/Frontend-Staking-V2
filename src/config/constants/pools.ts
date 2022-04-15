import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '',
      56: '0x1080450b1e26Df071c613d916055b23e8FCc6Fca',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: tokens.cake,
    earningToken: tokens.shib,
    contractAddress: {
      97: '',
      56: '0xa8567fa6A62bbB63DD512ECfF91df86249FE7090',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 2,
    isFinished: true,
    tokenPerBlock: '10',
  },
  {
    sousId: 2,
    stakingToken: tokens.cake,
    earningToken: tokens.shib,
    contractAddress: {
      97: '',
      56: '0x50fF88df5a0Bba734e8e405914e8D72F656BD301',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 3,
    isFinished: true,
    tokenPerBlock: '7',
  },
  {
    sousId: 3,
    stakingToken: tokens.cake,
    earningToken: tokens.shib,
    contractAddress: {
      97: '',
      56: '0x1DB1945A84748742093e77DB5B6FFc812aE16BB9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 4,
    tokenPerBlock: '7',
  },
  {
    sousId: 4,
    stakingToken: tokens.cake,
    earningToken: tokens.tem,
    contractAddress: {
      97: '',
      56: '0xC8c8C0e46e5E9d24c0ce6e3986D2F664Ce2b837B',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 5,
    tokenPerBlock: '0.000002000',
  },
  {
    sousId: 5,
    stakingToken: tokens.lilx,
    earningToken: tokens.lilx,
    contractAddress: {
      97: '',
      56: '0xd833664a78f0CD1550016643b3D0681a172ed8E4',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 6,
    tokenPerBlock: '121341',
  },
  {
    sousId: 6,
    stakingToken: tokens.fork,
    earningToken: tokens.high,
    contractAddress: {
      97: '',
      56: '0x60c4998C058BaC8042712B54E7e43b892Ab0B0c4',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 7,
    tokenPerBlock: '0.09756',
  },
  {
    sousId: 7,
    stakingToken: tokens.fork,
    earningToken: tokens.ceek,
    contractAddress: {
      97: '',
      56: '0xED53944b1c0cEecDe1a413fDb4D0496e1a08ab58',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 8,
    tokenPerBlock: '0.8078',
  },
  {
    sousId: 8,
    stakingToken: tokens.fork,
    earningToken: tokens.tinc,
    contractAddress: {
      97: '',
      56: '0x9593462fF51A14633b243Ba3d054A8183d057A02',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 9,
    tokenPerBlock: '0.4677',
  }, 



 ]

 export default pools
