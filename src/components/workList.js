import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Card, Button } from "react-bootstrap"
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
      <div id="miniPopProject">
        <Card style={{ width: "28rem" }}>
          <Card.Img variant="top" src="https://i.imgur.com/WZRSiyR.jpg" />
          <Card.Body>
            <Card.Title>Mini-Pop</Card.Title>
            <Card.Text>
              A synth step sequencer I created using Tone.js and React.
            </Card.Text>
            <Button href="https://mini-pop.netlify.app/" variant="outline-dark">
              Mini-Pop
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
              Built with React and Express
            </Card.Text>
            <Button
              href="https://sticky-task.netlify.app/"
              variant="outline-dark"
            >
              Sticky Task
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
              A music playlist app built using React and Ruby on Rails
            </Card.Text>
            <Button href="https://tunr-su.netlify.app/" variant="outline-dark">
              TUNR
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default WorkList
