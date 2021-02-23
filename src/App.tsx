import React from 'react'
import styled from 'styled-components'


const TitleStyled = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

let Title = (props) => {
  return (
    <TitleStyled> { props.children } </TitleStyled>
  );
}

let App = ( ) => {
  return (
    <Title> Hello World ! </Title>
  );
}

export default App