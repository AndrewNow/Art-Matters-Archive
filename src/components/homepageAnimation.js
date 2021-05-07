import React, { useState, useEffect, useLayoutEffect } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const HomepageAnimation = () => {
  const [modalOpen, setModalOpen] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(!modalOpen)
    }, 2800)
    return () => clearTimeout(timer)
  }, [])

  const useLockBodyScroll = () => {
    useLayoutEffect(() => {
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = "hidden"
      return () => (document.body.style.overflow = originalStyle)
    }, [])
  }

  console.log(modalOpen)

  const Modal = () => {
    useLockBodyScroll()
    return <></>
  }

  const banner = {
    animate: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const letterAnimation = {
    initial: {
      y: 400,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  }

  const text = "ART MATTERS"

  return (
    <>
      <AnimationWipe
        initial={{ y: 0 }}
        animate={{ y: -2000, transition: { duration: 1, delay: 2.1 } }}
      >
        <SpanWrapper variants={banner} initial="initial" animate="animate">
          {[...text].map(letters => (
            <motion.span variants={letterAnimation}>{letters}</motion.span>
          ))}
        </SpanWrapper>
      </AnimationWipe>
      {modalOpen && <Modal />}
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
`

export default HomepageAnimation
