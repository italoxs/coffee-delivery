import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from './styles'

import coffeeBanner from '../../../../assets/coffeeBanner.svg'
import { RegularText } from '../../../../components/Typograph'
import { IconContainer } from '../../../../components/Info/styles'
import { Info } from '../../../../components/Info'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Intro() {
  const { colors } = useTheme()

  return (
    <IntroContainer>
      <IntroContent className='container'>
        <div>
          <section>
            <IntroTitle size='xl'>
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size='l' color='subtitle'>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </RegularText>
          </section>

          <BenefitsContainer>
            <Info
              iconBg={colors['brand-yellow-dark']}
              icon={<ShoppingCart weight='fill' />}
              text='Compra simples e segura'
            />
            <Info
              iconBg={colors['base-text']}
              icon={<Package weight='fill' />}
              text='Embalagem mantém o café intacto'
            />
            <Info
              iconBg={colors['brand-yellow']}
              icon={<Timer weight='fill' />}
              text='Entrega rápida e rastreada'
            />
            <Info
              iconBg={colors['brand-purple']}
              icon={<Coffee weight='fill' />}
              text='O café chega fresquinho até você'
            />
          </BenefitsContainer>
        </div>

        <img src={coffeeBanner} alt="" />
      </IntroContent>
    </IntroContainer >
  )
}