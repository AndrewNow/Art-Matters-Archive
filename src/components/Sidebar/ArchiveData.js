import React from "react"
import FAQDropDown from "./FAQDropDown"

const ArchiveData = [
  {
    id: "2021",
    team:
      "HELEN ADILIA ARCEYUT-FRIXIONE, STEPHANIE LAOUN, SEAN YENDRYS, STEPHANIE BOKENFOHR, MATTHEW JAMES, TARA DUPUIS, ELGIN-SKYE MCLAREN, GILLIAN MCDONALD, ZOE KOKE,SARAH-EVE TOUSIGNANT, MARIE-CATHERINE BUJOLD, STEFAN SPEC, JULIE JOHNSTON",
  },
  {
    id: "2020",
    team: "Steve Greene",
  },
  {
    id: "2019",
    team: "Steve Greene",
  },
  {
    id: "2018",
    team: "Steve Greene",
  },
  {
    id: "2017",
    team: "Steve Greene",
  },
  {
    id: "2016",
  },
  {
    id: "2015",
  },
  {
    id: "2014",
  },
  {
    id: "2013",
  },
  {
    id: "2012",
  },
]

const FAQDropDownMap = () => (
  <>
    {ArchiveData.map(data => (
      <FAQDropDown id={data.id} team={data.team} answer={data.answer} />
    ))}
  </>
)

export default FAQDropDownMap
