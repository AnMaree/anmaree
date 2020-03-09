import React, { Component } from 'react'
import heroMockup from '../imgs/hero-mockup.png';

class WorkOne extends Component {
  render() {
    return (
      <section>
        <div className="hero-header">
          <div className="hero-header-img position-relative overflow-hidden text-center bg-teal">
            <div class="container col">
              <div className="hero-back"><a href="/work/5">←</a></div>
            </div>
            <div class="animated fadeIn">
              <div className="col-10 col-md-8 col-lg-6 col-xl-5 mb-5 mx-auto">
                <h1 className="display-3 font-weight-bold mb-4">Work Six</h1>
                <p className="font-weight-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolor sit amet consectetur adipiscing.</p>
              </div>
              <div class="container">
                <img className="mockup-img px-5 pt-3" src={heroMockup} alt="heroMockup" />
              </div>
            </div>
          </div>
        </div>
        <div className="container border py-16">
          <h2>Highlights</h2>
        </div>
        <div className="container border py-16">
          <h2>Empathize</h2>
        </div>
        <div className="container border py-16">
          <h2>Define</h2>
        </div>
        <div className="container border py-16">
          <h2>Ideate</h2>
        </div>
        <div className="container border py-16">
          <h2>Protype</h2>
        </div>
        <div className="container border py-16">
          <h2>Test</h2>
        </div>
        <div className="container border py-16">
          <h2>Build & Deploy</h2>
        </div>
      </section>
    )
  }
}

export default WorkOne