import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Hero from '../imgs/work-five/hero.png';

import workCoverOneSmall from '../imgs/work-one-cover-small.jpg';
import workCoverTwoSmall from '../imgs/work-two-cover-small.jpg';
import workCoverThreeSmall from '../imgs/work-three-cover-small.jpg';
import workCoverFourSmall from '../imgs/work-four-cover-small.jpg';
import workCoverFiveSmall from '../imgs/work-five-cover-small.jpg';

class WorkOne extends Component {
  render() {
    return (
      <div className="page-content">
        <div className="hero-header">
          <div className="hero-header-img position-relative overflow-hidden text-center bg-purple-grey">
            <div class="container col">
              <div className="hero-back"><a href="/work/4">←</a></div>
            </div>
            <div class="animated fadeIn">
              <div className="container col-10 col-md-8 col-lg-6 col-xl-5 mb-5 mx-auto">
              <h1 className="display-3 font-weight-bold mb-4">Everything Else</h1>
                <p className="font-weight-normal">Designing and developing digital products with a delightful user experiences for small businesses.</p>
              </div>
              <div class="container">
                <img className="mockup-img px-5 pt-3" src={Hero} alt="heroMockup" />
              </div>
            </div>
          </div>
        </div>
        <section className="py-8 py-lg-16 border-top">
          <div className="container px-5 px-lg-8">
            <div className="section-content">
              <div className="row">
                <div className="col-12 col-md-7">
                  <section className="mb-5">
                    <div className="section-header font-weight-bold text-uppercase mb-4">
                      <h5 className="snippet-label">Overview</h5>
                    </div>
                    <div className="section-content">
                      <p>SeedInvest's mission is to bring the broken fundraising process online, giving founders the ability to efficiently raise capital from a network of investors they may have never found offline.</p>
                      <p>Since our original target customer was the sophisticated accredited investor, it was clear that we needed to define a visual language that would inspire new investors to engage with Equity Crowdfunding. We also needed to design and build new features that would increase engagement and educate new investors so they could feel confident making an investment decision for the first time.</p>
                      <p>To maintain consistency throughout this process, we created a design system guided by a set of core principles and made up of reusable components. This effort helped to speed up the design process while bridging visual language gaps across teams.</p>
                    </div>                  
                  </section>
                </div>
                <div className="col-12 col-md-1"></div>
                <div className="col-12 col-md-4">
                  <section className="mb-5">
                    <div className="section-content">
                      <div className="snippet">
                        <div className="snippet-header font-weight-bold text-uppercase mb-4">
                          <h5 className="snippet-label">Project Details</h5>
                        </div>
                        <div className="snippet-content">
                          <h3>Lead Product Designer</h3>
                          <p>Product Planning, User Research, Stakeholder Interviews, Interaction design, Visual design, Prototyping, Testing, Front-End Development.</p>
                          <hr/>
                          <p>1 Designer, 4 Developers, 1 Project Manager</p>
                          <hr/>
                          <p>2 Years | Partial Deploy 2019</p>
                        </div>
                      </div>                   
                    </div>                  
                  </section>
                </div>      
              </div>   
            </div>
          </div>
        </section>
        <section className="py-8">
          <div className="container text-center px-5 px-md-8">
            <div className="container-header text-uppercase py-5 ">
              <h5>Check Out More Work</h5>
              <p className="font-weight-normal"></p>
            </div>
            <div className="section-content">
              <div className="row">
                <div className="col-12 col-md-4 mb-5">
                  <Link to="/work/1">
                    <img className="work-img" src={workCoverOneSmall} alt="work" />
                  </Link>
                </div>
                <div className="col-12 col-md-4 mb-5">
                  <Link to="/work/4">
                    <img className="work-img" src={workCoverTwoSmall} alt="work" />
                  </Link>
                </div>
                <div className="col-12 col-md-4 mb-5">
                  <Link to="/work/5">
                    <img className="work-img" src={workCoverThreeSmall} alt="work" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default WorkOne