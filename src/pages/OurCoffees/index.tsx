import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import {
  OurCoffeesContainer,
  IntroContainer,
  IntroContent,
  ImageBackground,
  IntroInfos,
  ItemsContainer,
  ItemsColumn,
  Item,
  Icon,
} from './styles'

import coffeeDeliveryImage from '../../assets/coffee-delivery-image.svg'

export function OurCoffees() {
  return (
    <OurCoffeesContainer>
      <IntroContainer>
        <ImageBackground>
          <IntroContent>
            <IntroInfos>
              <div>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <h3>
                  Com o Coffee Delivery você recebe seu café onde estiver, a
                  qualquer hora
                </h3>
              </div>
              <ItemsContainer>
                <ItemsColumn>
                  <Item>
                    <Icon>
                      <ShoppingCart size={16} weight="fill" />
                    </Icon>
                    <span>Compra simples e segura</span>
                  </Item>

                  <Item>
                    <Icon>
                      <Timer size={16} weight="fill" />
                    </Icon>
                    <span>Entrega rápida e rastreada</span>
                  </Item>
                </ItemsColumn>

                <ItemsColumn>
                  <Item>
                    <Icon>
                      <Package size={16} weight="fill" />
                    </Icon>
                    <span>Embalagem mantém o café intacto</span>
                  </Item>

                  <Item>
                    <Icon>
                      <Coffee size={16} weight="fill" />
                    </Icon>
                    <span>O café chega fresquinho até você</span>
                  </Item>
                </ItemsColumn>
              </ItemsContainer>
            </IntroInfos>

            <img src={coffeeDeliveryImage} alt="" />
          </IntroContent>
        </ImageBackground>
      </IntroContainer>
      <h1>Nossos cafés</h1>
    </OurCoffeesContainer>
  )
}
