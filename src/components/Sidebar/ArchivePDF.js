import React, { useState, useLayoutEffect } from "react"
import { motion } from "framer-motion"
import { breakpoints } from "../../components/layout"
import styled from "styled-components"
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"


const ArchivePDF = ({archive}) => {
  // -----react-pdf setup content for the sidebar, -----
  // ----- taken from here: https://github.com/wojtekmaj/react-pdf/wiki/Recipes
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

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

  return (
    <>
      <PDFContainer>
        <PDFPrevButton
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
          whileHover={{ color: "#5200ff" }}
          whileTap={{ scale: 0.95 }}
        >
          Prev
        </PDFPrevButton>

        <PDFDocument file={archive.pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </PDFDocument>

        <PDFNextButton
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
          whileHover={{ color: "#5200ff" }}
          whileTap={{ scale: 0.95 }}
        >
          Next
        </PDFNextButton>
      </PDFContainer>

      <PDFPageNumber>
        {pageNumber || (numPages ? 1 : "--")} / {numPages || "--"}
      </PDFPageNumber>
    </>
  )
}


const PDFContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PDFDocument = styled(Document)`
  display: flex;
  justify-content: center;
  width: 630px;
  margin: 0 auto;
  box-shadow: 0px 0px 35px 11px rgba(255, 255, 255, 0.48);
`
const PDFPrevButton = styled(motion.button)`
  width: 140px;
  height: 40px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  float: left;
`
const PDFNextButton = styled(motion.button)`
  width: 140px;
  height: 40px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  float: right;
`

const PDFPageNumber = styled.p`
  font-family: "Space Mono", monospace;
  font-size: 14px;
  padding-top: 1rem;
  margin: 0 auto;
  text-align: center;
`


export default ArchivePDF