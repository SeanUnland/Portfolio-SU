import React from "react"
import { Link } from "gatsby"
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion"
import Header from "../components/header"
import Layout from "../components/layout"
import NavBar from "../components/navBar"
import WorkList from "../components/workList"
import Footer from "../components/footer"

const Work = () => {
  // this is all for the framer animation
  const { scrollYProgress } = useViewportScroll()
  const [isComplete, setIsComplete] = React.useState(false)
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1])
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 })
  React.useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange])
  // end of framer animation functions

  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <NavBar />
      <Layout>
        <Header headerText="Things I've Created" />{" "}
        {/* <a href="https://mini-pop.netlify.app/">Mini-Pop</a> */}
        <WorkList />
        <svg className="progress-icon" viewBox="0 0 60 60">
          <motion.path
            fill="none"
            strokeWidth="3"
            stroke="black"
            strokeDasharray="0 1"
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{
              pathLength,
              rotate: 90,
              translateX: 5,
              translateY: 5,
              scaleX: -1, // Reverse direction of line animation
            }}
          />
          <motion.path
            fill="none"
            strokeWidth="3"
            stroke="black"
            d="M14,26 L 22,33 L 35,16"
            initial={false}
            strokeDasharray="0 1"
            animate={{ pathLength: isComplete ? 1 : 0 }}
          />
        </svg>
      </Layout>
      <Footer />
      {/* </motion.path> */}
    </div>
  )
}

export default Work
