import React from "react"
// import { Link, useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import Button from "react-bootstrap/Button"
import NavBar from "../components/navBar"

import ContactList from "../components/contactList"

const Contact = () => {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <NavBar />
      <Layout>
        {/* <Header headerText="Contact Me" /> */}
        <h1 id="contactMe">Contact Me</h1>

        <div class="socialButtons">
          <Button href="mailto:sdunland@gmail.com" variant="outline-dark">
            Email
          </Button>
          <Button
            href="https://www.linkedin.com/in/sean-unland-b46b2743/"
            variant="outline-dark"
          >
            LinkedIn
          </Button>
          <Button href="https://github.com/SeanUnland" variant="outline-dark">
            Git Hub
          </Button>
        </div>
      </Layout>
    </div>
  )
}

export default Contact
