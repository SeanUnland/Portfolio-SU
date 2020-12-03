import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import NavBar from "../components/navBar"
import CarouselHome from "../components/carouselHome"
import ProfileImage from "../components/profileImage"
import "bootstrap/dist/css/bootstrap.min.css"
import { motion } from "framer-motion"

import { Link } from "gatsby"

const Home = () => {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <NavBar />
      <Layout>
        <ProfileImage />
        {/* <Header headerText="Sean Unland" /> */}
        <h1 id="Sean">
          <motion.span
            initial={{}}
            animate={{ y: 30, color: "#EAEAEA" }}
            // transition={{ yoyo: 10 }}
          >
            Sean
          </motion.span>
          <motion.span animate={{ color: "#404E5C" }}>Unland</motion.span>
        </h1>
        {/* <Header headerText="Full Stack Developer" /> */}
        <h1 id="fullStack">Full Stack Developer</h1>

        <CarouselHome />

        <div>
          <h1></h1>
          <p></p>
        </div>
      </Layout>
    </div>
  )
}

export default Home
