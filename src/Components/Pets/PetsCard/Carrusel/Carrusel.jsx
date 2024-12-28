import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import Header from './Header'
import Footer from './Footer'
import './css/base.css'
import './css/sandbox.css'
import './css/embla.css'

const OPTIONS = { align: 'start' }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const Carrusel = () => {
  
  return (
    <>
    <Header />
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    <Footer />
  </>
  )
}

export default Carrusel