import React from "react"
import { Carousel } from "react-bootstrap"
import "./carousel.css"

const CarouselHome = props => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src="https://i.imgur.com/LCgPuVZ.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/2s4su3n.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/PYnvuuV.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselHome
