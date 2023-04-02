import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as P from "./parts"
import * as U from "../../UI/UI"

interface HeaderProps {
  sentence1?: string
  sentence2?: string
  sentence3?: string
  show?: boolean
  backgroundImage?: string
  textPlace?: string
  test?: any
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
      {backgroundImage === "image1" ? (
        <StaticImage
          style={{ position: "absolute", top: "0" }}
          src="../../assets/image/header-photo.jpg"
          placeholder="blurred"
          alt="header"
          className="backgroundImage"
        />
      ) : null}
      {backgroundImage === "image2" ? (
        <StaticImage
          style={{ position: "absolute", top: "0" }}
          src="../../assets/image/AboutHeaderBackground-min.jpg"
          alt="header"
          placeholder="blurred"
          className="backgroundImage"
        />
      ) : null}
      {backgroundImage === "image3" ? (
        <StaticImage
          style={{ position: "absolute", top: "0" }}
          src="../../assets/image/OfertHeader.jpg"
          alt="header"
          placeholder="blurred"
          className="backgroundImage"
        />
      ) : null}

      <P.ContentWrapper textPlace={textPlace}>
        <P.Title>
          {sentence1} <br /> {sentence2} <br /> {sentence3}
        </P.Title>
        <Link to="/oferta">
          <U.ButtonPrimary showing={show}>Sprawdź Ofertę</U.ButtonPrimary>
        </Link>
      </P.ContentWrapper>
      <P.Shadow />
    </P.Header>
  )
}

export default Header
