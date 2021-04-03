import React from "react"

import { BsCodeSlash } from "react-icons/bs"
import { GiRocket } from "react-icons/gi"
import { HiOutlineFilm } from "react-icons/hi"
import styled, { keyframes } from "styled-components"
import { rubberBand, tada } from "react-animations"
const bounceAnimation = keyframes`${rubberBand}`
const tadaAnimations = keyframes`${tada}`
const Services = () => {
  return (
    <SeviceSec id="services">
      <div className="container">
        <Header>Services</Header>
        <Content>
          <SingleItem>
            <IconDiv>
              <Icon1 />
            </IconDiv>
            <Title>Frontend Development </Title>
            <Text>
              I Architect and develop websites and applications using web
              technologies (i.e., HTML, CSS, DOM, and JavaScript), which run on
              the Open Web Platform or act as compilation input for non-web
              platform environments
            </Text>
          </SingleItem>
          <SingleItem>
            <IconDiv>
              <Icon2 />
            </IconDiv>
            <Title>Interactivity</Title>
            <Text>
              Interactive websites create positive experiences for your
              customers. An interactive website allows the user to feel
              empowered
            </Text>
          </SingleItem>
          <SingleItem>
            <IconDiv>
              <Icon3 />
            </IconDiv>
            <Title>Animation </Title>
            <Text>
              I make a flash of movement draws the eye to important elements.
              Subtle transitions and animated changes provide interactive
              feedback as users navigate your website.
            </Text>
          </SingleItem>
        </Content>
      </div>
    </SeviceSec>
  )
}

export default Services
const SeviceSec = styled.section`
  min-height: 80vh;
  padding: 50px 0;
  background: #0a0a0a;
  color: #fff;
`
const Content = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  @media (max-width: 500px) {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
  } ;
`
const SingleItem = styled.div`
  padding: 1rem;
  border-radius: 10px 20px;
  border: 1px solid #000;
  cursor: pointer;
  border: 2px solid #ff7a00;
  transition: all 0.4s ease-in-out;
  background: #7b4397; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #dc2430,
    #7b4397
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #dc2430,
    #7b4397
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  :hover {
    box-shadow: 0 10px 15px rgb(255, 255, 0);
  }
  @media (max-width: 500px) {
    margin-bottom: 1rem;
  } ;
`
const IconDiv = styled.div`
  font-size: 2rem;
  cursor: pointer;
  text-align: center;
  margin-bottom: 1rem;
  animation: infinite 2s ${bounceAnimation};
`
const Icon1 = styled(BsCodeSlash)``
const Icon2 = styled(GiRocket)``
const Icon3 = styled(HiOutlineFilm)``
const Title = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
`
const Text = styled.div`
  font-size: 1.2;
  line-height: 30px;
`
const Header = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
  text-transform: uppercase;
  animation: infinite 2s ${tadaAnimations};
  position: relative;
  :before {
    content: "";
    position: absolute;
    width: 10%;
    height: 3px;
    bottom: -5px;
    background: #b24592; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #f15f79,
      #b24592
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #f15f79,
      #b24592
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
`
