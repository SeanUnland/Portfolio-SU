import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "bootstrap/dist/css/bootstrap.min.css"

const ContactList = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulContactMe {
        edges {
          node {
            gitHub {
              raw
            }
            linkedIn {
              raw
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <p>
        {data.allContentfulContactMe.edges.map(edge => {
          return (
            <div>
              <a>{edge.node[1]}</a>
            </div>
          )
        })}
      </p>
    </div>
  )
}

export default ContactList
