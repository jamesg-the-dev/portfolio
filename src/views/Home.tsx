import React from 'react'
import LandingFeature from '../assets/landing-feature.svg'
import Slider from 'react-slick'
import { Logos } from '../helpers/Logos'
import './Home.scss'
function Home() {

  const logos = Logos.map((image: string, index) => <div key={index} className='language__container' ><img src={image} alt=""/></div>)
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: logos.length - 1,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '60px'
  }

  return (
    <main>
      <section className='home'>
        <div className='home__landing-feature-hold'>
          <img className='home__landing-feature' src={LandingFeature} alt="" />
        </div>
        <div className='home__split'>
          <h1 className='home__title'>Hi my name is James, welcome to my portfolio.</h1>
        </div>
      </section>
      
      <section className='languages'>
        <Slider {...settings}>
          {logos}
        </Slider>
      </section>
    </main>
  )
}

export default Home