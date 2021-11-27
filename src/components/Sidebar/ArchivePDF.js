import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { breakpoints } from "../../components/layout"
import styled from "styled-components"
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack"
import LoadingSpinner from "./LoadingSpinner"
import useWindowSize from "../utils/useWindowSize"
import { NextArrowSVG, PrevArrowSVG } from "../utils/emblaArrowSVG"

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
    if (pageNumber === 1) {
      setPageNumber(numPages)
    } else {
      changePage(-1)
    }
  }
  const nextPage = () => {
    if (pageNumber === numPages) {
      setPageNumber(1)
    } else {
      changePage(1)
    }
  }
  const handleClick = () => {
    if (width > 900) {
      setZoomIn(!zoomIn)
    }
  }
  //worker for react-pdf
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

  // I was told that future editions would EITHER have a publication, OR an archive catalogue PDF.
  // It seems like going forward there will only be publications, so this code checks if a catalogue exists.
  // If a catalogue exists, this component will render that catalogue's PDF. If a publication exists (which means no catalogue exists), it will render that publication

  const ArchivePdf = archive.pdf ? archive.pdf : archive.publication?.pdf

  return (
    <>
      <PDFContainer>
        {ArchivePdf ? (
          <PDFPrevButton
            type="button"
            // disabled={pageNumber <= 1}
            onClick={previousPage}
            whileTap={{ scale: 0.95 }}
            animate={zoomIn ? "faded" : "opaque"}
            variants={fadeButtons}
          >
            <PrevArrowSVG />
            <p>Prev</p>
          </PDFPrevButton>
        ) : null}
        {/* PDFDocument and PDFPage components below are from the react-pdf library */}
          <PDFDocument
            file={ArchivePdf}
            loading={<LoadingSpinner />}
            noData={
              <PDFNoData>No catalogue archived for this year! ⛏</PDFNoData>
            }
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <PDFPage
              pageNumber={pageNumber}
              scale={zoomIn ? 1.3 : 1}
              onClick={handleClick}
              width={checkWidth()}
              loading={null}
            />
          </PDFDocument>
        {ArchivePdf ? (
          <PDFNextButton
            type="button"
            // disabled={pageNumber >= numPages}
            onClick={nextPage}
            whileTap={{ scale: 0.95 }}
            animate={zoomIn ? "faded" : "opaque"}
            variants={fadeButtons}
          >
            <p>Next</p>
            <NextArrowSVG />
          </PDFNextButton>
        ) : null}
      </PDFContainer>
      {ArchivePdf ? (
        <PDFPageNumber noData={<div>Error</div>}>
          {pageNumber || (numPages ? 1 : "--")} / {numPages || "--"}
        </PDFPageNumber>
      ) : null}
    </>
  )
}

const PDFContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;


  /* height: 750px; */
  /* min-height: 600px;
  height: 600px; */
  
  /* max-width: 800px; */
  position: relative;
  width: 100%;
  height: 750px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.s}px) {
    min-height: 300px;
    max-height: 500px;
  }
`

const PDFDocument = styled(Document)`
  overflow: hidden;
  position: relative;
  /* max-height: 100%; */
  margin: 0 auto;
  cursor: zoom-in;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: 0px 0px 35px 11px rgba(255, 255, 255, 0.48); */
`

const PDFPage = styled(Page)`
  overflow: hidden;
  canvas {
    object-fit: contain;
  }

  width: auto;
  height: 100%;
  align-self: center;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: 0px 0px 35px 11px rgba(255, 255, 255, 0.48); */
`

const PDFPrevButton = styled(motion.button)`
  z-index: 100;
  width: 140px;
  height: 40px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  float: left;

  p {
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

  p {
    color: #3a3a3a !important;
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
  position: relative;
  z-index: 100;
`
const PDFNoData = styled.div`
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

export default ArchivePDF
