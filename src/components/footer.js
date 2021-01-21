import React from "react"
import "./footer.css"

const Footer = props => {
  return (
    <div id="footer">
      <p>© 2021 Sean Unland</p>
      <div id="linkedIn-icon">
      <a href="https://www.linkedin.com/in/sean-unland-b46b2743/">
        <img id="linkedIn" src="https://img.icons8.com/ios/50/000000/linkedin.png"/>
      </a>
      </div>
      <div id="gitHub-icon">
      <a href="https://github.com/SeanUnland">
        <img id="gitHub" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/240px-Octicons-mark-github.svg.png"/>
      </a>
      </div>
      
      
    </div>
  )
}

export default Footer
