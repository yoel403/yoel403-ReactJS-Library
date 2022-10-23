import React from 'react'
import imageCarousel from "../../assets/dilan.png"
import "../../styles/components/carousel.css"
import Flickity from 'react-flickity-component'
import { Link } from 'react-router-dom'

const flickityOptions = {
    initialIndex: 1,
    wrapAround: true
}

function Carousel() {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >

      <div class="gallery-cell slide-3">
        {/*<img src={imageCarousel} alt="Dilan" srcset="" />*/}
        <div class="carousel-caption">
                    <Link to="/Detail1">
                    <h5>Jujutsu 0</h5>
                    <p>Watashi gatauto</p>
                    </Link>
                </div>
      </div>

      <div class="gallery-cell slide-2">
       {/* <img src={imageCarousel} alt="Uburubur" srcset="" />*/}
       <div class="carousel-caption">
                <Link to="/Detail">
                <h5>Dilan 1990</h5>
                <p>MD Entertaint</p>
                </Link>
            </div>
      </div>

      <div class="gallery-cell">
        {/*<img src={imageCarousel} alt="yokusuke" srcset="" />*/}
            <div class="slide-1 me-5">
                <div class="carousel-caption">
                    <Link to="/Detail2">
                    <h5>Ubur-ubur Lembur</h5>
                    <p>Raditya Dika</p>
                    </Link>
                </div>
            </div>
      </div>
    </Flickity>
  )
}

export default Carousel