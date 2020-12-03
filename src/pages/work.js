import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import NavBar from "../components/navBar"
import WorkList from "../components/workList"

const Work = () => {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <NavBar />
      <Layout>
        <Header headerText="Things I've Created" />{" "}
        {/* <a href="https://mini-pop.netlify.app/">Mini-Pop</a> */}
        <WorkList />
      </Layout>
    </div>
  )
}

export default Work
