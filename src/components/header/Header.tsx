import React from "react"
import * as P from "./parts"
import * as U from "../../UI/UI"

const Header = () => {
  return (
    <P.Header>
      <P.ContentWrapper>
        <P.Title>
          Wasza miłość, Nasza praca <br /> Twój niezapomniany ślub
        </P.Title>
        <U.ButtonPrimary>Sprawdź Ofertę</U.ButtonPrimary>
      </P.ContentWrapper>
      <P.Shadow />
    </P.Header>
  )
}

export default Header
