import React from "react"
import * as P from "./parts"
import Layout from "../layout/Layout"

import { graphql, useStaticQuery, Link } from "gatsby"
import { GlobalStyle } from "../../pages"
import { ButtonSecondary, TextWrapper } from "../../UI/UI"
import { GatsbyImage } from "gatsby-plugin-image"
import slugify from "slugify"

type BlogPost = {
  headerPhoto: {
    gatsbyImageData: any
  }
  author: string
  date: string
  category: string
  incentive: string
  id: string
  title: string
}

type DatoCMSBlogPostQuery = {
  allDatoCmsBlogpost: {
    nodes: Array<BlogPost>
  }
}

const BlogList = () => {
  const data: DatoCMSBlogPostQuery = useStaticQuery(query)
  const blogs = data.allDatoCmsBlogpost.nodes

  const content = blogs.map((blog) => {
    const slug = slugify(blog.title, { lower: true })
    return (
      <P.Blog>
        <GatsbyImage
          image={blog.headerPhoto.gatsbyImageData}
          alt="blog-image"
          className="gatsbyImage"
        ></GatsbyImage>
        <P.Description>
          <h3>{blog.title}</h3>
          <p>
            <span>{blog.date}</span>
          </p>
          <div /> <p>{blog.category}</p>
          <p>{blog.incentive}</p>
          <Link to={`/${slug}`}>
            <ButtonSecondary showing={true}>Czytaj więcej</ButtonSecondary>
          </Link>
        </P.Description>
      </P.Blog>
    )
  })

  return (
    <P.Wrapper>
      <GlobalStyle />
      <Layout>
        <P.TextWrapper>
          <TextWrapper>
            <h3>Blog</h3>
            <p>
              Jeśli chcesz zobaczyć, jak pięknie można udekorować salę weselną,
              jakie bukiety kwiatów warto wybrać czy jakie dodatki będą
              najlepiej się komponować, to nasz blog to idealne miejsce dla
              Ciebie! Przeglądając nasze wpisy, zobaczysz wiele inspiracji i
              pomysłów, które pomogą Ci w organizacji wymarzonego ślubu.
            </p>
          </TextWrapper>
        </P.TextWrapper>
        <P.BlogsWrapper>
          {content}
          {content}
        </P.BlogsWrapper>
      </Layout>
    </P.Wrapper>
  )
}

export const query = graphql`
  query {
    allDatoCmsBlogpost(sort: { date: DESC }) {
      nodes {
        headerPhoto {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
        author
        date
        category
        id
        title
        incentive
      }
    }
  }
`

export default BlogList
