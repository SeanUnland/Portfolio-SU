import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import { motion, MotionConfig } from "framer-motion"
import Header from "./header"
import "./navBar.css"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const NavBar = ({ children }) => {
  return (
    <div id="navBar">
      <Navbar variant="light">
        <motion.div
          initial={{ scale: 3.0 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 1 }}
          drag
        >
          <Navbar.Brand href="#home">
            <img
              id="navBarImage"
              src="https://i.imgur.com/GmSVPNBs.jpg"
              alt=""
            ></img>
          </Navbar.Brand>
        </motion.div>
        <Nav className="mr-auto">
          <Nav.Link>
            <motion.div
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.4 }}
            >
              <ListLink to="/">Home</ListLink>
            </motion.div>
          </Nav.Link>

          <Nav.Link>
            <motion.div
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.4 }}
            >
              <ListLink to="/about/">About</ListLink>
            </motion.div>
          </Nav.Link>

          <Nav.Link>
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.4 }}
            >
              <ListLink to="/contact/">Contact</ListLink>
            </motion.div>
          </Nav.Link>
          <Nav.Link>
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.4 }}
            >
              <ListLink to="/work/">Work</ListLink>
            </motion.div>
          </Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form> */}
      </Navbar>
    </div>
  )
}

export default NavBar
