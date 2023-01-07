import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'


export function Header() {
  return (
    <HeaderContainer>
      <div className='container'>
        <NavLink to="/">
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>

        <HeaderButtonContainer>
          <HeaderButton variant='purple' >
            <MapPin size={20} weight='fill' />
            Maceió, AL
          </HeaderButton>

          <NavLink to="/checkout">
            <HeaderButton variant='yellow' >
              <ShoppingCart size={20} weight='fill' />
            </HeaderButton>
          </NavLink>

        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}