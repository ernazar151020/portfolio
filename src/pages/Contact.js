import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
const Contact = () => {
  return (
    <Layout>
      <ContactSec>
        <div className="container">
          <Form>
            <Title>Get in touch</Title>
            <Wrap>
              <Input id="name" placeholder="Your name" />
            </Wrap>
            <Wrap>
              <Input id="name" placeholder=" Your email" />
            </Wrap>
            <Wrap>
              <Text>Send your message</Text>
              <TextArea></TextArea>
            </Wrap>
            <Wrap>
              <Button>SUBMIT HERE</Button>
            </Wrap>
          </Form>
        </div>
      </ContactSec>
    </Layout>
  )
}

export default Contact
const ContactSec = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #feac5e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4bc0c8,
    #c779d0,
    #feac5e
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4bc0c8,
    #c779d0,
    #feac5e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`
const Wrap = styled.div`
  margin: 1rem 0;
`
const Title = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 600;
`
const Form = styled.form`
  border-radius: 10px;
  border: 4px solid #ffc222;
  padding: 1rem 2rem;
`

const TextArea = styled.textarea`
  width: 100%;
  height: 170px;
  padding: 1rem;
  font-size: 1.3rem;
  resize: none;
  @media (max-width: 500px) {
    width: 100%;
  }
`
const Text = styled.div`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 600;
  text-transform: uppercase;
`
const Input = styled.input`
  padding: 8px;
  width: 300px;
  border: none;
  border-bottom: 3px solid #ffc222;
  outline: none;
  background: transparent;
  font-size: 18px;
  color: #0a0a0a;
  @media (max-width: 500px) {
    width: 100%;
  }
`
const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  padding: 10px 0;
  cursor: pointer;
  font-size: 18px;
  background: #6441a5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2a0845,
    #6441a5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2a0845,
    #6441a5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`
