import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import OutlinedCard from "../components/cards"
import Grid from '@mui/material/Grid';
import NBar from "../components/nav_bar";
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <div>
      <NBar/>
    
    <Layout location={location} title={siteTitle}>
      
      <Seo title="All posts" />
      <Bio />
      {/* <ol style={{ listStyle: `none` }}> */}
      <Grid alignItems= 'stretch' container spacing={{ xs: 2, md: 12 }} columns={{ xs: 4, sm: 8, md: 12 }} rowSpacing = {'16px'}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <Grid alignItems= 'stretch' flexDirection = 'column' item xs={2} sm={4} md={4} key={post.fields.slug}>
              <OutlinedCard link={post.fields.slug} date={post.frontmatter.date} desc={post.frontmatter.description} tags={post.frontmatter.tags || []} title={title} />
            </Grid>
          )

        })}
      </Grid>
      {/* {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug
        console.log(post.frontmatter)

        return (
          <li key={post.fields.slug}>
            {<OutlinedCard link={post.fields.slug} date={post.frontmatter.date} desc={post.frontmatter.description} tags={post.frontmatter.tags || []} title={title} />
              /* <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article> */}
      {/* </li> */}

    </Layout>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`
