import React, { Component} from 'react';
import { Link } from "react-router-dom";

import StyleGuide from '../imgs/work-one/styleguide.png';
import DesignSystem from '../imgs/work-one/design-systems.gif';

import StyleGuideSmall from '../imgs/work-one/styleguide-small.png';
import HomePageWire from '../imgs/work-one/wireframes/HomeFullIterativeDesktop.jpeg';
import HomePageWireTwo from '../imgs/work-one/wireframes/HomeFullIterativeDesktop2.jpeg';
import HomePageWireThree from '../imgs/work-one/wireframes/HomeFullIterativeDesktop3.jpeg';
import HomePageWireFour from '../imgs/work-one/wireframes/HomeFullDesktop.jpeg';

import CorporateWireAbout from '../imgs/work-one/wireframes/CorporateAboutFullDesktop.jpeg';
import CorporateWireTeam from '../imgs/work-one/wireframes/CorporateTeamDesktop.jpeg';
import CorporateWirePress from '../imgs/work-one/wireframes/CorporatePressDesktop.jpeg';
import CorporateWireJobs from '../imgs/work-one/wireframes/CorporateJobsDesktop.jpeg';

import ProfileWirePartical from '../imgs/work-one/wireframes/ProfilePartical.jpeg';
import ProfileWireEducation from '../imgs/work-one/wireframes/ProfileEducation.jpeg';
import ProfileWireCitation from '../imgs/work-one/wireframes/ProfileFive.jpeg';

import ProfileWireMobileOne from '../imgs/work-one/wireframes/ProfileWireMobileOne.jpeg';
import ProfileWireMobileTwo from '../imgs/work-one/wireframes/ProfileWireMobileTwo.jpeg';
import ProfileWireMobileThree from '../imgs/work-one/wireframes/ProfileWireMobileThree.jpeg';

import AcademyWireOne from '../imgs/work-one/wireframes/AcademyWireOne.jpeg';
import AcademyWireMobileOne from '../imgs/work-one/wireframes/AcademyWireMobileOne.jpeg';
import AcademyWireTwo from '../imgs/work-one/wireframes/AcademyWireTwo.jpeg';
import AcademyWireMobileTwo from '../imgs/work-one/wireframes/AcademyWireMobileTwo.jpeg';

import CorporateAbout from '../imgs/work-one/mockups/CorporateAbout.jpeg';
import CorporateTeam from '../imgs/work-one/mockups/CorporateTeam.jpeg';

import ProfileOne from '../imgs/work-one/mockups/ProfileOne.jpeg';
import ProfileTwo from '../imgs/work-one/mockups/ProfileTwo.jpeg';
import ProfileThree from '../imgs/work-one/mockups/ProfileThree.jpeg';
import ProfileFour from '../imgs/work-one/mockups/ProfileFour.jpeg';

import ProfileMobileOne from '../imgs/work-one/mockups/ProfileMobileOne.jpeg';
import ProfileMobileTwo from '../imgs/work-one/mockups/ProfileMobileTwo.jpeg';
import ProfileMobileThree from '../imgs/work-one/mockups/ProfileMobileThree.jpeg';

import AcademyOne from '../imgs/work-one/mockups/AcademyOne.jpeg';
import AcademyMobileOne from '../imgs/work-one/mockups/AcademyMobileOne.jpeg';
import AcademyTwo from '../imgs/work-one/mockups/AcademyTwo.jpeg';
import AcademyMobileTwo from '../imgs/work-one/mockups/AcademyMobileTwo.jpeg';

import Chart from '../imgs/work-one/chart.png';

import HomeFull from '../imgs/work-one/mockups/HomeFull.png';
import heroMockup from '../imgs/work-one/hero-2.png';


class WorkOne extends Component {
  render() {
    return (
      <div className="page-content">
        <div className="hero-header">
          <div className="hero-header-img position-relative overflow-hidden text-center bg-bb-blue">
            <div className="container col">
              <div className="hero-next"><Link to="/work/2">→</Link></div>
            </div>
            <div className="container col-10 col-md-8 col-lg-6 col-xl-5 mb-5 mx-auto">
              <h1 className="display-3 font-weight-bold mb-4">Invest In Startups</h1>
              <h3 className="font-weight-normal">Opening up startup investing to 240+ million Americans who previously could not invest.</h3>
            </div>
            <div className="container col-12 px-5 pt-5">
              <img className="mockup-img" src={heroMockup} alt="heroMockup" />
            </div>
          </div>
        </div>
        <section className="py-8 py-lg-16 border-top">
          <div className="container px-5 px-lg-8">
            <div className="section-content">
              <div className="row">
                <div className="col-12 col-md-7">
                  <section className="my-5">
                    <div className="section-header">
                      <h1 className="display-4 mb-4">Project Overview</h1>
                    </div>
                    <div className="section-content mt-5">
                      <p>SeedInvest is an Equity Crowdfunding platform that connects entrepreneurs with investors. As a result of the Jobs Act of 2012, startup investing was opened to 240+ million Americans who previously could not invest. The new exemptions allowed SeedInvest to help startups turn their most ardent supporters and customers into passionate investors for the first time.</p>
                      <p>Since our original target customer was the sophisticated accredited investor, it was clear that we needed to define a visual language that would inspire new investors to engage with Equity Crowdfunding. We also needed to design and build new features that would increase engagement and educate new investors so they could feel confident making an investment decision for the first time.</p>
                      <p>To maintain consistency throughout this process, we created a design system guided by a set of core principles and made up of reusable components. This effort helped to speed up the design process while bridging visual language gaps across teams.</p>
                    </div>                  
                  </section>
                </div>
                <div className="col-12 col-md-1"></div>
                <div className="col-12 col-md-4">
                  <section className="my-5">
                    <div className="section-header">
                      <h2 className="mb-4">Lead Product Designer</h2>
                    </div>
                    <div className="section-content mt-5">
                      <p>Product Planning, User Research, Information Architecture, Visual Design, Wireframing, Prototyping, Testing, Front-End Development.</p>
                    </div>
                  </section>
                </div>      
              </div>   
            </div>
          </div>
        </section>
        <section className="py-10 bg-light">
          <div className="container">
            <div className="section-content text-center">
              <div className="row">
                <div className="col-10 col-md-12 mx-auto">
                  <section>
                    <div className="section-header mb-5">
                      <h1 className="display-4 mb-4">The Problems</h1>
                    </div>
                    <div className="section-content mt-5">
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                          <section className="my-5 p-5 border">
                            <div className="section-header">
                              <h4 className="section-title display-4 font-weight-bold">#1</h4>
                            </div>
                            <div className="section-content">
                              <p>The messaging across the platform is catered to the sophisticated investor.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <section className="my-5 p-5 border">
                            <div className="section-header">
                              <h4 className="section-title display-4 font-weight-bold">#2</h4>
                            </div>
                            <div className="section-content">
                              <p>There is a lack of educational resources for new investors entering the space.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <section className="my-5 p-5 border">
                            <div className="section-header">
                              <h4 className="section-title display-4 font-weight-bold">#3</h4>
                            </div>
                            <div className="section-content">
                              <p>The visual brand is limited and inspired by location, particularly New York City.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <section className="my-5 p-5 border">
                            <div className="section-header">
                              <h4 className="section-title display-4 font-weight-bold">#4</h4>
                            </div>
                            <div className="section-content">
                              <p>There is an inconsistent user interface and visual appeal across the platform.</p>
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
        <section className="py-8 py-lg-16">
          <div className="container px-4 px-lg-8">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section>
                    <div className="section-header mb-5 col-11 col-lg-8 m-auto">
                      <h1 className="display-4 mb-4">The Design Process</h1>
                      <p>To make changes that appeal to your new audience, the first step was to understand the less sophisticated investor and the emotional queues we wanted to leverage in our visual language. Using empathy maps and findings from Behavioral Finance, we created a new persona and built out a style guide that would help us communicate our brand’s three main pillars: personal, professional, and premium.</p>
                    </div> 
                    <div className="section-content mb-5 mt-5">
                      <img className="style-guide-img d-none d-md-block" src={StyleGuide} alt="StyleGuide" />
                      <img className="style-guide-img d-md-none" src={StyleGuideSmall} alt="StyleGuideSmall" />
                    </div> 
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="container pt-8 px-4 px-lg-8">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section>
                    <div className="section-header mb-5 mb-md-7 col-11 col-lg-8 m-auto">
                      <h1 className="display-4 mb-4">The SI Design System</h1>
                      <p>While making updates to the overall brand aesthetic, I created the SI Design System Library, an internal tool that stores all of our product design components in one place. Each section and its components have design and code examples, making this documentation extremely useful for the business, design, and development teams. We have seen huge leaps in productivity across the entire company when using this library, and it continues to be used for every new product build.</p>
                    </div> 
                    <div className="section-content mb-5">
                      <img className="style-guide-img box-shadow" src={DesignSystem} alt="DesignSystem" />
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
                  <section>
                    <div className="section-header mb-5 mb-md-7 col-11 col-lg-8 m-auto">
                      <h1 className="display-4 mb-4">Mapping The Information Architecture</h1>
                      <p>After researching our new user type and exploring the visual aesthetic with the team, I designed our information architecture, focusing on navigation, page content, and functionality. The grey nodes represent low-priority update needs, the teal nodes represent the high-priority needs, and the green nodes represent the function.</p>
                    </div> 
                    <div className="section-content mb-5">
                      <img className="style-guide-img" src={Chart} alt="Chart" />
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
                    <div className="section-header mb-5 mb-md-7 col-11 col-lg-8 m-auto">
                      <h1 className="display-4 mb-4">Rebranding Marketing Pages</h1>
                      <p>During the ideation phase, I created low-fidelity wireframes to gain stakeholder buy-in. Because our main goal was to increase conversion, I first focused on the "above the fold" design. I explored several experimental layouts that pushed against traditional landing page conventions. Ultimately, the team decided that a more classic high-conversion layout would help us reach our goal.</p>
                    </div> 
                    <div className="section-content mb-5">
                      <div className="row">
                        <div className="col-6 mb-5">
                          <p className="lead text-secondary">Experimental Broken Grid</p>
                          <img className="homepage-wire-img box-shadow" src={HomePageWire} alt="homepage" />
                        </div>
                        <div className="col-6 mb-5">
                          <p className="lead text-secondary">Experimental Collage Layout</p>
                          <img className="homepage-wire-img box-shadow" src={HomePageWireTwo} alt="homepage" />
                        </div>
                        <div className="col-6 mb-5">
                          <p className="lead text-secondary">Experimental Editorial Layout</p>
                          <img className="homepage-wire-img box-shadow" src={HomePageWireThree} alt="homepage" />
                        </div>
                        <div className="col-6 mb-5">
                          <p className="lead text-secondary">Classic High Conversion Layout</p>
                          <img className="homepage-wire-img box-shadow" src={HomePageWireFour} alt="homepage" />
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="mb-5">
                    <div className="section-header my-5 my-md-7 col-11 col-lg-8 m-auto">
                      <h2 className="font-weight-normal mb-4">Creating a cohesive collection of corporate pages.</h2>
                      <p>Next, I built detailed wireframes based on the team's consensus. The corporate pages are laid out in single stacked pages, painting a clear picture of the company and drawing the user's attention to our values. I used our newly formed design system of pre-designed modules to create a collection of cohesive layouts.</p>
                    </div> 
                    <div className="section-content">
                      <div className="row">
                        <div className="col-4 mb-5">
                          <p className="lead text-secondary">About Page (Stacked Layout)</p>
                          <img className="coporate-wire-img box-shadow" src={CorporateWireAbout} alt="homepage" />
                        </div>
                        <div className="col-4 mb-5">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Team Page</p>
                            <img className="coporate-wire-img box-shadow" src={CorporateWireTeam} alt="homepage" />
                          </div>
                          <div className="img-wrapper mt-lg-5 mb-5">
                            <p className="lead text-secondary">Press Page</p>
                            <img className="coporate-wire-img box-shadow" src={CorporateWirePress} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-4 mb-5">
                          <p className="lead text-secondary">Careers Page</p>
                          <img className="coporate-wire-img box-shadow" src={CorporateWireJobs} alt="homepage" />
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
                    <div className="section-header mb-5 mb-md-7 col-11 col-lg-8 m-auto">
                      <h1 className="display-4 mb-4">Exploring Campaign Profiles</h1>
                      <p>After the corporate pages were well defined, we brainstormed ways to make the campaign profiles more informative to new investors. I wireframed possible education features including tooltips, slide-in sidebars FAQs, and a highlighting citation feature inspired by Medium. Because of scope restrictions, we decided to save the citation feature for a future iteration.</p>
                    </div> 
                    <div className="section-content mt-5">
                      <div className="row">
                        <div className="col-6">
                          <p className="lead text-secondary">Particle Campaign Profile</p>
                          <img className="homepage-wire-img box-shadow" src={ProfileWirePartical} alt="homepage" />
                        </div>
                        <div className="col-6">
                          <div className="img-wrapper mb-4">
                            <p className="lead text-secondary">Investor FAQ Side Bar</p>
                            <img className="coporate-wire-img box-shadow" src={ProfileWireEducation} alt="homepage" />
                          </div>
                          <div className="img-wrapper">
                            <p className="lead text-secondary">Citation Feature</p>
                            <img className="coporate-wire-img box-shadow" src={ProfileWireCitation} alt="homepage" />
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
                    <div className="section-header mb-5 mb-md-7 col-11 col-lg-8 m-auto">
                      <h1 className="display-4 mb-4">Education Resources</h1>
                      <p>As we built educational features into the campaign profiles, we wanted to create more value for our community by providing more educational materials before browsing for a deal. This would also help build our reputation as thought-leaders in the space. Guides are to be created by business members with little intervention from the product team, thus the design solution needed to be scalable.</p>
                    </div> 
                    <div className="section-content mb-5">
                      <div className="row">
                        <div className="col-6 mb-5">
                          <p className="lead text-secondary">Thumbnail Grid</p>
                          <img className="homepage-wire-img box-shadow" src={AcademyWireOne} alt="homepage" />
                        </div>
                        <div className="col-6 mb-5">
                          <p className="lead text-secondary">Right Aligned | Left Sticky Nav</p>
                          <img className="homepage-wire-img box-shadow" src={AcademyWireTwo} alt="homepage" />
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
                    <div className="section-header mb-5 mb-md-7 col-11 col-lg-8 m-auto">
                      <h1 className="display-4 mb-4">The Visual Design</h1>
                      <p>High-quality images of our most innovative startups are featured throughout the platform. A dark cobalt overlay creates bold, mystic energy. The home page is designed for conversion, with value-focused messaging and a centralized call-to-action. Our design system helped reinforce simple and effective layouts throughout our company pages.</p>
                    </div> 
                    <div className="section-content mb-5">
                      <p className="lead text-secondary ml-4">Official Home Page | Mobile View</p>
                      <img src={HomeFull} alt="homepagefull" />
                    </div>
                  </section>
                  <section className="mb-5">
                    <div className="section-header my-5 my-md-7 col-11 col-lg-8 m-auto">
                      <h2 className="font-weight-normal mb-4">Showcasing innovation, personal touch, professionalism, and trust.</h2>
                      <p>With our high-touch service, it was important to show the people behind the company. The team section includes a fun hover effect, revealing each team member's personality.</p>
                    </div> 
                    <div className="section-content">
                      <div className="row">
                        <div className="col-6 mb-5">
                          <p className="lead text-secondary">Official About Page</p>
                          <img className="coporate-img box-shadow" src={CorporateAbout} alt="homepage" />
                        </div>
                        <div className="col-6 mb-5">
                          <p className="lead text-secondary">Team Hover Effect</p>
                          <img className="coporate-img box-shadow" src={CorporateTeam} alt="homepage" />
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="mb-5">
                    <div className="section-header my-5 my-md-7 col-11 col-lg-8 m-auto">
                      <h2 className="font-weight-normal mb-4">Helping new investors make informed investment decisions.</h2>
                      <p>Taking a mobile-first approach, the campaign profiles were designed to highlight the startup's fundraising. We included an Investor FAQs section, tooltips for unfamiliar terms, and a discussion board feature to help new investors post questions to founders.</p>
                    </div> 
                    <div className="section-content mb-5">
                      <div className="row">
                        <div className="col-6 mb-5">
                          <p className="lead text-secondary">Official Campaign Profile</p>
                          <img className="homepage-wire-img box-shadow" src={ProfileOne} alt="homepage" />
                        </div>
                        <div className="col-6 mb-5">
                          <p className="lead text-secondary">Tooltip Details</p>
                          <img className="homepage-wire-img box-shadow" src={ProfileTwo} alt="homepage" />
                        </div>
                        <div className="col-6 mb-5">
                          <p className="lead text-secondary">Discussion Board</p>
                          <img className="homepage-wire-img box-shadow" src={ProfileThree} alt="homepage" />
                        </div>
                        <div className="col-6 mb-5">
                          <p className="lead text-secondary">Citation Feature</p>
                          <img className="homepage-wire-img box-shadow" src={ProfileFour} alt="homepage" />
                        </div>
                      </div>
                    </div>
                    <div className="section-content mt-7">
                      <div className="row">
                        <div className="col-4 mb-5 text-center">
                          <p className="lead text-secondary">Mobile View</p>
                          <img className="homepage-wire-img box-shadow" src={ProfileMobileOne} alt="homepage" />
                        </div>
                        <div className="col-4 mb-5 text-center">
                          <p className="lead text-secondary">Mobile Sticky Nav</p>
                          <img className="homepage-wire-img box-shadow" src={ProfileMobileTwo} alt="homepage" />
                        </div>
                        <div className="col-4 mb-5 text-center">
                          <p className="lead text-secondary">Mobile Nav Expanded</p>
                          <img className="homepage-wire-img box-shadow" src={ProfileMobileThree} alt="homepage" />
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="mb-5">
                    <div className="section-header my-5 my-md-7 col-11 col-lg-8 m-auto">
                      <h2 className="font-weight-normal mb-4">Building value for our community through education.</h2>
                      <p>The SeedInvest Academy is a separate experience from the rest of the platform. The Academy is meant to be a fun, approachable space for new investors to learn about Equity Crowdfunding. The cover images are bold, colorful, and playful.</p>
                    </div> 
                    <div className="section-content col-12 col-lg-11 m-auto mb-5">
                      <div className="row">
                        <div className="col-9 mb-5">
                          <p className="lead text-secondary">Official Academy</p>
                          <img className="homepage-wire-img box-shadow" src={AcademyOne} alt="homepage" />
                        </div>
                        <div className="col-3 mb-5">
                          <p className="lead text-secondary">Mobile View</p>
                          <img className="homepage-wire-img box-shadow" src={AcademyMobileOne} alt="homepage" />
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
                  <section className="mb-5">
                    <div className="section-header mb-5 mb-md-7 col-11 col-lg-8 m-auto">
                      <h1 className="display-4 mb-4">Product Impact</h1>
                      <p>As a result of many hours of careful research, brainstorming, planning, prototyping, and developing, the SeedInvest platform is a bold representation of the innovative companies that raise with us, with subtle elements communicating sophistication and promoting user trust. These updates have been live on SeedInvest since 2016 and have helped grow the company to its current status as one of the leading equity crowdfunding sites in the United States.</p>
                    </div>                
                  </section>
                  <section>
                    <div className="section-content mb-5 col-11 col-lg-8 m-auto opacity-20">
                      <div className="row">
                        <div className="col">
                          <div className="snippet">
                            <div className="snippet-header mb-5">
                              <div className="snippet-title count display-4 font-weight-bold">2016</div>
                              <p>Before Updates</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="snippet">
                            <div className="snippet-header mb-5">
                              <div className="snippet-title count display-4 font-weight-bold">12k</div>
                              <p>Total Investors</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="snippet">
                            <div className="snippet-header mb-5">
                              <div className="snippet-title count display-4 font-weight-bold">$5M</div>
                              <p>Total Invested</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div className="section-content mb-5 col-11 col-lg-8 m-auto">
                      <div className="row">
                        <div className="col">
                          <div className="snippet">
                            <div className="snippet-header mb-5">
                              <div className="snippet-title count display-4 font-weight-bold">2019</div>
                              <p>After Updates</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="snippet">
                            <div className="snippet-header mb-5">
                              <div className="snippet-title count display-4 font-weight-bold">250k</div>
                              <p>Total Investors</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="snippet">
                            <div className="snippet-header mb-5">
                              <div className="snippet-title count display-4 font-weight-bold">$150M</div>
                              <p>Total Invested</p>
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
                          <h4 className="snippet-title">Measuring Success Is Tricky</h4>
                        </div>
                        <div className="snippet-content">
                          <p>The activity on the platform is highly dependent on which companies are fundraising at any given time. A/B Testing and KPI trends were not always helpful in these circumstances. We learned that we should request feedback often, analyze customer tickets diligently, and survey customers on their wants and needs.</p>
                        </div>
                      </div>
                      <div className="snippet mb-5">
                        <div className="snippet-header">
                          <h4 className="snippet-title">Process Organization Is Key</h4>
                        </div>
                        <div className="snippet-content">
                          <p>With a project as big as this, it was important to track the progress of each feature. Features needed to be designed, tested, and built at different times, but needed to be deployed together for platform consistency. This is when collaboration tools became handy. </p>
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
      </div>
    )
  }
}

export default WorkOne