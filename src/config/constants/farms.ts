import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 8 ) should always be at the top of the file we use them for price strings.
   */
  {
    pid: 0,
    lpSymbol: 'SCC',
    lpAddresses: {
      97: '',
      56: '0xc26EaFC627624baDf990f8d30116892eD204DB51',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'SCC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x41496D9e7F1364dab33433d28962745FAaF6a577',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'SCC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xf04bc5e9EB85374DDa27DD06FEbD1fe2e0CBdB16',
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
  },
  {
    pid: 8,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  /* Add new farms below this line */
  {
    pid: 4,
    lpSymbol: 'ETH-SCC LP',
    lpAddresses: {
      97: '',
      56: '0x31c4f338FA35E8792C285b9FD2ccaC912F06b0D8',
    },
    token: tokens.eth,
    quoteToken: tokens.cake,
  }, 
  {
    pid: 5,
    lpSymbol: 'SCC-SHIB LP',
    lpAddresses: {
      97: '',
      56: '0xfe7be78a50a514b4390316a8e49d7574ba68ef64',
    },
    token: tokens.shib,
    quoteToken: tokens.cake,
  }, 
  {
    pid: 6,
    lpSymbol: 'DOGE-SCC LP',
    lpAddresses: {
      97: '',
      56: '0x2758e0C3d24E07Bf851fD04397243C3691ec2C38',
    },
    token: tokens.doge,
    quoteToken: tokens.cake,
  },
  {
    pid: 7,
    lpSymbol: 'DOGE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xac109C8025F272414fd9e2faA805a583708A017f',
    },
    token: tokens.doge,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 10,
    lpSymbol: 'TEM-SCC LP',
    lpAddresses: {
      97: '',
      56: '0x1980357681Da77B2B91bB8037b487137ba5A5EDd',
    },
    token: tokens.tem,
    quoteToken: tokens.cake,
  },
  {
    pid: 11,
    lpSymbol: 'SCC-KMZ LP',
    lpAddresses: {
      97: '',
      56: '0x16C11F605F3CE6216feF17dF41b5DA682EC84c20',
    },
    token: tokens.cake,
    quoteToken: tokens.kmz,
  },  
  
  
 ]

 export default farms
