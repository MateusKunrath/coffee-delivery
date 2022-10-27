import {
  OurCoffeesContainer,
  IntroContainer,
  IntroContent,
  ImageBackground,
  IntroInfos,
  ItemsContainer,
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
                <h2>Teste</h2>
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
