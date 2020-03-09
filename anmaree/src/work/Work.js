import React, { Component } from 'react'
import { Link } from "react-router-dom";
import heroFront from '../imgs/hero-front.png';
import heroStill from '../imgs/still.jpg';
import heroLeft from '../imgs/hero-left.png';
import heroRight from '../imgs/hero-right.png';
import workCoverOne from '../imgs/work-one-cover.jpg';
import workCoverTwo from '../imgs/work-two-cover.jpg';
import workCoverThree from '../imgs/work-three-cover.jpg';
import workCoverFour from '../imgs/work-four-cover.jpg';
import workCoverFive from '../imgs/work-five-cover.jpg';
import workCoverOneSmall from '../imgs/work-one-cover-small.jpg';
import workCoverTwoSmall from '../imgs/work-two-cover-small.jpg';
import workCoverThreeSmall from '../imgs/work-three-cover-small.jpg';
import workCoverFourSmall from '../imgs/work-four-cover-small.jpg';
import workCoverFiveSmall from '../imgs/work-five-cover-small.jpg';

import '../css/animations.css';

class Work extends Component {

  constructor(props) {
    super(props);
    
    this.state = { hoveredRight: false, hoveredLeft: false };
  }

  LeftMouseEnter = e => {
    this.TimeInLeft = setTimeout(() => {
      this.setState({ hoveredLeft: true });
    }, 350);
  };

  LeftMouseLeave = e => {
    clearTimeout(this.TimeInLeft);
    setTimeout(() => {
      this.setState({ hoveredLeft: false });
    }, 350);
  };

  RightMouseEnter = e => {
    this.TimeInRight = setTimeout(() => {
      this.setState({ hoveredRight: true });
    }, 350);
  };

  RightMouseLeave = e => {
    clearTimeout(this.TimeInRight);
    setTimeout(() => {
      this.setState({ hoveredRight: false });
    }, 350);
  };

  render() {
    const { hoveredLeft, hoveredRight } = this.state;
    const styleFront = hoveredLeft || hoveredRight ? { opacity: "0" } : { opacity: "1" };
    const styleLeft = hoveredLeft ? { opacity: "1" } : { opacity: "0" };
    const styleRight = hoveredRight ? { opacity: "1" } : { opacity: "0" };
    const hoveredLeftClass = hoveredLeft ? "animated tada infinite" : "";
    const hoveredRightClass = hoveredRight ? "animated shake infinite slow" : "";
    return (
      <section>
        <div className="hero-block container position-relative">
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
              <div className={"header-shapes blue-square " + hoveredLeftClass}></div>
              <div className={"header-shapes orange-triangle " + hoveredLeftClass}></div>
              <div className={"header-shapes white-dotted-line " + hoveredLeftClass}></div>
              <div className={"header-shapes coral-zig-zag-line " + hoveredLeftClass}></div>
              <div className={"header-shapes white-dashed-circle " + hoveredLeftClass}></div>
              <div className={"header-shapes orange-circle " + hoveredLeftClass}></div>
              <div className={"header-shapes blue-dotted-radius " + hoveredLeftClass}></div>
              <div className={"header-shapes coral-stripped-square " + hoveredLeftClass}></div>
              <div className={"header-shapes white-circle-rectangle " + hoveredLeftClass}></div>
              <div className={"header-shapes white-diamond " + hoveredLeftClass}></div>
              <div className={"header-shapes orange-diamond " + hoveredLeftClass}></div>
              <div className={"header-shapes coral-diamond " + hoveredLeftClass}></div>
            </div>
            <div className="image-holder right-shapes"> 
              <div className={"header-shapes white-slash-line " + hoveredRightClass}></div>
              <div className={"header-shapes green-dashed-triangle " + hoveredRightClass}></div>
              <div className={"header-shapes green-fb-dashed-line " + hoveredRightClass}></div>
              <div className={"header-shapes white-plus-square " + hoveredRightClass}></div>
              <div className={"header-shapes green-carrot " + hoveredRightClass}></div>
              <div className={"header-shapes blue-dotted-line " + hoveredRightClass}></div>
              <div className={"header-shapes blue-comment " + hoveredRightClass}></div>
              <div className={"header-shapes blue-diamond " + hoveredRightClass}></div>
            </div>
          </div>
        </div>
        <div className="container work-cover-wrapper my-5 my-md-7">
          <div className="row">
            <div className="col-12 col-md-6 my-5">
              <div className="work-item overflow-hidden">
                <div className="work-item-inner">
                  <Link to="/work/1">
                    <img className="work-img d-none d-md-block" src={workCoverOne} alt="work" />
                    <img className="work-img d-md-none" src={workCoverOneSmall} alt="work" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 my-5">
              <div className="work-item overflow-hidden">
                <div className="work-item-inner">
                  <Link to="/work/2">
                    <img className="work-img d-none d-md-block" src={workCoverTwo} alt="work" />
                    <img className="work-img d-md-none" src={workCoverTwoSmall} alt="work" />
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