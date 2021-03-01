/* Для получения размера веб-страницы используйте следующее 
(включает в себя внутренние отступы страницы, 
  но не включает границы, внешние отступы и полосы прокрутки):

const pageWidth = document.documentElement.scrollWidth
const pageHeight = document.documentElement.scrollHeight


Если pageHeight больше, чем внутренняя высота окна, значит,
присутствует вертикальная полоса прокрутки. 
 */
import React,  { useState, useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import Store from 'store/Store'
import styled from 'styled-components'

const CanvasStyled = styled.canvas.attrs({
  id: "canvas_"
})`
  background:yellowgreen;
`

type sizeOfCanvas = {
  width : number;
  height: number;
}

type Props = {
   width: string
  height: string
}
function setCanvasSize ( ) {
  
  const windowInnerWidth = document.documentElement.clientWidth
  const windowInnerHeight = document.documentElement.clientHeight
  console.log( windowInnerWidth, windowInnerHeight )

  const canvas: HTMLCanvasElement | null  = document.getElementById('canvas_') as HTMLCanvasElement | null
  if ( canvas ) {
    
    const context = canvas.getContext('2d') as CanvasRenderingContext2D | null
    if ( context ) {
      context.fillStyle = "blue"
      context.fillRect(10,10,40,30)
    } else {
      console.error( ' Error: context = canvas.getContext is null: function "setCanvasSize" ' )
    }
  } else {
    console.error( ' Error: canvas = document.getElementById("canvas") is null: function "setCanvasSize" ' )
  }
}
function Canvas ( props: Props ) {
  
  const [size, setSize] = useState( {width:500, heigt:300} )
  const selectedData = useSelector(state => 
    {'counter_1': state.counter.value, 'counter_2': state.counter.value},
    shallowEqual
  )

  useEffect(() => { 
    // setCanvasSize()
    Store.dispatch( {type:'counter/increment'} )
    setTimeout( ()=>console.log(Store.getState()), 0 )
  } )
  
  let { width, height } = props    
  return (
    <>
      <CanvasStyled width={width} height={height} />      
    </>
    )
}
export default Canvas
