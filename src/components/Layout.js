import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"
import SideBar from "./SideBar"
import "../index.css"
import Aos from "aos"
import "aos/dist/aos.css"
const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])
  return (
    <>
      <Navbar toggle={toggle} />
      <SideBar toggle={toggle} open={open} />

      <main>{children}</main>
    </>
  )
}

export default Layout
