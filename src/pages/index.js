import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Projects from "../components/projects/Projects"
import Footer from "../components/Footer"
export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Footer />
    </Layout>
  )
}
