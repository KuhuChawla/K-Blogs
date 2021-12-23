/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';

import Bio from '../components/bio';
import LayoutBlog from '../components/layoutBlog';
import SEO from '../components/seo';
// import { rhythm } from '../utils/typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import OutlinedCard from '../components/cards';
import Grid from '@mui/material/Grid';
const Blogs = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <LayoutBlog location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <Grid
        alignItems="stretch"
        container
        spacing={{ xs: 2, md: 12 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        rowSpacing={'16px'}
      >
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <Grid
              alignItems="stretch"
              flexDirection="column"
              item
              xs={12}
              sm={4}
              md={4}
              key={node.fields.slug}
            >
              <OutlinedCard
                link={node.fields.slug}
                date={node.frontmatter.date}
                desc={node.frontmatter.description}
                tags={node.frontmatter.tags || []}
                title={title}
              />
            </Grid>
          );
        })}
      </Grid>
    </LayoutBlog>
  );
};

export default Blogs;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
          }
        }
      }
    }
  }
`;
