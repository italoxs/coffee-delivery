import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'


export function Header() {
  const { cartQuantity } = useCart()

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
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight='fill' />
            </HeaderButton>
          </NavLink>

        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}