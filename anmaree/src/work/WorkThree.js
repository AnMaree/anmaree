import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Hero from '../imgs/work-three/hero.png';
import Launch from '../imgs/work-three/launch.png';

import Wireframes from '../imgs/work-three/wireframes.jpg';
import Prototypes from '../imgs/work-three/mockups.png';
import MobileMockups from '../imgs/work-three/mobile-mockups.png';
import RaiseVideo from '../videos/apply.mp4'

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
                      <p>SeedInvest launches it's new feature "SeedInvest LIVE", an interactive experience that empowers startups to raise capital directly from attendees at Demo Day events. SeedInvest has partnered with demo events such as Launch Festival, eMerge Americas, and TechCrunch to connect startups with investors live.</p>
                      <p>SeedInvest LIVE is an entirely new concept. To prepare, it was important to understand the needs of both the startups and the organization, ideate on features that will evoke the desired experience, produce low-fidelity prototypes, attempt to modularize defined features based on priority, then build our roadmap.</p>
                      <p>Because our first event was only 4 weeks out, the design thinking process was challenged. We had to design and build based on our own hypotheses and overlook some crutial steps. Our first event provided many wins, however, it was not proven to be a sustainable product. Having the time to research, analyse, and define the problem before development is important to deliver new and sustainable products.</p>
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
                          <p>4 Months | Deploy 2017</p>
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
                      <h1 className="display-4 mb-4">Our First SeedInvest LIVE Event</h1>
                      <p>SeedInvest partnered with Jason Calacanis to enable live investing at LAUNCH Festival. The LAUNCH Festival is considered the largest startup event in the United States and is attended by 12,000 investors and founders from around the world.</p>
                    </div>
                    <div className="section-content mt-7 col-lg-10 mx-auto text-center">
                      <img className="launch-img w-100" src={Launch} alt="launch" />
                    </div>             
                  </section>

                  <section className="mt-7 col-lg-10 mx-auto text-center">
                    <div className="section-header mb-5">
                      <h1 className="display-4 mb-4">Our Hypotheses</h1>
                    </div>
                    <div className="section-content mt-5">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <section className="mb-5 p-5 bg-white box-shadow">
                            <div className="section-header">
                              <p className="section-title font-weight-bold">Build An Interactive Experience</p>
                            </div>
                            <div className="section-content">
                              <p>Design an interactive leaderboard that will be displayed during the pitch events and on the demo floor. Once an investor makes an investment, it will be reflected in live-action on the leaderboard.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6">
                          <section className="mb-5 p-5 bg-white box-shadow">
                            <div className="section-header">
                              <p className="section-title font-weight-bold">Drive Investment Activity</p>
                            </div>
                            <div className="section-content">
                              <p>Design an event page that displays the investable deals at the event. Investors may navigate to the SeedInvest LIVE event page to browse deals that are eligable for investment.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6">
                          <section className="mb-5 p-5 bg-white box-shadow">
                            <div className="section-header">
                              <p className="section-title font-weight-bold">Get To Know The Startups</p>
                            </div>
                            <div className="section-content">
                              <p>Design a simple mobile startup profile that allows attendees to learn about the companies from anywhere on the demo floor, not just at their booth.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6">
                          <section className="mb-5 p-5 bg-white box-shadow">
                            <div className="section-header">
                              <p className="section-title font-weight-bold">Create Value For Other Startups</p>
                            </div>
                            <div className="section-content">
                              <p>Design a feature that allows attendees to vote for their favorite startup at the event. This feature is for all the startups at the event, not just the investable ones.</p>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="mt-7 col-lg-10 mx-auto text-center">
                    <div className="section-header mb-5">
                      <h1 className="display-4 mb-4">The Results</h1>
                    </div>
                    <div className="section-content mt-5">
                      <div className="row">
                        <div className="col">
                          <div className="snippet bg-white box-shadow py-5">
                            <div className="snippet-header">
                              <div className="snippet-title display-4 font-weight-bold">During</div>
                              <p>The Event (2 days)</p>
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
                              <div className="snippet-title display-4 font-weight-bold">$220K</div>
                              <p>Total Raised</p>
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
                              <p>The Event (30 days)</p>
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
                              <div className="snippet-title display-4 font-weight-bold">$3.4M</div>
                              <p>Total Raised</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="mt-7 col-lg-10 mx-auto text-center">
                    <div className="section-header mb-5">
                      <h1 className="display-4 mb-4">The Feedback</h1>
                    </div>
                    <div className="section-content mt-5">
                      <div className="row">
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
                              <p>The interactive experienced did not make the strong impact we hoped.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <section className="my-5 p-5 border">
                            <div className="section-header">
                              <h4 className="section-title display-4 font-weight-bold">#2</h4>
                            </div>
                            <div className="section-content">
                              <p>Investment activity during the event was insignificant compared to after.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <section className="my-5 p-5 border">
                            <div className="section-header">
                              <h4 className="section-title display-4 font-weight-bold">#3</h4>
                            </div>
                            <div className="section-content">
                              <p>The recorded presentations were very valuable, but not utilites on profiles.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <section className="my-5 p-5 border">
                            <div className="section-header">
                              <h4 className="section-title display-4 font-weight-bold">#4</h4>
                            </div>
                            <div className="section-content">
                              <p>Other startups at the event were unaware of the feature we built for them.</p>
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
                      <h1 className="display-4 mb-4">Back To The Drawing Board</h1>
                      <p>After reviewing the results, collecting feedback from the startups and the organization, and identifying the problem, it was clear we needed to invest more time into the intiation design thinking process. We created personas for each stakeholder, developed process storyboards, and identified the high priorty features to prototype. This would help us produce a more sustainable product.</p>
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
                  <section className="mt-7 col-lg-10 mx-auto text-center">
                    <div className="section-header mb-5">
                      <h1 className="display-4 mb-4">Types of Events</h1>
                    </div>
                    <div className="section-content mt-5">
                      <div className="row">
                        <div className="col-12 col-md-4">
                          <section className="mb-5 p-5 bg-white box-shadow border border-success">
                            <div className="snippet-label mb-5 text-success text-uppercase">High Priorty</div>
                            <div className="section-header">
                              <h2 className="section-title font-weight-bold">Partnerships</h2>
                            </div>
                            <hr/>
                            <div className="section-content mt-5">
                              <ul className="list-unstyled">
                                <li>Static Experience</li>
                                <li>No Live Stream</li>
                                <li>No Pre-Recorded Videos</li>
                                <li>No Play-back</li>
                                <li>List of Deals</li>
                                <li>4 States of Event Page</li>
                                <li>Upcoming State</li>
                                <li>Pre-Register State</li>
                                <li>Investable State</li>
                                <li>Closed State</li>
                                <li>Offline</li>
                              </ul>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-4">
                          <section className="mb-5 p-5 bg-white box-shadow">
                            <div className="snippet-label mb-5 text-muted text-uppercase">Low Priorty</div>
                            <div className="section-header">
                              <h2 className="section-title font-weight-bold">Digital Demo Days</h2>
                            </div>
                            <hr/>
                            <div className="section-content mt-5">
                              <ul className="list-unstyled">
                                <li>Semi-Static Experience</li>
                                <li>No Live Stream</li>
                                <li>Has Pre-Recorded Videos</li>
                                <li>Has Play-back</li>
                                <li>Video Show Case</li>
                                <li>Comment/Thread Feature</li>
                                <li>Upcoming State</li>
                                <li>Pre-Register State</li>
                                <li>Investable State</li>
                                <li>Closed State</li>
                                <li>Offline</li>
                              </ul>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-4">
                          <section className="mb-5 p-5 bg-white box-shadow">
                            <div className="snippet-label mb-5 text-muted text-uppercase">Low Priorty</div>
                            <div className="section-header">
                              <h2 className="section-title font-weight-bold">SeedInvest LIVE</h2>
                            </div>
                            <hr/>
                            <div className="section-content mt-5">
                              <ul className="list-unstyled">
                                <li>Hyper Interactive Experience</li>
                                <li>Has Live Stream</li>
                                <li>No Pre-Recorded Videos</li>
                                <li>Has Play-back</li>
                                <li>Live Video Feed</li>
                                <li>Chat/Twitter/Live QA</li>
                                <li>Upcoming State</li>
                                <li>Pre-Register State</li>
                                <li>Investable State</li>
                                <li>Closed State</li>
                                <li>Offline</li>
                              </ul>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="mt-7 col-lg-10 mx-auto text-center">
                    <div className="section-header mb-5">
                      <h1 className="display-4 mb-4">Partnership Process Storyboard</h1>
                    </div>
                    <div className="section-content mt-5">
                      <p>Storyboarding</p>
                    </div>
                  </section>
                  <section className="mt-7 col-lg-10 mx-auto text-center">
                    <div className="section-header mb-5">
                      <h1 className="display-4 mb-4">Supporting Features</h1>
                    </div>
                    <div className="section-content mt-5">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <section className="mb-5 p-5 bg-white box-shadow">
                            <div className="section-header">
                              <p className="section-title font-weight-bold">Bring the interactive experience online.</p>
                            </div>
                            <div className="section-content">
                              <p>Design an event page that can switch to different stages of the process: startup applications, investor pre-registration, and the investable live event page.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6">
                          <section className="mb-5 p-5 bg-white box-shadow">
                            <div className="section-header">
                              <p className="section-title font-weight-bold">Get investors ready to invest before the event.</p>
                            </div>
                            <div className="section-content">
                              <p>Design an oboarding flow that allows investors to pre-registration before the event. This way once the event goes live, investors are ready to invest with one click.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6">
                          <section className="mb-5 p-5 bg-white box-shadow">
                            <div className="section-header">
                              <p className="section-title font-weight-bold">Make the investment checkout process frictionless.</p>
                            </div>
                            <div className="section-content">
                              <p>Re-design a mobile friendly investment checkout process. This was already a priorty, but became high priorty to prepare a quick and mobile checkout.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6">
                          <section className="mb-5 p-5 bg-white box-shadow">
                            <div className="section-header">
                              <p className="section-title font-weight-bold">Support the team with internal management tools.</p>
                            </div>
                            <div className="section-content">
                              <p>Design an internal tool that enables the business teams to create and edit baisc event pages with little to no intervention from product.</p>
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
                <section className="container">
                  <div className="section-header text-center mb-5 col-lg-9 mx-auto text-white">
                    <h1 className="display-4 mb-4">Ideating & Wireframing</h1>
                    <p>During the ideation phase of the process, I produced details wireframes that illustrated our high priorty features. I also used wireframing to depict larger concepts that arross during brainstorming sessions.</p>
                  </div>
                </section>
                <section>
                  <div className="section-content text-center">
                    <img className="wireframe-img w-100" src={Wireframes} alt="wireframe" />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-8 bg-light border-bottom border-top">
          <div className="section-content">
            <div className="row">
              <div className="col-12">
                <section>
                  <div className="section-header text-center col-md-6 mx-auto">
                    <h1 className="display-4 mb-4">High-Fidelity Mockups & Prototypes</h1>
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
        <section className="pt-8">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section>
                    <div className="section-header text-center col-md-10 mx-auto mb-7">
                      <h1 className="display-4 mb-4">One-Click Mobile Concept</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="section-content text-center mb-7">
                      <img className="prototypes-img w-100" src={MobileMockups} alt="prototypes" />
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-8 bg-light border-bottom border-top">
          <div className="section-content">
            <div className="row">
              <div className="col-12">
                <section>
                  <div className="section-header text-center col-md-6 mx-auto">
                    <h1 className="display-4 mb-4">Create A New Event</h1>
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
        <section className="section py-8 py-lg-10 bg-dark">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section className="container mb-7 text-center">
                    <div className="section-header mb-5 col-lg-9 mx-auto text-white">
                      <h1 className="display-4 mb-4">Product Impact</h1>
                      <p>The onboarding process was easily the biggest design challenge at SeedInvest due to its complexity and ever-evolving nature. Every department was involved in the research, brainstorming, and planning for this project, and it continues to be an iterative process for the team. The new pre-qualification, application, and profile builder features have been in effect since 2019 and show promising results. The workspace is still evolving.</p>
                    </div>                
                  </section>
                  <section>
                    <div className="section-content mt-7">
                      <div className="laptop-mask-wrapper">
                        <video className="final-video" preload="none" autoPlay loop width="100%" playsInline>
                          <source src={RaiseVideo} type="video/mp4" />
                        </video>
                      </div>
                    </div> 
                  </section>
                  <section>
                    <div className="section-content mt-5 col-lg-10 mx-auto text-center text-white">
                      <div className="row">
                        <div className="col">
                          <div className="snippet">
                            <div className="snippet-header">
                              <div className="snippet-title display-4 font-weight-bold">40%</div>
                              <p>Less Support Tickets</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="snippet">
                            <div className="snippet-header">
                              <div className="snippet-title display-4 font-weight-bold">3x</div>
                              <p>Faster Application Responses</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="snippet">
                            <div className="snippet-header">
                              <div className="snippet-title display-4 font-weight-bold">98%</div>
                              <p>Accurate Auto Results</p>
                            </div>
                          </div>
                        </div>
                        <div className="col d-none d-md-block">
                          <div className="snippet">
                            <div className="snippet-header">
                              <div className="snippet-title display-4 font-weight-bold">65</div>
                              <p>Average Venture NPS</p>
                            </div>
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
      </div>
    )
  }
}

export default WorkOne