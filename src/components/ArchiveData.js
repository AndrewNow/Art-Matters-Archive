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

// notes for future coders:

// each year has its own object within the ArchiveData array. just duplicate the object and add the respective information.
// images should always have "slideshow____" whereby ____ represents the year, for example slideshow2028.
// years with no image data should always have empty quotes following the the "image:" field, otherwise the archive will crash when selecting that year.

export const ArchiveData = [
  {
    id: 2021,
    team:
      "HELEN ADILIA ARCEYUT-FRIXIONE, STEPHANIE LAOUN, SEAN YENDRYS, STEPHANIE BOKENFOHR, MATTHEW JAMES, TARA DUPUIS, ELGIN-SKYE MCLAREN, GILLIAN MCDONALD, ZOE KOKE,SARAH-EVE TOUSIGNANT, MARIE-CATHERINE BUJOLD, STEFAN SPEC, JULIE JOHNSTON",
    // pdf: `${}`,
    images: "slideshow2021",
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
  },
  {
    id: 2016,
    pdf: `${pdf2016}`,
    images: "slideshow2016",
  },
  {
    id: 2015,
    pdf: `${pdf2015}`,
    images: "slideshow2015",
  },
  {
    id: 2014,
    images: "slideshow2014",
    // pdf: `${pdf2014}`,
  },
  {
    id: 2013,
    images: "slideshow2013",
  },
  {
    id: 2012,
    pdf: `${pdf2012}`,
    images: "slideshow2012",
  },
  {
    id: 2011,
    pdf: `${pdf2011}`,
    images: "slideshow2011",
  },
  {
    id: 2010,
    pdf: `${pdf2010}`,
    images: "slideshow2010",
  },
  {
    id: 2009,
    pdf: `${pdf2009}`,
    images: "slideshow2009",
  },
  {
    id: 2008,
    pdf: `${pdf2008}`,
    images: "slideshow2008",
  },
  {
    id: 2007,
    pdf: `${pdf2007}`,
    images: "slideshow2007",
  },
  {
    id: 2006,
    pdf: `${pdf2006}`,
    images: "slideshow2006",
  },
  {
    id: 2005,
    pdf: `${pdf2005}`,
    images: "slideshow2005",
  },
  {
    id: 2004,
    pdf: `${pdf2004}`,
    images: "",
  },
  {
    id: 2003,
    pdf: `${pdf2003}`,
    images: "slideshow2003",
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
