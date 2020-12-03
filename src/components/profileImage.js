import React from "react"
import { motion } from "framer-motion"
import "./profileImage.css"

const ProfileImage = props => {
  return (
    <div>
      <motion.img
        initial={{ scale: 0.0 }}
        animate={{
          scale: 1.0,
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ duration: 1 }}
        class="profileImage"
        src="https://i.imgur.com/QPcDYb9.jpg"
        alt="profile"
      ></motion.img>
    </div>
  )
}

export default ProfileImage
