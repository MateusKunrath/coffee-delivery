import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 70rem;
  height: 6.5rem;
  margin: 0 auto;

  padding: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    border-radius: 6px;
    border: 0;
    outline: none;

    background: ${(props) => props.theme['yellow-100']};

    svg {
      color: ${(props) => props.theme['yellow-700']};
    }
  }
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.625rem 0.5rem;
  border-radius: 6px;

  gap: 0.25rem;

  background: ${(props) => props.theme['purple-100']};

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;

    color: ${(props) => props.theme['purple-600']};
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`
