import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Header from "../components/header"
import Layout from "../components/layout"
import LanguageList from "../components/languageList"
import MyBio from "../components/myBio"
import Footer from "../components/footer"
import NavBar from "../components/navBar"
import Resume from "../components/resume"

export default function About() {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <NavBar />
      <Layout>
        <Header headerText="Who Am I?" />
        <div class="aboutMeText">
          <section id="myBio">
            <MyBio />
          </section>
          <section id="imProficientIn">
            <Container>
              <Header headerText="Technical Skills" />
            </Container>
          </section>
          <section id="languageList">
            <LanguageList />
          </section>
          <section>
            <Header headerText="Resume" />
            <Resume />
          </section>
        </div>
      </Layout>
      <Footer />
    </div>
  )
}
