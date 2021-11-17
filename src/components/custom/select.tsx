import React,  { useState, useEffect, PropsWithChildren } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { store } from 'store'
import styled from 'styled-components'

export const SelectStyled = styled.select`
appearance: none;
background-color: transparent;
border: none;
padding: 0 1em 0 0;
margin: 0;
width: 100%;
font-family: inherit;
font-size: inherit;
cursor: inherit;
line-height: inherit;
outline: none;
&.custom {
  width: 100%;
  min-width: 15ch;
  max-width: 30ch;
  border: 1px solid black;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
}
`
export const CustomSelect = ({children}: PropsWithChildren<{}>) => {
  return <SelectStyled className="select">{children}</SelectStyled>
}
export const Select = () => {
  return(
  <CustomSelect>
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
    <option value="Option 3">Option 3</option>
    <option value="Option 4">Option 4</option>
    <option value="Option 5">Option 5</option>
    <option value="Option length"></option>
  </CustomSelect>
  )
}