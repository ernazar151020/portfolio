import React from "react"
import Layout from "../components/Layout"
import Imagebg from "../assets/about-bacground.jpeg"
import Image from "../assets/hero-bg-2.jpg"
import Skills from "./about/Skills"
import Resume from "./about/Resume"
import styled, { keyframes } from "styled-components"
import { fadeInRight, fadeInLeft, rotateInUpLeft } from "react-animations"
const fadeInRightAnimation = keyframes`${fadeInRight}`
const fadeInLefttAnimation = keyframes`${fadeInLeft}`
const AboutPage = () => {
  return (
    <Layout>
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
                Hi! My name is Ernazar Nurbek uulu. I am a Junior Frontend
                Developer, and I'm very passionate and dedicated to my work.
                Working hard day and night, I have acquired the skills and
                knowledge necessary to make your project a success. I enjoy
                every step of the working process, from discussion and
                collaboration.
              </Text>
            </Info>
          </Content>
          <Resume />
          <Skills />
        </div>
      </AboutSec>
    </Layout>
  )
}

export default AboutPage

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
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
    margin: 0 auto;
  }
`
const ImgContent = styled.div`
  margin-right: 3rem;
  animation: 2s ${fadeInLefttAnimation};
  @media (max-width: 768px) {
    margin-right: 0rem;
  }
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
  animation: 2s ${fadeInRightAnimation};
  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`
const Text = styled.div`
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 2rem;
  font-weight: 600;
  color: #0a0a0a;
`
const Title = styled.div`
  margin-bottom: 2rem;
  font-weight: 600;
  font-size: clamp(2rem, 6vw, 2.5rem);
`
