import { MapPin, ShoppingCart } from 'phosphor-react'

import { HeaderContainer, ActionsContainer, Location } from './styles'

import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />

      <ActionsContainer>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Location>

        <NavLink to="#">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>
  )
}
