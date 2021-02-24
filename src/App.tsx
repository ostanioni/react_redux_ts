import React from 'react'
import styled from 'styled-components'

// import { Provider } from 'react-redux'
// import store from 'store/Store'

const TitleStyled = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Title = () => {
  return <TitleStyled> Hello World ! </TitleStyled>
}

const App = () => {
  return (
    // <Provider store={store}>
    <Title />
    // </Provider>
  )
}

export default App
