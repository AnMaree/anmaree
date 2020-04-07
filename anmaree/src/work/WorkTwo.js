
import React, { Component } from 'react'
import { Link } from "react-router-dom";

import MessyProcess from '../imgs/work-two/messy-process.jpg';
import Nps from '../imgs/work-two/nps.png';
import CleanProcess from '../imgs/work-two/clean-process.png';
import Hero from '../imgs/work-two/hero-2.png';
import RaiseVideo from '../videos/apply.mp4'

import DesignProcess from '../imgs/work-two/wireframes/design-process.jpg';
import Chart from '../imgs/work-two/wireframes/chart.jpg';
import CardSorting from '../imgs/work-two/wireframes/card-sorting.jpg';
import UserFlow from '../imgs/work-two/wireframes/user-flow.jpg';

import PreQual from '../imgs/work-two/wireframes/pre-qualification.jpg';
import PreQualTwo from '../imgs/work-two/wireframes/pre-qualification-v2.jpg';
import AppOne from '../imgs/work-two/wireframes/application-v1.jpg';
import AppTwo from '../imgs/work-two/wireframes/application-v2.jpg';

import Colors from '../imgs/work-two/wireframes/color-type.png';
import Serifs from '../imgs/work-two/wireframes/serif.png';
import Sans from '../imgs/work-two/wireframes/sans-serif.png';


import WorkspaceOne from '../imgs/work-two/wireframes/workspace-v3.jpg';
import WorkspaceTwo from '../imgs/work-two/wireframes/workspace-v2.jpg';


import PreQualMock from '../imgs/work-two/wireframes/pre-qual-mock.jpg';
import ApplicationMock from '../imgs/work-two/wireframes/application-mock.jpg';

import Collage from '../imgs/work-two/mockups/collage.png';


import WSGenerate from '../imgs/work-two/wireframes/ws-welcome.jpg';
import WSWelcome from '../imgs/work-two/wireframes/ws-welcome-profile-builder.jpg';

import WSProfileBuilder from '../imgs/work-two/wireframes/ws-profile-builder.jpg';
import WSPerformance from '../imgs/work-two/wireframes/ws-campaign-performance-v2.jpg';

class WorkOne extends Component {
  render() {
    return (
      <div className="page-content">
        <div className="hero-header">
          <div className="hero-header-img position-relative overflow-hidden text-center bg-mint">
            <div className="container col">
              <div className="hero-back"><Link to="/work/1">←</Link></div>
              <div className="hero-next"><Link to="/work/3">→</Link></div>
            </div>
            <div className="container col-10 col-md-8 col-lg-6 col-xl-5 mb-5 mx-auto">
              <h1 className="display-3 font-weight-bold mb-4">Fundraise Online</h1>
              <h3 className="font-weight-normal">Onboarding startup companies to a fundraising campaign management platform.</h3>
            </div>
            <div className="container col-12 px-5 pt-5">
              <img className="hero-img" src={Hero} alt="hero" />
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
                      <p>SeedInvest's mission is to transform the broken startup fundraising process to make it easier for entrepreneurs to raise capital. By bringing the fundraising process online, SeedInvest gives founders the ability to raise capital more efficiently.</p>
                      <p>The company's business objective was to increase deal flow by 10x while maintaining a high-quality reputation and giving entrepreneurs an enjoyable onboarding experience. However, the team was having a hard time hitting weekly venture goals and customer satisfaction was suffering. It was clear we needed to redefine the fundraising process by cutting unnecessary operations, automating as much as possible, and reframing our velvet-rope approach by working with companies rather than against them.</p>
                      <p>To redefine the process, we needed to build simple, self-operating features that still evoke a high-touch user experience. This would help us scale the onboarding process while keeping customer satisfaction ratings and NPS scores high.</p>
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
                        <p>Product Planning, Stakeholder Interviews, Information Architecture, User Flows, Prototyping, Visual Design, & Testing.</p>
                      </div>
                    </div>                  
                  </section>
                </div>      
              </div>   
            </div>
          </div>
        </section>
        <section className="py-8 py-lg-10 bg-light">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section className="mb-7">
                    <div className="section-header text-center mb-7 col-md-8 mx-auto">
                      <h1 className="display-4 mb-4">The Problem</h1>
                      <p>The original process was based on collecting as much data as possible early on. This data was then stored in a table that was downloadable by the internal team to review. This process led to arduous 45-page flows, up-to-date information floating in inboxes, and repeat work for the founders. We tracked NPS scores at each step and saw that founders were passive users, neither emotionally invested nor disengaged.</p>
                    </div> 
                    <div className="section-content">
                      <div className="h-scroll-container white box-shadow">
                        <img className="nps white" src={Nps} alt="nps" />
                        <img className="messy-process" src={MessyProcess} alt="MessyProcess" />
                      </div>
                    </div>                
                  </section>
                  <section className="my-7">
                    <div className="section-content text-center">
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                          <div className="snippet mt-5">
                            <div className="snippet-header">
                              <div className="snippet-title font-weight-bold">Information Overload</div>
                            </div>
                            <div className="snippet-content">
                              <p>There were 12 different steps in the original fundraising process. Each step had its own set of requirements and expectations founders needed to follow.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <div className="snippet mt-5">
                            <div className="snippet-header">
                              <div className="snippet-title font-weight-bold">Unorganized Data</div>
                            </div>
                            <div className="snippet-content">
                              <p>The team used many different task managers, information floated in inboxes, and founders were doing repeat work to accommodate the team.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <div className="snippet mt-5">
                            <div className="snippet-header">
                              <div className="snippet-title font-weight-bold">Founder Fatigue</div>
                            </div>
                            <div className="snippet-content">
                              <p>Founders were exhausted by the time their campaign went live, and they still needed to market their campaign and engage with investors to hit their target.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <div className="snippet mt-5">
                            <div className="snippet-header">
                              <div className="snippet-title font-weight-bold">More Work, Fewer Wins</div>
                            </div>
                            <div className="snippet-content">
                              <p>Once the founder completed a task, a new, more difficult task would follow. There was no place to reflect on progress or wins.</p>
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
        <section className="py-8 py-lg-10 bg-dark text-white">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section className="mb-7">
                    <div className="section-header text-center mb-7 col-md-8 mx-auto">
                      <h1 className="display-4 mb-4">Redefining Our Process</h1>
                      <p>The updated process was designed based on the data we collected throughout the years while staying hyper-focused on the user's pain-points. We built a model that identified just 10 questions that could pre-qualify a company to raise on SeedInvest. With this discovery, the team agreed to focus on building a simple pre-qualification form, a delightful application flow, and an efficient Founder Workspace where founders can prepare their offering and manage their campaign in one place.</p>
                    </div> 
                    <div className="section-content">
                      <div className="h-scroll-container dark box-shadow">
                        <img className="nps dark" src={Nps} alt="nps" />
                        <img className="messy-process" src={CleanProcess} alt="clean-process" />
                      </div>
                    </div>                
                  </section>
                  <section className="my-7">
                    <div className="section-content text-center">
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                          <div className="snippet mt-5">
                            <div className="snippet-header">
                              <div className="snippet-title font-weight-bold">Simple Steps</div>
                            </div>
                            <div className="snippet-content">
                              <p>Long and tiring forms are broken up into smaller, digestible chunks. Process requirements are communicated to the user only when relevant.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <div className="snippet mt-5">
                            <div className="snippet-header">
                              <div className="snippet-title font-weight-bold">Organized Data</div>
                            </div>
                            <div className="snippet-content">
                              <p>Third-party data collection tools are eliminated, and all information is stored on the platform in one place where team members can refer to up-to-date information.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <div className="snippet mt-5">
                            <div className="snippet-header">
                              <div className="snippet-title font-weight-bold">Less Work, More Wins</div>
                            </div>
                            <div className="snippet-content">
                              <p>Smaller chunks of work mean work is done more quickly, which means we close the feedback loop more quickly. This increases momentum throughout the process.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <div className="snippet mt-5">
                            <div className="snippet-header">
                              <div className="snippet-title font-weight-bold">Access Early</div>
                            </div>
                            <div className="snippet-content">
                              <p>Giving the user access to the profile builder early promotes autonomy and cuts out early operational requirements.</p>
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
        <section className="py-8 py-lg-16">
          <div className="container px-4 px-lg-8">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section className="mb-5">
                    <div className="section-header col-11 col-lg-8 mx-auto">
                      <h1 className="display-4 mb-4">Bringing It Online: The Design Process</h1>
                      <p>After analyzing the offline process, we needed to develop a plan to bring this process online. I used The Design Thinking Process to frame our project's roadmap. This helped to communicate when aspects of the project were to be researched and executed by the design team, when buy-in was required by stakeholders, and when to the engineering team and business teams need to get involved.</p>
                    </div> 
                    <div className="section-content mt-7">
                      <img className="homepage-wire-img" src={DesignProcess} alt="homepage" />
                    </div>
                  </section>
                  <section className="mb-5">
                    <div className="section-header my-7 col-11 col-lg-8 mx-auto">
                      <h2 className="font-weight-normal mb-4">Sorting The Process Into Buckets</h2>
                      <p>During the research phase, the Operations Team and I did several card-sorting exercises to categorize content in a way that made sense to our users, as well as from a workflow perspective. This influenced the navigation, user flow, and helped the engineering team structure the data models in the backend.</p>
                    </div> 
                    <div className="section-content">
                      <img className="coporate-wire-img" src={CardSorting} alt="homepage" />
                    </div>
                  </section>
                  <section className="mb-5">
                    <div className="section-header my-7 col-11 col-lg-8 mx-auto">
                      <h2 className="font-weight-normal mb-4">The Workspace Information Architecture</h2>
                      <p>Once we categorized the content, I designed the information architecture that outlines our navigation and the pages we needed in our Workspace. The blue nodes represent the primary navigation, the green nodes represent the tertiary navigation, the orange nodes represent the pages, and the red notes are page navigations.</p>
                    </div> 
                    <div className="section-content">
                      <img className="coporate-wire-img" src={Chart} alt="homepage" />
                    </div>
                  </section>
                  <section className="mb-5">
                    <div className="section-header my-7 col-11 col-lg-8 mx-auto">
                      <h2 className="font-weight-normal mb-4">The User Flow</h2>
                      <p>Based on our team discussion, I then combined the user's path to the Workspace with a more detailed IA. This helped communicate how the other features interact with the Workspace and helped illustrated which pages will need placeholder content until there is enough data to fill them.</p>
                    </div> 
                    <div className="section-content">
                      <img className="coporate-wire-img" src={UserFlow} alt="homepage" />
                    </div>
                  </section>
                  <section className="mb-5">
                    <div className="section-header my-7 col-11 col-lg-8 mx-auto">
                      <h2 className="font-weight-normal mb-4">Defining The Project's Scope</h2>
                      <p>From there, the team and I determined a list of specific features we planned to build in the timeline required to launch an MVP. With further discussion with my PM, we deemed several pages out-of-scope which required us to iterate on simplified navigation that could grow over time. We also decided to make several out-of-scope features into educational static pages for the MVP.</p>
                    </div>
                    <div className="section-content mt-5 col-12 col-lg-9 mx-auto">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <section className="mb-5 p-5 bg-white border border-dark">
                            <div className="section-header">
                              <h3 className="section-title font-weight-normal text-left">Features In-Scope</h3>
                            </div>
                            <hr/>
                            <div className="section-content mt-5">
                              <ul className="list-unstyled">
                                <li>Pre-Qualification Form</li>
                                <li>12 Page Application Flow</li>
                                <li>Email Notifications</li>
                                <li>Workspace Framework</li>
                                <li>Multiple Offerings</li>
                                <li>Notifications</li>
                                <li>Collaborators</li>
                                <li>User Settings</li>
                                <li>Profile Builder (Active, Inactive)</li>
                                <li>DD Tracker (Active, Inactive)</li>
                                <li>Campaign Analytics (Locked, Active, Inactive)</li>
                                <li>Campaign Updates (Locked, Active, Inactive)</li>
                                <li>Closing (Locked, Educational Static, Inactive)</li>
                                <li>Reporting (Locked, Educational Static, Inactive)</li>
                              </ul>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6">
                          <section className="mb-5 p-5 bg-white border">
                            <div className="section-header text-secondary">
                              <h3 className="section-title font-weight-normal text-left">Features Out-Of-Scope</h3>
                            </div>
                            <hr/>
                            <div className="section-content mt-5 text-secondary">
                              <ul className="list-unstyled">
                                <li>Inbox</li>
                                <li>Resources</li>
                                <li>SEC Filing Tracker</li>
                                <li>Event Scheduler</li>
                                <li>Marketing Guide</li>
                                <li>Closings (Active)</li>
                                <li>Reporting (Active)</li>
                                <li>Investor Update (Locked, Active, Inactive)</li>
                                <li>Annual Update (Locked, Active, Inactive)</li>
                              </ul>
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
        <section className="py-8 py-lg-16 bg-light">
          <div className="container px-4 px-lg-8">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section className="mb-5">
                    <div className="section-header col-11 col-lg-8 mx-auto">
                      <h1 className="display-4 mb-4">Prototyping The Application Process</h1>
                      <p>During the ideation phase, I created low-fidelity wireframes to gain stakeholder buy-in. Our main goal was to simplify our forms and make them more delightful to increase conversion. When thinking of this, I explored several form layouts types, single-page, one-question-per-page, and a side-bar layout. Ultimately, the team decided that a single-page layout was well suited for the pre-qualification form because it was simple and quick to complete, while the and the one-question-per-page layout was well suited for the application because it opened up more room for education and delightful elements such as large icon buttons.</p>
                    </div> 
                    <div className="section-content mt-7">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Single-Page Pre-Qual Questionnaire</p>
                            <img className="homepage-wire-img box-shadow" src={PreQual} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Single-Question Pre-Qual Flow</p>
                            <img className="homepage-wire-img box-shadow" src={PreQualTwo} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Single-Question Application Flow</p>
                            <img className="homepage-wire-img box-shadow" src={AppOne} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">SideBar Application Flow</p>
                            <img className="homepage-wire-img box-shadow" src={AppTwo} alt="homepage" />
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
        <section className="py-8 py-lg-16">
          <div className="container px-4 px-lg-8">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section className="mb-5">
                    <div className="section-header col-11 col-lg-8 mx-auto">
                      <h1 className="display-4 mb-4">Wireframing The Workspace</h1>
                      <p>Next, I produced low-fidelity wireframes to discuss the layout of the Workspace and its components. I explored serval iterations of the navigation and sidebars. I also worked closely with the Operations Team and Venture Growth Team to identify important data sets and information they currently shared with clients. I used this feedback to ideate on data visualizations and page layouts until the team came to a consensus.</p>
                    </div> 
                    <div className="section-content mt-7">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Double Navigation | Sidebar | Light</p>
                            <img className="homepage-wire-img box-shadow border" src={WorkspaceOne} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Single Navigation | Dropdown | Dark</p>
                            <img className="homepage-wire-img box-shadow border" src={WorkspaceTwo} alt="homepage" />
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
        <section className="py-8 py-lg-16 bg-light">
          <div className="container px-4 px-lg-8">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section className="mb-5">
                    <div className="section-header col-11 col-lg-8 mx-auto">
                      <h1 className="display-4 mb-4">The Visual Design</h1>
                      <p>The general aesthetic is primarily based on the principle that form follows function. We wanted to evoke a charming and practical experience when displaying a large set of data visualization. This led me to develop a broad set of vibrant, yet soft, colors. We chose Source Sans Pro because it's simplicity and legibility. It also comes with a serif sister to provide contrast as a display font.</p>
                    </div> 
                    <div className="section-content mt-7">
                      <div className="row">
                        <div className="col-11 mx-auto">
                          <div className="img-wrapper mb-7">
                            <img className="homepage-wire-img" src={Colors} alt="homepage" />
                          </div>
                        </div>
                      </div>
                      <div className="row pl-4">
                        <div className="col-12 col-md-6 mx-auto">
                          <div className="img-wrapper mb-7 mb-md-5 text-md-center">
                            <img className="homepage-wire-img" src={Sans} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 mx-auto">
                          <div className="img-wrapper mb-7 mb-md-5 text-md-center">
                            <img className="homepage-wire-img" src={Serifs} alt="homepage" />
                          </div>
                        </div>
                      </div> 
                    </div>
                  </section>
                  <section className="mb-7">
                    <div className="section-content mt-7">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Final Pre-Qualification Form</p>
                            <img className="homepage-wire-img box-shadow border" src={PreQualMock} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Final Application</p>
                            <img className="homepage-wire-img box-shadow border" src={ApplicationMock} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Generating Workspace</p>
                            <img className="homepage-wire-img box-shadow border" src={WSGenerate} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Welcome Dialog Box</p>
                            <img className="homepage-wire-img box-shadow border" src={WSWelcome} alt="homepage" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="mb-7">
                    <div className="section-content mt-7">
                      <div className="row">
                        <div className="col-12">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Workspace: Profile Builder</p>
                            <img className="homepage-wire-img box-shadow border" src={WSProfileBuilder} alt="homepage" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div className="section-content mt-7">
                      <div className="row">
                        <div className="col-12">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Workspace: Campaign Performance</p>
                            <img className="homepage-wire-img box-shadow border" src={WSPerformance} alt="homepage" />
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
        <section className="section py-8 py-lg-10">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section className="container mb-7">
                    <div className="section-header mb-5 col-lg-9 mx-auto">
                      <h1 className="display-4 mb-4">Product Impact</h1>
                      <p>The onboarding process was easily the biggest design challenge at SeedInvest due to its complexity and ever-evolving nature. Every department was involved in the research, brainstorming, and planning of this project, and it continues to be an iterative process for the team. The new pre-qualification, application, and profile builder features have been in effect since 2019 and show promising results. The workspace is still evolving.</p>
                    </div>                
                  </section>
                  <section>
                    <div className="section-content mt-7 col-11 col-lg-10 mx-auto mb-7">
                      <img src={Collage} alt="homepagefull" />
                    </div>
                  </section>
                  <section>
                    <div className="section-content mt-5 col-lg-9 mx-auto">
                      <div className="row">
                        <div className="col">
                          <div className="snippet">
                            <div className="snippet-header">
                              <div className="snippet-title display-4 font-weight-bold">40%</div>
                              <p>Fewer Support Tickets</p>
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
                        <div className="col d-none d-md-block">
                          <div className="snippet">
                            <div className="snippet-header">
                              <div className="snippet-title display-4 font-weight-bold">20</div>
                              <p>NPS Increase</p>
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
        <section className="section py-8 py-lg-10 bg-light">
          <div className="container px-4 px-lg-8 ">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section className="mb-5">
                    <div className="section-header mb-5 col-lg-8 mx-auto">
                      <h1 className="display-4 mb-4">Lessons Learned</h1>
                    </div>
                    <div className="section-content col-lg-8 mx-auto">
                      <div className="snippet mb-5">
                        <div className="snippet-header">
                          <h4 className="snippet-title">A digital product is dictated by its offline process.</h4>
                        </div>
                        <div className="snippet-content">
                          <p>Even though our product was client-facing, it strongly impacted the internal team's offline process. It is important to identify your stakeholders carefully and get buy-in from them collectively if possible.</p>
                        </div>
                      </div>
                      <div className="snippet mb-5">
                        <div className="snippet-header">
                          <h4 className="snippet-title">Focus on developing a strong MVP rather than the "north star".</h4>
                        </div>
                        <div className="snippet-content">
                          <p>With a project as new and big, we wanted to get a holistic view of the product and its capabilities. This leads us to a stray during the design process and impacts the scope of the project.</p>
                        </div>
                      </div>
                      <div className="snippet mb-5">
                        <div className="snippet-header">
                          <h4 className="snippet-title">Design for every state of a dynamic product.</h4>
                        </div>
                        <div className="snippet-content">
                          <p>This project was fairly linear and had many dependencies. It was helpful to design the view of every page at any given state to help engineers develop more efficiently.</p>
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