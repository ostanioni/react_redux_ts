import React, {useEffect, useState} from 'react'
import styled from 'styled-components'


const toTop = () =>  { window.scrollTo(0,0) }

const scrollHandler = () => {
  const el  = document.getElementById('BackToTop')
  console.log("scroll")
  if (el) {
      window.pageYOffset > 50 ? el.classList.remove('is-hide') : el.classList.add('is-hide')
  } else {
    console.error('BackToTop is null: function scrollYandler, BackToTop components')
  }
  console.log("scroll")
}

const IconStyled = styled.svg.attrs(props=>({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox:"0 0 512 512",
  width: props.width
}))`
  &>path {
    fill: ${props=>props.theme.textColor};
  }
`
type iconProps = {
  width: string;
  alt?: string;
}
const Icon = (props: iconProps) => {
  return (
    <IconStyled width={props.width}> 
      <path d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"/>
    </IconStyled>
  )
}
// alt={props.alt}>

const BackToTopStyled = styled.span.attrs(props=>({
  onClick: props.onClick,
  id: props.id,
  // alt: props.alt,
}))`
  position: fixed;
  cursor: pointer;
  bottom: 2.5rem;
  right: 2.5rem;
  &.is-hide {
    right: -2.5rem;
  }
  transition: right 0.5s; 
`
// alt: ${props=>props.alt};

const BackToTop = () => {
  
  useEffect( () => {
    window.addEventListener('scroll', scrollHandler, false)
    console.log("effect")

    return (
      window.removeEventListener('scroll', scrollHandler)
    )
  })

  return (
    <BackToTopStyled onClick={toTop} id="BackToTop" className="is-hide">
      <Icon width="2.5rem" alt="UP" />
    </BackToTopStyled>
  )
}

export default BackToTop