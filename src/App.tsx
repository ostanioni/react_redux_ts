import React from 'react'
import styled from "styled-components"

import { Provider } from 'react-redux'
import Store from 'store/Store'

import Canvas from 'components/Canvas'

const TitleStyled = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
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
    <>
      <Title />
      <Canvas {...propsForCanvas}/>
    </>
   </Provider>
  )
}

export default App
