import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const navItems = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
];

const Nav = styled.nav`
  @media (max-width: 844px) {
    background-color: ${props => props.theme.colors.primaryLight};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    overflow: hidden;
    transition: height 400ms 800ms cubic-bezier(0.55, 0.06, 0.68, 0.19);
    z-index: 1;

    &.is-open {
      width: 100%;
      height: 100%;
      transition: height 800ms cubic-bezier(0.17, 0.84, 0.44, 1);
    }
  }
`;

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: flex-end;
  align-items: center;
  margin: 0;

  @media (max-width: 844px) {
    padding-top: 4rem;
    display: block;
    li {
      display: block;
      margin: 0;
      width: 100%;
      text-align: center;
      padding: 2rem 1rem;
      transition: 300ms all ease-out;

      opacity: 0;
      transform: translateY(-20px);

      .is-open & {
        opacity: 1;
        transform: translateY(0);
      }

      &:nth-child(1) {
        transition-delay: 200ms;
      }

      &:nth-child(2) {
        transition-delay: 400ms;
      }

      &:nth-child(3) {
        transition-delay: 800ms;
      }

      &:nth-child(4) {
        transition-delay: 1000ms;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.dark};
  transition: all 300ms ease-out;
  border-bottom: 3px solid transparent;
  padding: 1.9rem 1rem;
  position: relative;

  @media (min-width: 845px) {
    margin-left: 1.5rem;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 3px;
      background-color: ${props => props.theme.colors.secondary};
      transform: scale(0);
      transition: 200ms transform ease-out;
    }
    &:hover,
    &:focus,
    &:active,
    &.active {
      color: ${props => props.theme.colors.secondary};
    }
    &:hover:after,
    &:focus:after,
    &:active:after,
    &.active:after {
      transform: scale(1);
    }
  }
`;

interface NavbarProps {
  isOpen: boolean;
}

function Navbar({ isOpen }: NavbarProps) {
  return (
    <Nav role="primary" className={isOpen ? 'is-open' : ''}>
      <Ul>
        {navItems.map(item => (
          <li key={item.name}>
            <StyledLink activeClassName="active" to={item.link}>
              {item.name}
            </StyledLink>
          </li>
        ))}
      </Ul>
    </Nav>
  );
}

export default Navbar;
