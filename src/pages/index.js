import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Marquee from "../components/Marquee/Marquee"
import NewEditionBanner from "../components/Marquee/NewEditionBanner"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
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
      </MainPage>
    </Layout>
  )
}



const MainPage = styled.div`
  z-index: 0;
  position: absolute;
  overflow-x: hidden;
  top: 0;
  right: 0;
  width: 92.5%;
  height: 200vh;
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
`

const Bio = styled.h2`
  font-size: 64px;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 10rem;
`



export default IndexPage
