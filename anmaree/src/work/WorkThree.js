import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Hero from '../imgs/work-three/hero.png';
import Launch from '../imgs/work-three/launch.png';

import Wireframes from '../imgs/work-three/wireframes.jpg';
import Prototypes from '../imgs/work-three/mockups.png';
import MobileMockups from '../imgs/work-three/mobile-mockups.png';
import Video from '../videos/event.mp4'

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

import Gantt from '../imgs/work-three/gantt-chart.png';
import Process from '../imgs/work-three/process.png';
import CreateEvent from '../imgs/work-three/create-event.png';

class WorkOne extends Component {
  render() {
    return (
      <div className="page-content">
        <div className="hero-header">
          <div className="hero-header-img position-relative overflow-hidden text-center bg-lime">
            <div class="container col">
              <div className="hero-next"><Link to="/work/4">→</Link></div>
              <div className="hero-back"><a href="/work/2">←</a></div>
            </div>
            <div class="animated fadeIn">
              <div className="container col-10 col-md-8 col-lg-6 col-xl-5 mb-5 mx-auto">
              <h1 className="display-3 font-weight-bold mb-4">Live Startup Investing</h1>
                <p className="font-weight-normal">Bringing equity crowdfunding to startup demo days world wide, allowing investors to invest LIVE.</p>
              </div>
            <div className="container col-12 px-5 pt-5">
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
                    <div className="section-header mb-5">
                      <h1 className="display-4 mb-4">Project Overview</h1>
                    </div>
                    <div className="section-content">
                      <p>SeedInvest moved into uncharted territory when partnering with Jason Calacanis to announce Live Investing at the 2017 LAUNCH Festival. This new concept would create an interactive experience that would empower startups to raise capital directly from attendees at the event. The challenge was to build a product that impressed event organizers, startups, and investors in just 4 weeks.</p>
                      <p>With such a condensed timeline, we had to design and develop a product based on our assumptions and overlook some crucial steps in the design thinking process. The result was a product that provided many wins, but was ultimately not reusable for future events.</p>
                      <p>We only truly hit our stride on the second iteration when we took a more user-centric approach. Taking the time to research, analyze, and define the problem before development proved to be a critical step in delivering a product that would support the many events in our pipeline and our ultimate mission to help startups raise capital.</p>
                    </div>                    
                  </section>
                </div>
                <div className="col-12 col-md-1"></div>
                <div className="col-12 col-md-4">
                  <section className="mb-5">
                    <div className="section-content">
                      <div className="section-header mb-5">
                        <h2 className="mb-4">Lead Product Designer</h2>
                      </div>
                      <div className="section-content">
                        <p>Product Planning, User Research, Stakeholder Interviews, Interaction design, Visual design, Prototyping, Testing.</p>
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
                      <h1 className="display-4 mb-4">Our First SeedInvest Live Event</h1>
                      <p>SeedInvest partnered with Jason Calacanis to enable live investing at LAUNCH Festival. The LAUNCH Festival is considered the largest startup event in the United States and is attended by 12,000 investors and founders from around the world. Live crowdfunding was offered to a handful of startups that were listed on the SeedInvest platform. Each startup delivered a 3 minute pitch to a set of judges while audience members could invest on their mobile device or at the SeedInvest booth on the demo floor.</p>
                    </div>
                    <div className="section-content mt-7 col-lg-10 mx-auto text-center">
                      <img className="launch-img w-100" src={Launch} alt="launch" />
                    </div>             
                  </section>

                  <section className="mt-7 col-lg-10 mx-auto text-center">
                    <div className="section-header mb-5">
                      <h1 className="display-4 mb-4">Our Assumptions</h1>
                    </div>
                    <div className="section-content mt-5">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <section className="mb-5 p-5 bg-white box-shadow">
                            <div className="section-header">
                              <p className="section-title font-weight-bold">Build An Interactive Experience</p>
                            </div>
                            <div className="section-content">
                              <p>Design an interactive leaderboard that would be displayed during the pitch events and on the demo floor. Once an investor invests, it would be reflected in real time on the leaderboard.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6">
                          <section className="mb-5 p-5 bg-white box-shadow">
                            <div className="section-header">
                              <p className="section-title font-weight-bold">Drive Investment Activity</p>
                            </div>
                            <div className="section-content">
                              <p>Design an event page that displays the investable deals at the event. Investors could navigate to the SeedInvest LIVE event page to browse deals that were eligible for investment.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6">
                          <section className="mb-5 p-5 bg-white box-shadow">
                            <div className="section-header">
                              <p className="section-title font-weight-bold">Get To Know The Startups</p>
                            </div>
                            <div className="section-content">
                              <p>Design a simple mobile startup profile that allowed attendees to learn about the companies from anywhere on the demo floor, not just at their booth.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6">
                          <section className="mb-5 p-5 bg-white box-shadow">
                            <div className="section-header">
                              <p className="section-title font-weight-bold">Create Value For Other Startups</p>
                            </div>
                            <div className="section-content">
                              <p>Design a feature that allowed attendees to vote for their favorite startup at the event. This feature included all of the startups at the event, not just the investable ones.</p>
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
                              <p>The interactive experience did not build engagment like we hoped it would.</p>
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
                              <p>Other startups at the event were unaware of the voting feature we built for them.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <section className="my-5 p-5 border">
                            <div className="section-header">
                              <h4 className="section-title display-4 font-weight-bold">#4</h4>
                            </div>
                            <div className="section-content">
                              <p>The event helps us get more partnerships, but the product was not reuseable.</p>
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
                      <p>After reviewing the results, collecting feedback, and identifying the problems, it was clear we needed to invest more time into the initiation design thinking process. We created personas for each stakeholder, defined the types of events in our pipeline, prioritized our efforts, built out the user process end-to-end, then developed our roadmap to accomplish our goal.</p>
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
                      <h1 className="display-4 mb-4">Partnership Process Flow Chart</h1>
                    </div>
                    <div className="section-content mt-5">
                      <div className="process-wrapper mb-5 box-shadow">
                        <img className="process" src={Process} alt="work" />
                      </div>
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
                              <p className="section-title font-weight-bold">Evoke the essence of the event online.</p>
                            </div>
                            <div className="section-content">
                              <p>Design an event page switches between different stages of the user process: startup applications, investor pre-registration, and the investable live event page.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6">
                          <section className="mb-5 p-5 bg-white box-shadow">
                            <div className="section-header">
                              <p className="section-title font-weight-bold">Get investors ready to invest before the event.</p>
                            </div>
                            <div className="section-content">
                              <p>Design an onboarding flow that allows investors to pre-register before the event. Once the event went live, investors would be ready to invest with one click.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6">
                          <section className="mb-5 p-5 bg-white box-shadow">
                            <div className="section-header">
                              <p className="section-title font-weight-bold">Make the investment checkout process frictionless.</p>
                            </div>
                            <div className="section-content">
                              <p>Re-design a mobile-friendly investment checkout. This was always important, but became an especially high priority to help us increase conversions during events.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6">
                          <section className="mb-5 p-5 bg-white box-shadow">
                            <div className="section-header">
                              <p className="section-title font-weight-bold">Support the team with internal management tools.</p>
                            </div>
                            <div className="section-content">
                              <p>Design an internal tool that enables the business teams to create and edit basic event pages with little to no intervention from the product team.</p>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="mt-7 col-lg-10 mx-auto text-center">
                    <div className="section-header mb-5">
                      <h1 className="display-4 mb-4">Defining the RoadMap</h1>
                    </div>
                    <div className="section-content mt-5">
                      <div className="gantt-wrapper mb-5 box-shadow">
                        <img className="gantt w-100 p-5 bg-white" src={Gantt} alt="work" />
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
                    <p>During the ideation phase, I produced detailed wireframes of the events page at each stage of the process. I also used wireframing to depict concepts that arose during brainstorming sessions.</p>
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
                <section className="container">
                  <div className="section-header text-center mb-5 col-lg-9 mx-auto">
                    <h1 className="display-4 mb-4">High-Fidelity Mockups & Prototypes</h1>
                    <p>Next, I turn the wireframes into high-fidelity mockups. My  main goals were to evoke the essence of the event, educate investors about the partnership, and bring the interactive leaderboard experience online. High-fidelity mockups were used to communicate how the page was going to transform contextually based on the event state. This was particularly helpful for the business team.</p>
                  </div>
                </section>
                <section>
                  <div className="section-content text-center">
                    <img className="prototypes-img w-100" src={Prototypes} alt="prototypes" />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 bg-light border-bottom border-top">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section>
                    <div className="section-header text-center col-md-10 mx-auto mb-7">
                      <h1 className="display-4 mb-4">Internal Event Management</h1>
                      <p>After building the prototypes, I built an internal tool to help the business team create and manage events with little to no intervention from the product team. The tool includes all of the required event fields and a preview feature, allowing business members to build beautiful, functional event landing pages with ease.</p>
                    </div>
                    <div className="section-content text-center">
                      <img className="create-event-img w-100 box-shadow border" src={CreateEvent} alt="prototypes" />
                    </div>
                  </section>
                </div>
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
                      <p>SeedInvest Live was an exciting new way to think about investing. The product helped event organizers bring highly-vetted startups to their events, helped startups reach a larger investor audience, and helped SeedInvest build relationships with venture firms and accelerators to better serve startups raising on our platform. Using the design thinking process, we were able to build a product that would support a number of new events like TechCrunch Disrupt San Francisco, Websummit London, and eMerge Miami. The design changes helped increase investment conversion, grow investment volume, and build a stronger venture portfolio for the company.</p>
                    </div>                
                  </section>
                  <section>
                    <div className="section-content mt-7">
                      <div className="laptop-mask-wrapper">
                        <video className="final-video" preload="none" autoPlay loop width="100%" playsInline>
                          <source src={Video} type="video/mp4" />
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
                              <div className="snippet-title display-4 font-weight-bold">0</div>
                              <p>Product Intervention</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="snippet">
                            <div className="snippet-header">
                              <div className="snippet-title display-4 font-weight-bold">5</div>
                              <p>New Events</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="snippet">
                            <div className="snippet-header">
                              <div className="snippet-title display-4 font-weight-bold">5,800</div>
                              <p>Investors</p>
                            </div>
                          </div>
                        </div>
                        <div className="col d-none d-md-block">
                          <div className="snippet">
                            <div className="snippet-header">
                              <div className="snippet-title display-4 font-weight-bold">$10M</div>
                              <p>Invested</p>
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