import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { Accordion, Card, Button } from "react-bootstrap"

import Header from "./header"
import "./languageList.css"

const LanguageList = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAboutMe {
        edges {
          node {
            languages {
              languages
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
            <div>
              {/* <ul>{edge.node.languages.languages}</ul> */}
              <div>
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        My Languages
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body id="languageList">
                        {edge.node.languages.languages}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          )
        })}
      </p>
    </div>
  )
}

export default LanguageList
