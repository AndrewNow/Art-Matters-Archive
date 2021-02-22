import React from "react"
import styled from "styled-components"
import {
  motion,
  useTransform,
  useViewportScroll,
  useSpring,
} from "framer-motion"


const Marquee = () => {
  
  // ---------- PARALLAX SCROLL LOGIC USING FRAMER ----------
  const { scrollYProgress } = useViewportScroll()
  const yRange = useTransform(
    scrollYProgress,
    scrollYProgress => scrollYProgress * 1000
  )
  const y = useSpring(yRange, { stiffness: 125, damping: 50 })
  return (
    <MarqueeContainer style={{ y: y }}>
      <MarqueeContent>
        <h1>ART MATTERS ART MATTERS ART MATTERS ART MATTERS</h1>
      </MarqueeContent>
    </MarqueeContainer>
  )
} 

const MarqueeContainer = styled(motion.div)`
  z-index: -1;
  position: relative;
  overflow: hidden;
  /* height: 100vh; */
  /* max-height: 100%; */
  width: 8%;
  top: 0px;
  left: -5px;
  filter: blur(2px);
`

const MarqueeContent = styled.span`
  position: relative;
  font-size: 120px;
  line-height: 105px;
  white-space: nowrap;
  margin: 0;
  left: 0;

  & h1 {
    writing-mode: vertical-rl;
    font-family: "at_surt_italic";
  }
`

export default Marquee