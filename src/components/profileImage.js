import React from "react"
import { motion } from "framer-motion"
import "./profileImage.css"

const ProfileImage = props => {
  return (
    <div>
      <motion.img
        // initial={{ scale: 0.0 }}
        // animate={{ scale: 1.0 }}
        transition={{ duration: 1 }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        class="profileImage"
        src="https://i.imgur.com/QPcDYb9.jpg"
        alt="profile"
      ></motion.img>
    </div>
  )
}

export default ProfileImage
