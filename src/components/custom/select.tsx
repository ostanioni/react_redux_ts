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
&::-ms-expand {
    display: none;
}
&.custom {
  width: 100%;
  min-width: 15ch;
  max-width: 30ch;
  border: 1px solid black;
  border-radius: 0.35em;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  // background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Ctitle%3Edown-arrow%3C%2Ftitle%3E%3Cg%20fill%3D%22%23000000%22%3E%3Cpath%20d%3D%22M10.293%2C3.293%2C6%2C7.586%2C1.707%2C3.293A1%2C1%2C0%2C0%2C0%2C.293%2C4.707l5%2C5a1%2C1%2C0%2C0%2C0%2C1.414%2C0l5-5a1%2C1%2C0%2C1%2C0-1.414-1.414Z%22%20fill%3D%22%23000000%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  background-size: 0.8rem;
  background-position: calc(100% - 0.7rem) center;
  background-repeat: no-repeat;
}
`
export const CustomSelect = ({children}: PropsWithChildren<{}>) => {
  return <SelectStyled className="custom">{children}</SelectStyled>
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