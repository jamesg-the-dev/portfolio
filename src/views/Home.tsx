import React, { useEffect, useRef, useState } from 'react'
import LandingFeature from '../assets/landing-feature.svg'
import { TypeAnimation } from 'react-type-animation'
import Slider from 'react-slick'
import { LanguageLogo as _LanguageLogo, Logos } from '../helpers/Logos'
import LanguageLogo from '../components/LanguageLogo/LanguageLogo'
import './Home.scss'
import LanguageLogoContent from '../components/LanguageLogo/LanguageLogoContent'
import SnakeGame from '../components/SnakeGame/SnakeGame'
function Home() {

  const logos = Logos.map((language: _LanguageLogo, index) => <LanguageLogo key={index} logo={language.logo} language={language.language} content={language.content} />)

  //refs
  const languageContainer = useRef<HTMLElement>(null);

  //state variables
  const [content, setContent] = useState(logos[0].props.content);
  const [language, setlanguage] = useState(logos[0].props.language);
  const [languageContainerHeight, setLanguageContainerHeight] = useState({ width: 0, height: 0 });

  //event handlers
  const handleSliderChange = (index: number) => {
    setContent(logos[index].props.content)
    setlanguage(logos[index].props.language)
    // setLanguageContainerHeight(languageContainer!.current!.getBoundingClientRect())
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: logos.length - 1,
    autoplaySpeed: 8000,
    autoplay: true,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    afterChange: handleSliderChange
  }

  const sequence = [
    'Hi my nabe', //mimck typo
    150,
    'Hi my name',
    150,
    'Hi my name is James, welcome to my portfolio.'
  ]

  useEffect(() => {
    setLanguageContainerHeight(languageContainer!.current!.getBoundingClientRect())
  }, [])

  return (
    <main>
      <section className='home'>
        <div className='home__landing-feature-hold'>
          <img className='home__landing-feature' src={LandingFeature} alt="" />
        </div>
        <div className='home__split'>
          <h1 className='home__title'>
            <TypeAnimation sequence={sequence} />
          </h1>
        </div>
      </section>

      <section 
        className='languages' 
        ref={languageContainer}
        style={{
          transition: '300ms',
          height: `${languageContainerHeight.height}px`
        }}
      >
        <Slider {...settings}>
          {logos}
        </Slider>
        <LanguageLogoContent language={language} content={content}/>
      </section>

      <section style={{padding: '1rem'}}>
        <SnakeGame/>
      </section>
    </main>
  )
}

export default Home