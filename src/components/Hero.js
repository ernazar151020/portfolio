import React from "react"
import { Link } from "gatsby"
import Image from "../assets/hero-bg-2.svg"
import styled, { keyframes } from "styled-components"
import { fadeInRight, fadeInLeft, rotateInUpLeft } from "react-animations"
const fadeInRightAnimation = keyframes`${fadeInRight}`
const fadeInLefttAnimation = keyframes`${fadeInLeft}`
const rotateInUpLeftAnimation = keyframes`${rotateInUpLeft}`
const Hero = () => {
  return (
    <HeroSec>
      <div className="container">
        <Content>
          <Info>
            <Title>
              Hello , I'm
              <span style={{ color: "#6C63FF", paddingLeft: "1rem" }}>
                ERNAZAR
              </span>
            </Title>

            <Text>FRONTEND DEVELOPER</Text>
            <Button>Contact Me</Button>
          </Info>
          <ImgContainer>
            <Img src={Image} />
          </ImgContainer>
        </Content>
      </div>
    </HeroSec>
  )
}

export default Hero
const HeroSec = styled.div`
  position: relative;
  /* height: calc(100vh - 80px); */
  background: #0a0a0a;
  padding: 100px 0;
  min-height: 100vh;
`
const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    text-align: center;
  }
`
const Img = styled.img`
  width: 100%;
  height: 100vh;
`
const ImgContainer = styled.div`
  animation: 2s ${fadeInLefttAnimation};
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`
const Info = styled.div`
  flex: 2;
`
const Title = styled.div`
  color: #f17d11;
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 600;
  animation: 2s ${fadeInRightAnimation};
`
const Text = styled.div`
  margin-top: 1rem;
  color: #fff;
  font-size: clamp(1rem, 6vw, 2rem);
  line-height: 3rem;
  white-space: nowrap;
  margin-bottom: 2rem;
  animation: 2s ${rotateInUpLeftAnimation};
`
const Button = styled(Link)`
  padding: 8px 20px;
  background: #e64d1c;
  color: #fff;
  font-size: 1.3rem;
  transition: all 0.4s ease-in-out;
  :hover {
    background: transparent;
    color: #fff;
    border: 2px solid #6fff63;
    cursor: pointer;
  }
`
