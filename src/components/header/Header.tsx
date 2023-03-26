import React from "react"
import * as P from "./parts"
import * as U from "../../UI/UI"

interface HeaderProps {
  sentence1?: string
  sentence2?: string
  sentence3?: string
  show?: boolean
  backgroundImage?: string
  textPlace?: string
}

const Header: React.FC<HeaderProps> = ({
  sentence1,
  sentence2,
  sentence3,
  show,
  backgroundImage,
  textPlace,
}) => {
  return (
    <P.Header backgroundImage={backgroundImage}>
      <P.ContentWrapper textPlace={textPlace}>
        <P.Title>
          {sentence1} <br /> {sentence2} <br /> {sentence3}
        </P.Title>
        <U.ButtonPrimary showing={show}>Sprawdź Ofertę</U.ButtonPrimary>
      </P.ContentWrapper>
      <P.Shadow />
    </P.Header>
  )
}

export default Header
