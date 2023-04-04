import React, { useState, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { TextWrapper } from "../../UI/UI"
import { AiOutlineClose } from "react-icons/ai"
import { GrCopy } from "react-icons/gr"
import * as P from "./parts"
import { GatsbyImage } from "gatsby-plugin-image"

interface queryProps {
  allDatoCmsGallery: {
    nodes: {
      photo: photosProps
    }[]
  }
}
interface photosProps {
  gatsbyImageData: any
  url: string
  originalId: string
  index?: number
}

const Gallery = () => {
  const [showSpecificImage, setShowSpecificImage] = useState<boolean>(false)
  const [showCopied, setShowCopied] = useState<boolean>(false)
  const [specificImage, setSpecificImage] = useState<photosProps | null>(null)
  const data = useStaticQuery<queryProps>(query)
  const photos = data.allDatoCmsGallery.nodes
  const inputRef = useRef<HTMLInputElement>(null)

  const openSpecificImage = (dataPhoto: photosProps) => {
    setShowSpecificImage(true)
    const specificPhotoValues = photos.find(
      (photo) => photo.photo.originalId === dataPhoto.originalId
    )
    const indexOfSpecificPhoto = photos.indexOf(specificPhotoValues)
    specificPhotoValues.photo.index = indexOfSpecificPhoto
    setSpecificImage(photos[indexOfSpecificPhoto].photo)
  }
  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value)
    }
    setShowCopied(true)
    setTimeout(() => {
      setShowCopied(false)
    }, 500)
  }
  {
    if (typeof document !== "undefined") {
      showSpecificImage
        ? (document.body.style.overflowY = "hidden")
        : (document.body.style.overflowY = "visible")
    }
  }

  return (
    <div>
      <P.TextWrapper>
        <TextWrapper>
          <h3>Galeria</h3>
          <p>
            Obejrzyj nasze piękne aranżacje sali, bukiety i dekoracje, a także
            niezapomniane momenty z imprez weselnych, które udało nam się
            zorganizować dla naszych klientów. Przekonaj się, że warto nam
            zaufać i zobacz, jak możemy uczynić Twój ślub niezapomnianym
            wydarzeniem!
          </p>
        </TextWrapper>
      </P.TextWrapper>
      <P.ImageContainer>
        {photos.map((photo) => (
          <P.Image
            onClick={() => {
              openSpecificImage(photo.photo)
            }}
            key={photo.photo.originalId}
          >
            <GatsbyImage
              image={photo.photo.gatsbyImageData}
              alt={photo.photo.url}
            />
          </P.Image>
        ))}
      </P.ImageContainer>
      {showSpecificImage === true ? (
        <P.Wrapper>
          <AiOutlineClose onClick={() => setShowSpecificImage(false)} />
          <P.SpecificImage>
            {
              <GatsbyImage
                image={specificImage.gatsbyImageData}
                alt={specificImage.url}
                className="specificImage"
              ></GatsbyImage>
            }
            <P.Address>
              <input ref={inputRef} value={specificImage.url} />
              <GrCopy onClick={handleCopy} />
              {showCopied ? <p>Copied!</p> : null}
            </P.Address>
          </P.SpecificImage>
        </P.Wrapper>
      ) : null}
    </div>
  )
}

export default Gallery

export const query = graphql`
  query {
    allDatoCmsGallery {
      nodes {
        photo {
          gatsbyImageData(placeholder: BLURRED)
          url
          originalId
        }
      }
    }
  }
`
