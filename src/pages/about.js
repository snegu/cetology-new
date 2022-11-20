import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout/layout'
import SEO from "../components/layout/seo"
import styled from 'styled-components'
import { MdChevronLeft } from 'react-icons/md';

function AboutPage() {
  return (
<Layout>
    <SEO title="About this project" />
      <div>

        <Header className="header">
          <MdChevronLeft />
          <Link to="/">Return to the Cetology</Link>
        </Header>

        <Title><h2>What is this?</h2></Title>

        <Content>
          <div>
            <p>While Herman Melville’s <em>Moby Dick</em> is ostensibly about a ship captain chasing down the whale that ate his leg, the book consists largely of digressions about whaling and whales.</p>
            <p>These were my favorite part of the book.</p>
            <p>In <a href="https://etc.usf.edu/lit2go/42/moby-dick/682/chapter-32-cetology/" target="blank">chapter 32</a> Melville provides a taxonomy of whale species, called a “Cetology.” And while I loved Melville’s descriptions of these whales, I realized I had large gaps in my whale knowledge and couldn’t picture the whales he was talking about. I wanted a guide based on this chapter that included illustrations and the whales’ modern names, and ended up having to build it myself.</p>
            <p>You’ll notice that there are some duplications in Melville’s cetology. Killer whales alone are given three different names (Grampus, Killer, and  Thrasher). This is likely because whale knowledge of the day was based on brief sightings and washed up corpses, especially for whales that were not commonly hunted.</p> 
            <p>Note that the info on this site largely comes from <a href="https://en.wikipedia.org/wiki/Cetology_of_Moby-Dick" target="blank">this Wikipedia page</a>. You can blame those folks for any errors. The beautiful whale drawings come from the <a href="https://www.fisheries.noaa.gov/find-species" target="blank">NOAA Fisheries site</a> and appear to be by <a href="https://jackhornady.com/" target="blank">Jack Hornady</a>. I am happy to see our government funding high-quality illustration!</p>
            <a href="https://standardebooks.org/ebooks/herman-melville/moby-dick" target="blank">
              <button>Get <em>Moby Dick</em> from Standard Ebooks</button>
            </a>
          </div>
          <BookContainer>
            <Book src="/images/decorative/moby-dick.jpg" alt="Cover of Moby Dick" />
          </BookContainer>     
        </Content>
    
      </div>


</Layout>
  )
}

export default AboutPage

const Header = styled.div`
  background-color: rgb(42, 59, 77);
  color: white;
  width: 100%;
  padding: 2em 5em;
  margin-bottom: 3em;
  font-size: 1em;
  display: inline-grid;
  grid-template-columns: 20px auto;
  align-items: center;
  @media (max-width: 1000px) {
    font-size: 1em;
    padding: 1em;
    margin-bottom: 1em; 
  }
`
const Content = styled.div`
  padding: 0em 5em 5em 5em;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: stretch;
  justify-items: center;
  margin-bottom: 20px;
  column-gap: 80px;
  row-gap: 40px;
  @media (max-width: 1000px) {
    display: block;
    padding: 1em 2em 5em 2em;
  }
`
const Title = styled.div` 
  margin: 0 0 -40px 0;
  padding: 1em 5em 0em 5em;
  display: flex;
  align-content: flex-start;
  @media (max-width: 1000px) {
    padding: 1em 2em 1em 2em;
  }
`
const BookContainer = styled.div` 
  @media (max-width: 1000px) {
    display: none;
  }
`
const Book = styled.img` 
  width: 100%;
`
