import React from "react"
import { graphql } from "gatsby"
import {
  render,
  StructuredTextDocument,
} from "datocms-structured-text-to-html-string"
import { GlobalStyle } from "."
import { Instagram, Layout, SEO } from "../components"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { fonts } from "../globalStyles"

interface BlogPost {
  data: {
    datoCmsBlogpost: {
      title: string
      author: string
      body1?: {
        blocks: string[]
        links: string[]
        value: StructuredTextDocument
      }
      body2?: {
        blocks: string[]
        links: string[]
        value: StructuredTextDocument
      }
      body3?: {
        blocks: string[]
        links: string[]
        value: StructuredTextDocument
      }
      date: string
      headerPhoto: {
        gatsbyImageData: any
      }
      id: string
      photosbody1?: {
        gatsbyImageData: any
      }[]
      photosbody2?: {
        gatsbyImageData: any
      }[]
      photosbody3?: {
        gatsbyImageData: any
      }[]
    }
  }
}

const BlogTemplate: React.FC<BlogPost> = ({ data }) => {
  const blogData = data.datoCmsBlogpost

  const blog = blogData.body1.value
  const blog2 = blogData.body2.value
  const blog3 = blogData.body3.value
  const body1HTML = render(blog)
  const body2HTML = render(blog2)
  const body3HTML = render(blog3)

  return (
    <div>
      <Layout>
        <GlobalStyle />
        <SEO
          title={blogData.title}
          description="Tutaj znajdziesz konkretn artykuł z poradami ślubnymi"
        />
        <Wrapper>
          <GatsbyImage
            image={blogData.headerPhoto.gatsbyImageData}
            alt="header-photo"
            className="headerPhoto"
          ></GatsbyImage>
          <Title>{blogData.title}</Title>
          <Content>
            <div dangerouslySetInnerHTML={{ __html: body1HTML }}></div>
            <ImageContainer>
              {blogData.photosbody1.map((photo) => (
                <Image>
                  <GatsbyImage
                    image={photo.gatsbyImageData}
                    alt="gallery-photos"
                    className="containerPhoto"
                  ></GatsbyImage>
                </Image>
              ))}
            </ImageContainer>
            <div dangerouslySetInnerHTML={{ __html: body2HTML }}></div>
            <ImageContainer>
              {blogData.photosbody2.map((photo) => (
                <Image>
                  <GatsbyImage
                    image={photo.gatsbyImageData}
                    alt="gallery-photos"
                    className="containerPhoto"
                  ></GatsbyImage>
                </Image>
              ))}
            </ImageContainer>
            <div dangerouslySetInnerHTML={{ __html: body3HTML }}></div>
            <ImageContainer>
              {blogData.photosbody3.map((photo) => (
                <Image>
                  <GatsbyImage
                    image={photo.gatsbyImageData}
                    alt="gallery-photos"
                    className="containerPhoto"
                  ></GatsbyImage>
                </Image>
              ))}
            </ImageContainer>
          </Content>
        </Wrapper>
        <Signature>{blogData.author}</Signature>
        <Date>{blogData.date}</Date>
        <Instagram />
      </Layout>
    </div>
  )
}

export default BlogTemplate

export const query = graphql`
  query ($title: String) {
    datoCmsBlogpost(title: { eq: $title }) {
      author
      title
      body1 {
        blocks
        links
        value
      }
      body2 {
        blocks
        links
        value
      }
      body3 {
        blocks
        links
        value
      }
      date
      headerPhoto {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
      id
      photosbody1 {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
      photosbody2 {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
      photosbody3 {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`

const Wrapper = styled.section`
  :after {
    content: "";
    width: 100%;
    height: 3px;
    background: black;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${fonts.POPPINS};
  }
  display: flex;
  flex-direction: column;
  .headerPhoto {
    height: 100svh;
    margin: 0;
    margin-bottom: 1rem;

    @media screen and (min-width: 820px) {
      margin-top: 200px;
      margin-left: auto;
      margin-right: auto;
    }
    @media screen and (min-width: 1024px) {
      width: 70%;
    }
    img {
    }
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  p:first-of-type {
    margin-top: 0;
  }

  p:last-of-type {
    margin-bottom: 0;
  }
  blockquote {
    font-style: italic;
    margin: 0 0 20px 0;
    padding: 10px;
    border-left: 5px solid #ccc;
  }
  ul {
    margin: 1em 0;
    padding: 0 0 0 40px;
  }
  ul li {
    list-style: disc;
    margin: 0 0 0.5em 0;
    padding: 0;
  }
  ol {
    list-style-type: decimal;
    margin: 0 0 20px 0;
    padding: 0 0 0 20px;
  }

  ol li {
    list-style-type: decimal;
    margin: 0 0 0.5em 0;
    padding: 0;
  }
`

const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    width: 70%;
  }
`
const Title = styled.h1`
  font-size: 2.2rem;
  text-align: center;
`

export const ImageContainer = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  gap: 1rem;

  @media screen and (min-width: 820px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
  @media screen and (min-width: 1200px) {
  }
`

const Image = styled.div`
  @media screen and (min-width: 820px) {
    .containerPhoto {
      height: 55vmin;

      img {
        object-position: center;

        object-fit: contain;
      }
    }
  }
`

export const Signature = styled.p`
  font-family: ${fonts.GREATVIBES};

  text-align: center;
  margin: 2rem 0 1rem 0;
  font-size: 48px;
  font-style: italic;
`
export const Date = styled.p`
  font-family: ${fonts.POPPINS};

  text-align: center;

  font-size: 12px;
  font-style: italic;
`
