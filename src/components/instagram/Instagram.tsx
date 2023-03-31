import React, { useState, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as P from "./parts"

interface InstagramNode {
  id: string
  localImage: {
    childImageSharp: {
      gatsbyImageData: any
    }
  }
  permalink: string
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

const Instagram: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null)
  const [mouseDownAt, setMouseDownAt] = useState<number>(0)
  const [prevPercentage, setPrevPercentage] = useState<string>("0")
  console.log("testuje")

  const handleOnDown = (e: React.MouseEvent): void => {
    setMouseDownAt(e.clientX)
  }

  const handleOnUp = (): void => {
    setMouseDownAt(0)
    trackRef.current.setAttribute("data-prev-percentage", prevPercentage)
  }

  const handleOnMove = (e: React.MouseEvent | React.TouchEvent): void => {
    if (mouseDownAt === 0) return

    const clientX = "clientX" in e ? e.clientX : e.touches[0].clientX

    const mouseDelta = mouseDownAt - clientX

    const maxDelta = trackRef.current.offsetWidth

    const percentage = (mouseDelta / maxDelta) * -100

    const nextPercentageUnconstrained = parseFloat(prevPercentage) + percentage
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    )

    trackRef.current.setAttribute("data-percentage", nextPercentage.toString())
    setPrevPercentage(nextPercentage.toString())
    trackRef.current.animate(
      { transform: `translateX(${nextPercentage}%)` },
      { duration: 1200, fill: "forwards" }
    )

    const images = trackRef.current.getElementsByClassName("image")

    for (let i = 0; i < images.length; i++) {
      const image = images[i]

      const img = (image as HTMLElement).querySelector("img")
      const currentImage = img
        ?.closest(".gatsby-image-wrapper")
        ?.querySelector("img")

      currentImage.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      )
    }
  }

  const data: InstagramQuery = useStaticQuery(graphql`
    query {
      allInstagramContent(limit: 10) {
        edges {
          node {
            id
            localImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
            permalink
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
            <P.ImageContainer
              onDragStart={(e) => e.preventDefault()}
              draggable={false}
              key={node.id}
            >
              <a href={node.permalink}>
                <GatsbyImage
                  className="image"
                  image={node.localImage.childImageSharp.gatsbyImageData}
                  alt="Instagram post"
                />
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
    </>
  )
}

export default Instagram
