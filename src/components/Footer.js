import React from "react"
import styled from "styled-components"
const Footer = () => {
  return (
    <FooterSection>
      <div className="container">
        <Content>
          <Text>
            COPYRIGHT© {new Date().getFullYear()} ERNAZAR ALL RIGHTS RESERVED
          </Text>
        </Content>
      </div>
    </FooterSection>
  )
}

export default Footer
const FooterSection = styled.div`
  padding: 80px 0;
  background: #0a0a0a;
`
const Content = styled.div``
const Text = styled.div`
  color: #fff;
  text-align: center;
  letter-spacing: 5px;
`
