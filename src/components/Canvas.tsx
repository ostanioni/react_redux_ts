// let x = 5;
// export {x};
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
import { store } from 'store'
import styled from 'styled-components'

const CanvasStyled = styled.canvas.attrs( props => ({
  id: props.id,
  // fill: props.fill
}))`
  width: ${props=>props.width};
  height: ${props=>props.width};
  background:yellowgreen;
`

type canvasSize = {
  width : number;
  height: number;
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
function Canvas ( props: canvasSize ) {
  
  const [size, setSize] = useState( {width:500, heigt:300} )
  // const selectedData = useSelector(state => 
  //  {'counter_1': state.counter.value, 'counter_2': state.counter.value},
  //  shallowEqual
  // )

  useEffect(() => { 
    // setCanvasSize()
    // store.dispatch( {type:'counter/increment'} )
    setTimeout( ()=>console.log(store.getState()), 0 )
  } )
  
  let { width, height } = props    
  return (
    <>
      <CanvasStyled width={width} height={height} />      
    </>
    )
}
export default Canvas
export type { canvasSize }
