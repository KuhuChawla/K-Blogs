/* eslint-disable react/prop-types */
import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import TagPreview from '../components/tagWidget/TagPreview';
import LayoutBlog from '../components/layoutBlog';
import SEO from '../components/seo';
// import { rhythm, scale } from '../utils/typography';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
  const tags = post.frontmatter.tags || [];

  return (
    <LayoutBlog location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              // marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              // ...scale(-1 / 5),
              display: `block`,
              // marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date} · {post.timeToRead} min read
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <TagPreview value={tags} />
        <hr
          style={
            {
              // marginBottom: rhythm(1),
            }
          }
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </LayoutBlog>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }, fileAbsolutePath: { regex: "/blog/" }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        description
        tags
      }
      wordCount {
        words
      }
      timeToRead
    }
  }
`;
