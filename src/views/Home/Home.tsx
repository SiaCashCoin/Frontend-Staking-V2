import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@siacashcoin/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import PredictionPromotionCard from 'views/Home/components/PredictionPromotionCard'
import LotteryPromotionCard from 'views/Home/components/LotteryPromotionCard'
import LotteryBanner from 'views/Home/components/LotteryBanner'
import useFetchLotteryForPromos from 'views/Home/hooks/useFetchLotteryForPromos'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/mobile-bg-scc.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
  const { t } = useTranslation()
  const { currentLotteryPrize } = useFetchLotteryForPromos()

  return (
    <>
      {/* <LotteryBanner currentLotteryPrize={currentLotteryPrize} /> */}
      <Page>
        <Hero>
          <Heading as="h1" scale="xl" mb="24px" color="secondary">
            {t('SiaCashCoin')}
          </Heading>
          <Text>{t('SiaCashCoin is pending migration to Binance Smart Chain!')}</Text>
          <Text>{t('The new SCC BSC smart contract address is!')}</Text>
          <Text>{t('0xc26EaFC627624baDf990f8d30116892eD204DB51')}</Text>
        </Hero>
        <div>
          <Cards>
            <FarmStakingCard />
            <CakeStats />
            {/* <PredictionPromotionCard /> */}
          </Cards>
          {/* <CTACards>
            <EarnAPRCard /> */}
            {/* <EarnAssetCard /> */}
            {/* <LotteryPromotionCard currentLotteryPrize={currentLotteryPrize} /> */}
          {/* </CTACards> */}
          <Cards>
          
          
            <EarnAPRCard />
            /* <TotalValueLockedCard /> */
            
          </Cards>
        </div>
      </Page>
    </>
  )
}

export default Home
