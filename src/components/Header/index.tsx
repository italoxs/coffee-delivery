import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo.svg'


export function Header() {
  return (
    <HeaderContainer>
      <div className='container'>
        <img src={logoCoffeeDelivery} alt="" />

        <HeaderButtonContainer>
          <HeaderButton variant='purple' >
            <MapPin size={20} weight='fill' />
            Maceió, AL
          </HeaderButton>

          <HeaderButton variant='yellow' >
            <ShoppingCart size={20} weight='fill' />
          </HeaderButton>

        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}