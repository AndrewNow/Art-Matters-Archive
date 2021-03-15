import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Marquee from "../components/Marquee/Marquee"
import NewEditionBanner from "../components/Marquee/NewEditionBanner"
import { breakpoints } from "../components/layout"


const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Archive" />
      <Marquee />
      <MainPage>
        <ArchiveTitle>ARCHIVE</ArchiveTitle>
        <Bio>
          Art Matters has been running for more than 20 years now. Thanks to
          community contributions, we have been able to preserve and document
          our history. This website is an ode to the past, a nod to the future,
          and a reminder that hard work can leave a lasting mark.
        </Bio>
        <NewEditionBanner />
        <ArchiveYearList>
          <h2>Past Editions</h2>
          <YearGrid>
            <YearRow>
              <Year>2021</Year>
              <Year>2020</Year>
            </YearRow>
            <YearRow>
              <Year>2019</Year>
              <Year>2018</Year>
              <Year>2017</Year>
              <Year>2016</Year>
              <Year>2015</Year>
            </YearRow>
            <YearRow>
              <Year>2014</Year>
              <Year>2013</Year>
              <Year>2012</Year>
              <Year>2011</Year>
              <Year>2010</Year>
            </YearRow>
            <YearRow>
              <Year>2009</Year>
              <Year>2008</Year>
              <Year>2007</Year>
              <Year>2006</Year>
              <Year>2005</Year>
            </YearRow>
            <YearRow>
              <Year>2004</Year>
              <Year>2003</Year>
              <Year>2002</Year>
              <Year>2001</Year>
              <Year>2000</Year>
            </YearRow>
          </YearGrid>
        </ArchiveYearList>
        <SideBar>Test</SideBar>
      </MainPage>
    </Layout>
  )
}

const MainPage = styled.div`
  z-index: 0;
  position: absolute;
  overflow-x: hidden;


  overflow-y: hidden;
  
  
  top: 0;
  right: 0;
  width: 92.5%;
  height: 300vh;
  background-color: #ece9e3;
  border-left: 1px solid black;
  box-shadow: -3px 0px 16px rgba(0, 0, 0, 0.15);
`

const ArchiveTitle = styled.h1`
  position: relative;
  margin: 0 auto;
  font-size: 312px;
  text-align: center;
  color: #ffffff95;
  -webkit-text-stroke: 1px solid rgba(255, 255, 255, 0.56);
  /* text-shadow: 10px 3px 16px #ece9e3, 0 0 0 #fff, -10px -3px 16px #fff; */
  text-shadow: 10px 3px 16px #ece9e3, 0 0 0 #fff, -10px -3px 26px #fff;
  /* filter: blur(.5px); */
  
  @media (max-width: ${breakpoints.m}px) {
    margin: 0;
    padding-top: 2rem;
    font-size: 70px;
    color: #ffffff95;
    text-shadow: 2px 3px 10px #ece9e3, 0 0 0 #fff, -5px -1px 4px #fff;
  }
`

const Bio = styled.h2`
  font-size: 64px;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 10rem;

  @media (max-width: ${breakpoints.m}px) {
    font-size: 32px;
    padding-bottom: 5rem;
  }
`

const ArchiveYearList = styled.div`
  width: 100%;

  text-align: center;
  margin-top: 15rem;
  padding: 10rem 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(234, 231, 231, 0) 38.19%,
    rgba(255, 255, 255, 0.63) 100%
  );

  & h2 {
    padding-bottom: 3rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    margin-top: 5rem;
  }
`

const YearGrid = styled.div`
  width: 45%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`
const YearRow = styled.div``

const Year = styled.div`
  padding: 1rem;
  color: #636363;
  font-family: "Space Mono", monospace;
  font-size: 20px;
  
  transition: .2s all ease-in-out;
  cursor: pointer;
  
  & :hover {
    color: #5200FF;
  }
`

const SideBar = styled.div`
  z-index: 2000;
  position: fixed;
  top: 0;

  transform: translateX(95vw);
  width: 100vw;
  height: 100vh;
  /* should be 100% */

  background-color: #5200ff;
  -webkit-box-shadow: -58px 0px 49px 58px rgba(81, 0, 255, 1);
  -moz-box-shadow: -58px 0px 49px 58px rgba(81, 0, 255, 1);
  box-shadow: -58px 0px 49px 58px rgba(81, 0, 255, 1);

  @media (max-width: ${breakpoints.m}px) {
    -webkit-box-shadow: -30px 0px 49px 30px rgba(81, 0, 255, 1);
    -moz-box-shadow: -30px 0px 49px 30px rgba(81, 0, 255, 1);
    box-shadow: -30px 0px 49px 30px rgba(81, 0, 255, 1);
  }
`


export default IndexPage
