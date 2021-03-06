import React, { Component } from 'react'
import { Link } from "react-router-dom";
import heroFront from '../imgs/hero-front.png';
import heroStill from '../imgs/still.jpg';
import heroLeft from '../imgs/hero-left.png';
import heroRight from '../imgs/hero-right.png';
import workCoverOne from '../imgs/work-covers-01.png';
import workCoverTwo from '../imgs/work-covers-02.png';
import workCoverThree from '../imgs/work-covers-03.png';
import workCoverFour from '../imgs/work-covers-04.png';
import workCoverOneSmall from '../imgs/work-covers-small-01.png';
import workCoverTwoSmall from '../imgs/work-covers-small-02.png';
import workCoverThreeSmall from '../imgs/work-covers-small-03.png';
import workCoverFourSmall from '../imgs/work-covers-small-04.png';
import CoverSmall from '../imgs/hero-small.png';

import '../css/animations.css';

class Work extends Component {

  constructor(props) {
    super(props);
    
    this.state = { hoveredRight: false, hoveredLeft: false };
  }

  LeftMouseEnter = e => {
    this.TimeInLeft = setTimeout(() => {
      this.setState({ hoveredLeft: true });
    }, 400);
  };

  LeftMouseLeave = e => {
    clearTimeout(this.TimeInLeft);
    setTimeout(() => {
      this.setState({ hoveredLeft: false });
    }, 500);
  };

  RightMouseEnter = e => {
    this.TimeInRight = setTimeout(() => {
      this.setState({ hoveredRight: true });
    }, 400);
  };

  RightMouseLeave = e => {
    clearTimeout(this.TimeInRight);
    setTimeout(() => {
      this.setState({ hoveredRight: false });
    }, 500);
  };

  render() {
    const { hoveredLeft, hoveredRight } = this.state;
    const styleFront = hoveredLeft || hoveredRight ? { opacity: "0" } : { opacity: "1" };
    const styleLeft = hoveredLeft ? { opacity: "1" } : { opacity: "0" };
    const styleRight = hoveredRight ? { opacity: "1" } : { opacity: "0" };
    
    const LeftHover = hoveredLeft ? "tada animated infinite" : "";
    const RightHover = hoveredRight ? "tada animated infinite" : "";

    return (
      <section>
        <div className="hero-mobile container d-md-none">
          <img src={CoverSmall} alt="cover-small" />
        </div>
        <div className="hero-block container position-relative d-none d-md-block">
          <div className="hero-wrapper bg-peach">
            <div className="hero-block-header">
              <div className="row">
                <div className="col-5 text-left left-hover-container" onMouseEnter={this.LeftMouseEnter} onMouseLeave={this.LeftMouseLeave}>
                  <h1 className="display-4 font-weight-normal">Designer</h1>
                  <p className="lead font-weight-normal">Product Designer with a passion for turning complex problems into simple solutions.</p>
                </div>
                <div className="col-2"></div>
                <div className="col-5 text-right right-hover-container text-white" onMouseEnter={this.RightMouseEnter} onMouseLeave={this.RightMouseLeave}>
                  <h1 className="display-4 font-weight-normal">&lt;Coder/&gt;</h1>
                  <p className="lead font-weight-normal">Front End Developer with a love for building engaging experiences with new technologies.</p>
                </div>
              </div>
            </div>
            <div className="image-holder portrait"> 
              <img style={styleFront} className="head-image front" src={heroFront} alt="hero-front" />
              <img style={styleLeft} className="head-image left" src={heroLeft} alt="hero-left" />
              <img style={styleRight} className="head-image right" src={heroRight} alt="hero-right" />
              <img className="head-image back" src={heroStill} alt="hero-still" />
            </div>
            <div className="image-holder left-shapes">
              <div className={"header-shapes orange-circle " + LeftHover}></div>
              <div className={"header-shapes blue-dotted-radius " + LeftHover}></div>
              <div className={"header-shapes blue-square " + LeftHover}></div>
              <div className={"header-shapes white-dotted-line " + LeftHover}></div>
              <div className={"header-shapes orange-triangle " + LeftHover}></div>
              <div className={"header-shapes coral-zig-zag-line " + LeftHover}></div>
              <div className={"header-shapes white-dashed-circle " + LeftHover}></div>
            </div>
            <div className="image-holder right-shapes">
              <div className={"header-shapes coral-stripped-square " + RightHover}></div>
              <div className={"header-shapes white-circle-rectangle " + RightHover}></div>
              <div className={"header-shapes white-diamond " + RightHover}></div>
              <div className={"header-shapes orange-diamond " + RightHover}></div>
              <div className={"header-shapes coral-diamond " + RightHover}></div>
              <div className={"header-shapes white-slash-line " + RightHover}></div>
              <div className={"header-shapes green-dashed-triangle " + RightHover}></div>
            </div>
          </div>
        </div>
        <div className="container work-cover-wrapper my-4 my-md-7">
          <div className="row">
            <div className="col-12 col-md-6 my-4 my-md-5">
              <div className="work-item overflow-hidden">
                <div className="work-item-inner">
                  <Link to="/work/1">
                    <img className="work-img d-none d-md-block" src={workCoverOne} alt="work" />
                    <img className="work-img d-md-none" src={workCoverOneSmall} alt="work" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 my-4 my-md-5">
              <div className="work-item overflow-hidden">
                <div className="work-item-inner">
                  <Link to="/work/2">
                    <img className="work-img d-none d-md-block" src={workCoverTwo} alt="work" />
                    <img className="work-img d-md-none" src={workCoverTwoSmall} alt="work" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 my-4 my-md-5">
              <div className="work-item overflow-hidden">
                <div className="work-item-inner">
                  <Link to="/work/3">
                    <img className="work-img d-none d-md-block" src={workCoverThree} alt="work" />
                    <img className="work-img d-md-none" src={workCoverThreeSmall} alt="work" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 my-4 my-md-5">
              <div className="work-item overflow-hidden">
                <div className="work-item-inner">
                  <Link to="/work/4">
                    <img className="work-img d-none d-md-block" src={workCoverFour} alt="work" />
                    <img className="work-img d-md-none" src={workCoverFourSmall} alt="work" />
                  </Link>
                </div>
              </div>
            </div>
          </div>          
        </div>
      </section>
    )
  }
}

export default Work