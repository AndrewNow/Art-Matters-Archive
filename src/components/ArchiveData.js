import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { archive } from "./Sidebar/Sidebar"


import pdf2019 from "../components/pdfs/2019_Catalog.pdf"
import pdf2018 from "../components/pdfs/2018_Catalog.pdf"
import pdf2017 from "../components/pdfs/2017_Catalog.pdf"
import pdf2016 from "../components/pdfs/2016_Catalog.pdf"
import pdf2015 from "../components/pdfs/2015_Catalog.pdf"
// import pdf2014 from "../pdfs/2014_Catalog.pdf"
// import pdf2013 from "../pdfs/2013_Catalog.pdf"
import pdf2012 from "../components/pdfs/2012_Catalog.pdf"
import pdf2011 from "../components/pdfs/2011_Catalog.pdf"
import pdf2010 from "../components/pdfs/2010_Catalog.pdf"
import pdf2009 from "../components/pdfs/2009_Catalog.pdf"
import pdf2008 from "../components/pdfs/2008_Catalog.pdf"
import pdf2007 from "../components/pdfs/2007_Catalog.pdf"
import pdf2006 from "../components/pdfs/2006_Catalog.pdf"
import pdf2005 from "../components/pdfs/2005_Catalog.pdf"
import pdf2004 from "../components/pdfs/2004_Catalog.pdf"
import pdf2003 from "../components/pdfs/2003_Catalog.pdf"
import pdf2002 from "../components/pdfs/2002_Catalog.pdf"
import pdf2001 from "../components/pdfs/2001_Catalog.pdf"

//                   2000
// missing data

//                   2001
// missing data

//                   2002
// missing data

//                   2003
import image_01_2003 from "../images/2003/01.jpg"
import image_02_2003 from "../images/2003/02.jpg"
import image_03_2003 from "../images/2003/03.jpg"
import image_04_2003 from "../images/2003/04.jpg"
import image_05_2003 from "../images/2003/05.jpg"
import image_06_2003 from "../images/2003/06.jpg"
import image_07_2003 from "../images/2003/07.jpg"
import image_08_2003 from "../images/2003/08.jpg"
import image_09_2003 from "../images/2003/09.jpg"
import image_10_2003 from "../images/2003/10.jpg"
import image_11_2003 from "../images/2003/11.jpg"
import image_12_2003 from "../images/2003/12.jpg"
//                   2005
import image_01_2005 from "../images/2005/01.jpg"
import image_02_2005 from "../images/2005/02.jpg"
import image_03_2005 from "../images/2005/03.jpg"
import image_04_2005 from "../images/2005/04.jpg"
import image_05_2005 from "../images/2005/05.jpg"
import image_06_2005 from "../images/2005/06.jpg"
import image_07_2005 from "../images/2005/07.jpg"
import image_08_2005 from "../images/2005/08.jpg"
import image_09_2005 from "../images/2005/09.jpg"
import image_10_2005 from "../images/2005/10.jpg"
import image_11_2005 from "../images/2005/11.jpg"
import image_12_2005 from "../images/2005/12.jpg"
import image_13_2005 from "../images/2005/13.jpg"
import image_14_2005 from "../images/2005/14.jpg"
import image_15_2005 from "../images/2005/15.jpg"
//                   2006
import image_01_2006 from "../images/2006/01.jpg"
import image_02_2006 from "../images/2006/02.jpg"
import image_03_2006 from "../images/2006/03.jpg"
import image_04_2006 from "../images/2006/04.jpg"
import image_05_2006 from "../images/2006/05.jpg"
import image_06_2006 from "../images/2006/06.jpg"
import image_07_2006 from "../images/2006/07.jpg"
import image_08_2006 from "../images/2006/08.jpg"
import image_09_2006 from "../images/2006/09.jpg"
import image_10_2006 from "../images/2006/10.jpg"
import image_11_2006 from "../images/2006/11.jpg"
import image_12_2006 from "../images/2006/12.jpg"
import image_13_2006 from "../images/2006/13.jpg"
//                   2007
import image_01_2007 from "../images/2007/01.jpg"
import image_02_2007 from "../images/2007/02.jpg"
import image_03_2007 from "../images/2007/03.jpg"
import image_04_2007 from "../images/2007/04.jpg"
import image_05_2007 from "../images/2007/05.jpg"
import image_06_2007 from "../images/2007/06.jpg"
import image_07_2007 from "../images/2007/07.jpg"
import image_08_2007 from "../images/2007/08.jpg"
import image_09_2007 from "../images/2007/09.jpg"
import image_10_2007 from "../images/2007/10.jpg"
import image_11_2007 from "../images/2007/11.jpg"
//                   2008
import image_01_2008 from "../images/2008/01.jpg"
import image_02_2008 from "../images/2008/02.jpg"
import image_03_2008 from "../images/2008/03.jpg"
import image_04_2008 from "../images/2008/04.jpg"
import image_05_2008 from "../images/2008/05.jpg"
import image_06_2008 from "../images/2008/06.jpg"
//                   2009
import image_01_2009 from "../images/2009/01.jpg"
import image_02_2009 from "../images/2009/02.jpg"
import image_03_2009 from "../images/2009/03.jpg"
import image_04_2009 from "../images/2009/04.jpg"
import image_05_2009 from "../images/2009/05.jpg"
import image_06_2009 from "../images/2009/06.jpg"
import image_07_2009 from "../images/2009/07.jpg"
import image_08_2009 from "../images/2009/08.jpg"
import image_09_2009 from "../images/2009/09.jpg"
import image_10_2009 from "../images/2009/10.jpg"
import image_11_2009 from "../images/2009/11.jpg"
import image_12_2009 from "../images/2009/12.jpg"
import image_13_2009 from "../images/2009/13.jpg"
import image_14_2009 from "../images/2009/14.jpg"
//                   2010
import image_01_2010 from "../images/2010/01.jpg"
import image_02_2010 from "../images/2010/02.jpg"
import image_03_2010 from "../images/2010/03.jpg"
import image_04_2010 from "../images/2010/04.jpg"
import image_05_2010 from "../images/2010/05.jpg"
import image_06_2010 from "../images/2010/06.jpg"
import image_07_2010 from "../images/2010/07.jpg"
import image_08_2010 from "../images/2010/08.jpg"
//                   2011
import image_01_2011 from "../images/2011/01.jpg"
import image_02_2011 from "../images/2011/02.jpg"
import image_03_2011 from "../images/2011/03.jpg"
import image_04_2011 from "../images/2011/04.jpg"
import image_05_2011 from "../images/2011/05.jpg"
import image_06_2011 from "../images/2011/06.jpg"
import image_07_2011 from "../images/2011/07.jpg"
import image_08_2011 from "../images/2011/08.jpg"
//                   2012
import image_01_2012 from "../images/2012/01.jpg"
import image_02_2012 from "../images/2012/02.jpg"
import image_03_2012 from "../images/2012/03.jpg"
import image_04_2012 from "../images/2012/04.jpg"
import image_05_2012 from "../images/2012/05.jpg"
import image_06_2012 from "../images/2012/06.jpg"
import image_07_2012 from "../images/2012/07.jpg"
import image_08_2012 from "../images/2012/08.jpg"
import image_09_2012 from "../images/2012/09.jpg"
import image_10_2012 from "../images/2012/10.jpg"
import image_11_2012 from "../images/2012/11.jpg"
// //                   2013
// import image_01_2013 from "../images/2013/01.JPG"
// import image_02_2013 from "../images/2013/02.JPG"
// import image_03_2013 from "../images/2013/03.JPG"
// import image_04_2013 from "../images/2013/04.JPG"
// import image_05_2013 from "../images/2013/05.JPG"
// import image_06_2013 from "../images/2013/06.jpg"
// import image_07_2013 from "../images/2013/07.jpg"
// import image_08_2013 from "../images/2013/08.jpg"
// import image_09_2013 from "../images/2013/09.jpg"
// import image_10_2013 from "../images/2013/10.jpg"
// import image_11_2013 from "../images/2013/11.jpg"
//                   2014
import image_01_2014 from "../images/2014/01.jpg"
import image_02_2014 from "../images/2014/02.jpg"
import image_03_2014 from "../images/2014/03.jpg"
import image_04_2014 from "../images/2014/04.jpg"
import image_05_2014 from "../images/2014/05.jpg"
import image_06_2014 from "../images/2014/06.jpg"
import image_07_2014 from "../images/2014/07.jpg"
import image_08_2014 from "../images/2014/08.jpg"
import image_09_2014 from "../images/2014/09.jpg"
import image_10_2014 from "../images/2014/10.jpg"
import image_11_2014 from "../images/2014/11.jpg"
import image_12_2014 from "../images/2014/12.jpg"
import image_13_2014 from "../images/2014/13.jpg"
import image_14_2014 from "../images/2014/14.jpg"
//                   2015
import image_01_2015 from "../images/2015/01.jpg"
import image_02_2015 from "../images/2015/02.jpg"
import image_03_2015 from "../images/2015/03.jpg"
import image_04_2015 from "../images/2015/04.jpg"
import image_05_2015 from "../images/2015/05.jpg"
import image_06_2015 from "../images/2015/06.jpg"
import image_07_2015 from "../images/2015/07.jpg"
import image_08_2015 from "../images/2015/08.jpg"
import image_09_2015 from "../images/2015/09.jpg"
import image_10_2015 from "../images/2015/10.jpg"
import image_11_2015 from "../images/2015/11.jpg"
import image_12_2015 from "../images/2015/12.jpg"
import image_13_2015 from "../images/2015/13.jpg"
import image_14_2015 from "../images/2015/14.jpg"
import image_15_2015 from "../images/2015/15.jpg"
//                   2016
import image_01_2016 from "../images/2016/01.jpg"
import image_02_2016 from "../images/2016/02.jpg"
import image_03_2016 from "../images/2016/03.jpg"
import image_04_2016 from "../images/2016/04.jpg"
import image_05_2016 from "../images/2016/05.jpg"
import image_06_2016 from "../images/2016/06.jpg"
import image_07_2016 from "../images/2016/07.jpg"
import image_08_2016 from "../images/2016/08.jpg"
import image_09_2016 from "../images/2016/09.jpg"
import image_10_2016 from "../images/2016/10.jpg"
import image_11_2016 from "../images/2016/11.jpg"
import image_12_2016 from "../images/2016/12.jpg"
import image_13_2016 from "../images/2016/13.jpg"
import image_14_2016 from "../images/2016/14.jpg"
import image_15_2016 from "../images/2016/15.jpg"
import image_16_2016 from "../images/2016/16.jpg"
//                   2017
import image_01_2017 from "../images/2017/01.jpg"
import image_02_2017 from "../images/2017/02.jpg"
import image_03_2017 from "../images/2017/03.jpg"
import image_04_2017 from "../images/2017/04.jpg"
import image_05_2017 from "../images/2017/05.jpg"
import image_06_2017 from "../images/2017/06.jpg"
import image_07_2017 from "../images/2017/07.jpg"
import image_08_2017 from "../images/2017/08.jpg"
import image_09_2017 from "../images/2017/09.jpg"
import image_10_2017 from "../images/2017/10.jpg"
import image_11_2017 from "../images/2017/11.jpg"
import image_12_2017 from "../images/2017/12.jpg"
import image_13_2017 from "../images/2017/13.jpg"
import image_14_2017 from "../images/2017/14.jpg"
import image_15_2017 from "../images/2017/15.jpg"
//                   2018
// missing data
//                   2019
import image_01_2019 from "../images/2019/01.jpg"
import image_02_2019 from "../images/2019/02.jpg"
import image_03_2019 from "../images/2019/03.jpg"
import image_04_2019 from "../images/2019/04.jpg"
import image_05_2019 from "../images/2019/05.jpg"
import image_06_2019 from "../images/2019/06.jpg"
import image_07_2019 from "../images/2019/07.jpg"
import image_08_2019 from "../images/2019/08.jpg"
import image_09_2019 from "../images/2019/09.jpg"
import image_10_2019 from "../images/2019/10.jpg"
import image_11_2019 from "../images/2019/11.jpg"
import image_12_2019 from "../images/2019/12.jpg"
import image_13_2019 from "../images/2019/13.jpg"
import image_14_2019 from "../images/2019/14.jpg"
import image_15_2019 from "../images/2019/15.jpg"
//                   2020
// missing data
//                   2021
import image_01_2021 from "../images/2021/01.jpg"
import image_02_2021 from "../images/2021/02.jpg"
import image_03_2021 from "../images/2021/03.jpg"
import image_04_2021 from "../images/2021/04.jpg"
import image_05_2021 from "../images/2021/05.jpg"
import image_06_2021 from "../images/2021/06.jpg"
import image_07_2021 from "../images/2021/07.jpg"
import image_08_2021 from "../images/2021/08.jpg"
import image_09_2021 from "../images/2021/09.jpg"
import image_10_2021 from "../images/2021/10.jpg"
import image_11_2021 from "../images/2021/11.jpg"
import image_12_2021 from "../images/2021/12.jpg"
import image_13_2021 from "../images/2021/13.jpg"



export const ArchiveData = [
  {
    id: 2021,
    team:
      "HELEN ADILIA ARCEYUT-FRIXIONE, STEPHANIE LAOUN, SEAN YENDRYS, STEPHANIE BOKENFOHR, MATTHEW JAMES, TARA DUPUIS, ELGIN-SKYE MCLAREN, GILLIAN MCDONALD, ZOE KOKE,SARAH-EVE TOUSIGNANT, MARIE-CATHERINE BUJOLD, STEFAN SPEC, JULIE JOHNSTON",
    // pdf: `${}`,
    images: "slideshow2021"
    //   [
    //   image_01_2021,
    //   image_02_2021,
    //   image_03_2021,
    //   image_04_2021,
    //   image_05_2021,
    //   image_06_2021,
    //   image_07_2021,
    //   image_08_2021,
    //   image_09_2021,
    //   image_10_2021,
    //   image_11_2021,
    //   image_12_2021,
    //   image_13_2021,
    // ],
  },
  {
    id: 2020,
    team: "Example name",
    // pdf: `${}`,
    images: "",
  },
  {
    id: 2019,
    team: "Example name number two",
    pdf: `${pdf2019}`,
    images: "slideshow2019",
    //   [
    //   image_01_2019,
    //   image_02_2019,
    //   image_03_2019,
    //   image_04_2019,
    //   image_05_2019,
    //   image_06_2019,
    //   image_07_2019,
    //   image_08_2019,
    //   image_09_2019,
    //   image_10_2019,
    //   image_11_2019,
    //   image_12_2019,
    //   image_13_2019,
    //   image_14_2019,
    //   image_15_2019,
    // ],
  },
  {
    id: 2018,
    team: "Example name number three",
    pdf: `${pdf2018}`,
    images: "",
  },
  {
    id: 2017,
    team: "Example name number four ",
    pdf: `${pdf2017}`,
    images: "slideshow2017",
    //   [
    //   image_01_2017,
    //   image_02_2017,
    //   image_03_2017,
    //   image_04_2017,
    //   image_05_2017,
    //   image_06_2017,
    //   image_07_2017,
    //   image_08_2017,
    //   image_09_2017,
    //   image_10_2017,
    //   image_11_2017,
    //   image_12_2017,
    //   image_13_2017,
    //   image_14_2017,
    //   image_15_2017,
    // ],
  },
  {
    id: 2016,
    pdf: `${pdf2016}`,
    images: "slideshow2016",
    //   [
    //   image_01_2016,
    //   image_02_2016,
    //   image_03_2016,
    //   image_04_2016,
    //   image_05_2016,
    //   image_06_2016,
    //   image_07_2016,
    //   image_08_2016,
    //   image_09_2016,
    //   image_10_2016,
    //   image_11_2016,
    //   image_12_2016,
    //   image_13_2016,
    //   image_14_2016,
    //   image_15_2016,
    //   image_16_2016,
    // ],
  },
  {
    id: 2015,
    pdf: `${pdf2015}`,
    images: "slideshow2015",
    // [
    //   image_01_2015,
    //   image_02_2015,
    //   image_03_2015,
    //   image_04_2015,
    //   image_05_2015,
    //   image_06_2015,
    //   image_07_2015,
    //   image_08_2015,
    //   image_09_2015,
    //   image_10_2015,
    //   image_11_2015,
    //   image_12_2015,
    //   image_13_2015,
    //   image_14_2015,
    //   image_15_2015,
    // ],
  },
  {
    id: 2014,
    images: "slideshow2014",
    //   [
    //   image_01_2014,
    //   image_02_2014,
    //   image_03_2014,
    //   image_04_2014,
    //   image_05_2014,
    //   image_06_2014,
    //   image_07_2014,
    //   image_08_2014,
    //   image_09_2014,
    //   image_10_2014,
    //   image_11_2014,
    //   image_12_2014,
    //   image_13_2014,
    //   image_14_2014,
    // ],
    // pdf: `${pdf2014}`,
  },
  {
    id: 2013,
    images: "slideshow2013",
      // [
      // image_01_2013,
      // image_02_2013,
      // image_03_2013,
      // image_04_2013,
      // image_05_2013,
      // image_06_2013,
      // image_07_2013,
      // image_08_2013,
      // image_09_2013,
      // image_10_2013,
      // image_11_2013,
    // ],
    // pdf: `${pdf2013}`,
  },
  {
    id: 2012,
    pdf: `${pdf2012}`,
    images: "slideshow2012",
    //   [
    //   image_01_2012,
    //   image_02_2012,
    //   image_03_2012,
    //   image_04_2012,
    //   image_05_2012,
    //   image_06_2012,
    //   image_07_2012,
    //   image_08_2012,
    //   image_09_2012,
    //   image_10_2012,
    //   image_11_2012,
    // ],
  },
  {
    id: 2011,
    pdf: `${pdf2011}`,
    images: "slideshow2011"
    //   [
    //   image_01_2011,
    //   image_02_2011,
    //   image_03_2011,
    //   image_04_2011,
    //   image_05_2011,
    //   image_06_2011,
    //   image_07_2011,
    //   image_08_2011,
    // ],
  },
  {
    id: 2010,
    pdf: `${pdf2010}`,
    images: "slideshow2010",
    //   [
    //   image_01_2010,
    //   image_02_2010,
    //   image_03_2010,
    //   image_04_2010,
    //   image_05_2010,
    //   image_06_2010,
    //   image_07_2010,
    //   image_08_2010,
    // ],
  },
  {
    id: 2009,
    pdf: `${pdf2009}`,
    images: "slideshow2009",
    //   [
    //   image_01_2009,
    //   image_02_2009,
    //   image_03_2009,
    //   image_04_2009,
    //   image_05_2009,
    //   image_06_2009,
    //   image_07_2009,
    //   image_08_2009,
    //   image_09_2009,
    //   image_10_2009,
    //   image_11_2009,
    //   image_12_2009,
    //   image_13_2009,
    //   image_14_2009,
    // ],
  },
  {
    id: 2008,
    pdf: `${pdf2008}`,
    images: "slideshow2008",
    //   [
    //   image_01_2008,
    //   image_02_2008,
    //   image_03_2008,
    //   image_04_2008,
    //   image_05_2008,
    //   image_06_2008,
    // ],
  },
  {
    id: 2007,
    pdf: `${pdf2007}`,
    images: "slideshow2007",
    //   [
    //   image_01_2007,
    //   image_02_2007,
    //   image_03_2007,
    //   image_04_2007,
    //   image_05_2007,
    //   image_06_2007,
    //   image_07_2007,
    //   image_08_2007,
    //   image_09_2007,
    //   image_10_2007,
    //   image_11_2007,
    // ],
  },
  {
    id: 2006,
    pdf: `${pdf2006}`,
    images: "slideshow2006",
    //   [
    //   image_01_2006,
    //   image_02_2006,
    //   image_03_2006,
    //   image_04_2006,
    //   image_05_2006,
    //   image_06_2006,
    //   image_07_2006,
    //   image_08_2006,
    //   image_09_2006,
    //   image_10_2006,
    //   image_11_2006,
    //   image_12_2006,
    //   image_13_2006,
    // ],
  },
  {
    id: 2005,
    pdf: `${pdf2005}`,
    images: "slideshow2005",
    // [
    //   image_01_2005,
    //   image_02_2005,
    //   image_03_2005,
    //   image_04_2005,
    //   image_05_2005,
    //   image_06_2005,
    //   image_07_2005,
    //   image_08_2005,
    //   image_09_2005,
    //   image_10_2005,
    //   image_11_2005,
    //   image_12_2005,
    //   image_13_2005,
    //   image_14_2005,
    //   image_15_2005,
    // ]
  },
  {
    id: 2004,
    pdf: `${pdf2004}`,
    images: [],
  },
  {
    id: 2003,
    pdf: `${pdf2003}`,
    images: "slideshow2003",

    // `${
    //   data.slideshow2003.edges.map(({ node }) => (
    //     <GatsbyImage
    //       image={node.childImageSharp.gatsbyImageData}
    //       alt={node.base}
    //       key={node.id}
    //     />
    //   ))
    // }`
    

    // [
    //   image_01_2003,
    //   image_02_2003,
    //   image_03_2003,
    //   image_04_2003,
    //   image_05_2003,
    //   image_06_2003,
    //   image_07_2003,
    //   image_08_2003,
    //   image_09_2003,
    //   image_10_2003,
    //   image_11_2003,
    //   image_12_2003,
    // ],
  },
  {
    id: 2002,
    pdf: `${pdf2002}`,
    images: "",
  },
  {
    id: 2001,
    pdf: `${pdf2001}`,
    images: "",
  },
  {
    id: 2000,
    images: "",
  },
]

console.log(ArchiveData)