import styled from 'styled-components'

import backgroundImage from '../../assets/coffee-delivery-background.svg'

export const OurCoffeesContainer = styled.main`
  flex: 1;

  & > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const IntroContainer = styled.div`
  width: 100%;
  height: 34rem;
`

export const ImageBackground = styled.div`
  background: url(${backgroundImage});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`

export const IntroContent = styled.div`
  width: 100%;
  max-width: 70rem;
  height: 100%;

  margin: 0 auto;

  padding: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`

export const IntroInfos = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  gap: 4rem;

  > div {
    display: flex;
    flex-direction: column;

    gap: 1rem;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      font-weight: 800;
      line-height: 1.3;
      color: ${(props) => props.theme['gray-800']};
    }

    h3 {
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.3;
      color: ${(props) => props.theme['gray-700']};
    }
  }
`

export const ItemsContainer = styled.div``
