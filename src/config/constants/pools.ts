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
    tokenPerBlock: '10',
  },
  


 ]

 export default pools
