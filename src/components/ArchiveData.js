import pdf2020 from "../components/pdfs/2020_Catalog.pdf"
import pdf2019 from "../components/pdfs/2019_Catalog.pdf"
import pdf2018 from "../components/pdfs/2018_Catalog.pdf"
import pdf2017 from "../components/pdfs/2017_Catalog.pdf"
import pdf2016 from "../components/pdfs/2016_Catalog.pdf"
import pdf2015 from "../components/pdfs/2015_Catalog.pdf"
import pdf2014 from "../components/pdfs/2014_Catalog.pdf"
// import pdf2013 from "../components/pdfs/2013_Catalog.pdf"
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
    participants: {
      coordinator: "Joyce Joumaa",
      design: "Hyacinth Wourms",
      web: "Andrew Nowacki",
      other: "test",
      artists: "test",
      curator: "Andrewtest",
    },
    // pdf: `${}`,
    images: "slideshow2021",
  },
  {
    id: 2020,
    participants: {
      coordinator: "Joyce Joumaa",
      design: "Hyacinth Wourms",
      web: "Andrew Nowacki",
      other: "test",
      artists: "test",
    },
    pdf: `${pdf2020}`,
    images: "",
  },
  {
    id: 2019,
    participants: {
      coordinator: "Joyce Joumaa",
      design: "Hyacinth Wourms",
      web: "Andrew Nowacki",
      other: "test",
      artists: "test",
    },
    pdf: `${pdf2019}`,
    images: "slideshow2019",
  },
  {
    id: 2018,
    participants: {
      coordinator: "Joyce Joumaa",
      design: "Hyacinth Wourms",
      web: "Andrew Nowacki",
      other: "test",
      artists: "test",
    },
    pdf: `${pdf2018}`,
    images: "",
  },
  {
    id: 2017,
    participants: {
      coordinator: "Joyce Joumaa",
      design: "Hyacinth Wourms",
      web: "Andrew Nowacki",
      other: "test",
      artists: "test",
    },
    pdf: `${pdf2017}`,
    images: "slideshow2017",
  },
  {
    id: 2016,
    participants: {},
    pdf: `${pdf2016}`,
    images: "slideshow2016",
  },
  {
    id: 2015,
    participants: {},
    pdf: `${pdf2015}`,
    images: "slideshow2015",
  },
  {
    id: 2014,
    participants: {},
    pdf: `${pdf2014}`,
    images: "slideshow2014",
  },
  {
    id: 2013,
    participants: {},
    images: "slideshow2013",
  },
  {
    id: 2012,
    participants: {},
    pdf: `${pdf2012}`,
    images: "slideshow2012",
  },
  {
    id: 2011,
    participants: {},
    pdf: `${pdf2011}`,
    images: "slideshow2011",
  },
  {
    id: 2010,
    participants: {},
    pdf: `${pdf2010}`,
    images: "slideshow2010",
  },
  {
    id: 2009,
    participants: {},
    pdf: `${pdf2009}`,
    images: "slideshow2009",
  },
  {
    id: 2008,
    participants: {},
    pdf: `${pdf2008}`,
    images: "slideshow2008",
  },
  {
    id: 2007,
    participants: {},
    pdf: `${pdf2007}`,
    images: "slideshow2007",
  },
  {
    id: 2006,
    participants: {},
    pdf: `${pdf2006}`,
    images: "slideshow2006",
  },
  {
    id: 2005,
    participants: {},
    pdf: `${pdf2005}`,
    images: "slideshow2005",
  },
  {
    id: 2004,
    participants: {},
    pdf: `${pdf2004}`,
    images: "",
  },
  {
    id: 2003,
    participants: {},
    pdf: `${pdf2003}`,
    images: "slideshow2003",
  },
  {
    id: 2002,
    participants: {},
    pdf: `${pdf2002}`,
    images: "",
  },
  {
    id: 2001,
    participants: {},
    pdf: `${pdf2001}`,
    images: "",
  },
  {
    id: 2000,
    participants: {
      coordinator: "Joyce Joumaa",
      design: "Colin Copeland, Yael Wand, Ruthie Sumiko Tabata, Erika Eggena",
      web: "Beth Holden",
      other: "test",
      artists:
        "Joel Miller, Nadine Faraj, Kim Maciej, Gabrielle Pilot, Miguel Rioux, Mikołaj Ziółkowski, Jo Anna Foster, Felicity Hammer, Farncesca Nocera, Melanie Shatzky, Amy Wong, Marlene Bare, Valerie Buddle, Jason Corbett, Francoise-pierre Couture, Graham Cuthbertoon, Illona Dougherty, Emily Follet-campbell, Teoma Naccarato, Louis Plourde, Alchemy Theatre, Choir Of Reconciliation, The Concordia Jazz Choir, Voices Of Praise Community Choir, Andrew Tay, Jeffrey Richard, David Stulberg, Nick Common, Laura Dudek, Ekidan Girls, Karl Hearne, Tania Huerta, Julie Keller, Jenny Lin, Sarah Neufeld, Sylvia Orthwein, Michael Rollo, Sheridan Shindruck, Anna Sikorksi, Jeff St.Jules, Bronia Sussman, Matt  Swanson, Stephan Verna, Richard Parry, Natasha Doyan, Sonia Haberstich, Patsy Hayes, Katsumi Kimoto, John Londono, Matt Morin, Marie-anne Verstraelen, Carlyle Williams, Elisa Angelone, Fabien Eggena, David Jurasek, Emily Lemay, Lauren Nurse, Megan Chadwick, Annabelle Chvostek, Ian Gamache, Jay Gillingham, Sarah Mangle, Jared Olsen, Abha Singh, Alyson Vishnovska, Cave Productions, Jessie Brugger, Marlene Charles, Nina Chepurini, Ian Hemingway, Jenifer Tester, Brandon Bernstein, Eric Boudreault, Robin Chemtov, Jef Chipewa, Phillipe Chown, Sabine Dieudonne, Natalie Fitzpatrick, Grant Ford, Marc-antoine Goulet, Stephen Harmelink, Mia Hollander, David Jolin, Robby Kuster, Caroline Laroche, Joan Lewis-vanwyck, Christina Sciascia, Aaron Shragge, Warren Spicer, Amada Wurts, Morgan Moore, Ginger Berglund, Veronica Charnley, Andrea Cochrane, Nicola Summer Correia Demude, Lisa Cox, Melissa Gruber, Paige Hanock, Amanda Kellock, Robert Leeson, Amy Loder, Courtney Lohnes, Jeff Louch, Alan Malamud, Andrew Malamud, Laura Mcdonald, Kaveh Nabation, Emily Pearlman, Sylvain Salette, Philip Spensley, Jordey Tucker, Lana Turner, Parallax Theatre Troupe, Angela Colangelo, Mark Wheaton, Abigail Clarke, Michael Felber, Greg Toews, Leslie Bernstein, Jennifer Boire, Caroline Giguere, Marc Hoeppner, Lydia Lockett, Cynthia Dinan-mitchell, Natasha Doyon, Megan Fischer-fleming, Nicolas Fleming, Paul G. Kajander, Nathalie Reis, Rosemary Ruedelhuber, Aaron Doyle, John Sadoway, J.S. Williams",
      curator:
        "Abigail Clarke, Carey Dodge, Julie Fowler, Kelly Wood, Melanie Authier, Michael Farnan, Mikolaj Ziolowski, Shawn Mackniuk, Stacey May Fowles & Yael Wand.",
    },
    images: "",
  },
]
