import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'SiaCashCoin',
  description:
    'Join SCC And Stake Tokens An Open Source Project On The BSC Network Visit Our Github Page To Contribute!',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('SiaCashCoin')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('SiaCashCoin')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('SiaCashCoin')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('SiaCashCoin')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('SiaCashCoin')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('SiaCashCoin')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('SiaCashCoin')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('SiaCashCoin')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('SiaCashCoin')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('SiaCashCoin')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('SiaCashCoin')}`,
      }
    default:
      return null
  }
}
