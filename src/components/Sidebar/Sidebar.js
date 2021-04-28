import React, { useState, useLayoutEffect, useEffect } from "react"
import { motion } from "framer-motion"
import { breakpoints } from "../../components/layout"
import styled from "styled-components"
import { BiRightArrowAlt, BiLeftArrowAlt, BiRotateLeft } from "react-icons/bi"
import NewEditionBanner from "../Marquee/NewEditionBanner"
import useWindowSize from "../utils/useWindowSize"

import pdf2019 from "../pdfs/2019_Catalog.pdf"
import pdf2018 from "../pdfs/2018_Catalog.pdf"
import pdf2017 from "../pdfs/2017_Catalog.pdf"
import pdf2016 from "../pdfs/2016_Catalog.pdf"
import pdf2015 from "../pdfs/2015_Catalog.pdf"
// import pdf2014 from "../pdfs/2014_Catalog.pdf"
// import pdf2013 from "../pdfs/2013_Catalog.pdf"
import pdf2012 from "../pdfs/2012_Catalog.pdf"
import pdf2011 from "../pdfs/2011_Catalog.pdf"
import pdf2010 from "../pdfs/2010_Catalog.pdf"
import pdf2009 from "../pdfs/2009_Catalog.pdf"
import pdf2008 from "../pdfs/2008_Catalog.pdf"
import pdf2007 from "../pdfs/2007_Catalog.pdf"
import pdf2006 from "../pdfs/2006_Catalog.pdf"
import pdf2005 from "../pdfs/2005_Catalog.pdf"
import pdf2004 from "../pdfs/2004_Catalog.pdf"
import pdf2003 from "../pdfs/2003_Catalog.pdf"
import pdf2002 from "../pdfs/2002_Catalog.pdf"
import pdf2001 from "../pdfs/2001_Catalog.pdf"
import ArchivePDF from "./ArchivePDF"

import CloseSVG from "../utils/closeSVG"
import PrevLongArrowSVG from "../utils/prevLongArrowSVG"
import NextLongArrowSVG from "../utils/nextLongArrowSVG"

const Sidebar = () => {
  // functions to make sure that the side bar animation changes depending on DOM width
  const { width } = useWindowSize()
  const checkWidth = () => {
    if (width < 600) return "-7.5vw"
    if (width < 800 && width > 601) return "0vw"
    if (width > 801) return "20vw"
  }

  const checkWidth2 = () => {
    if (width < 600) return "100vw"
    if (width < 800 && width > 601) return "99vw"
    if (width > 801) return "96vw"
  }

  //Framer animation variables
  const sidebarOpenAnimation = {
    visible: {
      x: checkWidth(),
      transition: {
        staggerChildren: 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hidden: {
      x: checkWidth2(),
      transition: {
        staggerChildren: 0.1,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  }

  const clickOut = {
    visible: {
      visibility: "visible",
      opacity: 1,
      transition: {
        delay: 0,
        duration: 0.4,
      },
    },
    hidden: {
      visibility: "hidden",
      opacity: 0,
    },
  }

  const [modalOpen, setModalOpen] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(false)
  const [yearId, setYearId] = useState(2021)

  const handleClick = e => (
    setOpenSidebar(!openSidebar),
    setModalOpen(!modalOpen),
    setYearId(+e.target.value)
  )

  const handleClickOut = () => (
    setOpenSidebar(!openSidebar), setModalOpen(!modalOpen)
  )

  //below is a "modal" element to prevent scrolling when archive sidebar opens
  const useLockBodyScroll = () => {
    useLayoutEffect(() => {
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = "hidden"
      return () => (document.body.style.overflow = originalStyle)
    }, [])
  }

  const Modal = () => {
    useLockBodyScroll()
    return <></>
  }

  // ----- the "Past Editions" section data, which renders an archive button for each year -----
  // ----- this also holds all the actual archive data for each page! -----
  const ArchiveData = [
    {
      id: 2021,
      team:
        "HELEN ADILIA ARCEYUT-FRIXIONE, STEPHANIE LAOUN, SEAN YENDRYS, STEPHANIE BOKENFOHR, MATTHEW JAMES, TARA DUPUIS, ELGIN-SKYE MCLAREN, GILLIAN MCDONALD, ZOE KOKE,SARAH-EVE TOUSIGNANT, MARIE-CATHERINE BUJOLD, STEFAN SPEC, JULIE JOHNSTON",
      pdf: `${pdf2019}`,
    },
    {
      id: 2020,
      team: "Example name",
      pdf: `${pdf2019}`,
    },
    {
      id: 2019,
      team: "Example name number two",
      pdf: `${pdf2019}`,
    },
    {
      id: 2018,
      team: "Example name number three",
      pdf: `${pdf2018}`,
    },
    {
      id: 2017,
      team: "Example name number four ",
      pdf: `${pdf2017}`,
    },
    {
      id: 2016,
      pdf: `${pdf2016}`,
    },
    {
      id: 2015,
      pdf: `${pdf2015}`,
    },
    {
      id: 2014,
      // pdf: `${pdf2014}`,
    },
    {
      id: 2013,
      // pdf: `${pdf2013}`,
    },
    {
      id: 2012,
      pdf: `${pdf2012}`,
    },
    {
      id: 2011,
      pdf: `${pdf2011}`,
    },
    {
      id: 2010,
      pdf: `${pdf2010}`,
    },
    {
      id: 2009,
      pdf: `${pdf2009}`,
    },
    {
      id: 2008,
      pdf: `${pdf2008}`,
    },
    {
      id: 2007,
      pdf: `${pdf2007}`,
    },
    {
      id: 2006,
      pdf: `${pdf2006}`,
    },
    {
      id: 2005,
      pdf: `${pdf2005}`,
    },
    {
      id: 2004,
      pdf: `${pdf2004}`,
    },
    {
      id: 2003,
      pdf: `${pdf2003}`,
    },
    {
      id: 2002,
      pdf: `${pdf2002}`,
    },
    {
      id: 2001,
      pdf: `${pdf2001}`,
    },
    {
      id: 2000,
    },
  ]

  const allYears = ArchiveData.map(archiveYear => (
    <Year
      whileHover="hover"
      initial="normal"
      type="submit"
      key={archiveYear.id}
      value={archiveYear.id}
      onClick={handleClick}
      whileHover={{ scale: 1.1, color: "#5200ff" }}
      whileTap={{ scale: 0.9 }}
    />
    // 1. Create one <Year /> component for every year in ArchiveData.
    // 2. We set <Year /> as an <input> with a value={} of the associated year.
    // 3. When any <Year /> is clicked, {handleClick} updates the state of yearId
  ))

  const archive = ArchiveData.find(({ id }) => id === yearId)
  // All data needed for the sidebar is now contained in const {archive}
  // When the <Year /> component is clicked, render the content from that specific year.
  // yearId's state holds the value of whichever year was clicked, so we find the object in the array which matches the clicked <Year/> value.

  // If year is smaller than 2000, go back to the most recent year archive
  const decrementArchiveCount = () => {
    if (yearId === 2000) {
      setYearId(2021)
    } else {
      setYearId(prevYear => prevYear - 1)
    }
  }

  // If year is greater than 2021, go back to the oldest year archive
  const incrementArchiveCount = () => {
    if (yearId === 2021) {
      setYearId(2000)
    } else {
      setYearId(prevYear => prevYear + 1)
    }
  }

  return (
    <>
      <BannerButton onClick={handleClickOut}>
        <NewEditionBanner />
      </BannerButton>
      <ArchiveYearList>
        <h2>Past Editions</h2>
        <YearGrid>{allYears}</YearGrid>
      </ArchiveYearList>
      {modalOpen && <Modal />}

      <SidebarDiv
        variants={sidebarOpenAnimation}
        initial="hidden"
        animate={openSidebar ? "visible" : "hidden"}
        exit="hidden"
      >
        <MainContent>
          <MobileClickOutButton onClick={handleClickOut}>
            <CloseSVG />
          </MobileClickOutButton>
          <Header>
            <PrevButton onClick={decrementArchiveCount}>
              <BiLeftArrowAlt />
            </PrevButton>
            <h2>EDITION {yearId}</h2>

            <NextButton onClick={incrementArchiveCount}>
              <BiRightArrowAlt />
            </NextButton>
          </Header>
          <Title>Catalogue</Title>
          {archive ? <ArchivePDF archive={archive} /> : null}
          <br />
          <br />
          <Title>Team</Title>
          {archive ? <p>{archive.team}</p> : null}
          <br />
          <br />
          <Title>Gallery</Title>
          {archive ? <p>{archive.team}</p> : null}
          <br />
          <br />

          {/* Check to see if {archive} exists, if it does, render the component data */}

          {/* mobile layout nav buttons below  */}
          <MobileArchiveNavButtons>
            <button onClick={decrementArchiveCount}>
              <PrevLongArrowSVG />
              Prev edition
            </button>
            <button onClick={incrementArchiveCount}>
              Next edition
              <NextLongArrowSVG />
            </button>
          </MobileArchiveNavButtons>
        </MainContent>
      </SidebarDiv>

      {/* ----- empty background div to close the sidebar menu -----  */}
      <ClickOut
        variants={clickOut}
        animate={openSidebar ? "visible" : "hidden"}
        initial="hidden"
        exit="hidden"
        onClick={handleClickOut}
      />
    </>
  )
}

const BannerButton = styled.button`
  border: none;
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
    rgba(234, 231, 231, 0) 68.19%,
    rgba(255, 255, 255, 0.75) 100%
  );
  & h2 {
    padding-bottom: 3rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    margin-top: 5rem;
  }
`
const YearGrid = styled.div`
  width: 40%;
  margin: 0 auto;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* grid-template-rows: 1fr auto; */
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-flow: column;
  /* grid-auto-flow: row; */

  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
    grid-auto-flow: row;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`
const Year = styled(motion.input)`
  cursor: pointer;
  padding: 1rem;
  color: #636363;
  font-size: 20px;
  font-family: "Space Mono", monospace;

  border: none;
  background-color: transparent;
`

const SidebarDiv = styled(motion.div)`
  z-index: 2000;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  /* right: 0; */
  background-color: #5200ff;

  display: flex;
  width: 80vw;
  height: 100vh;
  -webkit-box-shadow: -58px 0px 50px 58px rgba(81, 0, 255, 1);
  -moz-box-shadow: -58px 0px 50px 58px rgba(81, 0, 255, 1);
  box-shadow: -58px 0px 50px 58px rgba(81, 0, 255, 1);

  @media (max-width: ${breakpoints.m}px) {
    -webkit-box-shadow: -20px 0px 30px 10px rgba(81, 0, 255, 1);
    -moz-box-shadow: -20px 0px 30px 10px rgba(81, 0, 255, 1);
    box-shadow: -20px 0px 30px 10px rgba(81, 0, 255, 1);

    /* maybe delete below */
    width: 100%;
  }
`

const MainContent = styled.div`
  margin: 0 auto;
  padding-right: 10vw;
  /* padding-left: 4vw; */
  width: 100%;
  & p {
    color: white;
  }

  @media (max-width: ${breakpoints.xl}px) {
    width: 90%;
    padding-right: 0;
  }
`
const Header = styled.div`
  padding-top: 2rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 800;
  background-color: #5200ff;

  -webkit-box-shadow: 0px 0px 40px 35px rgba(81, 0, 255, 1);
  -moz-box-shadow: 0px 0px 40px 35px rgba(81, 0, 255, 1);
  box-shadow: 0px 0px 40px 35px rgba(81, 0, 255, 1);

  & h2 {
    text-align: center;
    font-size: 100px;
    letter-spacing: 0.1rem;
    color: white;
    text-shadow: 0px 0px 8px #ffffff;
  }

  @media (max-width: ${breakpoints.xl}px) {
    margin-bottom: 2rem;

    & h2 {
      font-size: 50px;
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 0rem;
    margin-bottom: 2rem;

    -webkit-box-shadow: 0px 0px 20px 35px rgba(81, 0, 255, 1);
    -moz-box-shadow: 0px 0px 20px 35px rgba(81, 0, 255, 1);
    box-shadow: 0px 0px 20px 35px rgba(81, 0, 255, 1);

    & h2 {
      font-size: 40px;
      margin: 0 auto;
    }
  }
`

const PrevButton = styled.button`
  cursor: pointer;
  width: 75px;
  height: 75px;
  border: 1px solid white;
  border-radius: 50%;
  text-align: center;
  background-color: #ffffff10;
  transition: 0.2s all ease;

  & :hover {
    background-color: #ffffff90;
  }
  & svg {
    padding-top: 0.3rem;
    margin-left: 0.1rem;
    color: white;
    width: 35px;
    height: 35px;
  }

  @media (max-width: ${breakpoints.xl}px) {
    width: 50px;
    height: 50px;

    & svg {
      width: 25px;
      height: 25px;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    display: none;
  }
`
const NextButton = styled.button`
  cursor: pointer;
  width: 75px;
  height: 75px;
  border: 1px solid white;
  border-radius: 50%;
  text-align: center;
  background-color: #ffffff10;
  transition: 0.2s all ease;

  & :hover {
    background-color: #ffffff90;
  }

  & svg {
    padding-top: 0.3rem;
    color: white;
    width: 35px;
    height: 35px;
    margin-left: -0.1rem;
  }

  @media (max-width: ${breakpoints.xl}px) {
    width: 50px;
    height: 50px;

    & svg {
      width: 25px;
      height: 25px;
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    display: none;
  }
`
const Title = styled.h6`
  color: white;
  font-size: 20px;
  letter-spacing: 0.03em;
  width: 100%;
  border-bottom: 1px solid white;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
`

const ClickOut = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  position: fixed;
  top: 0;
`

const MobileClickOutButton = styled.div`
  visibility: hidden;

  @media (max-width: ${breakpoints.m}px) {
    visibility: visible;
    position: sticky;
    z-index: 801;
    color: white;
    padding: 1rem 0.5rem;
    margin: 0 auto;
    cursor: pointer;

    & svg {
      width: 19px;
      height: 19px;
    }
  }
`

const MobileArchiveNavButtons = styled.div`
  display: none;

  @media (max-width: ${breakpoints.m}px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;

    & button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      width: 40%;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }
`

export default Sidebar
