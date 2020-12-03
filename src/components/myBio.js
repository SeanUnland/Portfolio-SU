import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { Accordion, Card, Button } from "react-bootstrap"

import Header from "./header"

const MyBio = props => {
  const data = useStaticQuery(graphql`
    query query {
      allContentfulAboutMe {
        edges {
          node {
            bio
          }
        }
      }
    }
  `)
  return (
    <div>
      <p>
        {data.allContentfulAboutMe.edges.map(edge => {
          return (
            <div>
              {/* <p>{edge.node.bio}</p> */}
              <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Click To Know Me!
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>{edge.node.bio}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          )
        })}
      </p>
    </div>
  )
}

export default MyBio
