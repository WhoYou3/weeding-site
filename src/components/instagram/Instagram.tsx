import React, { useState, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as P from "./parts"
import { ButtonSecondary } from "../../UI/UI"

interface InstagramNode {
  id: string
  localImage: {
    childImageSharp: {
      gatsbyImageData: any
    }
  }
  permalink: string
  url: string
}

interface InstagramQuery {
  allInstagramContent: {
    edges: {
      node: InstagramNode
    }[]
  }
}

interface Props {
  data: InstagramQuery
}

const Instagram: React.FC<Props> = () => {
  const trackRef = useRef<HTMLDivElement>(null)
  const [mouseDownAt, setMouseDownAt] = useState<number>(0)
  const [prevPercentage, setPrevPercentage] = useState<string>("0")
  const [tests, setTest] = useState<number>(0)

  console.log("test " + tests)

  const handleOnDown = (e: React.MouseEvent): void => {
    setMouseDownAt(e.clientX)
  }

  const handleOnUp = (): void => {
    setMouseDownAt(0)
    trackRef.current.setAttribute("data-prev-percentage", prevPercentage)
  }

  const animation = (value) => {
    trackRef.current.animate(
      { transform: `translateX(${value}%)` },
      { duration: 1200, fill: "forwards" }
    )
    const images = trackRef.current.getElementsByClassName("image")
    for (let i = 0; i < images.length; i++) {
      const image = images[i]

      image?.animate(
        {
          objectPosition: `${0 - value + 30}% center`,
        },
        { duration: 1200, fill: "forwards" }
      )
    }
    console.log(value)
  }

  const test = () => {
    setTest((prev) => {
      const updatedTest = prev - 20
      console.log(updatedTest)
      animation(updatedTest)
      return updatedTest
    })
  }
  console.log(tests)

  const handleOnMove = (e: React.MouseEvent | React.TouchEvent): void => {
    if (mouseDownAt === 0) return

    const clientX = "clientX" in e ? e.clientX : e.touches[0].clientX

    const mouseDelta = mouseDownAt - clientX

    const maxDelta = window.innerWidth / 2

    const percentage = (mouseDelta / maxDelta) * -100
    console.log(percentage)

    const nextPercentageUnconstrained = parseFloat(prevPercentage) + percentage

    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    )

    trackRef.current.setAttribute("data-percentage", nextPercentage.toString())
    setPrevPercentage(nextPercentage.toString())
    trackRef.current.animate(
      { transform: `translateX(${tests}%)` },
      { duration: 1200, fill: "forwards" }
    )

    const images = trackRef.current.getElementsByClassName("image")
    for (let i = 0; i < images.length; i++) {
      const image = images[i]

      image?.animate(
        {
          objectPosition: `${tests}% center`,
        },
        { duration: 1200, fill: "forwards" }
      )
    }
  }

  const data: InstagramQuery = useStaticQuery(graphql`
    query MyQuery {
      allInstagramContent(limit: 12) {
        edges {
          node {
            id
            permalink
            localImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              }
              url
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <P.Content>
        <P.Wrapper ref={trackRef}>
          {data.allInstagramContent.edges.map(({ node }) => (
            <P.ImageContainer draggable={false} key={node.id}>
              <a href={node.permalink}>
                <img
                  className="image"
                  src={
                    node.localImage.childImageSharp.gatsbyImageData.images
                      .fallback.src
                  }
                  alt="instaphoto"
                ></img>
              </a>
            </P.ImageContainer>
          ))}
        </P.Wrapper>
        <P.Scroll
          id="image-track"
          onMouseDown={handleOnDown}
          // onTouchStart={handleOnDown}
          onMouseUp={handleOnUp}
          onTouchEnd={handleOnUp}
          onMouseMove={handleOnMove}
          onTouchMove={handleOnMove}
        ></P.Scroll>
      </P.Content>
      <ButtonSecondary showing={true} onClick={test}>
        test
      </ButtonSecondary>
    </>
  )
}

export default Instagram
