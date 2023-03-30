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
  const ref = useRef(null)
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
  const [mouseDownAt, setMouseDownAt] = useState<number>(0)

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setMouseDownAt(e.clientX)
  }
  window.onmousemove = (e: any) => {
    if (mouseDownAt === 0) {
      return
    }
    const mouseDelta = mouseDownAt - e.clientX
    const maxDelta = window.innerWidth / 2
    const perctange = (mouseDelta / maxDelta) * -100
    const nextPerctange =
      (ref.current.style.transform = `translateX(${perctange}px)`)
  }
  console.log(mouseDownAt)
  // window.onmouseup = (e) => {
  //   setMouseDownAt(0)
  // }
  console.log(mouseDownAt)

  return (
    <>
      <P.Wrapper data-mouse-down-at="0" data-prev-perctange="0" ref={ref}>
        {data.allInstagramContent.edges.map(({ node }) => (
          <div
            onDragStart={(e) => e.preventDefault()}
            draggable={false}
            key={node.id}
          >
            <a href={node.permalink}>
              <GatsbyImage
                image={node.localImage.childImageSharp.gatsbyImageData}
                alt="Instagram post"
              />
            </a>
          </div>
        ))}
        <P.Scroll id="image-track" onMouseDown={handleMouseDown}></P.Scroll>
      </P.Wrapper>
    </>
  )
}

export default Instagram
