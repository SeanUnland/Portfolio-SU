import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import NavBar from "../components/navBar"
import CarouselHome from "../components/carouselHome"
import ProfileImage from "../components/profileImage"
import WhatImUpTo from "../components/whatImUpTo"
// import MyBio from "../components/myBio"
import "bootstrap/dist/css/bootstrap.min.css"
import { motion } from "framer-motion"

import { Link } from "gatsby"

const Home = () => {
  return (
    <div>
      <NavBar />
      <Layout>
        {/* <Header headerText="Sean Unland" /> */}
        <h1 id="Sean">
          <motion.div animate={{ y: -110, scale: 1, color: "#EAEAEA" }}>
            <motion.span>Sean</motion.span>
          </motion.div>
          <motion.div id="unland" animate={{ y: -140, color: "#404E5C" }}>
            <span>Unland</span>
          </motion.div>
        </h1>

        <ProfileImage />

        <h1 id="fullStack">Full Stack Developer</h1>

        <h2 id="whatImUpToHeading">What I'm Up To:</h2>
        <WhatImUpTo />

        <CarouselHome />

        <div></div>
      </Layout>
    </div>
  )
}

export default Home
