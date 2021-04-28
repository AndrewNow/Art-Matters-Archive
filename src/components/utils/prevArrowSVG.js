import React from "react"
import { breakpoints } from "../../components/layout"
import styled from "styled-components"

const PrevArrowSVG = () => (
  <PrevSVG
    width="12"
    height="20"
    viewBox="0 0 9 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="0.646447"
      y1="8.64645"
      x2="8.64645"
      y2="0.646447"
      stroke="white"
    />
    <line x1="1.35355" y1="8.64645" x2="8.35355" y2="15.6464" stroke="white" />
  </PrevSVG>
)

const PrevSVG = styled.svg`
  visibility: hidden;
  display: none;

  @media (max-width: ${breakpoints.m}px) {
    visibility: visible;
    display: inline-block;
  }
`

export default PrevArrowSVG
