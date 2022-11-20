import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

export default function Footer() {
  return (
    <Wrapper>
        <div className="footer">
        <Link to="/about/">About this project</Link>
        </div>
  </Wrapper>
  )
}


const Wrapper = styled.div`
    padding: 2em 5em;
    text-align: center;
    background-color: rgb(42, 59, 77);
`

