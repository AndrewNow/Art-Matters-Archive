import React, { useState, useLayoutEffect } from "react"
import { motion } from "framer-motion"
import { breakpoints } from "../../components/layout"
import styled from "styled-components"

const sidebarOpenAnimation = {
  visible: {
    x: "30vw",
    transition: {
      staggerChildren: 0.1,
      duration: 0.45,
      ease: "easeIn",
    },
  },
  hidden: {
    x: "96vw",
    transition: {
      staggerChildren: 0.1,
      duration: 0.25,
      ease: "easeOut",
    },
  },
}

const clickout = {
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

const yearHoverEffect = {
  hover: {
    skew: 30,
    color: "#5200ff",
    transition: {
      ease: "easeInOut",
      duration: 0.1,
    },
  },
  normal: {
    skew: 0,
  },
}

const Sidebar = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(false)
  const [yearId, setYearId] = useState("2021")

  const handleClick = e => (
    setOpenSidebar(!openSidebar),
    setModalOpen(!modalOpen),
    setYearId(e.target.value)
  )

  const handleClickOut = () => (
    setOpenSidebar(!openSidebar), setModalOpen(!modalOpen)
  )

  // -----below is a "modal" element to prevent scrolling when archive sidebar opens-----

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
      id: "2021",
      team:
        "HELEN ADILIA ARCEYUT-FRIXIONE, STEPHANIE LAOUN, SEAN YENDRYS, STEPHANIE BOKENFOHR, MATTHEW JAMES, TARA DUPUIS, ELGIN-SKYE MCLAREN, GILLIAN MCDONALD, ZOE KOKE,SARAH-EVE TOUSIGNANT, MARIE-CATHERINE BUJOLD, STEFAN SPEC, JULIE JOHNSTON",
    },
    {
      id: "2020",
      team: "Example name",
    },
    {
      id: "2019",
      team: "Example name",
    },
    {
      id: "2018",
      team: "Example name",
    },
    {
      id: "2017",
      team: "Example name",
    },
    {
      id: "2016",
    },
    {
      id: "2015",
    },
    {
      id: "2014",
    },
    {
      id: "2013",
    },
    {
      id: "2012",
    },
    {
      id: "2011",
    },
    {
      id: "2010",
    },
    {
      id: "2009",
    },
    {
      id: "2008",
    },
    {
      id: "2007",
    },
    {
      id: "2006",
    },
    {
      id: "2005",
    },
    {
      id: "2004",
    },
    {
      id: "2003",
    },
    {
      id: "2002",
    },
    {
      id: "2001",
    },
    {
      id: "2000",
    },
  ]

  const allYears = ArchiveData.map(archiveYear => (
    <Year
      variants={yearHoverEffect}
      whileHover="hover"
      initial="normal"
      type="submit"
      key={archiveYear.id}
      value={archiveYear.id}
      onClick={handleClick}
    />
    // 1. Create one <Year /> component for every year in ArchiveData.
    // 2. We set <Year /> as an <input> with a value={} of the associated year.
    // 3. When any <Year /> is clicked, {handleClick} updates the state of yearId
  ))

  const archive = ArchiveData.find(({ id }) => id === yearId)
  // All data needed for the sidebar is now contained in const {archive}
  // When the <Year /> component is clicked, render the content from that specific year.
  // yearId holds the value of whichever year was clicked, so we find the object in the array which matches the clicked <Year/> value.

  return (
    <>
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
          <Header>
            <PrevButton>Prev</PrevButton>
            <h2>EDITION {yearId}</h2>
            <NextButton>Next</NextButton>
          </Header>

          {archive ? <p>{archive.team}</p> : null}
        </MainContent>
      </SidebarDiv>

      {/* ----- empty background div to close the sidebar menu -----  */}
      <ClickOut
        variants={clickout}
        initial="hidden"
        animate={openSidebar ? "visible" : "hidden"}
        exit="hidden"
        onClick={handleClickOut}
      />
    </>
  )
}

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
  width: 45%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-flow: column;

  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
    grid-auto-flow: row;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`
const Year = styled(motion.input)`
  padding: 1rem;
  color: #636363;
  font-family: "Space Mono", monospace;
  font-size: 20px;
  cursor: pointer;

  border: none;
  background-color: transparent;
`

const SidebarDiv = styled(motion.div)`
  z-index: 2000;
  position: fixed;
  top: 0;
  /* right: 0; */
  background-color: #5200ff;

  display: flex;
  width: 70vw;
  height: 100vh;
  -webkit-box-shadow: -58px 0px 50px 58px rgba(81, 0, 255, 1);
  -moz-box-shadow: -58px 0px 50px 58px rgba(81, 0, 255, 1);
  box-shadow: -58px 0px 50px 58px rgba(81, 0, 255, 1);

  @media (max-width: ${breakpoints.m}px) {
    -webkit-box-shadow: -20px 0px 30px 10px rgba(81, 0, 255, 1);
    -moz-box-shadow: -20px 0px 30px 10px rgba(81, 0, 255, 1);
    box-shadow: -20px 0px 30px 10px rgba(81, 0, 255, 1);
  }
`

const MainContent = styled.div`
  margin: 0 auto;
  padding-right: 10vw;
  width: 100%;
`
const Header = styled.div`
  padding-top: 3rem;
  display: flex;
  justify-content: space-between;

  & h2 {
    text-align: center;
    font-size: 48px;
    letter-spacing: 0.1rem;
    color: white;
    text-shadow: 0px 0px 8px #ffffff;
  }
`

const PrevButton = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid white;
  border-radius: 50%;
`
const NextButton = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid white;
  border-radius: 50%;
`
const ClickOut = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  position: fixed;
  top: 0;
`

export default Sidebar
