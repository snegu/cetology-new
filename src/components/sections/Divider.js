import React from 'react'
import styled from 'styled-components'
import DividerLine from '../../img/Divider.svg'

export default function Divider() {
  return (
    <Wrapper>
        <DividerImage src={DividerLine} alt="" />
  </Wrapper>
  )
}

const Wrapper = styled.div`
	margin: 8em 0;
  @media (max-width: 1100px) {
    margin: 4em 0;
  }
  @media (max-width: 800px) {
    margin: 2em 0;
  }
`
const DividerImage = styled.img`
	width: 100%;
`

