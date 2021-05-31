import React, { useState } from "react"
import { motion } from "framer-motion"
import { breakpoints } from "../../components/layout"
import styled from "styled-components"
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"

import LoadingSpinner from "./LoadingSpinner"
import useWindowSize from "../utils/useWindowSize"
import NextArrowSVG from "../utils/nextArrowSVG"
import PrevArrowSVG from "../utils/prevArrowSVG"

const ArchivePDF = ({ archive }) => {
  const fadeButtons = {
    opaque: {
      opacity: 1,
    },
    faded: {
      opacity: 0.2,
    },
  }

  const { width } = useWindowSize()
  const checkWidth = () => {
    if (width < 600) return "300"
    if (width < 900 && width > 601) return "350"
    if (width < 1600 && width > 901) return "500"
    if (width > 1601) return "600"
  }

  // -----react-pdf setup content for the sidebar, -----
  // ----- taken from here: https://github.com/wojtekmaj/react-pdf/wiki/Recipes
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [zoomIn, setZoomIn] = useState(false)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
    setPageNumber(1)
  }
  const changePage = offset => {
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }
  const previousPage = () => {
    changePage(-1)
  }
  const nextPage = () => {
    changePage(1)
  }
  const handleClick = () => {
    setZoomIn(!zoomIn)
  }



  return (
    <>
      <PDFContainer>
        <PDFPrevButton
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
          whileHover={{ color: "#5200ff", opacity: 1 }}
          whileTap={{ scale: 0.95 }}
          animate={zoomIn ? "faded" : "opaque"}
          variants={fadeButtons}
        >
          <PrevArrowSVG />
          <p>Prev</p>
        </PDFPrevButton>
        {/* PDFDocument and PDFPage components below are from the react-pdf library */}
        <PDFDocument
          file={archive.pdf}
          loading={<LoadingSpinner />}
          noData={
            <PDFNoData>No catalogue archived for this year, sorry! ⛏</PDFNoData>
          }
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <PDFPage
            pageNumber={pageNumber}
            scale={zoomIn ? 1.2 : 1}
            onClick={handleClick}
            width={checkWidth()}
          />
        </PDFDocument>

        <PDFNextButton
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
          whileHover={{ color: "#5200ff", opacity: 1 }}
          whileTap={{ scale: 0.95 }}
          animate={zoomIn ? "faded" : "opaque"}
          variants={fadeButtons}
        >
          <p>Next</p>
          <NextArrowSVG />
        </PDFNextButton>
      </PDFContainer>
      <PDFPageNumber noData={<div>Potato</div>}>
        {pageNumber || (numPages ? 1 : "--")} / {numPages || "--"}
      </PDFPageNumber>
    </>
  )
}

const PDFContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 600px;

  @media (max-width: ${breakpoints.m}px) {
    min-height: 300px;
    max-height: 500px;
  }
`

const PDFDocument = styled(Document)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 630px;
  margin: 0 auto;
  cursor: zoom-in;
  /* box-shadow: 0px 0px 35px 11px rgba(255, 255, 255, 0.48); */
`

const PDFPage = styled(Page)`
  box-shadow: 0px 0px 35px 11px rgba(255, 255, 255, 0.48);
`

const PDFPrevButton = styled(motion.button)`
  z-index: 100;
  width: 140px;
  height: 40px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  float: left;

  & p {
    color: #3a3a3a !important;
  }

  @media (max-width: ${breakpoints.m}px) {
    background-color: transparent;
    position: absolute;
    left: 0;
    border: none;
    height: 200px;
    width: 50px;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;

    & p {
      display: none;
    }
  }
`
const PDFNextButton = styled(motion.button)`
  z-index: 100;
  width: 140px;
  height: 40px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  float: right;

  & p {
    color: #3a3a3a!important;
  }

  @media (max-width: ${breakpoints.m}px) {
    background-color: transparent;
    position: absolute;
    right: 0;
    border: none;
    height: 200px;
    width: 50px;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;

    & p {
      display: none;
    }
  }
`

const PDFPageNumber = styled.p`
  font-family: "Space Mono", monospace;
  font-size: 14px;
  padding-top: 1rem;
  margin: 0 auto;
  text-align: center;
`
const PDFNoData = styled.div`
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
  }
`

export default ArchivePDF
