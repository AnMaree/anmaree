import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Hero from '../imgs/work-three/hero.png';
import Launch from '../imgs/work-three/launch.png';

import Wireframes from '../imgs/work-three/wireframes.jpg';
import Prototypes from '../imgs/work-three/mockups.png';

import PersonaOrganizer from '../imgs/work-three/persona-organizer.png';
import PersonaFounder from '../imgs/work-three/persona-founder.png';
import PersonaInvestor from '../imgs/work-three/persona-investor.png';

import FeedbackOne from '../imgs/work-three/feedback-01.png';
import FeedbackTwo from '../imgs/work-three/feedback-02.png';
import FeedbackThree from '../imgs/work-three/feedback-03.png';
import FeedbackFour from '../imgs/work-three/feedback-04.png';
import FeedbackFive from '../imgs/work-three/feedback-05.png';
import FeedbackSix from '../imgs/work-three/feedback-06.png';
import FeedbackSeven from '../imgs/work-three/feedback-07.png';
import FeedbackEight from '../imgs/work-three/feedback-08.png';

import workCoverOneSmall from '../imgs/work-one-cover-small.jpg';
import workCoverFourSmall from '../imgs/work-four-cover-small.jpg';
import workCoverFiveSmall from '../imgs/work-five-cover-small.jpg';

class WorkOne extends Component {
  render() {
    return (
      <div className="page-content">
        <div className="hero-header">
          <div className="hero-header-img position-relative overflow-hidden text-center bg-lime">
            <div class="container col">
              <div className="hero-back"><a href="/work/2">←</a></div>
              <div className="hero-next"><a href="/work/4">→</a></div>
            </div>
            <div class="animated fadeIn">
              <div className="container col-10 col-md-8 col-lg-6 col-xl-5 mb-5 mx-auto">
              <h1 className="display-3 font-weight-bold mb-4">Live Startup Investing</h1>
                <p className="font-weight-normal">Bringing equity crowdfunding to startup demo days world wide, allowing investors to invest LIVE.</p>
              </div>
              <div class="container col-12">
                <img className="mockup-img" src={Hero} alt="heroMockup" />
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
                          <h3 className="text-left">Lead Product Designer</h3>
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
        <section className="py-10 bg-light">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section className="mb-5">
                    <div className="section-header text-center mb-5 col-md-10 mx-auto">
                      <h1 className="display-4 mb-4">A Reflection On Our First Event</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="section-content mt-7 col-lg-10 mx-auto text-center">
                      <img className="launch-img w-100" src={Launch} alt="launch" />
                    </div>             
                  </section>
                  <section>
                    <div className="section-content mt-7 col-lg-10 mx-auto text-center">
                      <div className="row mt-5">
                        <div className="col">
                          <div className="snippet bg-white box-shadow py-5">
                            <div className="snippet-header">
                              <div className="snippet-title display-4 font-weight-bold">During</div>
                              <p>The Event</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="snippet bg-white box-shadow py-5">
                            <div className="snippet-header">
                              <div className="snippet-title display-4 font-weight-bold">148</div>
                              <p>Investments</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="snippet bg-white box-shadow py-5">
                            <div className="snippet-header">
                              <div className="snippet-title display-4 font-weight-bold">$223,188</div>
                              <p>Amount Raised</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <hr className="light col-lg-10 mx-auto" />
                  <section>
                    <div className="section-content mt-5 col-lg-10 mx-auto text-center">
                      <div className="row">
                        <div className="col">
                          <div className="snippet bg-white box-shadow py-5">
                            <div className="snippet-header">
                              <div className="snippet-title display-4 font-weight-bold">After</div>
                              <p>The Event</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="snippet bg-white box-shadow py-5">
                            <div className="snippet-header">
                              <div className="snippet-title display-4 font-weight-bold">2,019</div>
                              <p>Investments</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="snippet bg-white box-shadow py-5">
                            <div className="snippet-header">
                              <div className="snippet-title display-4 font-weight-bold">$76,200.00</div>
                              <p>Average Daily Raised</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div className="section-content mt-7 col-lg-10 mx-auto text-center">
                      <div className="row mt-5">
                        <div className="col-6 col-md-4 col-lg-3">
                          <div className="feedback-img-wrapper mb-5 box-shadow">
                            <img className="feedback-img" src={FeedbackOne} alt="work" />
                          </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                          <div className="feedback-img-wrapper mb-5 box-shadow">
                            <img className="feedback-img" src={FeedbackTwo} alt="work" />
                          </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                          <div className="feedback-img-wrapper mb-5 box-shadow">
                            <img className="feedback-img" src={FeedbackThree} alt="work" />
                          </div>
                        </div>
                         <div className="col-6 col-md-4 col-lg-3">
                          <div className="feedback-img-wrapper mb-5 box-shadow">
                            <img className="feedback-img" src={FeedbackFour} alt="work" />
                          </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                          <div className="feedback-img-wrapper mb-5 box-shadow">
                            <img className="feedback-img" src={FeedbackFive} alt="work" />
                          </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                          <div className="feedback-img-wrapper mb-5 box-shadow">
                            <img className="feedback-img" src={FeedbackSix} alt="work" />
                          </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                          <div className="feedback-img-wrapper mb-5 box-shadow">
                            <img className="feedback-img" src={FeedbackSeven} alt="work" />
                          </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                          <div className="feedback-img-wrapper mb-5 box-shadow">
                            <img className="feedback-img" src={FeedbackEight} alt="work" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>    
              </div>   
            </div>
          </div>
        </section>
        <section className="py-10 bg-dark text-white">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-10 col-md-12 mx-auto">
                  <section>
                    <div className="section-header mb-5 text-center">
                      <h1 className="display-4 mb-4">The Problems</h1>
                    </div>
                    <div className="section-content mt-5 text-center">
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                          <section className="my-5 p-5 border">
                            <div className="section-header">
                              <h4 className="section-title display-4 font-weight-bold">#1</h4>
                            </div>
                            <div className="section-content">
                              <p>Activity during the event was insignificant compared to after the event.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <section className="my-5 p-5 border">
                            <div className="section-header">
                              <h4 className="section-title display-4 font-weight-bold">#2</h4>
                            </div>
                            <div className="section-content">
                              <p>Investors experience confirmation bias and loss aversion.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <section className="my-5 p-5 border">
                            <div className="section-header">
                              <h4 className="section-title display-4 font-weight-bold">#3</h4>
                            </div>
                            <div className="section-content">
                              <p>Based on founder and organizer feedback, our core mission was lost.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <section className="my-5 p-5 border">
                            <div className="section-header">
                              <h4 className="section-title display-4 font-weight-bold">#4</h4>
                            </div>
                            <div className="section-content">
                              <p>The problems to solve are with the issuer, not he organization.</p>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 bg-light">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section className="mb-5">
                    <div className="section-header text-center mb-5 col-md-10 mx-auto">
                      <h1 className="display-4 mb-4">Empathize & Define Our Users</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="section-content mt-7 my-5 col-xl-10 mx-auto text-center">
                      <img className="persona-img w-100 box-shadow" src={PersonaOrganizer} alt="launch" />
                    </div>
                    <div className="section-content my-5 col-xl-10 mx-auto text-center">
                      <img className="persona-img w-100 box-shadow" src={PersonaFounder} alt="launch" />
                    </div>
                    <div className="section-content my-5 col-xl-10 mx-auto text-center">
                      <img className="persona-img w-100 box-shadow" src={PersonaInvestor} alt="launch" />
                    </div>          
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-10 mx-auto">
                  <section>
                    <div className="section-header mb-5 text-center">
                      <h1 className="display-4 mb-4">The Solutions</h1>
                    </div>
                    <div className="section-content mt-5 text-center">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <section className="my-5 p-5 border border-dark">
                            <div className="section-header">
                              <p className="section-title font-weight-bold">Redefine SeedInvest "Live" Concept.</p>
                            </div>
                            <div className="section-content">
                              <p>It should support our brand’s mission to transform the broken private company fundraising process in order to make it easier for entrepreneurs to raise capital. Value for the organization will follow.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6">
                          <section className="my-5 p-5 border border-dark">
                            <div className="section-header">
                              <p className="section-title font-weight-bold">Create a mobile friendly experience.</p>
                            </div>
                            <div className="section-content">
                              <p>Investors need more information, education, and preparation before events start to know what “Live” investing is, why they should get involved, and be given the tools to make thoughtful decisions.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6">
                          <section className="my-5 p-5 border border-dark">
                            <div className="section-header">
                              <p className="section-title font-weight-bold">Make the investor’s experience as frictionless as possible upfront and convert later.</p>
                            </div>
                            <div className="section-content">
                              <p>Give more options and features to “Subscribe” and /or “Ask a Question”, rather than push to “Invest Now”.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6">
                          <section className="my-5 p-5 border border-dark">
                            <div className="section-header">
                              <p className="section-title font-weight-bold">Enable the venture team to create event pages with no intervention from Product.</p>
                            </div>
                            <div className="section-content">
                              <p>Founders should know who is interested in their company at an event, know who is accredited.</p>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-8 bg-dark">
          <div className="section-content">
            <div className="row">
              <div className="col-12">
                <section>
                  <div className="section-header text-center text-white col-md-6 mx-auto">
                    <h1 className="display-4 mb-4">Ideating & Wireframing</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="section-content text-center">
                    <img className="wireframe-img w-100" src={Wireframes} alt="wireframe" />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-8 bg-light">
          <div className="section-content">
            <div className="row">
              <div className="col-12">
                <section>
                  <div className="section-header text-center col-md-6 mx-auto">
                    <h1 className="display-4 mb-4">Mockups & Prototypes</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="section-content text-center">
                    <img className="prototypes-img w-100" src={Prototypes} alt="prototypes" />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 bg-dark">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section className="mb-5 text-white">
                    <div className="section-header mb-5 col-md-10 mx-auto text-center">
                      <h1 className="display-4 mb-4">Project Impact</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section py-8 py-lg-10 border-bottom">
          <div className="container px-5 px-lg-8 ">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section className="mb-5">
                    <div className="section-header mb-5 col-md-8 mx-auto">
                      <h1 className="display-4 mb-4">Lessons Learned</h1>
                    </div>
                    <div className="section-content col-md-8 mx-auto">
                      <div className="snippet mb-5">
                        <div className="snippet-header">
                          <h4 className="snippet-title">Measuring Success Is Tricky</h4>
                        </div>
                        <div className="snippet-content">
                          <p>The activity on the platform is highly dependent on which companies that are fundraising at any given time. AB Testing or looking at KPI trends, for example, was not always helpful in these circumstances. We learned that going forward we would need to survey customers, request feedback, and analyze customer tickets more diligently.</p>
                        </div>
                      </div>
                      <div className="snippet mb-5">
                        <div className="snippet-header">
                          <h4 className="snippet-title">Process Is Key</h4>
                        </div>
                        <div className="snippet-content">
                          <p>With a project as big as this, it was important to track where each feature was in the process. Each feature needed to be designed, tested, and built at different times, but needed to be deployed together for platform consistency.</p>
                        </div>
                      </div>
                      <div className="snippet mb-5">
                        <div className="snippet-header">
                          <h4 className="snippet-title">User Research Is Essential</h4>
                        </div>
                        <div className="snippet-content">
                          <p>Our user research laid the foundation for future features, bridged gaps across teams, and provided reliable information that we could return to in support of our hypotheses.</p>
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
            <div className="container-header text-uppercase py-5">
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
                    <img className="work-img" src={workCoverFourSmall} alt="work" />
                  </Link>
                </div>
                <div className="col-12 col-md-4 mb-5">
                  <Link to="/work/5">
                    <img className="work-img" src={workCoverFiveSmall} alt="work" />
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