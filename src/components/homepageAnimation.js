import React, { useLayoutEffect } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { breakpoints } from "../components/layout"


const HomepageAnimation = () => {

  const useLockBodyScroll = () => {
    useLayoutEffect(() => {
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = "hidden"
      setTimeout(() => {
        document.body.style.overflow = originalStyle
      }, 2300)
    }, [])
  }


  const Modal = () => {
    useLockBodyScroll()
    return <></>
  }

  const banner = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  }

  const letterAnimation = {
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: .5,
      },
    },
  }

  const text = "ART MATTERS"

  return (
    <>
      <AnimationWipe
        initial={{ y: 0 }}
        animate={{ y: -2000, transition: { duration: 1, delay: 1.25 } }}
      >
        <SpanWrapper variants={banner} initial="initial" animate="animate">
          {[...text].map((letters, index) => (
            <motion.span variants={letterAnimation} key={index}>{letters}</motion.span>
          ))}
        </SpanWrapper>
      </AnimationWipe>
      <Modal />
    </>
  )
}

const AnimationWipe = styled(motion.div)`
  width: 98vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9000;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
`

const SpanWrapper = styled(motion.span)`
  font-size: 2rem;
  margin-left: 37vw;
  word-wrap: nowrap;

  @media (max-width: ${breakpoints.m}px) {
    margin-left: 15vw;
  }
`

export default HomepageAnimation
