import React from "react";
import Container from "./ui/container";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoCodepen
} from "react-icons/io";

const StyledFooter = styled.footer`
  background: ${props => props.theme.colors.primaryExtraLight};
  padding: 2rem 0rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: ${props => props.theme.colors.dark};
    &:hover,
    &:active,
    &:focus {
      color: ${props => props.theme.colors.secondary};
    }
  }

  @media (max-width: 630px) {
    padding: 1rem 0;
  }

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    a {
      margin: 0 ${props => props.theme.spacing[1]};
      font-weight: bold;
      font-size: ${props => props.theme.fonts.fontSizes[2]};
    }
  }
`;
function Footer() {
  const result = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          twitterUsername
          codepenUsername
          instagramUsername
          githubUsername
        }
      }
    }
  `);
  return (
    <StyledFooter>
      <Container>
        <ul>
          <li>
            <a
              title="codepen profile"
              href={`https://codepen.io/${result.site.siteMetadata.codepenUsername}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <IoLogoCodepen aria-hidden="true" />
            </a>
          </li>

          <li>
            <a
              title="twitter profile"
              href={`https://twitter.com/${result.site.siteMetadata.twitterUsername}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <IoLogoTwitter aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              title="github profile"
              href={`https://github.com/${result.site.siteMetadata.githubUsername}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <IoLogoGithub aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              title="instagram profile"
              href={`https://instagram.com/${result.site.siteMetadata.instagramUsername}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <IoLogoInstagram aria-hidden="true" />
            </a>
          </li>
        </ul>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
