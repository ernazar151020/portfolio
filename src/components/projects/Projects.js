import React from "react"
import { Link } from "gatsby"
import { projectData } from "./data"
import { AiFillGithub } from "react-icons/ai"
import { FaSignOutAlt, FaAngleDoubleRight } from "react-icons/fa"
import { CgChevronDoubleRightR } from "react-icons/cg"
import styled, { keyframes } from "styled-components"
import { swing } from "react-animations"
const swingAnimation = keyframes`${swing}`
const Projects = () => {
  return (
    <ProjectSec>
      <div className="container">
        <Header>PROJECTS</Header>
        <Content>
          {projectData.map(item => {
            if (item.id <= 3) {
              return (
                <SingleContent key={item.id}>
                  <Img src={item.img} />
                  <Info>
                    <Title>{item.title}</Title>
                    <Subtitle>
                      <Angle />
                      {item.subtitle}
                    </Subtitle>

                    <BtnContainer>
                      <Button>{item.button1}</Button>
                      <Button>{item.button2}</Button>
                    </BtnContainer>
                    <IconContainer>
                      <a target="_blank" href={item.link}>
                        <Github />
                      </a>
                      <a target="_blank" href={item.demo}>
                        <SignOut />
                      </a>
                    </IconContainer>
                  </Info>
                </SingleContent>
              )
            }
          })}
        </Content>
        <Btns>
          <Btn to="/ProjectPage/">ALL PROJECTS</Btn>
        </Btns>
      </div>
    </ProjectSec>
  )
}

export default Projects
const ProjectSec = styled.section`
  min-height: 100vh;
  padding: 100px 0;

  background: #159957; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #155799,
    #159957
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #155799,
    #159957
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`
const Header = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  animation: 5s infinite ${swingAnimation};
`
const Content = styled.div`
  text-align: center;
`

const Img = styled.img`
  width: 80%;
  height: 500px;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
  position: relative;
  :before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0.85;
  }
  @media (max-width: 500px) {
    display: none;
  }
`
const Info = styled.div`
  padding: 2rem;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: all 0.4s ease-in-out;
  left: 50%;
  top: 50%;
  background: #007991; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #78ffd6,
    #007991
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #78ffd6, #007991);
  margin-bottom: 2rem;
  @media (max-width: 500px) {
    padding: 2rem;
    width: 100%;
    text-align: center;
    position: relative;
  }
`
const SingleContent = styled.div`
  position: relative;
  margin: 0 auto;
  transition: all 0.4s ease-in-out;

  :hover ${Img} {
    color: #fff;
    outline: 10px solid #ffc222;
    outline-offset: -20px;
    transform: scale(0.8);
  }
`

const BtnContainer = styled.div`
  display: flex;
  margin: 1rem 0;
  @media (max-width: 500px) {
    text-align: center;
    margin: 1rem auto;
  }
`
const Button = styled.button`
  padding: 10px 1rem;
  cursor: pointer;
  background: #ccc;
  border: none;
  outline: none;
  margin-right: 10px;
  border-radius: 5px;
  white-space: nowrap;
`
const Title = styled.div`
  font-size: 2rem;
  white-space: nowrap;
  text-align: center;
`
const Subtitle = styled.div`
  font-size: 1rem;
  white-space: nowrap;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin: 10px 0;
`
const IconContainer = styled.div``
const SignOut = styled(FaSignOutAlt)`
  font-size: 2.5rem;
`
const Github = styled(AiFillGithub)`
  font-size: 2.5rem;
  margin-right: 1rem;
`
const Angle = styled(CgChevronDoubleRightR)`
  margin-right: 1rem;
  font-size: 1rem;
  font-weight: 400;
`
const Btns = styled.div`
  text-align: center;
  margin: 2rem 0 0 0;
`
const Btn = styled(Link)`
  padding: 10px 1rem;
  cursor: pointer;
  background: #fff;
  color: #000;
  text-decoration: none;
  transition: all 0.4s ease-in-out;
  border: 2px solid #15945b;
  background: #000;
  color: #fff;
  font-weight: 600;
  :hover {
    border: 2px solid #15945b;
    background: #15945b;
    color: #000;
  }
`
