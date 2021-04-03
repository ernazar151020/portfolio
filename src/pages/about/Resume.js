import React from "react"
import styled from "styled-components"
import Image from "../../assets/resume.jpg"
const Resume = () => {
  return (
    <ResumeSec>
      <H1>MORE INFORMATION ABOUT ME</H1>
      <Content>
        <div style={{ marginTop: "3rem" }}>
          <Div>
            <List>Name : </List>
            <List>Ernazar</List>
          </Div>
          <Div>
            <List>Surname : </List>
            <List>Nurbek uulu</List>
          </Div>
          <Div>
            <List>Date of Birth : </List>
            <List>15/10/2000</List>
          </Div>
          <Div>
            <List>Phone : </List>
            <ListLink href="tel:0706944347">0706 94 43 47</ListLink>
          </Div>
          <DivEmail>
            <List>Email : </List>
            <ListLink href=" ernazarnurbekuulu15@gmail.com" target="_blank">
              ernazarnurbekuulu15@gmail.com
            </ListLink>
          </DivEmail>
          <Div>
            <List>Github : </List>
            <ListLink target="_blank" href="https://github.com/ernazar151020">
              View
            </ListLink>
          </Div>
        </div>
        <div>
          <Img src={Image} />
        </div>
      </Content>
    </ResumeSec>
  )
}
export default Resume
const ResumeSec = styled.div``
const H1 = styled.h1`
  text-align: center;
  white-space: pre-line;
`
const Content = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const DivEmail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    display: block;
  }
`
const List = styled.div`
  white-space: nowrap;
  margin-right: 2rem;
  font-size: 1.5rem;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    margin-right: 0px;
    font-size: 16px;
    white-space: normal;
    font-weight: 600;
  }
`
const ListLink = styled.a`
  margin-right: 2rem;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    margin-right: 0px;
    font-size: 16px;
    white-space: normal;
  }
`
const Img = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  outline: 6px solid #ffc222;
  transition: all 0.5s ease-in-out;
  :hover {
    transform: rotate(-10deg) scale(0.8);
    outline-offset: -20px;
    outline: 6px solid #ff4124;
  }
`
