import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import PrimaryBlueButton from '../components/primary-blue-button'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dynamic Price Generator</title>
        <meta property="og:title" content="Page Title" />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container1">
          <div className="home-card">
            <h1 className="home-text">Simple Dynamic Price Generator</h1>
            <span className="home-text1">
              Start by Uploading Image of Perishable Items ( Currently only few
              Vegetables and Fruits are suppored) or Generate it Manually 
            </span>
            <div className="home-container2">
              <div className="home-container3">
                <div className="home-container4">
                  <PrimaryPinkButton button="Upload Image"></PrimaryPinkButton>
                </div>
                <PrimaryBlueButton
                  rootClassName="primary-blue-button-root-class-name"
                  button="Generae Price Manually"
                ></PrimaryBlueButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1518843875459-f738682238a6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fHZlZ2V0YWJsZXN8ZW58MHx8fHwxNjY3MjQxNjQy&amp;ixlib=rb-4.0.3&amp;h=1500"
        className="home-image"
      />
      {/* <section className="home-testimonials">
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="home-bottom-wave-image"
        />
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="home-image1"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="home-top-wave-image"
        />
      </section> */}
      <Footer></Footer>
    </div>
  )
}

export default Home
