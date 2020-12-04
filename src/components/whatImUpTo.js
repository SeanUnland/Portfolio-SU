import React from "react"
import { motion } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import "./whatImUpTo.css"

const WhatImUpTo = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAboutMe {
        edges {
          node {
            whatImUpTo {
              whatImUpTo
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <p id="whatImUpTo">
        {data.allContentfulAboutMe.edges.map(edge => {
          return (
            <>
              <p>{edge.node.whatImUpTo.whatImUpTo}</p>
            </>
          )
        })}
      </p>
    </div>
  )
}

export default WhatImUpTo
