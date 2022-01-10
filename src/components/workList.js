import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Card, Button } from "react-bootstrap"
import { motion } from "framer-motion"
import "./workList.css"

const WorkList = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulWorkSection {
        edges {
          node {
            miniPop {
              raw
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <div id="GEHASolutions">
        <Card style={{ width: "28rem" }}>
          <Card.Img variant="top" src="https://i.imgur.com/Ryf6IUj.png" />
          <Card.Body>
            <Card.Title>GEHA Solutions</Card.Title>
            <Card.Text>
              A government employee healthcare company.
              <br />
              Designed using SASS, CSS, and SXA through Sitecore.
            </Card.Text>
            <Button href="https://gehasolutions.com/" variant="outline-dark">
              GEHA Solutions
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div id="miniPopProject">
        <Card style={{ width: "28rem" }}>
          <Card.Img variant="top" src="https://i.imgur.com/WZRSiyR.jpg" />
          <Card.Body>
            <Card.Title>Mini-Pop</Card.Title>
            <Card.Text>
              A synth step sequencer and sampler.
              <br />
              Built using Tone.js, React, Framer Motion, and Start Audio Context
            </Card.Text>
            <Button href="https://mini-pop.netlify.app/" variant="outline-dark">
              Mini-Pop
            </Button>
            <Button
              href="https://github.com/SeanUnland/unit-4-project-mini-pop"
              variant="outline-dark"
            >
              Code
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div id="stickyTaskProject">
        <Card style={{ width: "28rem" }}>
          <Card.Img variant="top" src="https://i.imgur.com/qNNTXao.jpg" />
          <Card.Body>
            <Card.Title>Sticky Task</Card.Title>
            <Card.Text>
              A task manager app that enables a user to assign and delete tasks.
              <br />
              Built with React, Express, Bootstrap, and Framer Motion
            </Card.Text>
            <Button
              href="https://sticky-task.netlify.app/"
              variant="outline-dark"
            >
              Sticky Task
            </Button>
            <Button
              href="https://github.com/E-Shelton98/StickyTask-Frontend"
              variant="outline-dark"
            >
              Code
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div id="bullCowProject">
        <Card style={{ width: "28rem" }}>
          <Card.Img variant="top" src="https://i.imgur.com/bIOxDih.jpg" />
          <Card.Body>
            <Card.Title>Bull Cow Game</Card.Title>
            <Card.Text>
              A word guessing game.
              <br />
              Built with C++ and Unreal Engine
            </Card.Text>
            <Button variant="outline-dark">Bull Cow Game</Button>
            <Button
              href="https://github.com/SeanUnland/BullCowGame"
              variant="outline-dark"
            >
              Code
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div id="tunrApp">
        <Card style={{ width: "28rem" }}>
          <Card.Img variant="top" src="https://i.imgur.com/SO56oPA.jpg" />
          <Card.Body>
            <Card.Title>TUNR</Card.Title>
            <Card.Text>
              A music playlist app
              <br />
              Built using React and Ruby on Rails
            </Card.Text>
            <Button href="https://tunr-su.netlify.app/" variant="outline-dark">
              TUNR
            </Button>
            <Button
              href="https://github.com/SeanUnland/rails-mini-project-frontend"
              variant="outline-dark"
            >
              Code
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default WorkList
