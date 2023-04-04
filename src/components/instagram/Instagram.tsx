import React, { useState, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"
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
  const [animationValue, setAnimationValue] = useState<number>(0)

  const animationMove = (value) => {
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
  }

  const animationLeftDirection = () => {
    setAnimationValue((prev) => {
      const updatedValue = Math.max(Math.min(prev - 20, 0), -100)
      animationMove(updatedValue)
      return updatedValue
    })
  }
  const animationRightDirection = () => {
    setAnimationValue((prev) => {
      const updatedValue = Math.max(Math.min(prev + 20, 0), -100)
      animationMove(updatedValue)
      return updatedValue
    })
  }
  console.log(animationValue)

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
      <P.LinkContainer>
        <h3>Obserwuj mój instagram </h3>
        <Link to="https://www.instagram.com/kuznia.marzen.weddingplanner/">
          @kuznia.marzen.weddingplanner
        </Link>
      </P.LinkContainer>
      <P.Content>
        {animationValue > -100 ? (
          <P.ArrowIcon left="0">
            <SlArrowLeft onClick={animationLeftDirection} />
          </P.ArrowIcon>
        ) : null}
        {animationValue < 0 ? (
          <P.ArrowIcon right="0">
            <SlArrowRight onClick={animationRightDirection} />
          </P.ArrowIcon>
        ) : null}
        <P.Wrapper ref={trackRef}>
          {data.allInstagramContent.edges.map(({ node }) => (
            <P.ImageContainer draggable={false} key={node.id}>
              <Link target="_blank" to={node.permalink}>
                <img
                  className="image"
                  src={
                    node.localImage.childImageSharp.gatsbyImageData.images
                      .fallback.src
                  }
                  alt="instaphoto"
                ></img>
              </Link>
            </P.ImageContainer>
          ))}
        </P.Wrapper>
      </P.Content>
    </>
  )
}

export default Instagram
