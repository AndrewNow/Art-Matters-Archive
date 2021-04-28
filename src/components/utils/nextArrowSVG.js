import React from "react"
import { breakpoints } from "../../components/layout"
import styled from "styled-components"


const NextArrowSVG = () => (
  <NextSVG
    width="12"
    height="20"
    viewBox="0 0 9 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="8.35355" y1="7.35355" x2="0.353553" y2="15.3536" stroke="white" />
    <line
      x1="7.64645"
      y1="7.35355"
      x2="0.646447"
      y2="0.353553"
      stroke="white"
    />
  </NextSVG>
)

const NextSVG = styled.svg`
  visibility: hidden;
  display: none;

  @media (max-width: ${breakpoints.m}px) {
    visibility: visible;
    display: inline-block;
  }
`

export default NextArrowSVG
