import React from "react";
import styled from "@emotion/styled";

const StyledSection = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.8rem;
  background: ${props => props.theme.colors.primaryGradient};
  .banner-title {
    color: ${props => props.theme.colors.light};
    margin: 0;
  }
  .subtitle {
    color: ${props => props.theme.colors.light};
    margin-top: 0.8rem;
  }
  @media (max-width: 600px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 360px) {
    padding: 3rem 0.5rem;
  }
`;
interface BannerProps {
  title: string;
  subtitle?: string;
}
function Banner({ title, subtitle }: BannerProps) {
  return (
    <StyledSection>
      <h2 className="banner-title">{title}</h2>
      {subtitle ? <p className="subtitle">{subtitle}</p> : null}
    </StyledSection>
  );
}

export default Banner;
