import React from 'react'
import styled, {ThemeProvider} from "styled-components"
import GlobalStyle from "styled/GlobalStyle"
import { Provider } from 'react-redux'
import { Store } from "store"
import { theme } from "themes/theme"

// import Canvas from 'components/Canvas'

const TitleStyled = styled.h1`
  font-size: "1.5em";
  text-align: "center";
  color: "palevioletred";
`

const Title = () => { 
  return (<TitleStyled> Hello World ! </TitleStyled>)
};

const propsForCanvas = {
  width: "1500",
  height: "300",
}
const App = () => {
  console.log( Store.getState() )
  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Title />
      </ThemeProvider>
    </Provider>
  )
}

export default App

// <Canvas {...propsForCanvas}/>
