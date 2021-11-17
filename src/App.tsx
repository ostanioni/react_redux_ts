import React, {PropsWithChildren} from 'react'
import styled, {ThemeProvider} from "styled-components"
// import GlobalStyle from "styled/GlobalStyle"
import { Provider } from 'react-redux'
import { store } from "store"
import { theme } from "theme"
import Canvas from "components/Canvas"
import BackToTop from "components/global/BackToTop"


// import Canvas from 'components/Canvas'
const DivStyled = styled.div`
  font-size: "1.5em";
  text-align: "center";
  color: "palevioletred";
  /*background-color: ${props=>props.theme.bgColor};*/
  height: 20000px;
`

const Div = ({children}: PropsWithChildren<{}>) => {
  return <DivStyled>{children}</DivStyled>
}
const TitleStyled = styled.h1`
  font-size: "1.5em";
  text-align: "center";
  color: "palevioletred";
  background-color: ${props=>props.theme.bgColor};
`

const Title = () => { 
  return (<TitleStyled> Hello World ! </TitleStyled>)
}

type sizeOfCanvas = {
  width : number;
  height: number;
}

const propsForCanvas:sizeOfCanvas = {
  width: 1500,
  height: 300,
}

const App = () => {
  console.table( store.getState() )
  console.table( theme )
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      
        <Div>
          <Title />
          <Canvas {...propsForCanvas}/>
          <BackToTop />
        </Div>
      </ThemeProvider>
    </Provider>
  )
}
// <GlobalStyle />
export default App

// <Canvas {...propsForCanvas}/>
