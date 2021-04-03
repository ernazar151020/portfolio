import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Link as LinkS } from "react-scroll"
import { FaHamburger } from "react-icons/fa"
import styled, { keyframes } from "styled-components"
import { pulse } from "react-animations"
const bounceAnimation = keyframes`${pulse}`
const Navbar = ({ toggle }) => {
  const [scroll, setScroll] = useState(false)
  const ChangeScroll = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", ChangeScroll)
  }, [])
  return (
    <NavSec scroll={scroll}>
      <div className="container">
        <Content>
          <LogoDiv to="/">ERNAZAR</LogoDiv>
          <Bars onClick={toggle} />
          <Menu color={scroll}>
            <MenuLink to="/">Home</MenuLink>
            <MenuLink to="/AboutPage/">About</MenuLink>
            <ServiceLink
              to="services"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              exact={true}
            >
              Services
            </ServiceLink>
            <MenuLink to="/ProjectPage/">Projects</MenuLink>
          </Menu>
          <ContactDiv to="/Contact/">Contact</ContactDiv>
        </Content>
      </div>
    </NavSec>
  )
}

export default Navbar
const NavSec = styled.nav`
  background: #00c3ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #ffff1c, #00c3ff);
  background: linear-gradient(to right, #ffff1c, #00c3ff);
  background: ${({ scroll }) => (scroll ? "#fff" : "#0a0a0a")};
  /* color: ${({ scroll }) => (scroll ? "#0a0a0a" : "#fff")}; */
  position: sticky;
  top: 0;
  z-index: 20;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`
const LogoDiv = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 900;
  /* color: #fff; */
  animation: infinite 2s ${bounceAnimation};
`
const Bars = styled(FaHamburger)`
  display: none;

  cursor: pointer;
  @media screen and (max-width: 912px) {
    display: block;
    font-size: 2rem;
    margin-right: 1rem;
    cursor: pointer;
  }
`

const Menu = styled.div`
  color: ${({ color }) => (color ? "#0a0a0a" : "#fff")};
  @media screen and (max-width: 912px) {
    display: none;
  }
`
const MenuLink = styled(Link)`
  padding: 0 24px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  /* color: #fff; */
  text-decoration: none;
  text-transform: uppercase;
`
const ServiceLink = styled(LinkS)`
  padding: 0 24px;
  cursor: pointer;
  font-size: 1.1rem;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  /* color: #fff; */
`
const ContactDiv = styled(Link)`
  cursor: pointer;
  font-size: 1.1rem;
  color: #ffc222;
  font-weight: 600;
  text-decoration: none;
  /* color: #fff; */
  text-transform: uppercase;
  @media screen and (max-width: 912px) {
    display: none;
  }
`
