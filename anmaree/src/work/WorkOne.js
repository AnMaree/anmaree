import React, { Component} from 'react';
import { Link } from "react-router-dom";
import Gallery from 'react-grid-gallery';

import process from '../imgs/process.png';
import ProcessVideo from '../videos/process-video.mp4'
import HomeVideo from '../videos/home.mp4'
import StyleGuide from '../imgs/work-one/styleguide.png';
import DesignSystem from '../imgs/work-one/design-systems.gif';

import StyleGuideSmall from '../imgs/work-one/styleguide-small.png';

import heroMockup from '../imgs/invest-in-startups-hero.png';
import wireframeOne from '../imgs/wireframe-1.png';
import wireframeTwo from '../imgs/wireframe-2.png';
import wireframeThree from '../imgs/wireframe-3.png';
import wireframeFour from '../imgs/wireframe-4.png';
import Home from '../imgs/work-one/home.jpg';
import ThumbHome from '../imgs/work-one/thumb-home.jpg';
import About from '../imgs/work-one/about.jpg';
import ThumbAbout from '../imgs/work-one/thumb-about.jpg';
import TeamAnimation from '../imgs/work-one/team.gif';
import Profile from '../imgs/work-one/profile.jpg';
import ThumbProfile from '../imgs/work-one/thumb-profile.jpg';
import Academy from '../imgs/work-one/academy.jpg';
import ThumbAcademy from '../imgs/work-one/thumb-academy.jpg';
import Invest from '../imgs/work-one/invest.jpg';
import ThumbInvest from '../imgs/work-one/thumb-invest.jpg';

const IMAGES = [
  {
    src: Home,
    thumbnail: ThumbHome,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    customOverlay: "Home Page - Deployed Design",
    caption: "Home Page - Deployed Design"
  },
  {
    src: About,
    thumbnail: ThumbAbout,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    customOverlay: "Corporate - About Page",
    caption: "Corporate - About Page"
  },
  {
    src: TeamAnimation,
    thumbnail: TeamAnimation,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    customOverlay: "Corporate - Team Interaction",
    caption: "Corporate - Team Interaction"
  },
  {
    src: Profile,
    thumbnail: ThumbProfile,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    customOverlay: "Profile - Campaign Profile",
    caption: "Profile - Campaign Profile"
  },
  {
    src: Academy,
    thumbnail: ThumbAcademy,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    customOverlay: "Education - Academy",
    caption: "Education - Academy"
  },
  {
    src: Invest,
    thumbnail: ThumbInvest,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    customOverlay: "Education - How to Invest",
    caption: "Education - How to Invest"
  }
]

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
            <div className="container col-12">
              <img className="mockup-img" src={heroMockup} alt="heroMockup" />
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
                      <p>SeedInvest is an Equity Crowdfunding platform that connects entrepreneurs with investors. As a result of the Jobs Act of 2012, startup investing was opened to 240+ million Americans who previously could not invest. The new exemptions allowed SeedInvest to help startups turn their most ardent supporters and customers into passionate investors for the first time.</p>
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
                          <p>Product Planning, User Research, Information Architecture, Interaction design, Visual design, Prototyping, Testing, Front-End Development, Wordpress Development.</p>
                          <hr/>
                          <p>1 Designer, 2 Developers, 1 Project Manager</p>
                          <hr/>
                          <p>6 Weeks | Deployed June 2016</p>
                        </div>
                      </div>                   
                    </div>                  
                  </section>
                </div>      
              </div>   
            </div>
          </div>
        </section>
        <section className="py-8 py-lg-10 bg-light">
          <div className="container px-4 px-lg-8">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section className="mb-5">
                    <div className="section-header text-center mb-5 col-md-10 m-auto">
                      <h1 className="display-4 mb-4">The Design Thinking Process</h1>
                      <p>I start my projects with The Design Thinking Process, a nonlinear method described by The Hasso Plattner Institute of Design at Stanford. While using this approach at SeedInvest, I aimed to understand our users, challenge ideas, and build solutions for ambiguous problems in an industry where laws and regulations are rapidly changing.</p>
                    </div> 
                    <div className="section-content mt-7 d-none d-md-block">
                      <div className="progress transparent">
                        <div className="progress-bar m-1 bg-si-bluechill" style={{width: "14.28%"}}>
                          <span className="sr-only text-white font-weight-bold">Empathize</span>
                        </div>
                        <div className="progress-bar m-1 bg-si-bluechill" style={{width: "14.28%"}}>
                          <span className="sr-only text-white font-weight-bold">Define</span>
                        </div>
                        <div className="progress-bar m-1 bg-si-seafoam" style={{width: "14.28%"}}>
                          <span className="sr-only text-white font-weight-bold">Ideate</span>
                        </div>
                        <div className="progress-bar m-1 bg-si-seafoam" style={{width: "14.28%"}}>
                          <span className="sr-only text-white font-weight-bold">Prototype</span>
                        </div>
                        <div className="progress-bar m-1 bg-si-olivine" style={{width: "14.28%"}}>
                          <span className="sr-only text-white font-weight-bold">Test</span>
                        </div>
                        <div className="progress-bar m-1 bg-si-olivine" style={{width: "14.28%"}}>
                          <span className="sr-only text-white font-weight-bold">Build</span>
                        </div>
                        <div className="progress-bar m-1 bg-si-sunshine" style={{width: "14.28%"}}>
                          <span className="sr-only text-white font-weight-bold">Deploy</span>
                        </div>       
                      </div>
                    </div>
                    <div className="section-content mt-7 d-md-none">
                      <div className="progress transparent small">
                        <div className="progress-bar m-1 bg-si-bluechill" style={{width: "25%"}}>
                          <span className="sr-only text-white font-weight-bold">Empathize</span>
                        </div>
                        <div className="progress-bar m-1 bg-si-seafoam" style={{width: "25%"}}>
                          <span className="sr-only text-white font-weight-bold">Prototype</span>
                        </div>
                        <div className="progress-bar m-1 bg-si-olivine" style={{width: "25%"}}>
                          <span className="sr-only text-white font-weight-bold">Test & Build</span>
                        </div>
                        <div className="progress-bar m-1 bg-si-sunshine" style={{width: "25%"}}>
                          <span className="sr-only text-white font-weight-bold">Deploy</span>
                        </div>       
                      </div>
                    </div>
                    <img className="process-img" src={process} alt="process" />
                    <div className="section-content mt-7 text-center">
                      <p className="lead text-muted">(The above is for representational purposes only)</p>
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
                    <div className="section-header mb-5 mb-md-7 col-11 col-md-8 m-auto">
                      <h1 className="display-4 mb-4">Empathize & Define</h1>
                      <p>The first step was to understand the Non-Accredited Investor and the emotional queues we wanted to leverage in our visual language. Using empathy maps and findings from Behavioral Finance, we created a new persona and style guide that would help us communicate our brand’s three main pillars: personal, professional, and premium.</p>
                    </div> 
                    <div className="section-content text-white mb-5 text-center">
                      <img className="style-guide-img d-none d-md-block" src={StyleGuide} alt="StyleGuide" />
                      <img className="style-guide-img d-md-none" src={StyleGuideSmall} alt="StyleGuideSmall" />
                    </div>
                    <div className="section-content mt-7 text-center">
                      <p className="lead text-muted">(And much much more!)</p>
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
                    <div className="section-header mb-5 mb-md-7 col-11 col-md-8 m-auto">
                      <h1 className="display-4 mb-4">The SI Design System</h1>
                      <p>While making updates to the overall brand aesthetic, I created the SI Design System Library, an internal tool that stores all of our product design components in one place. Each section and its components have design and code examples, making this documentation extremely useful for the business, design, and development teams. We have seen huge leaps in productivity across the entire company when using this library, and it continues to be used for every new product build.</p>
                    </div> 
                  </section>
                  <section className="text-center">
                    <div className="section-content col-11 col-md-12 m-auto text-white mb-5 text-center">
                      <img className="style-guide-img box-shadow" src={DesignSystem} alt="DesignSystem" />
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8 py-lg-16 bg-dark">
          <div className="container px-4 px-lg-8">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section className="pb-5">
                    <div className="section-header text-center col-md-9 mx-auto text-white">
                      <h1 className="display-4 mb-2">Ideate On New Features</h1>
                      <p>We selected which new features to create based on our goals of engaging new users and educating them on online investment and fundraising.</p>
                    </div> 
                  </section>
                  <section>
                    <div className="section-content text-center text-white">
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                          <div className="snippet mt-5">
                            <div className="snippet-header">
                              <div className="snippet-title font-weight-bold">Landing Pages</div>
                              <div className="snippet-content"><p>Apply new visual language and tailor content to the target audience.</p>
                              </div>
                            </div>
                            <div className="snippet-content mt-5">
                              <img className="mockup-img" src={wireframeOne} alt="wireframe" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <div className="snippet mt-5">
                            <div className="snippet-header">
                              <div className="snippet-title font-weight-bold">Corporate Pages</div>
                              <div className="snippet-content"><p>Tell our story through our team’s experience, passion, and personality.</p>
                              </div>
                            </div>
                            <div className="snippet-content mt-5">
                              <img className="mockup-img" src={wireframeTwo} alt="wireframe" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <div className="snippet mt-5">
                            <div className="snippet-header">
                              <div className="snippet-title font-weight-bold">Education Pages</div>
                              <div className="snippet-content"><p>Create an approachable space for educational content.</p>
                              </div>
                            </div>
                            <div className="snippet-content mt-5">
                              <img className="mockup-img" src={wireframeThree} alt="wireframe" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <div className="snippet mt-5">
                            <div className="snippet-header">
                              <div className="snippet-title font-weight-bold">Campaign Profiles</div>
                              <div className="snippet-content"><p>Provide further education, campaign updates, and a discussion board.</p>
                              </div>
                            </div>
                            <div className="snippet-content mt-5">
                              <img className="mockup-img" src={wireframeFour} alt="wireframe" />
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
        <section className="py-8 py-lg-10 bg-light">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section className="mb-5">
                    <div className="section-header text-center mb-7 col-lg-8 mx-auto">
                      <h1 className="display-4 mb-4">Mockups & Prototypes</h1>
                      <p>During the prototyping phase, designs were created using <strong>Adobe Illustrator</strong> and <strong>Invison</strong>. Some features were also prototyped directly in <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Angular JS</strong> on a developer branch to improve the engineering team’s velocity and overall collaboration.</p>
                    </div>               
                  </section>
                  <section>
                    <div className="section-content ReactGridGalleryThreeColumns text-center">
                      <Gallery images={IMAGES} backdropClosesModal={true} enableImageSelection={false} showCloseButton={false} />
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
                <div className="col-12">
                  <section className="mb-5">
                    <div className="section-header mb-7 col-md-10 mx-auto text-center">
                      <h1 className="display-4 mb-4">Test, Build, & Deploy</h1>
                      <p>The landing pages, corporate pages, and campaign profiles were prototyped and built in <strong>Python on Django</strong> and with <strong>Angular</strong>. I decided to build the Academy of <strong>Wordpress</strong> because of time constraints and the need for a content management system (CMS) that business teams could use to regularly update posts. We used several organization and prioritization tools like <strong>Trello</strong> and <strong>Jira</strong> to increase transparency and boost productivity amongst our team.</p>
                    </div>
                    <div className="section-content mx-5 p-5 bg-teal">
                      <div className="snippet p-3 bg-teal-dark">
                        <div className="video-wrapper">
                          <video className="video" preload="none" autoPlay loop width="100%" webkit-playsinline="true" playsInline>
                            <source src={ProcessVideo} type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </div>
                    <hr/> 
                    <div className="section-content mt-7 text-center">
                      <p className="lead text-muted">(The above is for representational purposes only)</p>
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
                  <section className="container mb-5 text-center">
                    <div className="section-header mb-5 col-lg-8 mx-auto text-white">
                      <h1 className="display-4 mb-4">Product Impact</h1>
                      <p>As a result of many hours of careful research, brainstorming, planning, prototyping, and developing, the SeedInvest platform is a bold representation of the innovative companies that raise with us, with a number of subtle elements communicating sophistication and promoting user trust. These updates have been live on SeedInvest since 2016 and have helped grow the company to its current status as one of the leading equity crowdfunding sites in the United States.</p>
                    </div>                
                  </section>
                  <section>
                    <div className="section-content mt-7">
                      <div className="laptop-mask-wrapper">
                        <video className="final-video" preload="none" autoPlay loop width="100%" webkit-playsinline="true" playsInline>
                          <source src={HomeVideo} type="video/mp4" />
                        </video>
                      </div>
                    </div> 
                  </section>
                  <section>
                    <div className="section-content mt-5 col-lg-10 mx-auto text-center text-white opacity-20">
                      <div className="row">
                        <div className="col">
                          <div className="snippet">
                            <div className="snippet-header">
                              <div className="snippet-title count display-4 font-weight-bold">2016</div>
                              <p>Before Updates</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="snippet">
                            <div className="snippet-header">
                              <div className="snippet-title count display-4 font-weight-bold">12k</div>
                              <p>Total Investors</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="snippet">
                            <div className="snippet-header">
                              <div className="snippet-title count display-4 font-weight-bold">$5M</div>
                              <p>Total Invested</p>
                            </div>
                          </div>
                        </div>
                        <div className="col d-none d-md-block">
                          <div className="snippet">
                            <div className="snippet-header">
                              <div className="snippet-title count display-4 font-weight-bold">40</div>
                              <p>Startups Funded</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <hr className="light col-lg-10 mx-auto" />
                  <section>
                    <div className="section-content mt-5 col-lg-10 mx-auto text-center text-white">
                      <div className="row">
                        <div className="col">
                          <div className="snippet">
                            <div className="snippet-header">
                              <div className="snippet-title count display-4 font-weight-bold">2019</div>
                              <p>After Updates</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="snippet">
                            <div className="snippet-header">
                              <div className="snippet-title count display-4 font-weight-bold">250k</div>
                              <p>Total Investors</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="snippet">
                            <div className="snippet-header">
                              <div className="snippet-title count display-4 font-weight-bold">$150M</div>
                              <p>Total Invested</p>
                            </div>
                          </div>
                        </div>
                        <div className="col d-none d-md-block">
                          <div className="snippet">
                            <div className="snippet-header">
                              <div className="snippet-title display-4 font-weight-bold">150</div>
                              <p>Startups Funded</p>
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
        <section className="section py-8 py-lg-10 border-bottom">
          <div className="container px-4 px-lg-8 ">
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
                          <p>The activity on the platform is highly dependent on which companies are fundraising at any given time. A/B Testing and KPI trends were not always helpful in these circumstances. We learned that we should request feedback often, analyze customer tickets diligently, and survey customers on their wants and needs.</p>
                        </div>
                      </div>
                      <div className="snippet mb-5">
                        <div className="snippet-header">
                          <h4 className="snippet-title">Process Oranization Is Key</h4>
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