import React from "react"
import Imagebg from "../assets/about-bacground.jpeg"
import Image from "../assets/hero-bg-2.jpg"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import { fadeInRight, rubberBand } from "react-animations"
const bounceAnimation = keyframes`${rubberBand}`
const fadeInRightAnimation = keyframes`${fadeInRight}`
const About = () => {
  return (
    <AboutSec>
      <ImageBg src={Imagebg} />
      <div className="container">
        <Content>
          <ImgContent>
            <Img src={Image} />
          </ImgContent>
          <Info>
            <Title>About Me</Title>
            <Text>
              Hi! My name is Ernazar . I am a Junior Frontend Developer, and I'm
              very passionate and dedicated to my work. Working hard day and
              night, I have acquired the skills and knowledge necessary to make
              your project a success. I enjoy every step of the working process,
              from discussion and collaboration.
            </Text>
            <Button to="/AboutPage/">Learn More</Button>
          </Info>
        </Content>
      </div>
    </AboutSec>
  )
}

export default About
const AboutSec = styled.section`
  position: relative;
  padding: 50px 0 50px 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`
const ImgContent = styled.div`
  margin-right: 3rem;
  flex: 1;
`
const ImageBg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -10;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  outline: 6px solid #ffc222;
  transition: all 0.5s ease-in-out;
  :hover {
    transform: rotate(10deg) scale(0.8);
    outline-offset: -20px;
    outline: 6px solid #ff4124;
  }
`
const Info = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`
const Text = styled.div`
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 2rem;
  font-weight: 600;
`
const Title = styled.div`
  margin-bottom: 2rem;
  font-weight: 600;
  font-size: clamp(2rem, 6vw, 2.5rem);
  animation: infinite 2s ${bounceAnimation};
`
const Button = styled(Link)`
  padding: 10px 1rem;
  cursor: pointer;
  background: #fff;
  color: #000;
  text-decoration: none;
  transition: all 0.4s ease-in-out;
  border: 2px solid #15945b;
  animation: infinite 2s ${bounceAnimation};
  background: #000;
  color: #fff;
  font-weight: 600;
  :hover {
    border: 2px solid #15945b;
    background: #15945b;
    color: #000;
  }
`
