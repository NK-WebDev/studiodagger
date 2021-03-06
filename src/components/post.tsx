import React from "react";
import Container from "./ui/container";
import Banner from "./ui/banner";
import { MDXRenderer } from "gatsby-mdx";
import { graphql } from "gatsby";
import MasterLayout from "./master";
import SEO from "./SEO";
import Img, { FluidObject } from "gatsby-image";
import { Disqus } from "gatsby-plugin-disqus";
import styled from "@emotion/styled";

interface PostProps {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
        slug: string;
        excerpt: string;
        cover: {
          childImageSharp: {
            fluid: FluidObject;
            original: {
              src: string;
            };
          };
        };
      };
      code: {
        body: string;
      };
      excerpt: string;
      timeToRead: string;
    };
  };
}

const StyledArticle = styled("article")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  a {
    text-decoration: underline;
  }
  * {
    margin-top: 0;
    margin-bottom: 0;
  }

  * + * {
    margin-top: ${props => props.theme.spacing[1]};
  }

  .gatsby-resp-image-wrapper {
    margin: ${props => props.theme.spacing[2]} auto;
  }

  blockquote {
    border-left: 8px solid ${props => props.theme.colors.primary};
    padding: ${props => props.theme.spacing[0]};
    background: ${props => props.theme.colors.primaryExtraLight};
  }
`;

function Post({ data: { mdx } }: PostProps) {
  let disqusConfig = {
    url: `${"https://www.studiodagger.com/" + mdx.frontmatter.slug} `,
    identifier: mdx.frontmatter.slug,
    title: mdx.frontmatter.title
  };

  return (
    <MasterLayout>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.excerpt}
        article={true}
        image={mdx.frontmatter.cover.childImageSharp.original.src}
      />
      <Banner
        title={mdx.frontmatter.title}
        subtitle={`Published: ${mdx.frontmatter.date} • ${mdx.timeToRead} min read`}
      />
      <Container className="narrow">
        <p className="lead">{mdx.frontmatter.excerpt}</p>
        <Img
          fluid={mdx.frontmatter.cover.childImageSharp.fluid}
          alt={mdx.frontmatter.title}
          css={theme => ({ margin: `${theme.spacing[2]} auto` })}
        ></Img>

        <StyledArticle>
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
        </StyledArticle>
        <section style={{ margin: "1.5rem 0" }}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <a
                href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
                  "https://www.studiodagger.com/" + mdx.frontmatter.slug
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Discuss on Twitter
              </a>
            </li>
            <li>
              <a
                href={`https://twitter.com/intent/tweet?url=https://www.studiodagger.com/${mdx.frontmatter.slug}&text=${mdx.frontmatter.title} by @nk13_codes`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on Twitter
              </a>
            </li>
            <li>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://studiodagger.com/${mdx.frontmatter.slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on Facebook
              </a>
            </li>
          </ul>
        </section>
        <Disqus style={{ marginBottom: "1.5rem" }} config={disqusConfig} />
      </Container>
    </MasterLayout>
  );
}
export const query = graphql`
  query BlogPostQuery($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        excerpt
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
            original {
              src
            }
          }
        }
      }

      code {
        body
      }
      timeToRead
    }
  }
`;
export default Post;
