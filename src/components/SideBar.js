import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { TiTimesOutline } from "react-icons/ti"
const SideBar = ({ open, toggle }) => {
  return (
    <SideBarSec open={open} onClick={toggle}>
      <Close onClick={toggle} />
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/AboutPage/">About</MenuLink>
        <MenuLink>Services</MenuLink>
        <MenuLink>Projects</MenuLink>
        <ContactDiv to="/Contact/">Contact</ContactDiv>
      </Menu>
    </SideBarSec>
  )
}

export default SideBar
const Close = styled(TiTimesOutline)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 3rem;
  cursor: pointer;
`
const SideBarSec = styled.div`
  top: ${({ open }) => (open ? "0%" : "-100%")};
  opacity: ${({ open }) => (open ? "100%" : "0")};
  z-index: ${({ open }) => (open ? "100" : "-10")};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #fd746c;
  background: -webkit-linear-gradient(to right, #ff9068, #fd746c);
  background: linear-gradient(to right, #ff9068, #fd746c);
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
`
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`
const MenuLink = styled(Link)`
  padding: 0 24px;
  cursor: pointer;
  font-size: 1.3rem;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  color: #551a8b;
  transition: all 0.4s ease-in-out;
  :hover {
    color: #457fca;
  }
`
const ContactDiv = styled(Link)`
  background: #ff00cc;
  background: -webkit-linear-gradient(to right, #333399, #ff00cc);
  background: linear-gradient(to right, #333399, #ff00cc);
  padding: 8px 3rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #ffc222;
  font-weight: 600;
  cursor: pointer;
`
