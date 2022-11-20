import React from 'react'
import styled from 'styled-components'

export default function HeroSection() {
  return (
    <Wrapper>

      <Title>
        <h4>Herman Melville's</h4>
        <h1>Guide to Whales</h1>
      </Title>
    
      <ContentWrapper>
            <div>
                <p>&#8220;As no better man advances to take this matter in hand, I hereupon offer my own poor endeavors.</p>
                <p>I promise nothing complete; because any human thing supposed to be complete must for that very reason infallibly be faulty. I shall not pretend to a minute anatomical description of the various species, or- in this space at least- to much of any description. My object here is simply to project the draught of a systematization of cetology. I am the architect, not the builder.&#8221;</p>
            </div>
            <div>
                <Ship src="/images/decorative/ship.png" alt="Drawing of 3-masted whaling ship" />
            </div>
      </ContentWrapper>


       <Wave width="100%" height="172" viewBox="0 0 100% 172" fill="none">
        <path fill="#DFF1F5">
          <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="12s" values="
          M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
          M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;
          M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
          M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z" />
        </path>
      </Wave>

  </Wrapper>
  )
}

const Wrapper = styled.div`
	position: relative;
  background: linear-gradient(180deg, rgba(223, 241, 245, .5) 0%, rgba(223, 241, 245, 0) 100%);
`
const Title  = styled.div`
  padding: 5em 5em 0 5em;
  @media (max-width: 1300px) {
    padding: 5em 3em 0 3em;
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 0fr;
  }
  @media (max-width: 800px) {
    padding: 3em 1.5em 0 1.5em;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: stretch;
  margin-bottom: 20px;
  column-gap: 80px;
  padding: 0 5em 250px 5em;
  @media (max-width: 1300px) {
    padding: 0 3em 250px 3em;
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 0fr;
  }
  @media (max-width: 800px) {
    padding: 0 0em 2em 1.5em;
    margin-bottom: 0px;
  }
`

const Wave  = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  @media (max-width: 800px) {
    display: none;
  }
  `

const Ship = styled.img`
  width: 90%;
  height: auto;
`

