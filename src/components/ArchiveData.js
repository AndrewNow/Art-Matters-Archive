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


    },
    // pdf: `${}`,
    images: "slideshow2021",
  },
  {
    id: 2020,
    participants: {
      exhibitionscoordinator: "Joyce Joumaa",
      boardofdirectors: "Alicia Turgeon & Emily Blair",
      administrativecoordinator: "Julie Poulin",
      design: "Hyacinth Wourms",
      web: "Andrew Nowacki",
      translator: "Sayaka Araniva-Yanez",
      archivist: "Sam Bordeleau",
    },
    pdf: `${pdf2020}`,
    images: "",
  },
  {
    id: 2019,
    participants: {
      exhibitionscoordinator: "Sophie Heyen-dubé",
      administrativecoordinator: "Joel Young",
      boardofdirectors: "Alana Devito & Alessandra Tom",
      design: "Lou Fozin",
      communications: "Jonathan Stern",
      translator: "Laurie Sévigny-couture",
      web: "Charles Gao",
      archivist: "Sam Bordeleau",
    },
    pdf: `${pdf2019}`,
    images: "slideshow2019",
  },
  {
    id: 2018,
    participants: {
      administrativecoordinator: "Alisa Haugen-strand",
      boardofdirectors: "Eva Valentine, William Brewer, Renata Critton-papp, Frank Evans, Hannah Ferguson, Jane Kasowicz, Alfred Muszynski, Katherine Parthimos, Sloane Sherman, Justine Valois & Oceana Van Hagen",
      exhibitionscoordinator: "Alicia Turgeon",
      design: "Gabor Bata",
      communications: "Masheyla Anderson, Tricia Middleton",
      photography: "Kit Mergaert",
      technician: "Van Le, Daniel Cortes, Alexis Gagnon, Jay Hubbard, Frédérique Thibault & Alice Zerini-reste",
      translator: "Julie Leblanc",
      web: "Matthew Halpenny",
      other: "Andira Hernandez, Lily Minkova, Arianna Randjbar, Heather B. Reid & Marie Lemieux",
    },
    pdf: `${pdf2018}`,
    images: "",
  },
  {
    id: 2017,
    participants: {
      administrativecoordinator: "Jordan Beaulieu",
      exhibitionscoordinator: "Mattia Zylak",
      boardofdirectors: "Clara Micheau, Masheyla Anderson, Charlotte Beland, William Brewer, Siarra Burke-smith, Autumn Cadorette, Laura Macneil, Elijah Otwey & Stefanie Smylie",
      design: "Lucas Larochelle",
      communications: "Diana Tapia, Tricia Middleton",
      photography: "Raphaël Sandler",
      technician: "Émile Foucher, Alexis Gagnon, Matthew Halpenny & Jay Hubbard",
      translator: "Stéfanie Belleu",
      web: "Jade Morgan",
      other: "Sana Ashraf, Lily Rickard, Ben Holser & Manon Paquet",

    },
    pdf: `${pdf2017}`,
    images: "slideshow2017",
  },
  {
    id: 2016,
    participants: {
      administrativecoordinator: "Lesya Nakoneczny",
      boardofdirectors: "Helene Sharp, Sophia Arnold, Autumn Cadorette, Madison Cassidy, Fatima Hassandia, Laura Macneil, Felix Pérriault, Terrence Richard & Mariana Stabilé",
      design: "John Shukin",
      communications: "Michael Martini, Marina Polosa",
      photography: "Laura Mongollòn",
      technician: "Maxime Brown, Alexis Gagnon, Jay Hubbard, Jo Mitrovic & Monica Rekas",
      translator: "Valérie Henault",
      web: "Dhanvin Raval",
      other: "Dori Julian, Zoé Dion & Kaitlin Fitzgibbon",
    },
    pdf: `${pdf2016}`,
    images: "slideshow2016",
  },
  {
    id: 2015,
    participants: {
      administrativecoordinator: "Naakita Feldman-kiss",
      exhibitionscoordinator: "Fannie Gadouas",
      boardofdirectors: "Jeremy Blinkhorn, Patrick Evans, Ashley Forbes, Edwin Isford, Priya Jain, Mathew Marie-rhodes, Christina Richer, Tim Schauer & Lenny Sharp",
      photography: "Rojin Shafiei, Laurence Hervieux-gosselin",
      communications: "Roxane Halary",
      design: "Tam Vu",
      technician: "Colin Earp-lavergne, Francis Goodship, Cédric Laurenty & Diana Lazzaro",
      translator: "Rae Lavande Pellerin",
      web: "Conan Lai",
      other: "Mariana Stabilé, Lilian Glesinger",
    },
    pdf: `${pdf2015}`,
    images: "slideshow2015",
  },
  {
    id: 2014,
    participants: {
      administrativecoordinator: "Edwin Isford",
      exhibitionscoordinator: "Claudia Edwards",
      boardofdirectors: "Ellen Belshaw, Laurie-anne Bergeron, Christopher Dake-outhet, Patrick Evans, Naakita Feldman-kiss, Flora Hammond & Mackenzie Rhyason",
      photography: "Stéphanie Pineau & Clara Lacasse",
      design: "Trina Daniel & Samuel Hogue",
      communications: "Laurent Viau-lapointe",
      technician: "Christopher Bacon, Derick Darby, Daniel Freder & Milo Reinhardt",
      translator: "Charlotte Forbes",
      web: "Stephanie Iacovelli",
      other: "Lindsey Carter, Sarah Haberl, Emilie Usher"
    },
    pdf: `${pdf2014}`,
    images: "slideshow2014",
  },
  {
    id: 2013,
    participants: {
      exhibitionscoordinator: "Ellen Belshaw & Misca Birklein-lagassé",
      boardofdirectors:
        "Hugo Dufour, Claudia Edwards, Clinton Glenn, Edwin Isford, Hannah Kellet, Lisa Mayes, Albane Morawski, Tess Roby, Christopher Spears, Kara Stern",
      design: "Julian Garcia",
      communications: "Coey Kerr",
      photography: "Natalia Lara Diaz-berrio & Tess Roby",
      technician: "Mathieu Lambert & Kevin Leung-lo",
      translator: "Hugo Dufour",
      web: "Erik Kuuring",
      other: "Ashlee Griffiths, Sarah Cronshaw, Terrance Richard",
    },
    images: "slideshow2013",
  },
  {
    id: 2012,
    participants: {
      administrativecoordinator: "Sara Maston",
      boardofdirectors:
        "Linnea Gwiazda, Muriel Jaouich, Vivien Leung, Christopher Webster",
      exhibitionscoordinator: "Clinton Glenn",
      design: "Levi Brude",
      media: "Lauren Mcgowan",
      communications: "Carolann Shea",
      technician: "Louis Amadei & Eximgherine Fournier-poirier",
      translator: "Florence Vallières",
      web: "Zachary Klein",
      other: "Tami Bernard, Aaliyeh Afshar",
    },
    pdf: `${pdf2012}`,
    images: "slideshow2012",
  },
  {
    id: 2011,
    participants: {
      exhibitionscoordinator: "Zoe Koke, Caro Loutfi",
      communications: "Vivien Leung",
      design: "Patryk Stasieczek",
      media: "Alyx Phizicky",
      photography: "Ginga Takashima & Daniel Paterson",
      technician: "Drew Barnet & Adrien Fillion",
      translator: "Gustave Leber",
      web: "Zachary Kain",
      other: "Evan Stanfield",
    },
    pdf: `${pdf2011}`,
    images: "slideshow2011",
  },
  {
    id: 2010,
    participants: {
      exhibitionscoordinator: "Stephanie Bokenfohr",
      communications: "Tara Dupuis, Stephanie Laoun",
      media: "Helen Adilia, Tara Dupuis & Helen Adilia",
      photography: "Zoe Koke",
      technician: "Stephanie Laoun & Helen Adilia",
      translator: "Marie-catherine Bujold",
      web: "Stefan Spec",
      other:
        "Sean Yendrys, Matthew James, Julie Johnston, Sarah-eve Tousignant, Gillian Mcdonald & Elgin-skye Mclaren",
    },
    pdf: `${pdf2010}`,
    images: "slideshow2010",
  },
  {
    id: 2009,
    participants: {
      communications: "Anna Edell, Judith Mignault",
      design: "Jeremy Dabrowski",
      media: "Catherine Jodoin, Patrick Lloyd",
      photography: "Patryk Stasieczek",
      technician: "Natiea Vinson",
      translator: "Arièle Dionne-krosnick & Stéphanie St-jean",
      other: "Paul Gubernachuk, Matthew James",
    },
    pdf: `${pdf2009}`,
    images: "slideshow2009",
  },
  {
    id: 2008,
    participants: {
      communications: "Alissa Jafiarove, Cait Macintosh, Julie Johnston",
      design: "Jp King",
      photography: "AJ Korkidakis",
      media: "Matt Goerzen",
      translator: "Marie-Pier Breton & Genevieve Gallant",
      web: "Matt Goerzen",
      other: "Sarah Albu, Jeremy Badrowski & Natiea Vinson",
    },
    pdf: `${pdf2008}`,
    images: "slideshow2008",
  },
  {
    id: 2007,
    participants: {
      exhibitionscoordinator:
        "Hannah Macdonald, Joshua Barndt, Stephanie Hope & Harley Smart",
      communications: "Amber Berson",
      design: "Harley Smart & Bridget Moser",
      media: "Isabelle Salas",
      technician: "Matthew Goerzen & Brigitte Schuster",
      other:
        "Julie Johnston, JP King, Anika Henry, Jim Bell & Philippe Battikha",
    },
    pdf: `${pdf2007}`,
    images: "slideshow2007",
  },
  {
    id: 2006,
    participants: {
      exhibitionscoordinator:
        "Karin Zuppiger, Celia Perrin Siadrous & Jim Perrin Siadrous",
      communications: "Erica Brisson",
      design: "Caitlink Durlak",
      media: "Ximena Holuigue",
      technician: "Odebo Extian-babiuk",
      web: "Kathryn Errington",
      other: "Matt Waddell, Harley Smart, Gwynne Fulton",
    },
    pdf: `${pdf2006}`,
    images: "slideshow2006",
  },
  {
    id: 2005,
    participants: {
      exhibitionscoordinator:
        "Alexandra Bukojemsky & Rebecca St.John, Corina Kennedy & Emily Shanahan",
      communications: "Chantal Musgrave",
      media: "Erin Silver, Nadaa Baqui & Yvonne Lau",
      financialcoordinator: "Susan Westbrook",
      design: "Shawn Kuruneru & Trevor Kiernander",
      humanresources: "Laurie Korneluk",
      technician: "Andrew McCallum",
      web: "Kathryn Errington",
      other: "Chris Godziuk, Jennifer Belfo",
    },
    pdf: `${pdf2005}`,
    images: "slideshow2005",
  },
  {
    id: 2004,
    participants: {
      exhibitionscoordinator:
        "Sunshine Frere, Trevor Kiernander & Susan Westbrook",
      communications: "Laurie Kormeluk, Emily Shanahan & Corina Kennedy",
      design: "Bill Matthews & Daniel Campbell",
      media: "Robbie Sinclair & Rebecca St.John",
      photography: "Eysl Park",
      technician: "Andrew Lowther McCallum",
      other: "Jennifer Belfo, Chris Godziuk & Mathieu Conway",
    },
    pdf: `${pdf2004}`,
    images: "",
  },
  {
    id: 2003,
    participants: {
      exhibitionscoordinator:
        "Isabelle Lemaire, Emily Pearlman, Allison Moore, Rachel Dhawan & Aaron Reaume",
      communications: "Sarah Glanville, Pamela Cantor, Melissa Gruber",
      humanresources: "Sacha Geciova",
      web: "Soonok Min",
      other: "Shannon Jameson, Sunshine Frere, Shawn Mackniak & Victor",
    },
    pdf: `${pdf2003}`,
    images: "slideshow2003",
  },
  {
    id: 2002,
    participants: {
      humanresources: "Aaron Reume",
      communications: "Emily Hermant, Ilona Dougherty & Arianne Shaffer",
      executiveproducer: "Craig Desson & Emily Pearlman",
      design: "Rob Bucci, Kajin Goh, Kyle Stanfield & Michael Minfie",
      exhibitionscoordinator: "Jacinthe Beaulieu, Allison Trumble",
      translator: "Jacinthe Beaulieu & Andrea Florial",
      technician: "Will Alperin",
      web: "Neale Mcdavitt Van Flee",
      other: "Melissa Gruber",
    },
    pdf: `${pdf2002}`,
    images: "",
  },
  {
    id: 2001,
    participants: {
      artists: "",
    },
    pdf: `${pdf2001}`,
    images: "",
  },
  {
    id: 2000,
    participants: {
      financialcoordinator: "Nathalie Thibeault",
      exhibitionscoordinator: "Angela Vu",
      communications:
        "Michael Golden, Julie Fowler, Ruthie Sumiko Tabata, Yael Wand & Declan O'driscoll",
      design: "Colin Copeland, Yael Wand, Ruthie Sumiko Tabata, Erika Eggena",
      web: "Beth Holden",

      curator:
        "Abigail Clarke, Carey Dodge, Julie Fowler, Kelly Wood, Melanie Authier, Michael Farnan, Mikolaj Ziolowski, Shawn Mackniuk, Stacey May Fowles & Yael Wand.",
      artists:
        "Joel Miller, Nadine Faraj, Kim Maciej, Gabrielle Pilot, Miguel Rioux, Mikołaj Ziółkowski, Jo Anna Foster, Felicity Hammer, Farncesca Nocera, Melanie Shatzky, Amy Wong, Marlene Bare, Valerie Buddle, Jason Corbett, Francoise-pierre Couture, Graham Cuthbertoon, Illona Dougherty, Emily Follet-campbell, Teoma Naccarato, Louis Plourde, Alchemy Theatre, Choir Of Reconciliation, The Concordia Jazz Choir, Voices Of Praise Community Choir, Andrew Tay, Jeffrey Richard, David Stulberg, Nick Common, Laura Dudek, Ekidan Girls, Karl Hearne, Tania Huerta, Julie Keller, Jenny Lin, Sarah Neufeld, Sylvia Orthwein, Michael Rollo, Sheridan Shindruck, Anna Sikorksi, Jeff St.Jules, Bronia Sussman, Matt  Swanson, Stephan Verna, Richard Parry, Natasha Doyan, Sonia Haberstich, Patsy Hayes, Katsumi Kimoto, John Londono, Matt Morin, Marie-anne Verstraelen, Carlyle Williams, Elisa Angelone, Fabien Eggena, David Jurasek, Emily Lemay, Lauren Nurse, Megan Chadwick, Annabelle Chvostek, Ian Gamache, Jay Gillingham, Sarah Mangle, Jared Olsen, Abha Singh, Alyson Vishnovska, Cave Productions, Jessie Brugger, Marlene Charles, Nina Chepurini, Ian Hemingway, Jenifer Tester, Brandon Bernstein, Eric Boudreault, Robin Chemtov, Jef Chipewa, Phillipe Chown, Sabine Dieudonne, Natalie Fitzpatrick, Grant Ford, Marc-antoine Goulet, Stephen Harmelink, Mia Hollander, David Jolin, Robby Kuster, Caroline Laroche, Joan Lewis-vanwyck, Christina Sciascia, Aaron Shragge, Warren Spicer, Amada Wurts, Morgan Moore, Ginger Berglund, Veronica Charnley, Andrea Cochrane, Nicola Summer Correia Demude, Lisa Cox, Melissa Gruber, Paige Hanock, Amanda Kellock, Robert Leeson, Amy Loder, Courtney Lohnes, Jeff Louch, Alan Malamud, Andrew Malamud, Laura Mcdonald, Kaveh Nabation, Emily Pearlman, Sylvain Salette, Philip Spensley, Jordey Tucker, Lana Turner, Parallax Theatre Troupe, Angela Colangelo, Mark Wheaton, Abigail Clarke, Michael Felber, Greg Toews, Leslie Bernstein, Jennifer Boire, Caroline Giguere, Marc Hoeppner, Lydia Lockett, Cynthia Dinan-mitchell, Natasha Doyon, Megan Fischer-fleming, Nicolas Fleming, Paul G. Kajander, Nathalie Reis, Rosemary Ruedelhuber, Aaron Doyle, John Sadoway, J.S. Williams",
    },
    images: "",
  },
]
