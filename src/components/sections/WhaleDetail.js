import React, { useState } from "react"
import styled from 'styled-components'
import startquote from '../../../static/images/decorative/start-quote.svg'
import endquote from '../../../static/images/decorative/quote-end.svg'

export default function WhaleDetail(props) {
    const [isOpen, setIsOpen] = useState(false)

    return <Wrapper isOpen={props.isOpen}>
        <Overlay></Overlay>
        <ContentWrapper>
             <CloseIcon onClick={() => setIsOpen(false)}>
                 <img src="/images/decorative/clear.png" alt="Close icon" />
            </CloseIcon>
            <WhaleImage src={props.image} alt={"Drawing of a " + props.title}>
            </WhaleImage>
            <WhaleName>{props.title}</WhaleName>
            <QuoteContainer>
                <Quote>
                    <p>{props.longdescription1}</p>
                    <p>{props.longdescription2}</p>
                    <p>{props.longdescription3}</p>
                </Quote>
            </QuoteContainer>
            <ModernName><strong>Modern Species Name</strong><br /> 
            {props.species}</ModernName>
            
        </ContentWrapper>
    </Wrapper>
  }

  const Wrapper = styled.div`
    position: fixed;
    overflow-y: scroll;
    max-height: 100%;
    min-height: 100%;
    top: 0px;
    right: 0px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    visibility: ${props => (props.isOpen ? "visible" : "hidden")};
    @media (max-width: 1100px) {
        grid-template-columns: 0fr 1fr;
  }
`

const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.3);
`

const ContentWrapper = styled.div`
    padding: 80px 40px;
    backdrop-filter: blur(40px);        
    background: rgba(100, 100, 100, 0.1);
    font-size: .9em;
    @media (max-width: 1100px) {
        padding: 20px;
  }
`

const WhaleName = styled.div`
    text-align: center;
    font-family: 'Cinzel Decorative', cursive;
    font-weight: 400;
    font-size: 2em;
    margin: 0
`

const QuoteContainer = styled.div`
    background: url(${startquote}) top left no-repeat, url(${endquote}) bottom right no-repeat;
`

const Quote = styled.div`
    padding: 10px 40px 10px 40px;
    margin-bottom: 20px;
    @media (max-width: 800px) {
        padding: 10px 10px;
    }
`

const CloseIcon= styled.div`
    position: relative;
    left: -20px;
    top: -60px;
    cursor: pointer;
    @media (max-width: 1100px) {
        left: 0px;
        top: 0px;
    }
`
const ModernName = styled.div`
    margin: 40px auto;
    text-align: center;
`

const WhaleImage = styled.img`
    width: 100%;
    margin: 10px auto 40px auto;
    @media (max-width: 1100px) {
        margin-top: 20px;
    }
`