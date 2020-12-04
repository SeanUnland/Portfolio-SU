import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import { Accordion, Card, Button } from "react-bootstrap"
import "./myBio.css"

import Header from "./header"

const MyBio = props => {
  const data = useStaticQuery(graphql`
    query query {
      allContentfulAboutMe {
        edges {
          node {
            bioLong {
              bioLong
            }
            bioSectionTwo {
              bioSectionTwo
            }
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
            <motion.div class="bioText">
              <p>{edge.node.bioLong.bioLong}</p>
              <p>{edge.node.bioSectionTwo.bioSectionTwo}</p>

              {/* <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Click To Know Me!
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>{edge.node.bioLong.bioLong}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion> */}
            </motion.div>
          )
        })}
      </p>
    </div>
  )
}

export default MyBio
