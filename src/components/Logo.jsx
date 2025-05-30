import React from 'react'
import { styled } from 'styled-components'

const StyledLogo = styled.div`
    text-align: center;
`

const Img = styled.img`
    height: 9rem;
    width: auto;
`

export default function Logo() {
  return (
    <StyledLogo>
        <Img src='/logo.png' alt='logo'/>
        <p>The Hotel</p>
    </StyledLogo>
  )
}
