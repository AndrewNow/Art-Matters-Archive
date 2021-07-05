import React, { useState, useLayoutEffect, useCallback } from "react"
import {
  motion,
  AnimateSharedLayout,
  useAnimation,
  useTransform,
  useViewportScroll,
} from "framer-motion"
import styled from "styled-components"
import { useInView, InView } from "react-intersection-observer"
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi"
import { breakpoints } from "../layout"
import NewEditionBanner from "../Marquee/NewEditionBanner"
import useWindowSize from "../utils/useWindowSize"
import CloseSVG from "../utils/closeSVG"
import PrevLongArrowSVG from "../utils/prevLongArrowSVG"
import NextLongArrowSVG from "../utils/nextLongArrowSVG"
import ArchivePDF from "./ArchivePDF"
import { ArchiveData } from "../ArchiveData"
import { GatsbyImage } from "gatsby-plugin-image"
import { useEmblaCarousel } from "embla-carousel/react"
import { NextArrowSVG, PrevArrowSVG } from "../utils/emblaArrowSVG"

const Sidebar = ({ data }) => {
  // functions to make sure that the side bar animation changes depending on DOM width
  const { width } = useWindowSize()

  const checkWidthOpen = () => {
    if (width < 600) return "-7.5vw"
    if (width < 800 && width > 601) return "0vw"
    if (width < 1280 && width > 801) return "13vw"
    if (width > 1281) return "20vw"
  }

  const checkWidthHidden = () => {
    if (width < 600) return "100vw"
    if (width < 800 && width > 601) return "96vw"
    if (width < 1280 && width > 801) return "99vw"
    if (width > 1281) return "96vw"
  }

  //Framer Motion animation variables
  const sidebarOpenAnimation = {
    visible: {
      x: checkWidthOpen(),
      transition: {
        staggerChildren: 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hidden: {
      x: checkWidthHidden(),
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

  const animateInView = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.75,
        delay: 0.25,
        staggerChildren: 0.06,
        delayChildren: 1.4,
        staggerDirection: -1,
      },
    },
    hidden: {
      y: 100,
      opacity: 0,
    },
  }

  const animateYearList = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
    hidden: {
      opacity: 0,
      y: 20,
      x: 20,
    },
    hover: {
      scale: 1.1, color: "#5200ff"
    },
    tap: {
      scale: 0.9
    }
  }

  const { ref, inView } = useInView({ triggerOnce: true })

  // Logic for opening the archive sidebar
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

  //below is a "modal" element to prevent scrolling on background when archive sidebar opens
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

  const allYears = ArchiveData.map(archiveYear => (
    // 1. Create one <Year /> component for every year in ArchiveData.
    // 2. We set <Year /> as an <input /> with a value={} of the associated year.
    // 3. When any <Year /> is clicked, {handleClick} updates the state of yearId
    <Year
      type="submit"
      key={archiveYear.id}
      value={archiveYear.id}
      onClick={handleClick}
      variants={animateYearList}
      whileHover={{ scale: 1.2, color: "#5200ff" }}
      whileTap={{ scale: 0.9 }}
    />
  ))

  const archive = ArchiveData.find(({ id }) => id === yearId)
  // All data needed for the sidebar is now contained in const {archive}
  // When the <Year /> component on the homepage is clicked, render the content from that specific year in the sidebar.
  // yearId's state holds the value of whichever year was clicked, so we find the object in the array which matches the clicked <Year/> value to select only that year's data in the sidebar.

  // functions for the next and previous navigation buttons within the sidebar
  const decrementArchiveCount = () => {
    // If year is smaller than 2000, go back to the most recent year archive
    if (yearId === 2000) {
      setYearId(2021)
    } else {
      setYearId(prevYear => prevYear - 1)
    }
  }

  const incrementArchiveCount = () => {
    // If year is greater than 2021, go back to the oldest year archive
    if (yearId === 2021) {
      setYearId(2000)
    } else {
      setYearId(prevYear => prevYear + 1)
    }
  }

  // handler for the increment/decrement counters which  trigger a Framer opacity animation
  // useAnimation() & "controls" are from Framer, this allows us to animate whenever the handler functions are clicked
  // more info here: https://www.framer.com/api/motion/animation/#starting-an-animation
  const controls = useAnimation()

  const handleDecrement = () => {
    resetEmblaIndex()
    decrementArchiveCount()
    controls.start({
      opacity: [1, 0.2, 1],
      transition: {
        duration: 1,
      },
    })
  }

  const handleIncrement = () => {
    resetEmblaIndex()
    incrementArchiveCount()
    controls.start({
      opacity: [1, 0.2, 1],
      transition: {
        duration: 1,
      },
    })
  }

  // content for the image carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    inViewThreshold: 0.1,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const resetEmblaIndex = () => {
    if (emblaApi) emblaApi.scrollTo(0)
  }


  // ---------- PARRALLAX SCROLL LOGIC USING FRAMER ----------
  const { scrollYProgress } = useViewportScroll({ passive: true })
  const y = useTransform(
    scrollYProgress,
    scrollYProgress => scrollYProgress * -150
  )

  
  return (
    <>
      <BannerButton onClick={handleClickOut}>
        <NewEditionBanner />
      </BannerButton>
      <InView threshold={1}>
        <ArchiveYearList
          ref={ref}
          initial="hidden"
          variants={animateInView}
          animate={inView && "visible"}
        >
          <PastEditionBgTitle style={{ y: y }}>
            Past <br /> Editions
          </PastEditionBgTitle>
          <YearGrid
            ref={ref}
            initial="hidden"
            animate={inView && "visible"}
            variants={animateInView}
          >
            {allYears}
          </YearGrid>
        </ArchiveYearList>
      </InView>
      {/* 
    <BannerButton> and <ArchiveYearList> are on the homepage.
    the rest of the content below is for the sidebar
    */}
      {modalOpen && <Modal />}
      <AnimateSharedLayout>
        <SidebarDiv
          variants={sidebarOpenAnimation}
          initial="hidden"
          animate={openSidebar ? "visible" : "hidden"}
          exit="hidden"
        >
          <MainContent>
            <WipeAnimation />
            <MobileClickOutButton onClick={handleClickOut}>
              <CloseSVG />
            </MobileClickOutButton>
            {/* 
              mobile "close sidebar" button above ^ 
            */}
            <Header>
              <PrevButton
                aria-label="Previous edition button"
                onClick={handleDecrement}
              >
                <BiLeftArrowAlt />
              </PrevButton>
              <h2>EDITION {yearId}</h2>
              <NextButton
                aria-label="Next edition button"
                onClick={handleIncrement}
                layout
                animate={controls}
              >
                <BiRightArrowAlt />
              </NextButton>
              {/* 
                mobile layout nav buttons below 
              */}
              <MobileArchiveNavButtons>
                <motion.button
                  layout
                  onClick={handleDecrement}
                  animate={controls}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <PrevLongArrowSVG />
                  Prev edition
                </motion.button>
                <motion.button
                  layout
                  onClick={handleIncrement}
                  animate={controls}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Next edition
                  <NextLongArrowSVG />
                </motion.button>
              </MobileArchiveNavButtons>
            </Header>

            {/* 
              finally, the contents of each archive taken from {archive} below
            */}
            <Title layout animate={controls}>
              Catalogue
            </Title>
            {/* Check to see if {archive} exists, if it does, render the component data */}
            {archive ? (
              <ArchivePDF archive={archive} layout animate={controls} />
            ) : null}
            <br />
            <br />
            <Title layout animate={controls}>
              Participants
            </Title>

            <TeamWrapper>
              <TeamSectionLeft>
                <TeamTitle>Team</TeamTitle>
                {archive ? <p>{archive.team}</p> : null}
              </TeamSectionLeft>

              <TeamSectionRight>
                <TeamTitle>Artists</TeamTitle>
                <TeamArtists>
                  {archive ? <p>{archive.team}</p> : null}
                </TeamArtists>

                <TeamTitle>Other helping hands</TeamTitle>
                <TeamOther>{archive ? <p>{archive.team}</p> : null}</TeamOther>
              </TeamSectionRight>
            </TeamWrapper>
            <br />
            <br />
            <Title layout animate={controls}>
              Gallery
            </Title>
            {archive.images ? (
              <>
                <Embla>
                  <EmblaGalleryButtonPrev onClick={scrollPrev}>
                    <PrevArrowSVG />
                    <p>Prev</p>
                  </EmblaGalleryButtonPrev>
                  <EmblaViewport ref={emblaRef}>
                    <EmblaContainer>
                      {data[archive.images].edges.map(({ node }, index) => (
                        <EmblaSlide key={index}>
                          <GatsbyDropShadowWrapper>
                            <GatsbyImage
                              image={node.childImageSharp.gatsbyImageData}
                              alt={node.base}
                              key={index + 1}
                            />
                          </GatsbyDropShadowWrapper>
                        </EmblaSlide>
                      ))}
                    </EmblaContainer>
                  </EmblaViewport>
                  <EmblaGalleryButtonNext onClick={scrollNext}>
                    <NextArrowSVG />
                    <p>Next</p>
                  </EmblaGalleryButtonNext>
                </Embla>
              </>
            ) : (
              <EmblaNoData>
                No images archived for this year, sorry! ⛏
              </EmblaNoData>
            )}

            <br />
            <br />
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
      </AnimateSharedLayout>
    </>
  )
}

const BannerButton = styled.button`
  border: none;
`

const ArchiveYearList = styled(motion.div)`
  width: 85%;
  margin: 0 auto;
  text-align: center;
  /* margin-top: 15rem; */
  /* padding-top: .5rem; */
  padding-bottom: 5rem;

  @media (max-width: ${breakpoints.m}px) {
    width: 100%;
    /* margin-top: 5rem; */
  }
`

const PastEditionBgTitle = styled(motion.h2)`
  color: #ffffff;
  filter: blur(3px);
  -webkit-text-stroke: 1px solid rgba(255, 255, 255, 0.56);
  text-shadow: 10px 3px 16px #ece9e3, 0 2px 0 #ece9e3, -10px -3px 26px #fff;
  text-transform: uppercase;
  font-size: 16.5vw;
  margin-bottom: 3rem;
  line-height: 96%;
  z-index: 999;

  @media (max-width: ${breakpoints.m}px) {
    font-size: 17vw;
    filter: blur(2px);
  }
`

const YearGrid = styled(motion.div)`
  width: 90%;
  margin: 0 auto;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  /* grid-template-rows: 1fr auto; */
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-flow: row;
  /* grid-auto-flow: row; */
  padding-bottom: 10rem;

  @media (max-width: ${breakpoints.xl}px) {
    width: 100%;
    grid-auto-flow: row;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr auto;
  }

  @media (max-width: ${breakpoints.l}px) {
    width: 90%;
    grid-auto-flow: row;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr auto;
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-bottom: 4rem;
  }
`
const Year = styled(motion.input)`
  cursor: pointer;
  padding: 2rem 1rem;
  color: #636363;
  font-size: 64px;
  position: relative;
  z-index: 1000;

  border: none;
  background-color: transparent;

  filter: drop-shadow(0px 0px 10px #b1b1b1);

  @media (max-width: ${breakpoints.l}px) {
    font-size: 48px;
  }

  @media (max-width: ${breakpoints.m}px) {
    font-size: 20px;
  }
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

  @media (max-width: ${breakpoints.l}px) {
    width: 90%;
    padding-right: 0;
  }

  @media (max-width: 600px) {
    padding-right: 0;
  }
`

const WipeAnimation = styled(motion.div)``

const Header = styled(motion.div)`
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
    flex-basis: 2;
  }

  @media (max-width: ${breakpoints.xl}px) {
    margin-bottom: 2rem;

    & h2 {
      /* padding-top: 1rem; */
      font-size: 60px;
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column;
    position: relative;
    margin-top: 0rem;
    margin-bottom: 3rem;

    -webkit-box-shadow: 0px 0px 20px 35px rgba(81, 0, 255, 1);
    -moz-box-shadow: 0px 0px 20px 35px rgba(81, 0, 255, 1);
    box-shadow: 0px 0px 20px 35px rgba(81, 0, 255, 1);

    & h2 {
      font-size: 40px;
      margin: 0 auto;
      padding-bottom: 1.25rem;
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
const NextButton = styled(motion.button)`
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
const Title = styled(motion.h6)`
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
    position: relative;
    /* was sticky */
    top: 1rem;
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
    padding-bottom: 0.25rem;

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

const TeamWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & p {
    font-family: "Space Mono", monospace;
    letter-spacing: 0.03em;
    font-size: 16px;
    line-height: 20px;
  }

  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column;
  }

`

const TeamSectionLeft = styled.div`
  width: 45%;
  padding-bottom: 3rem;

  @media (max-width: ${breakpoints.m}px) {
    width: 100%;
  }
`

const TeamTitle = styled.p`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  border-bottom: 1px solid white;
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;
`

const TeamSectionRight = styled.div`
  width: 45%;

  @media (max-width: ${breakpoints.m}px) {
    width: 100%;
  }
`

const TeamArtists = styled.div`
  padding-bottom: 3rem;
`

const TeamOther = styled.div``

const Embla = styled.div`
  position: relative;
  /* background-color: #f7f7f7; */
  /* padding: 20px; */
  min-width: 100%;
  /* min-width: 670px; */
  margin-left: auto;
  margin-right: auto;

  display: flex;
  align-items: center;
`

const EmblaViewport = styled.div`
  overflow: hidden;
  height: auto;
  /* border: 1px solid red; */

  @media (max-width: ${breakpoints.s}px) {
    padding-bottom: 5rem;
  }
`

const EmblaContainer = styled.div`
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
  margin-left: -10px;
  margin-right: -10px;
  align-items: center;
  margin: 0 auto;
`

const EmblaSlide = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-left: 10px;
  /* min-width: 100%; */
  max-height: 700px;
  flex: 0 0 100%;
  padding-top: 2.1rem;
  padding-bottom: 2.1rem;

  @media (max-width: ${breakpoints.m}px) {
    padding: 0 1rem;
  }
`

const GatsbyDropShadowWrapper = styled.div`
  box-shadow: 0px 0px 35px 11px rgba(255, 255, 255, 0.48);

  @media (max-width: ${breakpoints.m}px) {
    box-shadow: 0px 0px 35px 1px rgba(255, 255, 255, 0.48);
  }
`

const EmblaNoData = styled.div`
  margin: 0 auto;
  width: 450px;
  height: 600px;
  padding: 2rem;
  color: white;
  border: 1px solid white;
  font-family: "Space Mono", monospace;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 35px 11px rgba(255, 255, 255, 0.48);

  @media (max-width: ${breakpoints.m}px) {
    height: 300px;
    max-width: 300px;
    padding: 1rem;
    text-align: center;
  }
`

const EmblaGalleryButtonPrev = styled(motion.button)`
  z-index: 100;
  min-width: 140px;
  height: 40px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;

  & p {
    color: #3a3a3a !important;
  }

  @media (max-width: ${breakpoints.m}px) {
    position: absolute;
    left: 0;

    background-color: transparent;
    border: none;
    height: 200px;
    min-width: 30px;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;

    & p {
      display: none;
    }
  }
`
const EmblaGalleryButtonNext = styled(motion.button)`
  z-index: 100;
  min-width: 140px;
  height: 40px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;

  & p {
    color: #3a3a3a !important;
  }

  @media (max-width: ${breakpoints.m}px) {
    position: absolute;
    right: 0;

    background-color: transparent;
    border: none;
    height: 200px;
    min-width: 30px;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;

    & p {
      display: none;
    }
  }
`

export default Sidebar
