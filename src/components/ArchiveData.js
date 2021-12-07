import pdf2021 from "../components/pdfs/2021_Catalog.pdf"
import pdf2020 from "../components/pdfs/2020_Catalog.pdf"
import pdf2019 from "../components/pdfs/2019_Catalog.pdf"
import pdf2018 from "../components/pdfs/2018_Catalog.pdf"
import pdf2017 from "../components/pdfs/2017_Catalog.pdf"
import pdf2016 from "../components/pdfs/2016_Catalog.pdf"
// import pdf2015 from "../components/pdfs/2015_Catalog.pdf"
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

// each year is added as its own object within the ArchiveData array below. just duplicate the most recent object and add the respective information.
// images should always have "slideshow{__yearnumber__}" whereby {__yearnumber__} represents the year, for example slideshow2028.
// years with no image data should always have empty quotes following the the "image:" field, otherwise the archive will crash when selecting that year.

// you can view Sidebar.js to view all possible role entries - e.g.: archivist, curator, design etc.
// (<TeamWrapper /> contains all possible entries.when adding a new role, add a ternary there as well.)

export const ArchiveData = [
  {
    id: 2021,
    participants: {
      exhibitionscoordinator: "Joyce Joumaa",
      boardofdirectors:
        "Alicia Turgeon, Emily Blair, Tyra Maria Trono, Laura Bartlett, Chelsea Harada, Dorian Bell and Tran Huyen.",
      administrativecoordinator: "Julie Poulin",
      design: "Hyacinth Wourms",
      web: "Andrew Nowacki",
      translator: "Sayaka Araniva-Yanez",
      archivist: "Sam Bordeleau",
      artists:
        "1000 Amour (Mila Figuet), Stephanie Bourgault, Anissa Boukili, Darius Long Yeung, Fiona Nguyen, Kimberly Orjuela, Meredith Parent Delgadillo, Kassandra Walters, Quang Hai Nguyen, Aja Palmer, Le Lin, Jay Krakower, Océane Buxton, Ana Maria Marcu, Odile Myrtil, Emile Phaneuf, Jennifer Lee, Aaliyah Crawford, Em Laferrière, David Nadeau, Nadia Mariyan, Helen Park, Jennifer Lee, Roxanne Boyle, Claudia Goulet-Blais, Alex Dozois, Carolina Larrosa, Spencer Magnan, and Lou Neveux-Pardijon",
      facilitators:
        "Matthew Sanderson, Samara Prupas, Wendy Vancol, Stephanie Leon, Alfred Muszynski, María Andreína Escalona, and Mallory Lowe Mpoka",
      other: "Publication graphic design: Anthony Napoli. Collaborator: Eli Kerr.",
      photography: "Jade Wulfraat",
    },

    // pdf: `${}`,
    images: "slideshow2021",
    publication: {
      text:
        "As a response to the 2020 pandemic, Art Matters decided to adapt and create for the first time a printed project as an alternative venue for an exhibition. Printed in July 2021, the publication had a first edition of 350 copies and a second edition of 30 copies which were distributed at no cost via mail, pickup points, a vernissage, and a finissage. Thanks to Anteism Books, La Centrale galerie Powerhouse, Parc Offsite, Librarie Centre Clark, La Fonderie Darling, Pierre-François Ouellette art contemporain, and the Concordia Fine Arts Reading Room for their support. The physical publication can be consulted in the Special Collections Reading Room at the Vanier Library and in the Fine Arts Reading Room on the 2nd Floor of Concordia’s Engineering and Visual Arts Building. ",
      pdf: `${pdf2021}`,
    },
  },
  {
    id: 2020,
    participants: {
      exhibitionscoordinator: "Sophie Heyen-dubé",
      administrativecoordinator: "Joel Young",
      boardofdirectors:
        "Alessandra Tom, Alana Devito, Emily Blair, Joyce Joumaa, Alicia Turgeon, Jacqui Beaumont",
      design: "Lou Fozin",
      communications: "Jonathan Stern",
      translator: "Laurie Sévigny-couture",
      web: "Charles Gao",
      photography: "Teodora Stefan",
      facilitators:
        "Vanessa Lazare, Jackson Thouret, Jennifer Jack, Lorenza Mezzapelle, Olivier Du Ruisseau, Charlotte Lehoux, Rameez Karim, Malte Leander, Adia Parris and Laurie Weinstein, Mackenzie Aker, Masha Bashmakova, Merlin Heintzman Hope, Tyra Maria Trono, Amelle Margaron, Oceana Van Hagen, Becca McKay",
      archivist: "Sam Bordeleau",
      artists:
        "Spencer Magnan, Matthew Alquisada-Mondoori, Matthew Ribuffo, Jay Krakower, Emma Vogt, Isabel Gelfand, Tatianna Diamantoupoulou, Justine Bellefeuille, William Normand-Robichaud, Laurène Smith, Nickle Peace-Williams, Alice Reiter, Christine Laliberté, Alice Cloutier-Lachance, Melisa Haydaroglu, Rachel Mudrosky, Sam Montalbetti, Siam Obregón, Simon Bouthillier, Summer Emerald, Adalia Pemberton-Smith, Isaac Smeele, Emily Macpherson & Nikita Eaton-Lusignan, Aidan Cottreau & Madison Phyper, Alison Robertson & Maritza Thorne, Amy Jessica Pilette, Christian Brun Del Re, Jonah Bild-Lowrie & Benjamin Muñoz, Émile Phaneuf, Marie-Clara Jeannotte, Andrea Cristal Azul, Julia Warren & André Abat-Roy, Maxime Gordon, Nada Moharam, Heather Ragnars, Xdzunúm Danae Trejo-Boles & Amy Xu, Zoe Bailly-Stetson, Arturo Hidalgo, Connor Cook, Elinore Blanche, Heather Subrose, Jonah Bild-Lowrie, Mérédith Parent-Delgadillo, Neusha Taherian, Armando Rivas, Dexter Barker-Glenn, Gabrielle Auclair, Gemma Stevens, Lily Bennett-Scharf, Marie-Andrée Macameau, Swarm, Tiana Atherton, Véronique Morin & Cristobal Perez-Boudon, Christopher Forsyth, Hannah Blair, Julia Autumn Savoy, Kassandra Walters, Levana Katz, Mackenna Johnston, Maggie McCutcheon, Paulina Bereza, Pedro J Barbáchano, Clara Michaud, Susan Georgette, Piper Curtis, Sonia Reboul, Camille Emmanuelle Legault, Carlo Polidoro López, Issac Smeele, Maude Lauzière-Dumas, Safoura Kassnejad, Sine Kundargi-Girard, Somaye Farhan, Thomas Bourgeois & Amelia Jacobs, Alfred Muszynski, Alice Zerini-Le Reste, Camille Lapointe & Cheyenne Schaub, Eliza McFarlane, Louis-Félix D'Amours & Burdock Jenkins-Crumb, Émile Phaneuf, Julie-Claude Vezeau-Croteau, Miaree Cater-Smith, Peniel Hong, Anahi M.Arciniega, Fatine-Violette Sabiri, Felix Mux Wah, flora fauna, Irela AC, Isabelle Bredt, Jose Garcia, Allan Pichardo, Asazi, Guillaume Saur, Hazel Thexton, Océane Buxton, Steven Sych, Xavier Bélanger Dorval, Zoé Fauvel, Carolina Larossa, Hannah Louisy, Leah Watts, Luigi Lagulli, Luna Restrepo, Sonya Kertesz, Max Poelzer & Jacqueline Addison, Camille Huang, Magali Alanis Rodriguez-Beaudoin, Joshua Jensen, Michelle Caron-Pawlowsky, Elisabeth Perrault, Colin Courtney, Tristan Lajarrige, David Durham, Abigail Stushnoff, Anni Jefferson, Emily Spooner, Enok Ripley, Nathalie Blanche Cloutier, Salem Preusser, Scarlet Fountain",
      other:
        "Videographer: Calvin Cashen. English Copy Editor: Alexandra Chalier. French Copy Editor: Maxime Brown. Volunteer Coordinator: Aaliyah Crawford. Poster Pal: Sophia Viridis. Technicians: Isabel Gelfand, Angela Kaba, Merlin Lev,  Margot Drukker. Exhibition Facilitator Jury: Eunice Belidor, Nadia Myre, Joyce Joumaa, and  Alicia Turgeon",
    },
    pdf: `${pdf2020}`,
    images: "",
  },
  {
    id: 2019,
    participants: {
      administrativecoordinator: "Alisa Haugen-strand",
      boardofdirectors:
        "Eva Valentine, William Brewer, Renata Critton-papp, Frank Evans, Hannah Ferguson, Jane Kasowicz, Alfred Muszynski, Katherine Parthimos, Sloane Sherman, Justine Valois & Oceana Van Hagen",
      exhibitionscoordinator: "Alicia Turgeon",
      design: "Gabor Bata",
      communications: "Masheyla Anderson, Tricia Middleton",
      photography: "Kit Mergaert",
      technician:
        "Van Le, Daniel Cortes, Alexis Gagnon, Jay Hubbard, Frédérique Thibault & Alice Zerini-reste",
      translator: "Julie Leblanc",
      web: "Matthew Halpenny",
      other:
        "Andira Hernandez, Lily Minkova, Arianna Randjbar, Heather B. Reid & Marie Lemieux",
      artists:
        "Adia Parris, Al Hawks, Alberto Rodelo Franco, Alejandra Zamudio Diaz, Alex Apostolidis, Ali Egseem, Alisha Billias, Amanda De Angelis, Anissa Boukili El Hassani, Annik St-Arnaud, Berirouche Feddal, Camille Charbonneau, Camille Mougenot, Carlo Polidoro Lopez, Charline Lemieux, Charlotte Dora Rollert, Christopher Johnstone, Clare Grehan, Dj Dan Cubby, Dj Eejungmi, Dj Kamsologie, Dj Magellanic, Dominic Chalifour, Dougy Herard, Elfur Hildisif Hermannsdóttir, Erica Hart, Eva Lev Myers, Flora Fauna, Guillaume Saur, Guyot, Jane Reväe Mcwhirter, Jay Krakower, Jenna Ladd, Jennifer Lee, Jessica Sofia Lopez Garcia, Jezabel Plamondon, Joel Young, Joshua Jensen, Joé Côté-Rancourt, Judith Zaoui, Julia-Autumn Savoy, Julien Racine, Jézabel Plamondon, Kaelan Ryan, Kelly Rendek, Kut Time, Ky Kc, Laura Douglas, Laura Simard-lemaire, Le Massi,Leah Watts, Lil Hel, Lindsey Lagemaat, Maggy Hamel-Metsos, Marissa Sean Cruz, Maude Lantier, Maude Lauzière Dumas, Meredith Parent-Delgadillo, Merlin Heintzman, Nick Cabelli, Nora De Mariaffi, Olivia Mcfarlane, Petros Psillos, Phoebe Fregoli E., Rachelle A.Fleury, Rachelle Marcoux, Rouzbeh Shadpey, Roxanne Sirois, Rythâ Kesselring, S. Patterson, S0-f1, Saba Heravi, Sadie Mallon, Sadie Mallon, Sarah Ballentine, Sasha Pozzolo, Sasha Pozzolo, Summer Emerald, Tara Knuutila, Tedmond Edmond Desmarais, Teodora Stefan, Vanille Salé, Vice Versa Queerlesque, Xan Shian, Xavier Bélanger-dorval, Xdzunúm Danae Trejo & Yannick Victor",
      facilitators:
        "William Brewer, Ortie Brûlet, Milly-Alexandra Dery, Fanny Latreille, Sophie Le-Phat Ho & Alfred Muszynski, Chloё P.F.Lalonde, Emily Sirota, Félixe Bouvry, Joyce Joumaa, Louise Campion, Megan K. Quigley, Nina Molto, Olivia Deresti-Robinson, Petra Höller, Serena Desaulniers, Tina Lê, & Éloïse Joubert",
    },
    pdf: `${pdf2019}`,
    images: "slideshow2019",
  },
  {
    id: 2018,
    participants: {
      administrativecoordinator: "Jordan Beaulieu",
      exhibitionscoordinator: "Mattia Zylak",
      boardofdirectors:
        "Clara Micheau, Masheyla Anderson, Charlotte Beland, William Brewer, Siarra Burke-smith, Autumn Cadorette, Laura Macneil, Elijah Otwey & Stefanie Smylie",
      design: "Lucas Larochelle",
      communications: "Diana Tapia, Tricia Middleton",
      photography: "Raphaël Sandler",
      technician:
        "Émile Foucher, Alexis Gagnon, Matthew Halpenny & Jay Hubbard",
      translator: "Stéfanie Belleu",
      web: "Jade Morgan",
      other:
        "Sana Ashraf, Lily Rickard, Ben Holser & Manon Paquet, Keesha Chung, Nènè Myriam Konaté & Tricia Middleton, Aleesa Cohene, Alisha Mascarenhas, Gina Hara, Jessica Auer, Jordan Brown & Matthew Hyland",
      artists:
        "Alejandra Zamudio, Alex Apostolidis, Alyse Tunnell, Andrea Cormier, Audrey Bilodeau Fontaine, Ayse Gauthier, Ben Compton, Carlo Polidoro Lopez, Carmen Fox, Chloé St-Arnaud, Chris Shimek, Claude Labrèche-lemay, Claudia Persechino, Colas Eko, Cubeandre, Danielle Beaudet, Diana Lazzaro, Dj Janette King, Elisabeth Perrault, Elizabeth Eugène, Emmanuelle Forgues, Erin Berry, Eva Young, Eve Roy, Florence Yee, Gabrielle Marin, Guillaume Bégin, Guillaume Saur, Hea Kim, Jenna Ladd, Joffré Roy-Beauregard, Joffré Roy-Beauregard, Julia Woldmo, Julie-Claude Vezeau-Croteau, Katy Freeway, Kyla Kaplan-Chinard, Laura Douglas, Laura Hirsh, Laura Simard-Lemaire, Laura Theresa Macneil, Laurence Thériault-Lainé, Le Lin, Lucas Larochelle, Lucia Vergel, Magali Casaubon, Maggy Hamel-Metsos, Marie Cordey, Matisse Apsimon, Matthew Halpenny, Maude Lauziere Dumas, Mel Arsenault, Meredith Parent-Delgadillo, N.M Ryan, Nathan Leblanc-Limoges, Nick Cabelli, Nickle Peace-Williams, Nix Burox, Owen Coolidge, Paule Gilbert, Paule Gilbert, Phil Mercier, Rayna Montague, Roxa Hy, Roxanne Thibeault, Ruth Johnston, Saba Heravi, Sabrina Maisonneuve, Sam Bourgault, Sarah Da Silva Marques, Solana Del Bel Belluz, Sophie Wonfor, Tanita Rose Sawchuk, The Contractor, Timothy Thomasson, Tina Lam, Tshizimba Vs The World, Van Le, Willow & Zeke Best Rothfels",
      facilitators:
        "Orélie Brulet, Autumn Cadorette, Rebecca Duclos, Jessica Lopez Garcia & Elijah Otwey, Alexa Hawksworth, Alexey Lazarev, Alexia Mckindsey, Alisa Haugen-Strand, Avery Zhao-Djokic, Catherine Mcrae Finnegan, Chris Mendoza, Diane (Hau Yu) Wong, Emilie Usher, Hannah Silver, Hannah Simone Braithwaite, Jamie Potvin, Jose Guillermo Garcia Sierra, Kimberly Glassman, Maggie Mills, Maia Céleste Donnelly, Manuel Poitras & Marie Lemieux",
    },
    pdf: `${pdf2018}`,
    images: "",
  },
  {
    id: 2017,
    participants: {
      administrativecoordinator: "Lesya Nakoneczny",
      boardofdirectors:
        "Helene Sharp, Sophia Arnold, Autumn Cadorette, Madison Cassidy, Fatima Hassandia, Laura Macneil, Felix Pérriault, Terrence Richard & Mariana Stabilé",
      design: "John Shukin",
      communications: "Michael Martini, Marina Polosa",
      photography: "Laura Mongollòn",
      technician:
        "Maxime Brown, Alexis Gagnon, Jay Hubbard, Jo Mitrovic & Monica Rekas",
      translator: "Valérie Henault",
      web: "Dhanvin Raval",
      other:
        "Dori Julian, Zoé Dion & Kaitlin Fitzgibbon, William Robinson & Amy Macdonald, Bart Simon, Charmaine Nelson, Chloe Lum, Emily Gualtieri, Jessica Auer, Malek Yalaoui, Marie-Charlotte Carrier, Omar Victor Diop & Yannick Desranleau",
      artists:
        "Abbie Rappaport, Ahmad Salaj, Alejandra Zamudio, Alejandro A.Barbosa, Alexandre Pépin, Ali Hendra, Aliah Schwartz, Amanda Lee, Amanda Manson, Amy Campbell, Amélie Lapointe-Lavoie, Andrés I. Estrada, Antonin Fisette, Ariane Patenaude, Aya Avalon, Beatrice Scharf-Pierzchala, Belote, Ben Compton, Brent Morley Smith, Bronson Smilie, Burcu Emeç, Camille Durand Gauthier, Cedric Laurenty, Chandler Mcmurray-Ives, Chris Dake-Outhet, Cindy Hill, Cindy Phenix, Clare Grehan, Constantinos Giannousis, Danil Ulmashev, Dany Floyd, Dina Georgaros, Emilie Buysse, Emilie Usher, Emma Francis Wallace, Epithumia Rose, Erin Berry, Eva Young, Evan Smith, Eve Roy, Florence Yee, François Sarazin, Gabriel Dorais, Gabrielle Verrette Paquette, Georgios Varoutsos, Guillaume Loslier-Pinard, Hea Kim, Heal Please, Holly Timpener, Hélène Salamanca, Isabella Leone, Jack Zeppetelli, Jenna Ladd, John Shukin, Julie-Claude Vezeau-Croteau, Jézabel Plamondon, Kara Sterne, Katherine Lewis, Laila Hamouda, Laurence Philomene, Laïla Mestari, Lea Schwarz, Lenny Sharp, Lucie Swan, Lucy Earle, Lydia Mccourt, Maia Céleste Donnelly, Marie Ségolène, Marie-Pier Favreau-Chalifour, Matthieu Vanier, Maude Lauziere Dumas, Max Hart Barnwell, Maxime Saint-Jean, Mel Arsenault, Mero Benss, Mil, Miles Petrella, Milla Thyme, Monica Rekas, Nakita Mcinnis, Natasha K.Molinari, Nathalie Dubois Calero, Nien Tzu Weng, Niharika Russell, Paloma Dawkins, Paul Lofeodo, Philip Gagnon, Philippe Tremblay, Pépite & Josèphe, Ray Tonatiuh Vilchis, Rayna M. Bellwoar, Rihab Essayh, Romane Bladou, Ryan Rees, Ryth Kesselring, Saba Heravi, Santiago Tamayo Soler, Sarah Da Silva Marques, Siran Tao, Sound Of The Mountain, Stéphanie Pineau, Tala E, Thomas Geist, Timothy Thomasson, Tina Lam, Troy Biliski, Vicky Moe, Zoe Baranek & Émile Foucher",
      facilitators:
        "Eunice Bélidor, Kimura Byol, Fatima Hassandia, Laura Macneil & Dean Rebecca Duclos, Alyse Tunnell, Amille-Zoé Valcourt-Synnott, Art Matters Board Of Directors, Art Souterrain, Black Studies Collective, Diana Lazzaro, Edwin Isford, Elan, Jay Bossé, Jordan Beaulieu, Louis-charles Dionne, Mathilde Rohr, Nabil Azab, Random Org, Roxanne Halary, Samuel Normand, Soukayna, Theo Guillemot, Valerie Bourdon, Xan Shian & Zeke Best Rothfels",
    },
    pdf: `${pdf2017}`,
    images: "slideshow2017",
  },
  {
    id: 2016,
    participants: {
      administrativecoordinator: "Naakita Feldman-kiss",
      exhibitionscoordinator: "Fannie Gadouas",
      boardofdirectors:
        "Jeremy Blinkhorn, Patrick Evans, Ashley Forbes, Edwin Isford, Priya Jain, Mathew Marie-rhodes, Christina Richer, Tim Schauer & Lenny Sharp",
      photography: "Rojin Shafiei, Laurence Hervieux-gosselin",
      communications: "Roxane Halary",
      design: "Tam Vu",
      technician:
        "Colin Earp-lavergne, Francis Goodship, Cédric Laurenty & Diana Lazzaro",
      translator: "Rae Lavande Pellerin",
      web: "Conan Lai",
      other:
        "Mariana Stabilé, Lilian Glesinger, Matt Goerzen, Loreta Lamargese, Amelie Segal & Brad Troemel, Danielle Peers & Liselyn Adams, Aimee Louw, Alvis Parsley, Amy Macdonald, Discwoman, Kama La Mackerel, Lido Pimienta, Matthias Maute & Ytb Gallery",
      artists:
        "A. Wolski, Aaliyeh Afshar, Aletha Persaud, Alexandre Pépin, Alicia Segura, Alisha Billias, Alisha Curiosita, Anna Grigorian, Anne Moncion, Anthony Brunell, Ben Compton, Bianca Hlywa, Blake Gilley, Branden On, Brent Morley Smith, Bronson Smillie, Camille Lescarbeau, Camille-Zoe Valcourt-synnott, Caroline Deschênes, Cassie Wright, Catherine Prince, Charlotte Clermont, Chloé Bergeron, Cindy Phenix, Claude Labrèche Lemay, Curtis James Doherty, Curtis Legault, Cynthia Hill, Céline Jolin, Dj Boyzclub, Ellyn Woods, Emile Archambault G., Emma Lee Iversen, Enok Ripley, Eric Paulino-Rodriguez, Evangelos Michelis, Eve Roy, Fanny Basque, Feliz Tupe, Gabrielle Desrosiers, Gabrielle Verrette Paquette, Glen Branch, Grace Paraluch, Hand Cream, Hannah Leah Ledwell, Hearyung Kim, Hugo Bernier, Isabelle Nguyen, Jade Legault, Jeremie Cyr, Jeremy Blinkhorn, Joanne Mitrovic, John Shukin, Jordan Beaulieu, Julia Wake, Julie Mercier, Julie Tremblay, Kara Sterne, Katherine Lewis, Kathleen Mckeown, Katia Arcarese, Katie Keca, Kevin Francois Andres Teixeira, Laetitia Dandavino-Tardif, Lauren Kleiderman, Laurence Belzile, Laurence Hervieux-Gosselin, Laurence Philomene, Lea Schwarz, Leila Mestari, Louis-charles Dionne, Lucas Larochelle, Madeline Smart, Manolis Daris-bécotte, Mariana Braga, Mariana Stabilé, Marie-Pier Larose, Marlon Kroll, Matt Grey-Noble, Megan Ennenberg, Michelle Lasalle, Molly Mcgregor, Monica Rekas, Mourad Kouri, Muriel Jaouich, Nancy Pants, Natalia Kalicki, Nicolas Castonguay, OBRAANAIS, Organ Mood, Paralix, Pauline Soumet, Peter Shaw, Porn Persons, Rae Lavande Pellerin, Rihab Essayh, Riohv & Pulsum, Roby Provost Blanchard, Samuel Cousin, Seb Evans, Sophie Auger, Stefanie Smylie Crea, Steimle Essayh Collective, Tereza Tacic, The Ghost Taco, Thom Speakman, Thomas L. Archambault, Tyseka Castor, Vanessa Zaurrini, Vincent Larouche, Zoe Gelfant, Zoe Roux & Étienne Camille Charbonneau",
      facilitators:
        "Alexey Lazarev, Ashley Zver-Volel, Bianca Hlywa, Burcu Emeç, Daniel Saenz, Elizabeth Xu, Emma Lightstone, Garrett Lockhart, Geneviève Lebleu, Lenny Sharp, Lucas Regazzi, Lucie Swan, Michael Martini, Miles Petrella, Olivia Rose Mansveld, Sarah Riley Mathewson & Tim Schauer",
    },
    pdf: `${pdf2016}`,
    images: "slideshow2016",
  },
  {
    id: 2015,
    participants: {
      administrativecoordinator: "Edwin Isford",
      exhibitionscoordinator: "Claudia Edwards",
      boardofdirectors:
        "Ellen Belshaw, Laurie-anne Bergeron, Christopher Dake-outhet, Patrick Evans, Naakita Feldman-kiss, Flora Hammond & Mackenzie Rhyason",
      photography: "Stéphanie Pineau & Clara Lacasse",
      design: "Trina Daniel & Samuel Hogue",
      communications: "Laurent Viau-lapointe",
      technician:
        "Christopher Bacon, Derick Darby, Daniel Freder & Milo Reinhardt",
      translator: "Charlotte Forbes",
      web: "Stephanie Iacovelli",
      other: "Lindsey Carter, Sarah Haberl, Emilie Usher",
      artists:
        "90792, Alex Brazeau, Alexandre Pepin, Alisha Billias, Aly Piatkowski, Amelie Lapointe-Lavoie, Anastasia Ferguson, Annie Maheux, Ayla Dmyterko, Bailey Eng, Balthazar Blumberg, Ben Compton, Benjamin Sbrollini, Benoit Savard, Bianca Hlywa, Bufflo, Burcu Emeç, Caitlin Ross, Callan Ponsford, Catherine Aboumrad, Catherine Faiello, Charlotte Clermont, Charlotte Forbes, Charlotte Parent, Cindy Phenix, Clara Lacasse, Coey Kerr, Colin Earp-lavergne, Coltrane Mcdowell, Conan Lai, Daniel Wakeman, Danielle Toca-Smith, Devon Spencer Levine, Dj Special Guest, Emily Karcz, Emma Sise, Eryn Tempest, Fannie Gadouas, Feliz Tupe, Félix Gourd, Gabrielle Desrosiers, Gabrielle Vigneault-gendron, Garrett Lockhart, Geneviève Lebleu, Gorgeous, Hannah Materne, Hope Erin Phillips, Hope Phillips, Ingrid Tremblay, Isabella Donnati-Simmons, Isabelle Gagnon, Jazmine Yerbury, Julie Mercier, Julien Bouthillier, Jun Wang, Kaitlyn Ramsden, Katia Gosselin, Katie Stienstra, Kevin Andres-Teixeira, Kourtney Aletha Persaud, Laurence Pilon, Laïla Mestari, Leah Schulli, Lucie Swan, Lucy Fandel, Madeleine Black, Maeve Doyle, Maggie Flynn, Mariana Stabilé, Mathieu Lambert, Matthew J. James, Matthew Murphy, Maxine Segalowitz, Megan Moore, Mike Jones, Miles Petrella, Milo Flores, Milo Reinhardt, Molly Mcgregor, Nien Tzu Weng, Pascale Project, Patrick Kenneth Evans, Peter Shaw, Petra Holler, Pulsum, Rollie, Roxane Halary, Sarah Rosenberg, Sarah Wayne, Saxsyndrum, Seb Evans, Shawn Christopher, Shinhae Lee, Simon Chioini, Simone Beaudry-Pilotte, Sophie Morro, Stefan Jaroszonek, Stephen Brace, Tereza Tacic, Tess Roby, The Famines, The League Of Lady Wrestlers, Thomas Gauthier-Caron, Tyson Houseman, Vincent Larouche, Zahraa Sbaiti, Zellers & Éric Séguin",
      facilitators:
        "Aaliyeh Afshar, Anna Patterson, Anne Bertrand, Annika Steimle, Claire Maclsaac, Florencia Sosa Rey, John Shukin, Julie Tremblay, Jérémie Cyr, Laurence Beaudoin-Morin, Laurie-Anne Bergeron, Luisina Sosa Rey, Luna Dykstra-Santos, Maria Paula Cano Bueno, Max Taeuschel, Naakita Feldman-Kiss, Nina Patterson, Noémie Avidar, Rihab Essayh & Tiffany Le",
    },
    // pdf: `${pdf2015}`,
    // 2015's pdf was corrupt
    images: "slideshow2015",
  },
  {
    id: 2014,
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
      other:
        "Ashlee Griffiths, Sarah Cronshaw, Terrance Richard, Basil Alzeri, Geoff Han, Johnathan Reid Sévigny, Lucas Soi, Sean Yendrys, Seth Scriver & Shayne Ehman",
      artists:
        "Aditi Ohri, Adrien Fillion, Aidan Pontarini, Alex Metcalfe, Alexandre Brazeau, Aliya Kahsay, Amelia Moses, Andrée-Anne Giasson, Annika Steimle, Anthony Brunelle, Antoine O’Donoughue, April Martin, Ariane St-louis, Audrey Bilodeau Fontaine, Bailey Eng, Beatrix Golovan Del Pino, Ben Read, Benita Whyte, Carol Ann Hunter Mclean, Chloe Wise, Christopher Dake-Outhet, Christopher Spears, Clémence Renaud, Dan Freder, Devon Bate, Dj Cabezas, Drew Gagg, Dustin Finer, Edwin Isford, Emily Karcz, Evan Stepanian, Folrencia Sosa Rey, Frankie Teardrop, Fuat Tuac, Gabrielle Vigneault-Gendron, Gaël Patino, Hearyung Kim, Homeshake, Hot Fun, Ileana Hernandez, Isabel Connolly, Jack Kavanagh, Jef Barbara, Jessica Rae, Jordan Davidson, Julian Garcia, Julie Mercier, Julie Villeneuve, Jérémy Cyr, Kaetan Bonli, Kate Stockburger, Katherine Faille, Kevin Leung-Lo, Kurvi Tasch, Lacey Jane, Lauren Prousky, Layla Folkman, Lorraine Albert, Louis-Charles Dionne, Luigi Pasto, M. Hypnos, Mackenzie John, Maianh Nguyen Dang, Mariana Czapski, Marie-Josée Archambault, Mat O’hara, Mathieu Lambert, Matt Hovey, Matthew Marie-Rhodes, Maxine Segalowitz, Megan Moore, Melany Arsenault, Michael Palumbo, Michelle Reddick, Michelle Reid, Mitch, Naakita Feldman-Kiss, Nick Schofield, Nicolas Epstein, Nicole Levaque, Nikki Peck, Oliver Simpson, Olivier Blanchette, Patricia Gagnon, Peter Van Haaften, Rafferty Mcmahan, Raul Aguilar, Rebecca Smyth, Ryan Ockenden, Ryan White, Sam Schmitt, Samuel Béland, Sand Wishes, Sebastian Fleet, Shayla Chilliak, She Divides, Shinhae Lee, Silka Weil, Simon Labbé, Simon Mckee, Sionnan, Sophia Barowska, Sophia Wright, Sophie Bisping, Stephanie Raudsepp, Stephanie Wu, Stephen Trepanier, Telstar Drug, Thomas L. Archambault, Tracy Xu, Tyler Lewis, Tyson Houseman, Veronica Mockler, Véronique Sunatori, Véronique Tremblay, Wesley Moran, Wolfe Girardin Jodoin, Yàocavé, Zac Macarthur & Édith Maisoneuve",
      facilitators:
        "Anne Bertrand, Anne-Marie Trépanier, Braden Scott, Christina Bell, Claudia Edwards, Eli Kerr, Emma Campbell, Katerina Korola, Kristen Ahmad-Gawel, Laurent Viau-lapointe, Louis Thompson-Amadei, Mégane Voghell, Pascale Yensen, Peter Shaw, Sophia Wright, Vincent Vezzier & Zoë Wonfor",
    },
    pdf: `${pdf2014}`,
    images: "slideshow2014",
  },
  {
    id: 2013,
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
      other:
        "Tami Bernard, Aaliyeh Afshar, Alan Ganev, Amy Blackmore, Kathleen Sharpe & Rio Mitchell",
      artists:
        "Aaron Leon, Abimbola Vivian Ayodele, Aditi Ohri, Adrien Fillion, Aidan Pontarini, Airel Poupart, Alexia Laferté-Coutu, Alisi Telengut, Allison Smith, Andrew Stringer, Anna-Maria Kościelna, Anne Isabelle Leonard, Anne-Marie Trépanier, Annie Burgess, Audrey Wolski, Aurélie Dubois, Bachar Bachara, Basia Wyszyrski, Bianca Hlywa, Bianca St.Martin, Bouchra Laraki, Caroline Steele, Cassandra Marsillo, Catherine Faiello, Chris Drogaris, Christina Higham, Cindy Phenix, Courtenay Maze, Daniel Patterson, Daniel Wakeman, Darcy Cooke, December Rose And The Feedbackers, Diana Saidova, Dylan Dicicco, Eli Kerr, Elizabeth Brouillard, Elizabeth Mackenzie, Ellen Leung, Emma Lightstone, Emma Sise, Evlyne Laurin, Eximgherine Asselin-Boulanger, Florence Vallieres, Gabrielle Vigneault-Gendron, Gaël Patino, George Grant, Hannah Materne, Hearyung Kim, Hugo Dufour-Bouchard, Ian-Marlon Tanguay, Ingrid Tremblay, Janick Burn, Jeremy Sandor, Jessica Monuk, Jessica Sallay-Carrington, John William Lanthier, Johnathan Reid Sévingy, Joseph Brown, Joyce Yam, Julia Panchyzhna, Julia Wolfe, Julian Cargnello, Julian Stamboulieh, Justine Orbovic, Jvlyn, Karoline Lebrun, Karolyn Martin, Katherine Spandidakis, Kerry Langlois, Kevin Leung-Lo, Kevin Moquin And The Bad Ideas, Kyle Goforth, Laura Robbins, Lauren Osmond, Laurence Beaudoin Morin, Laurent Viau-Lapointe, Laurie Cotton-Pigeon, Lianna Zannier, Linnea Gwiazda, Lisandre St-Cyr Lamothe, Léa Roy, Maria Kapovska, Marianna Gingras, Marie-Eve Dompierre, Marlee Parsons, Maryam Pourarya, Mathieu Lambert, Maude Arès, Max Teauschel, Melodie Reay, Michelle Lundqvist, Myriam Aubin, Myriam Bourgeois, Myrianne Giguère, Nicole Levaque, Nikki Peck, Nina Vroeman, Nisha Platzer, Owen Kirby, Pamela Des Rosier, Pascale Yensen, Peter Schmittson, Ramona Beneviste, Raúl Aguilar Canela, Rebecca Rehder, Rihab Essayh, Sabrina Nazar, Sara Magdaleria Anstis, Sarah Amarica, Sarah Galarneau, Simon Mckee, Simone Blaine, Sophie-Kimberly Seguin-Lalonde, Sophie-Anne Bélisle, Steffie Belanger, Stephanie Wu, Stephen Korzenstein, Stéphanie Saucier, Tess Roby, Theresa Passarello, Thomas Bouqin, Todd Bolton, Valérie Gilbert, Valéry Cadieux, Vanessa Fleising, Veronique Croteau, Veronique Sunaton, Vincent Brière, Véronique Sunaton, Yasmina Dahou, Yulia Grebneva, Zachary Currie, Zoe Koke, Zoe Ritts, Zoe Wofner & Élizabeth Savoy",
      facilitators:
        "Amira Shabhson, Annie Maheux, Ashley Zver-Volel, Bella Giancotta, Benjamin J.Allard, Cécile Charvet, Emma Siemens-Adolphe, Erin Hill, Heather Caplap, Jordan Davidson, Julia Garcia, Kris Miller, Lori Noel, Marie-Michèle Plante, Michelle Cantin-Reid & Vincent Vezzier",
    },
    images: "slideshow2013",
  },
  {
    id: 2012,
    participants: {
      exhibitionscoordinator: "Zoe Koke, Caro Loutfi",
      communications: "Vivien Leung",
      design: "Patryk Stasieczek",
      media: "Alyx Phizicky",
      photography: "Ginga Takashima & Daniel Paterson",
      technician: "Drew Barnet & Adrien Fillion",
      translator: "Gustave Leber",
      web: "Zachary Kain",
      other:
        "Evan Stanfield, Chantal Doyle, Coco Riot, Lillian Brad, Of The Desert (American Sw), Paper Mill Artisan Dave Carruthers St, Retired Female Dancer ->, Soundman & Speedshow Person Skype In, Alannah Clamp, Allison Smith, Amber Berson, Courtenay Mayes, Eli Kerr, Emma Siemens, Marie-Josée Parent & Matt Goerzen",
      artists:
        "Alexandra Shapiro, Alexandru Petroșani, Amélie Bissonnette, Amélie Lemay-Choquette, Andrea Debruijn, Andrew Hovi, Anna Labarias, Anna Mayberry, Anthony Kennedy, Anthony Sauve, Anthony Wilson, Ariane Paradis, Bachar Bachara, Basia Wyszynski, Ben Stewart Smith, Bo Jovanovic, Brent Morley Smith, Bridget Jessome, Caleb Feigin, Carolann Shea, Catherine Lisi-Daoust, Chloé Bourdages-Roy, Claire Forsyth, Courtenay Mayes, Craig Spence, Da Pink Noise, Dan Vogt, Dana Neilson, Devon Mckellar, Doom Squad, Dylan Dicicco, Elizabeth Mckenzie, Emma Lightstone, Emma Michelle Owen, Emma Siemens, Erik Naumann, Erin Hill, Fabien Marcil, Faustine Lasnier, Felipo Dickinson, Florence Boivin, Florence Vallières, Frances Enyedy, Gaia Orain, Gold Zebra, Greg Selinger, Gregory Selinger, Gélymar Sanchez, Han Han Li, Hannah Morrow, Heather Caplap, Hugo Dufour Bouchard, Ingrid Tremblay, Isabelle Massey, Jamie Ross, Jamie Woollard, Janick Burn, Janna Maria Vallee, Jared Goldman, Jean-Daniel Papillon, Jean-Marc Perrin, Jeanne Dagenais-Lespérance, Jeffrey Torgerson, Jen Cressey, Jesse Cumming, Jesse Mykolyn, Jessica Monuk, Jessica Monuk, Jessica Slipp, Jodi Sharp, Jonathan Woods, Jonathan Woods, Jordan Loeppky-Kolesnik, Joy Ross-Jones, Julia Wolfe, Julian Garcia, Julian Stamboulieh, Justin Friesen, Jérémie Albert, Kamil Chajder, Karine Tanguay, Keith Odell, Keivan Khademi Shamami, Kelsey Wilson, Kevin Leung, Kevyn Durocher, Kyle Goforth, Laura Acevedo, Laura Hudspith, Laura Sirois, Laura Sirois, Lauren Wonfor, Laurence Dupuis, Laurence Poirier, Laurence Poirier, Levana Prud'homme, Lindy Wilkins, Linh Phuong Tran, Lori Malépart-Traversy, Luisa Muhr, Léa Trudel, Marie-Eve Joseph, Marie-Pier Malouin, Mat O'hara, Matthew Kolaitis, Maxine Segalowitz, Mehrnaz Mohammadi, Mekele Nocturne, Melodie Reay, Michaela Gerussi, Mitch Dixon, Mozart's Sister, Nicole Pearson, Noémie Jaarsma, Olivier Gariépy, Patrick Mcdowall, Peter Bleumortier, Peter Shaw, Phoebe Heintzman Hope, Rachel Woroner, Rae-Anna Maitland, Ralitsa Doncheva, Rebecca St John, Renée Gagné, Robyn Crouch, Roxanne Lemieux, Sabrina Dufour, Samantha Garritano, Samuel Rosenberg, Sandra Chirico, Sarah Ève Tousignant, Sean Broadhurst, Shanan Kinsella, Simon Grenier-Poirier, Sophie Mercedes Genest, Spencer Gilley, Steffie Bélanger, Steph Colbourn, Stephanie Creaghan, Stéphanie St-Jean Aubre, Suuns, Sébastien Kaufmann, Talula C, Tara Miller, Taylor Cada, The Breezes, Theresa Passarello, Thomas Bouquin, Tiffany Blaise, Todd Macdonald, Tracy Valcarcel, Trevor Wheatley, Tyler Nicolson, Vincent Chevalier, Véronique Tremblay, Zachary Sokoloff & Élyse Brodeur-Magna",
      facilitators:
        "Aditi Ohri, America Blasco, Caro Loutfi, Carolann Shea, Christine Bellerose, Christopher Spears, Clinton Glenn, Eli Kerr, Florence Vallières, Jessica Fahey, Levi Bruce, Lianne Zannier, Linnea Gwiazda, Nafisa Kaptownwala, Patryk Stasieczek, Victoria Carrasco & Zoë Wonfor",
    },
    pdf: `${pdf2012}`,
    images: "slideshow2012",
  },
  {
    id: 2011,
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
      artists:
        "Adam Simms, Adam Wilcox, Adrienne Dagg, Alannah Camp, Albert Bouchard, Aleksandra Kaja Wizimirska, Alexandra Zendran, Alexandre Nunes, Alexis Johnston Benamou, Alexis Pautasso, Alexis Rourke, Alicia Zwicewicz, Amelie Ares, Andrew W.K, Annie Burgess, Anthony Vleira, Antonio Elavaro, Antonio Starnino, April Martin, Aria Campbell-Kelly, Ariana Decreon, Ashely Opheim, Bearmod, Bella Klein, Benita Whyte, Bernadette O'Sullivan, Caitlin Gibson, Cameron Bates, Carrie Henze, Casey Watson, Chantal Premons, Chevalier Avant Garde, Christopher Spears, Cousins, Craig Spence, Danielle Bouchard, Deragh Campbell, Diyar Mayil, Doldrums, Eli Kerr, Emily Leblanc, Emily Mcintyre, Emma Own, Erik Nauman, Erik Zuuring, Eugenie Khoury, Evan Stanfield, Evan Taurine, Felipe Goulet-Letarte, Fen Prior-Delahanty, Fernando Leppe, Frances Conley-Wood, Francois Lalumiere, Fuck Fish, Gabriel Baribeau, Greg Selinger, Grimes, Heather Hardie, Heather Jackson, Heather Stewart, Holly Green, Honorable MC, Hyn Cho, Ingrid Tremblay, Jacques Bellavance, James Andrew-Rosen, Janaki Banting, Jason Harvey, Jeff Clifford, Jeffrey Togerson, Jeremy Debrowski, Jes Fildes, Jesse Mykolyn, Jesse Orr, Jessica Campbell, Jessica Hebert, Jessica Lockwood, Jessika Hade-Precourt, Jimmy Bellemare, John Batt, John Gunner, Julia Waks, Kandis Freisen, Kate Metten, Katie Nolan, Kely Pleau, Kerri Flannigan, Kerwin Barrington, Kevin Lee, Krystal Solbee, Laura Adelaide Hudspith, Laura Rokas, Laure Ellyn, Lauren Osmond, Laurence Poirier, Laurie Caron, Lee Gelbloom, Leiagh Breenan Murfitt, Lindsay Hutton, Louis Elyan Martin, Marc Huppler, Marie-Eve Bourque, Marie-Pier Breton, Markus Lake, Mathieu Ball, Mattias Graham, Maude Emilie Bourque, Milan Panet-Gignon, Momococo, Morgan Stherland, Natalie Pen, Nathalie Leu, Neah Kelly, Nick Bostick, Nicolas Munos, Nicole Coruch, Nicole Levac, Nina Bouchard, Olivia Mew, Omaha, Oscar Oliver, Pat Jordache, Patrick Lliyd Brennan, Peter Rockwel, Pier-Anne Mercier Tremblay, Pier-Yves Larouche, Pop Winds, Quentin Mawson, Rablo Aracena, Rachel Woroner, Ramona Benevista, Ramona Beneviste, Ramy Daghstani, Raphaelle Frignon, Raphaelle Frigo, Razielle Aigen, Rebecca Patrick, Rey Benjamin Quilles, Rio Mitchell, Rosanne Camp, Ryan Levy Amandor Leonarar, Sabrina Dufour, Sadaf Hakimian, Samuel Ferguson-Sharp, Sara Anstis, Selina Doroshenko, Sheldon Lawlor, Sibian Faun, Simon Belleau, Simone Blain, Sophie Edeil, Sophie Kimberly Seguin-Lalonde, Stephanie Beaulieu, Stephanie Degroseillers, Stephanie Robert, Stuart Pearce, Sylvain Chaustee, Taylor Cada, The Commission, Thea Govorchin, Thomas Holmes, Tobias Ziegler, Vincent",
      facilitators:
        "Allie Blumas, Allison Smith, Anne Mayberry, Camille Bedard, Carla Sifoni, Courtney Mayes, David Di Giovanni, Derek Branscombe, Dounia Salame, Eliana Stratica, Hania Souleiman, Jerome Nadeau, Jessica Kirsh, Madeleine Pippa Bartlett, Patryk Stasieczek, Simon Lariviere, Tess Edmonson, Tricia Livingston & Vivian Laung",
    },
    pdf: `${pdf2011}`,
    images: "slideshow2011",
  },
  {
    id: 2010,
    participants: {
      communications: "Anna Edell, Judith Mignault",
      design: "Jeremy Dabrowski",
      media: "Catherine Jodoin, Patrick Lloyd",
      photography: "Patryk Stasieczek",
      technician: "Natiea Vinson",
      translator: "Arièle Dionne-krosnick & Stéphanie St-jean",
      other: "Paul Gubernachuk, Matthew James",
      artists:
        "AJ West, Adam Sajkowski, Alain Deschamps, Alec Matthewson, Alexandra Draghici, Alexandre Nunes, Alexis Boyle, Ali Moenck, Alyce Dressner, Amy Ball, Amy Vaillancourt, Ana Sofia Arias Jaspe, Andrew Frosst, Ann Milligan, Anna Edell, Anna Labarias, Annie Axtell, Anthony Wilson, Antoine Cloutier-Belisle, Arden Way, Aria Campbell-Kelly, Ariel Massett, Bea Parsons, Bekky O’Neil, Bella Klein, Benjamin Richards, Brian Li, Brianna Oversby, Bridget Jessome, Brittany Campbell, Bryan James, Carrie Henzie, Catherine Wakim, Charles Gauthier-Mathieu, Charles Wood, Chloe Milsop-Melancon, Chris Tan, Christina Kenins, Cindy-Mae Arsenault, Claudia Espinosa Ramos, Clement Liu, Colin Wintz, Cora Wöllenstein, Corrie Peters, Craig Fahner, Dan Smeby, Daniel Luna, Danielle Simm, David Abraham, David DiGiovanni, David Silveira, David Whitten, Denise Bonal, Power Of Dreams, Dominic Liu, Elgin-Skye McLaren, Elizabeth Ranger, Elizabeth Woodyard, Emily Paris, Emma Dalziel, Erica Schmidt, Erika Altosaar, Erin Hennessy, Esinam Beckley, Eugenie Khoury, Evans Adrian, Felicia Mezzanotte, Flinder Zuyderhoff-Gray, Françoise Surette, GRKZGL, Gabriel Baribeau, Garçons!, Gaïa Orain, Haley Toll, Hania Souleiman, Hannah Morrow, Harley Smart, Harry Stanjofski, Heather Stewart, Helene Messier, Henk Boom, Hideki Kawashima, Irene Lepiesza, Isabelle Landry, Ivan Rubio, IvoTobin Lippold, Jackson Darby, Je Kubik, Jean-Marc Perin, Jeffrey Torgerson, Jennifer Epprecht, Jenny Schade, Jerome Nadeau, Jesse Orr, Jessica Hébert, Jessica Lee Gagne, Jessica Watchorn, Joanna Donehower, Jonathan Woods, Jordan Loeppky-Kolesnik, Kandis Friesen, Kara Crabb, Kara Keith, Karen Lee, Karn, Kasia Juno, Katerina Lagasse, Katerina Pansera, Katherine Paglialunga, Katia-Marie Germain, Kerri Flannigan, Kerri Strobl, Kerry Langlois, Kevin Crook, Kiani Del Valle, Kinneret Sheetreet, Krystal Selbee, Krystel Marois, Kyosuke Nishida, Laura Findlay, Laura Sirois, Laurie Caron, Laurie MacInroy, Leah Silverberg, Liam Peuckert, Lisa-Nathalie Côté, Lynn Racicot, Léa Jeanmougin, Madeleine Pippa Bartlett, Marc Matatya, Marie Dauverné Abelli-Lortie, Marie Horstead, Mark James, Mark Stroemic, Mathieu Ball, Matthew Mewett, Max Kelly, Maxime Brouillet, Meghan Riley, Melisa Discepola, Micaela Hardy-Moffat, Michael Plante, Michael Withers, Monica Coquoz, Morgan Sea, Nadim Zaidi, Navid Navab, Neah Kelly, Neal Moignard, Neely Goniodsky, Ngoc-An Trinh, Nick Vallee, Nicolas Gouin, Nicole Roberge, Nicolás Muñoz, Nimalan Yoganathan, Nina Pariser, Noa Nussbaum, Pamela Forster, Patryk Stasieczek, Paul Frigon, Peter Fortune, Peter Rockwell, Philippe Leonard, Philippe Soldevila, Pier-Yves Larouche, Rhea Nelken, Richard Müller, Rio Mitchell, Robin Wattie, Rose Athena, Ryan Levy Amador Leonoras, Sadaf Hakimian, Samuel Ferguson-Sharp, Sara Maston, Sarah Albu, Sarah London Bergman, Sarah Maloney, Sarah Nesbitt, Scott Harber, Shaun Pett, Shawn Davis, Simon Schlesinger, Stefan Harhay, Stephanie Lau, Stephanie Payne, Stéphanie Beaulieu, Super Special Secret Guests, Tachandy Barnett, Tai Timbers, The Iron Maidens, The Lovely Feathers, The Peelies, Thea Govorchin, Thomas P., Toby Pikelin, Tonstartssbandht, Tyson Parks, Vincent Charlebois, Vincent Hulme, Yok, Yuli Sato, Zoe Lepiano, Zoltan Veevaete & textbook sonic",
      facilitators:
        "AAVA, Alannah Clamp, Alexandra Postans, Alissa Jaarova, Amanda Burstein, Andrea Joy Rideout, CESSA, Claudia Burneo, Dylan Parks, Emily Leblanc, Emily Paris, Emma Warburton, Frances Conley-Wood, Hannah Sutherland, Hayley Lewis, James Finnerty, Jason Harvey, Julian Stein, Katherine Lewis, Laura Boyd-Clowes, Madeleine Lee, Maxwell Stein, Rossanne Clamp, Sean Yendrys, Shaunna Thatcher, Stephanie Bokenfohr, Stephanie Laoun, Stephen Marie-Rhodes, Taralyn Boyden & Vincent Charlebois",
    },
    pdf: `${pdf2010}`,
    images: "slideshow2010",
  },
  {
    id: 2009,
    participants: {
      communications: "Alissa Jafiarove, Cait Macintosh, Julie Johnston",
      design: "Jp King",
      photography: "AJ Korkidakis",
      media: "Matt Goerzen",
      translator: "Marie-Pier Breton & Genevieve Gallant",
      web: "Matt Goerzen",
      other: "Sarah Albu, Jeremy Badrowski & Natiea Vinson",
      artists:
        "Aaron Knapp, Adrian Dilena, Agnieszka Foltyn, Aidan Connoly, Alana Ruth, Alanna Lynch, Alex Kamino, Ali Moenck, Alia Ahmad, Allison Book, Allison Flam, Amy Blackmore, Amy Novak, Andrea Toop, Andrew George, Andréanne Caron, Anna Labarias, Anne-Claude Pépin, Anne-Marie Proulx, Annie Zielinski, Anthony Vrakotas, Ari Bayuaji, Ashley Anne Clark, Averil Parker, Bea Parsons, Bella Klein, Brian Li, Carolina Ahponte, Caroline Bergeron, Cathie Wakim, Cecily Dover, Chandra Melting Tallow, Chantal Tremblay, Charlotte Cornfield, Charmaine Bynoe, Chloe Beaulac, Chloe Millsop, Chloé Beaulé-Poitras, Christie Kenins, Christophe Lennox, Claire Dumoulin, Claire Forsyth, Colin Wintz, Colleen Dwyer-Meloche, Corrie Peters, Craig Fahnar, Dan Smeby, Daniel Eshpeter, Daniela Roessler, Danielle Nadie Simm, Daphné Caron, David Romero, Denise Olivares, Derek Broad, Don Hutton, Duc Tran, Dylan Parks, Edith Poirier, Edward Maloney, Elaine Wai, Emily Comeau, Emily Leblanc, Emma Dalziel, Emma-Kate Guimond, Esther Splett, Etcetera! Theatre, Eugénie Khoury, Felix Menard, Fernando Leppe Alvarez, Fiona Chai, Florence Masson, Florence S. Larose, Françoise Lamothe, Gabriel Khoury, Gabrielle Martin, Gaelle Lalonde, Genevieve Levesque-Mumford, Ginger Coons, Gregory Burton, Hannah Gorham-Smith, Heather Stewart, Hubert R. De Roy, Hélène Latulippe, Irene Lepiesza, Ivan Rubio, Jackson Darby, Jackson Derby, Jacques Bellavance, Jason Gowans, Jason Milan Ghikadis, Jen Epprecht, Jennifer Aberman, Jennifer Lupien, Jenny Schade, Jesse Orr, Jessica Campbell, Jessica Slipp, Jessica Watchorn, Jessica Wee, Jia Chen Cardly Lai, Johanne Laurendeau, John Woods, Johnathan Gilmore, Jonas St.Michael, Jordan Koelsnik, Joseph Bembridge, Julie Amlin, Julie Laurin, Julie Roch-Cuerrier, Karri Flannagan, Kati Belanger, Katie Earle, Katie Nolan, Katie-Marie Germain, Kendyl Rossi, Krystal Selbee, Krystel Marois, Kyosyke Nishida, Laudia Burneo, Laura Dolson, Laura Findlay, Laura Macinroy, Laura Patricolo, Laurence Gagné, Laurence Vallières, Linda Luttinger, Lindsey Fryett, Lise Latreille, Logan Caldbeck, Lys-Ange Leblanc, Madelein Sperlich, Madeleine Pippa Bartlett, Maia Vidal, Marie Hostead, Marie-Joelle Beaudoin, Mark De Roos, Marko Savard, Mathieu Ball, Matthew Hood, Max Evans, Maya Margit, Mechelle Bui, Meghan Lands, Mike Tilli, Mike Withers, Miliana Sesartic, Myriam Jacob-Allard, Nathaly Arraiz, Nathan Brown, Ngoc-An Trinh, Nianne Brophy, Nicolas Thayler, Olivia Mew, Paul Frigon, Phillippe Leonard, Pier-Anne Marcier Tremblay, Pier-Yves Larouche, Rachel Shaw, Renata Sielecki, Rio Mitchell, Roger St-Laurent, Ryan Levy Amador Leonoras, Sacha Ratcliffe, Sadaf Hakimian, Samuel Ferguson-Sharpe, Sarah Kay Maston, Sarah Maloney, Sarah Quinn, Sarina Rahman, Sean Orena, Sek Chee Lynn, Shannon Lucky, Shereen Soliman, Sherif Taalab, Shoshana Walfish, Simon Chung, Simon Drouin, Simon M. Benedict, Sophia Burke, Sophie Edell, Stephanie Beaulieu, Stephanie Bokenfohr, Stephanie Graidica, Stephanie Lau, Stephen Marie Rhodes, Steven Lee Rachel, Stu Pearce, Sue Mcintyre, Syndey Satorsky, Tara Chartrand, Thea Govorchin, Thea Jones, Tiffany Moore, Tim Casson, Tracy Briscoe, Valeire Ngo, Vanessa Kneale, Vincent Chevalier, Vincent Drolet, Véronique Vallieres, Zoe Ducharme, Zoe Lepiano, Zoe Yuristy & Zuzena Sevcikova",
      facilitators:
        "Andrea Saez, Angela Lafontaine, Anna Edell, Antoine Levesque, Chloé Desjardins, Devon Behelak, Elise Pineda, Ella Fox, Frédéric Barretto, Imca Student Collective, Jacynthe Lafontaine, Jon Yu, Julie Fournier-Lévesque, Kevin Bertram, Mariam Arbus, Nick Younes, Paige Mclachlan, Patrick Lloyd Brenman, Rachel Crummay, Rhea Nelken, Robert Vitulano, Rosie Prata, Sara Lawlor, Sean Yendrys, Tess Edmonson, Victoria Carassco & Zoe Sharpe",
    },
    pdf: `${pdf2009}`,
    images: "slideshow2009",
  },
  {
    id: 2008,
    participants: {
      exhibitionscoordinator:
        "Hannah Macdonald, Joshua Barndt, Stephanie Hope & Harley Smart",
      communications: "Amber Berson",
      design: "Harley Smart & Bridget Moser",
      media: "Isabelle Salas",
      technician: "Matthew Goerzen & Brigitte Schuster",
      other:
        "Anne Bertrand, Carol Becker, Karen Spencer, Karen Trask, Michelle Lacombe,Sylvie Lachance, Julie Johnston, Luke Correia-damude, Scott Macleod, Rachel Van Fossen, Jahsun, JP King, Anika Henry, Jim Bell & Philippe Battikha",
      artists:
        "A. Alsip, A. Bukojemsky, A. Draghici, Adrienne Mak, Alanna Lynch, Alexandra Mills, Ali El-Darsa, Allison Elizabeth Burns, Allysha Larsen, Alzbeta Jaresova, Amelie Brindamour, Ampersand, Amy Blackmore, Amy Kitz, Amélie Garretson-Persans, Andreej Pijat, Andrew Velazques, Andrij Radio, Angele Lafontaine, Anika Henry, Anna Luisa Daigneault, Anna Wilkinson, Anthony Vrakotas, Antione Duhamel, Antoine Levesque, Apex Ensemble, Avalon Fotheringham, Ayesha Hameed, Barbara Zemelka, Beatriz Herrera, Blingmod + Hatchmatik, Boys Who Say No, Bridget A. Moser, Bronwen Moen, C. Deetjen-Woodward, Caitlin Livingston, Canopy Breaks, Cantria Tram, Carmen Cartterfield, Carmen Ruiz, Caroline Bergeron, Caroline Vallieres, Catherine Lepine-Lafrance, Catherine Turcot, Cecils Ground, Cecily Dower, Chloe Desjardins, Christine Aguilar, Christopher Bass, Claire Dumoulin, Claire Forsyth, Claude Grenier, Claudia Bruneo, Claudia Chan Tak, Concordia Big Band, Daniel Eshpeter, Daniela Ansovini, David Ace Dean, David Albert-Toth, David Blackwell, David Di Giovanni, David Drury, David Morris, David Raver, David Saul Abraham, Deputy Sheriff, Dominiq Alexander, Douglas Moffat, Dukes Of The Archipelago, El Kamino, Elif Saydan, Elise Pineda, Elizabeth Gelinas, Emilie Lacroix-bechard, Emily Comeau, Erik Osberg, Erin O'donnell, Esther Splett, Eve Majzels, Florence Sicotte-larose, Gabriela Ana Lim, Genevieve Gallant, Ghislain Poirier, Gloria Caballero, Greg Vodden, Guillaume Boudrias-Plouffe, Hannah Kang, Heather Davis, Hubert R. De Roy, Hyekyong Yun, Innah Park, Iona Fournier-Tombs, Ivan Rubio, J. Bembridge, JP King, Jackson Darby, Jackson Dirby, Jackson Macintosh, Jae Ok Lee, Jakub Kozanecki, Jama De Jong, Jan Ollner, Jannick Deslauriers, Jaremy Dabrowski, Jasmine Bakalarz, Jason Desnoyers, Jason Milan Ghikadis, Jean Sebastien Gauthier, Jenn Doan, Jenny Gag, Jenny Schade, Jessica Watchorn, Jessie Gordon, Jj Levine, John B. Coy, Jon Martin Savard, Jorge Zavagno, Joshua Jones, Joshua Noiseux, Juan Ortiz-Apuy, Julia Inniss, Julie Fournier-Levesque, Julien Ceccaldi, Kamila Grygorczyk, Kandall Zier, Kandis Friessen, Kaori Furuta, Karen Lampcov, Karin Zuppiger, Katherine Earle, Katherine Ying, Katie Jung, Keren Epstein, Kerri Flannigan, Kimberly Bartczak, Kit Malo, Lana Helene Jamieson, Lara Kramer, Larissa Diakiw, Lauqa Maccauley, Lauren Weisz, Laurie King, Lea Brouseau, Leslie Smith, Lysanne Bellmare, Lysanne Picard, M. Beaulieu, Madeleine Matsson, Magalie Han Hung Pew, Maia Vidal, Maria Hoicka, Maria Simone, Mariane Bourcheix-Laporte, Marianna Desjardins, Marie Chantal Gelinas, Marilyne Blais, Mark Harris, Marko Savard, Mathieu Lavoie, Matthew Goerzen, Matthew Hood, Matthew Waddell, Maude Pilon, Metanoiia, Micael Bishop, Michaela Chander, Michaela Dicesare, N. Nobin, Nab Ensemble, Naomi Lasry, Nathalie Dion, Nathan Mcninch, Nazli Sadeghilar, Nick Nguyen, Nick Prescott, Nimalan Yoganathan, On Bodies, Osvaldo Ramirez Castillo, P. Baldion Fischer, P. Kradowaki, Pablo Rodrigues, Parissa Mohit, Penguin Funk, Philippe Battikha, Raed Moussa, Rio Mitchell, Robbie Murphy, Sara F. Tremblay, Sarah Albu, Sarah Brosnard, Sarah Pupo, Sarah Zakaib, Serial Numbers, Shadow Huard, Shannon Harris, Sherif Taalab, Sinbad Richardson, Sonya Stefan, Sylvie Bondy, The Captains, The Throw Collective, The Zardozians, Thea Jones, Todd Griffiths, Trevor Barton, Tytus Hardy, Valerie Boxer, Valerie Khayat, Valerie Sangin, Vanessa Kneale, Veronique Gaudrea, Vincent Charlebois, Vincent Chevalier, Vincent Drolet, Walter Scott, Woodhands, Zach Hetzman, Zachary Whittaker, Zoe Kirk Gushowaty, Zoe Yuristy & Zuzana Burianova",
      facilitators:
        "Adele Flannery, Amanda Mancini, Andrea Wong, Anika Kenry, Apathy Is Boring, Betty Jo Mccarville, Brett Bergman, Cait Macintosh, Caitlyn Milot, Cassandra Witteman, Catherine Cournoyer, Catherine Rosine Jodoin, Catherine Tremblay, Catherine Wakim, Charmain Bynoe, Gwynne Fulton, Jim Bell, John Naccarato, Kyla Chevrier, Leah Self, Marc Griebel, Mathieu Murphy-Perron, Mily Rose Michaud, Myriam Carrier, Nicole Legault, Rosie Prata, Sacha Miller, Sarah Courtemance, Sarah Nesbitt, Sheena Ellison, Shereen Soliman, Silvia Sorbelli, Susan Kennedy, Tim Moxam, Valerie Lesage, Video Party & Yael Filipovic",
    },
    pdf: `${pdf2008}`,
    images: "slideshow2008",
  },
  {
    id: 2007,
    participants: {
      exhibitionscoordinator:
        "Karin Zuppiger, Celia Perrin Siadrous & Jim Perrin Siadrous",
      communications: "Erica Brisson",
      design: "Caitlink Durlak",
      media: "Ximena Holuigue",
      technician: "Odebo Extian-babiuk",
      web: "Kathryn Errington",
      other: "Matt Waddell, Harley Smart, Gwynne Fulton",
      artists:
        "Adam Havie, Adrian Dilena, Adrienne Mak, Alexandre Leduc, Anastasiya Dyka, Andie Haltrich, Annette Littman, Annie Briard, Ayesha Hameed, Blake Hargreaves, Brent Freedman, Brian Hunter, Bridget A. Moser, Bryan Brazeau, But Lau Lai, Caitlin Livingston, Camille Altay, Carl Osberg, Catherine Beau-Ferron, Catherine Tremblay, Cayla Albrecht, Chantal Taylor, Chris Nixon, Chris Strickland, Claire Dumoulin, Cody Redmond, Corina Kennedy, Daniel Baudin, Danielle Lewis, David Laquerre, David Seitz, Elif Saydam, Elisabeth Faeroy Lund, Elvina Rafi, Emily Rose Michaud, Emily Wang, Erin Stewart, Eve Majzels, Gabrielle Martin, Galadriel Rosen, Geraldine Rod, Hana Mcdonald, Hanna Kang, Helene Cenedese, Hoda Adra, Hyekyong Yun, Hyo-Min Park, Hélène Brousseau, Iliana Antonova, J. Peter King, Jacinthe Robillard, James Hamilton Harding, Jan Ollner, Janine Littman, Jannick Deslauriers, Jasmine Bakalarz, Jason Harvey, Jenny Gag, Jim Bell, Jj Levine, Johanna Heldebro, John Player, Josh Noiseux, Juan Apuy, Juan Ortiz, Justine B. Tétrault, Karen Zalamea, Karin Zuppiger, Karine Cossette, Kate Hampel, Katerina Sokyrko, Katie Jung, Katie Mccain, Kevin Betram, Khadija C. Baker, Laura Dutton, Laurie Kang, Leah Newbold, Lesley Smith, Louis Perrault, Lydia Lockett, Maghan Maike, Marc Knowles, Mark Harris, Matt Goerzen, Michael Love, Michale Bishop, Miliana Sesartic, Nader Hassan, Natassja King, Nathaly Arraiz, Nick Prescott, Noah Van Der Laan, Olivia Pojar, Patrick Dyer, Paul Jantzi, Philippe Bathka, Rablo Pordigues, Radeq Brousil, Raed Moussa, Rebecca St.John, Ryan Elliot, Sara Taylor, Sarah Bronsard, Shannon Linde, Sheena Hoszko, Shira Gellman, Sonia Pardis, Stephanie Bernard, Stephanie Bokenfohr, Steve Mcfarland, Summer Gerghty, Tanya Ross, Tao Gu, Valerie Syposz, Vanessa Disler, Velérie Lesage, Veronika Szkudlarek, Vincent Charlebois, Walter Scott, Yoojung Kim & Étienne Lafrance",
      facilitators:
        "Aird Macinnes, Andrea Velasquez, Brett Bergmann, Briana Sadler, Caitlink Durlak, Carolyn Beattie, Ed Janzen, Ella Fox, Erica Brisson, Erik Alexander Percival Osberg, Gina Badger, Jason Last, Jennifer Crane, Joshua Barndt, Larissa Holmes, Margaret Haines, Maria Salazar, Megan Bradley, Merriah Lamb, Myriam Carrier, Myriam Jacob-allard, Noor Sobhan, Renée Sills & Stephanie Geracitano",
    },
    pdf: `${pdf2007}`,
    images: "slideshow2007",
  },
  {
    id: 2006,
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
      artists:
        "Aanie Tetrault, Aaron Reaume, Adam O'callaghan, Alexa Helbig-Berghoff-Auel, Alexis Vallee-Charest, Amber Vermille, Andrew Mccallum, Anika Henry, Bea Parsons, Bionic, Breanna Fabbro, Brian Hunter, Bridget A. Moser, Bronson Zorawinska, Bruno Julie, Caitlin Livingston, Carlo, Casey Woodfine, Celine Seman, Christina Musacchio, Claude Grenier, Claudia Fournier, Claudine Kollmann, Cole Alexandra, Cyan, Dandi Wind, Daniel Baudin, David Morris, Demonique Ferraton, Dj Jasmine, Dj Rue, Elizabeth Bruce, Elvina Rafi, Emily Wang, Erica Brisson, Erica Mendritzki, Erin Stewart, Etienne Lafrance, Flower Lunn, Flynt Annis, Frédérique Ulman-Gagné, Ghetto Pony, Graham Hall, Hanah Kang, Helene Brousseau, Helene Cendese, Hermann Truong, Isabelle Mainville, Jennifer Laoun-Rubenstein, Jennifer Schuler, Josh Usheroff, Julia Gregory, Julie Gladstone, Jun Hye Kyong, Justine Bourguignon-Tétrault, Karin Zuppiger, Kate McCain, Kate Puxley, Katie Jung, Keterin Juretic, Khadija C. Baker, Kyla Chevrier, Lauren Goldman, Leah Gold, Leah Self, M. Martin, Madeline Richards, Maeghan Banks, Marc-Alexandre Rheinham, Maria Joanna, Marissa Largo, Matthew Thomson, Melodie Pregent, Michelle Furlong, Mona Sharma, Natalai Nehm, Nelly Lim, Nick Prescott, Niloufar Afnan, Patrick Dyer, Philippe Brunet, Rachel Dhawan, Rachel Levee, Raed Mousa, Renee Sills, Sarah Byrnes, Sarah Chenevert-Beaudoin, Shawn Kuruneru, Shaya Golparia, Sinbad Richardson, Sunday Sinners, Susan Westbrook, Team Myron, Terry Boisvert, The Adam Brown, The Captains, The Captains, The Diamond Dogs Diamond, The Scamburglar, The World Provider, Trevor Kiernander, Valary Haines, Vanessa Mckernan, Veronika Szkudlarek & Zsuzsanna Kozak",
      facilitators:
        "Alexis Ronse, Andria Hickey, Angela Potvin, Anita Khieu, Anne-Cecile Grunenwald, Ben Besharah, Chantal Musgrove, Erica Schiozaki, Hallie Zurawai, Jamie Ferguson, Jennifer Crane, Julie Wajcam, Katharine Childs, Lizz Dunlop, Mathieu, Michael-oliver Harding, Nicolas Hammond, Shannon Linde, Sigrun Jenny Bardadottir, Silvia Sorbelli, Sophie Glowa, Souphie Bougeard & Suzanne Hood",
    },
    pdf: `${pdf2006}`,
    images: "slideshow2006",
  },
  {
    id: 2005,
    participants: {
      exhibitionscoordinator:
        "Sunshine Frere, Trevor Kiernander & Susan Westbrook",
      communications: "Laurie Kormeluk, Emily Shanahan & Corina Kennedy",
      design: "Bill Matthews & Daniel Campbell",
      media: "Robbie Sinclair & Rebecca St.John",
      photography: "Eysl Park",
      technician: "Andrew Lowther McCallum",
      other: "Jennifer Belfo, Chris Godziuk & Mathieu Conway",
      artists:
        "Abby Bowls, Abdul Hadi, Ailis Courane, Alexa Helbig, Alexander Ortiz, Alexandra Kramer, Alexis Williams Zuruba, Allie Blakely, Allison Freeman, Allison Moore, Allison Trumble, Amber Albrecht, Andreas Medritzki, Anita Schoepp, Annabelle Agnew, Annie Briard, Arielle De Pinto, Assaf Shatil, Benjamin Hendeson, Blue Dance, Brandan Reed, Brent Mcnair, Brian Hunter, Carla Benzan, Carlo Spidla, Chantal Musgrove, Christine Germain, Christine Mockett, Corina Kennedy, Daniel Schechtman, Danielle Dufort, Dave Weatherall, David King, David Laquerre, David Morris, Dessay Harhay, Dominique Feraton, Eduardo Menz, Elizabeth Anis Moubarak, Emily Shanahan, Etienne Lafrance, Francois Lalonde, Frederique Ilman-Gagne, G. Ulgen Semerci, Genevieve Allard, Gilda Boffa, Gillian Wilson, Heidi Daehler, Ian Hundt, J. Diamonds, Jacinthe Robillard, Jack Geddes, Jacob Aspier, Jasa Baka, Jason Gondziola, Jedidiah M. Loeks, Jennifer Baldvins, Jennifer Schuler, Jessica Klein, Jim Mullan, Joe Grass, John Podoba, Joshua Zubot, Julie Gladstone, Julie Simoneau, Justine Ricard, Justyne Dawidowicz, Kate Puxley, Katerina Sokyrko, Kathleen Weldon, Kathryn McCain, Kathryn Ottolino-Perry, Kendra Ballingal, Kyd Campbell, Leah Gold, Leigh Gillam, Liuyi Wang, Lydia Lockett, Lyndl Hall, Lynn Worrel, Madeline Matsson, Maria-Helena Pacelli, Mark Knowles, Maryse Goudreau, Mathieu Tessier, Melissa Ann Ledo, Melissa Hidic, Melissa Largo, Melissa Matos, Mercedes Larosa, Meredith Kynoshyta, Merlin Ettore, Micael Bilodeau, Mika Shannon, Mirana Zuger, Myles Broscoe, Mysles Brisco Sundus, Natalia Perez, Natalie Nehm, Nico Dann, Nicole Whitson, Nino Menard, Owain Lawson, Owen Eric  Wood, Painting & Drawing Association, Pamela Cantor, Patricia Garon Sayegh, Patricia Payne, Patrick Gregoire, Paul Vincent, Philips Karmeet, Rachel Sheehan, Raed Mousa, Renee Sills, Robert Winters, Rodrigo Marti, Russel Tyler, Sabelle Duguay, Sarah Dobranowski, Scechtman, Senem Goctu, Seth Fraser, Shawn Kurunery, Shawnee De Gruchy, Siamelk Delzendeh, Simone Rochon, Sinbad Richardson, Sonja Rainey, Sonomi Tanaka, Susan Wolf, Tamahin Mehani, Tanya Andrews, Tatciana Woolam, The Mole, Tiffany Main, Tim Sutton, Treva Petch, Ufuk Gueray, Vera Maria Zissis, Victor Gutierrez-Campeau, Ronnie Lapid & Victoria Stusiak",
      facilitators:
        "Alexandra West, Andrew Lother Mccallum, Bea Parsons, Ben Besharah, Chantal Wong, Christine Bachinsky, Claudine Kollman, Denis Bell, Erin Silver, Ivan Tanzer, Jaime Verk, Jessica Klein, Josh Usheroff, Katie Lyle, Lauren Goldman, Louisa Santos, Małgorzata Barbiarz, Raphael Ettore, Rose Tse, Rosemary Scanlon, Ruby Kato Atwood, Sheena Hoszko, Sunshine Frere, Tobey Cygman, Vaneza Callejas & Viola Mcgowan",
    },
    pdf: `${pdf2005}`,
    images: "slideshow2005",
  },
  {
    id: 2004,
    participants: {
      exhibitionscoordinator:
        "Isabelle Lemaire, Emily Pearlman, Allison Moore, Rachel Dhawan & Aaron Reaume",
      communications: "Sarah Glanville, Pamela Cantor, Melissa Gruber",
      humanresources: "Sacha Geciova",
      web: "Soonok Min",
      other: "Shannon Jameson, Sunshine Frere, Shawn Mackniak & Victor",
      artists:
        "Abbas Akhavan, Adam Sommrfeld, Alberic Auteneche, Alex Mannarelli, Alexa Helbig, Alli Blakley, Allison Moore, Andea Vander Kooij, Andreas Rutkauskas, Andrew Turner, Anh Minh Truong, Arianne Garcia-Fialdini, Armen Boudjikanian, Audrey Lavallee, Ben Read, Benoit Charra, Brett Kashmere, Brigitte Robert, Bruno Gauthier, Cameron MacLeod, Can Ryoko, Carla Benzan, Cassie Norton, Cat Reyto, Catherine Carmichael, Celia Perrin Sidarous, Chih-Chien Wang, Chris Godziuk, Christine Bachinsky, Christine Bourget, Cindy Lopez, Coco Huang, Conan Masterson, Daniel Bernard, Danielle Shatz, Darren Ell, David Mitchell, Declan O’Driscoll, Devorah Neumark, Edita Hadravska, Elizabeth Anis Moubarak, Elizabeth Idewu, Emily Hermant, Emma Curtis, Fionna Annis, France Perras, Freddy Hehewerth, Frederique de Montblanc, Fronc Ng, Genevieve Chevalier, Geoff Mattie, Gilda Boffa, Guillaume Chiasson, Hannah Munneke, Heather Cameron, Heather Keith, Heather Richards, Hugo L. Casahak, Ian Campbell, Irene F. Whittome, Isabelle Lemaire, Ivry Baumgarten, Jacqui Sischy, Jane Cundy, Jasmin Belisle, Jean-Michel Gavreau, Jean-Sébastien Gauthier, Jeanie Riddle, Jena Pettet, Jess Hayne-Lavell, Jessie Kotler, Jie Zhou, Joanna Oldman, Johanna Autin, Johanna Rosolen, Josh Usheroff, Juliana Pivato, Julie Desbiens, Justine Litynski, Justine Ricard, Kasia Ignatowska, Katie Lyle, Katrina Cunliffe, Kevin Finlayson, Kevin Fraser, Khrys Crawley, Kim Simard, Kirsten Boehm, Klara Pokrzywko, Krystyna Szadkowski, Laureen Stokes, Lisa Fotheringham, Lora Sokolova, Luke Painter, Lyndl Hall, Marcel Hebert, Marianna Marta Milhorat, Marie Michele, Marieve Robitaille, Marilyn St.Georges, Meg Walker, Mei Zhi, Melissa Faguy, Meredith Carruthers, Michael Doerksen, Michele Martin, Michelle Riendeau, Mirelle Tawfik, Miriana Zugere, Morag Kyd, Nadine Telier, Natalie Finklestein, Natalie Simmons, Natalja Scerbina, Nick Pye, Nicolas Palacios-Hardy, Nicole Southey, Niki Boghossian, Nino Menard, Patrick Doan, Patrick Greguire, Paul Vincent, Pawal Pogorzelski, Perr Ricq, Peter Crnokrak, Rachel Sheehan, Rebecca Diehl, Robert Truszkowski, Rosemary Scanlon, Russ Cooper, Ryan Costello Jr., Samara Chadwick, Sarah Butler, Sarah Ciurysek, Sarah Fischler, Scott McFaden, Sebastian Hutchings, Shaunna Dunn, Shawn Kuruneru, Sheila Pye, Sheldon Woloshyn, Simon Johns, Simon Reader, Sofi Brazzeal, Sonja Lessard, Soonok Min, Stephanie Cheng, Stephen Arkilanian, Sun-Hye Hwang, Sunshine Frere, Susan Westbrook, Suzanna Braun, Sydney Hart, Sylvia Arkilanian, Tariza Bower, Tatciana Woolam, Terryll Loffler, Tetsuomi Anzai, The Painting and Drawing Association, Theresa Sapergia, Tiffany Main, Toby Slippert, Trevor Kiernander, Troy Rhodes, Tulia Law, Ufuk Gueray, Van Royko, Vani Gabrio, Vidya Lutchman, Willie Brisco, Yann Bernaqutz, Yazmina Reza & Yi Zhang",
      facilitators: "Allison Moore",
    },
    pdf: `${pdf2004}`,
    images: "",
  },
  {
    id: 2003,
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
      artists:
        "Aaron Reaume, Adair MacGregor, Adrew Turner, Alanna Lynch, Alex Contreras, Alex Megelas, Ali Emadzadeh, Ali Shaker, Alison Chisholm, Alison Cordner, Allen McEachren, Alli Blakely, Alli Star, Allison Moore, Allysha Larsen, Amy Drover, Amy Loder, Amy Schwartz, Andrew Watson, Anna Fahr, Angela Paez Ruiz, Angie Cheng, Annabelle D’Artois, Annabelle Savard, April Ford, Arianna Garcia-Fialquis, Audrey Lavallee, Ben Lancaster, Ben Read, Benjamin Rodger, Bjanka Murgel, Brendan Reed, Catherine LeBlanc, Chantal Picard, Chiggy, Chloe Fortin, Chris Hayes, Christiane Bourget, Christine Davis, Christine Gwahi, Claude Fortin, DJ B. Carriere, DJ Goser, DJ Mat Legrind, Dana DeKuyper, Dana Michel, Danielle Anisef, Danny Coleman, David Jurasek, David Mitchell, David Pyler, Design Art Student Association, Elizabeth Emberely, Elizabeth Hazell, Elsianne Caplette, Emilie Caron, Emily Stoney, Emma Curtis, Eric Lawrence, Erica Shapiro, Felix Lachance, Francois Carignan, Galit Mastai, Geoff Appelbaum,  Genesis P. Orrige, Goldenboy, Heather Cameron, Iranian Students Society, Isabelle Lemaire, Jason Corbett, Jason Wasserman, Jean-Yves Hamel, Jeff Cowan, Jen Anisef, Jennifer Annis, Jenny Lee Craig, Jessica Chang, Jessica Tremblay, Jessie Kotler, Jim Morris, Johanna Autin, Joe Paceco, John Stewart, Julie Anne Cote, Kaitlin Clipsham, Kajin Goh, Karine Fournier, Karissa Cove, Katarzyna Ignatowska, Kate Richardson, Kelly Best, Kerry Thompson, Kevin D’Abramo, Kimberly Fuller, Kimnven Maciej, Krista Bursey, Kristen Holinsky, Kristen Parker, Kyle Fostner, Lael Stelick, Larry R. Lamont, Laura Moore, Lauren Gould, Lauren Maclean, Lee Reid, Lisa Sookraj, Louis Plourde, Luka Fantagrassi, Luna Allison, Lynn Janigan, Maery Morrison, Marcelo Coehlo, Marianne Desjardins, Mark Evin, Melissa Faguy, Melissa Weigel, Myles Broscoe, Myra Shuster, Namchi Bazar, Natalie Reis, Nick Brazao, Oliver Adou, Owain Lawson, Painting and Drawing Association, Paul Johnston, Perrin Martin, Rachel Robertson, Rob Nowacki, Roberto Santaguida, Rosemary Gagne, Roxy Massey, Sarah Earle, Seamus Cowan, Sebastian Gauthier, Serene Daoud, Shawn Mackniak, Simon Reader, Stephane Sotto, Stephen Allin, Stephen Helsing, Steven Clark, Suzanna Smith, Sylvain Leclerc, Sylvia Wilson, Taila Weisz, Tariza Bowyer, Teoma Naccarato, Think Twice, Tiffany Main, Timothy Rodrigues, Trevor Kiemander, Tyler Shaw, Vahe and Danathe belly dancer, Valerie Buddle, Wes Hatch & Zoe Letendre",
      facilitators:
        "Allen Mceachern, Allison Moore, Corey Mcfadden, Heather Richards, Lauren Bunker, Maddalena Fuller, Melissa Gruber, Natalie Reiss, Sacha Geciova, Shahrzad Abidi & Shawn Mack",
    },
    pdf: `${pdf2003}`,
    images: "slideshow2003",
  },
  {
    id: 2002,
    pdf: `${pdf2002}`,
    images: "",
    participants: {},
  },
  {
    id: 2001,
    participants: {
      financialcoordinator: "Nathalie Thibeault",
      exhibitionscoordinator: "Angela Vu",
      communications:
        "Michael Golden, Julie Fowler, Ruthie Sumiko Tabata, Yael Wand & Declan O'driscoll",
      design: "Colin Copeland, Yael Wand, Ruthie Sumiko Tabata, Erika Eggena",
      web: "Beth Holden",

      facilitators:
        "Abigail Clarke, Carey Dodge, Julie Fowler, Kelly Wood, Melanie Authier, Michael Farnan, Mikolaj Ziolowski, Shawn Mackniuk, Stacey May Fowles & Yael Wand.",
      artists:
        "Aaron Doyle, Aaron Shragge, Abha Singh, Abigail Clarke, Alan Malamud, Alchemy Theatre, Alyson Vishnovska, Amada Wurts, Amanda Kellock, Amy Loder, Amy Wong, Andrea Cochrane, Andrew Malamud, Andrew Tay, Angela Colangelo, Anna Sikorksi, Annabelle Chvostek, Brandon Bernstein, Bronia Sussman, Carlyle Williams, Caroline Giguere, Caroline Laroche, Cave Productions, Choir Of Reconciliation, Christina Sciascia, Courtney Lohnes, Cynthia Dinan-Mitchell, David Jolin, David Jurasek, David Stulberg, Ekidan Girls, Elisa Angelone, Emily Follet-Campbell, Emily Lemay, Emily Pearlman, Eric Boudreault, Fabien Eggena, Farncesca Nocera, Felicity Hammer, Francoise-Pierre Couture, Gabrielle Pilot, Ginger Berglund, Graham Cuthbertoon, Grant Ford, Greg Toews, Ian Gamache, Ian Hemingway, Illona Dougherty, J.S. Williams, Jared Olsen, Jason Corbett, Jay Gillingham, Jef Chipewa, Jeff Louch, Jeff St.Jules, Jeffrey Richard, Jenifer Tester, Jennifer Boire, Jenny Lin, Jessie Brugger, Jo Anna Foster, Joan Lewis-Vanwyck, Joel Miller, John Londono, John Sadoway, Jordey Tucker, Julie Keller, Karl Hearne, Katsumi Kimoto, Kaveh Nabation, Kim Maciej, Lana Turner, Laura Dudek, Laura Mcdonald, Lauren Nurse, Leslie Bernstein, Lisa Cox, Louis Plourde, Lydia Lockett, Marc Hoeppner, Marc-Antoine Goulet, Marie-Anne Verstraelen, Mark Wheaton, Marlene Bare, Marlene Charles, Matt Morin, Matt Swanson, Megan Chadwick, Megan Fischer-fleming, Melanie Shatzky, Melissa Gruber, Mia Hollander, Michael Felber, Michael Rollo, Miguel Rioux, Mikołaj Ziółkowski, Morgan Moore, Nadine Faraj, Natalie Fitzpatrick, Natasha Doyan, Nathalie Reis, Nick Common, Nicola Summer Correia Demude, Nicolas Fleming, Nina Chepurini, Paige Hanock, Parallax Theatre Troupe, Patsy Hayes, Paul G. Kajander, Philip Spensley, Phillipe Chown, Richard Parry, Robby Kuster, Robert Leeson, Robin Chemtov, Rosemary Ruedelhuber, Sabine Dieudonne, Sarah Mangle, Sarah Neufeld, Sheridan Shindruck, Sonia Haberstich, Stephan Verna, Stephen Harmelink, Sylvain Salette, Sylvia Orthwein, Tania Huerta, Teoma Naccarato, The Concordia Jazz Choir, Valerie Buddle, Veronica Charnley, Voices Of Praise Community Choir & Warren Spicer",
    },
    pdf: `${pdf2001}`,
    images: "",
  },
]
