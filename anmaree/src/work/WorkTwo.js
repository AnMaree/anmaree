
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Gallery from 'react-grid-gallery';

import MessyProcess from '../imgs/work-two/messy-process.jpg';
import Nps from '../imgs/work-two/nps.png';
import CleanProcess from '../imgs/work-two/clean-process.png';
import LandingPage from '../imgs/work-two/landing-page.jpg';
import PreQual from '../imgs/work-two/pre-qual.jpg';
import AppVideo from '../videos/app-video.mp4';
import PreOnboarding from '../imgs/work-two/pre-onboarding-2.gif';
import WorkSpace from '../imgs/work-two/workspace.png';
import Hero from '../imgs/work-two/hero.png';
import MoreWork from './MoreWork';
import RaiseVideo from '../videos/apply.mp4'

import GallerySiteMap from '../imgs/work-two/gallery/sitemap.jpg';

import GalleryApply from '../imgs/work-two/gallery/apply.jpg';
import GalleryApplyThumb from '../imgs/work-two/gallery/thumb-apply.jpg'

import GalleryOnboarding from '../imgs/work-two/gallery/onboarding.gif';
import GalleryPreOnboarding from '../imgs/work-two/gallery/pre-onboarding.gif';

import GalleryTaskList from '../imgs/work-two/gallery/task-list.jpg';
import GalleryTaskListThumb from '../imgs/work-two/gallery/thumb-task-list.jpg';

import GalleryDashboardV1 from '../imgs/work-two/gallery/dashboard-v1.jpg';
import GalleryDashboardV2 from '../imgs/work-two/gallery/dashboard-v2.jpg';
import GalleryDashboardV3 from '../imgs/work-two/gallery/dashboard-v3.jpg';
import GalleryDashboardV4 from '../imgs/work-two/gallery/dashboard-v4.jpg';
import GalleryDashboardV5 from '../imgs/work-two/gallery/dashboard-v5.jpg';

import GalleryAnnotations from '../imgs/work-two/gallery/onboarding-profile-annotations.gif';
import GalleryProfile from '../imgs/work-two/gallery/profile.jpg';

import workCoverThreeSmall from '../imgs/work-three-cover-small.jpg';
import workCoverFourSmall from '../imgs/work-four-cover-small.jpg';
import workCoverFiveSmall from '../imgs/work-five-cover-small.jpg';

const IMAGES = [
  {
    src: GallerySiteMap,
    thumbnail: GallerySiteMap,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    customOverlay: "Home Page - Deployed Design",
    caption: "Home Page - Deployed Design"
  },
  {
    src: GalleryApply,
    thumbnail: GalleryApplyThumb,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    customOverlay: "Home Page - Deployed Design",
    caption: "Home Page - Deployed Design"
  },
  {
    src: GalleryOnboarding,
    thumbnail: GalleryOnboarding,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    customOverlay: "Home Page - Deployed Design",
    caption: "Home Page - Deployed Design"
  },
  {
    src: GalleryPreOnboarding,
    thumbnail: GalleryPreOnboarding,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    customOverlay: "Corporate - About Page",
    caption: "Corporate - About Page"
  },
  {
    src: GalleryDashboardV5,
    thumbnail: GalleryDashboardV5,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    customOverlay: "Corporate - About Page",
    caption: "Corporate - About Page"
  },
  {
    src: GalleryDashboardV1,
    thumbnail: GalleryDashboardV1,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    customOverlay: "Corporate - About Page",
    caption: "Corporate - About Page"
  },
  {
    src: GalleryDashboardV2,
    thumbnail: GalleryDashboardV2,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    customOverlay: "Corporate - About Page",
    caption: "Corporate - About Page"
  },
  {
    src: GalleryDashboardV3,
    thumbnail: GalleryDashboardV3,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    customOverlay: "Corporate - About Page",
    caption: "Corporate - About Page"
  },
  {
    src: GalleryDashboardV4,
    thumbnail: GalleryDashboardV4,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    customOverlay: "Corporate - About Page",
    caption: "Corporate - About Page"
  },
  {
    src: GalleryAnnotations,
    thumbnail: GalleryAnnotations,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    customOverlay: "Corporate - About Page",
    caption: "Corporate - About Page"
  },
  {
    src: GalleryProfile,
    thumbnail: GalleryProfile,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    customOverlay: "Corporate - About Page",
    caption: "Corporate - About Page"
  },
  {
    src: GalleryTaskList,
    thumbnail: GalleryTaskListThumb,
    thumbnailWidth: 400,
    thumbnailHeight: 300,
    customOverlay: "Corporate - About Page",
    caption: "Corporate - About Page"
  }
]


class WorkOne extends Component {
  render() {
    return (
      <div className="page-content">
        <div className="hero-header">
          <div className="hero-header-img position-relative overflow-hidden text-center bg-mint">
            <div className="container col">
              <div className="hero-back"><Link to="/work/1">←</Link></div>
            </div>
            <div className="container col-10 col-md-8 col-lg-6 col-xl-5 mb-5 mx-auto">
              <h1 className="display-3 font-weight-bold mb-4">Fundraise Online</h1>
              <h3 className="font-weight-normal">Onboarding startup companies to a fundraising campaign management platform.</h3>
            </div>
            <div className="container col-12">
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
                    <div className="section-header font-weight-bold text-uppercase mb-4">
                      <h5 className="snippet-label">Overview</h5>
                    </div>
                    <div className="section-content">
                      <p>SeedInvest's mission is to transform the broken startup fundraising process in order to make it easier for entrepreneurs to raise capital. By bringing the fundraising process online, SeedInvest gives founders the ability to raise capital more efficiently.</p>
                      <p>The company's business objective was to increase deal flow by 10x while maintaining a high quality reputation and giving entrepreneurs an enjoyable onboarding experience. However, the team was having a hard time hitting weekly venture goals and customer satisfaction was suffering. It was clear we needed to redefine the fundraising process by cutting unnecessary operations, automating as much as possible, and reframing our velvet-rope approach by working with companies rather than against them.</p>
                      <p>In order to redefine the process, we needed to build simple, self-operating features that still evoke a high-touch user experience. This would help us scale the onboarding process while keeping customer satisfaction ratings and NPS scores high.</p>
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
        <section className="py-8 py-lg-10 bg-light">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section className="mb-7">
                    <div className="section-header text-center mb-7 col-md-8 mx-auto">
                      <h1 className="display-4 mb-4">The Original Process</h1>
                      <p>The original process was based on serving the company rather than serving the user. Founders were required to fill out a 60+ item questionnaire before being brought into our service. We tracked NPS scores at each step and saw that founders were passive users, neither emotionally invested nor disengaged.</p>
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
                              <p>The team used a number of different task managers, information floated in inboxes, and founders were doing repeat work to accommodate the team.</p>
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
                              <div className="snippet-title font-weight-bold">More Work, Few Wins</div>
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
                      <h1 className="display-4 mb-4">The New Process</h1>
                      <p>The updated process is based on serving the user first and our process last. After thousands of submitted applications, we had enough data to build a model that defined a pre-qualification tool. This tool evaluates companies from just 10 questions and automatically sends accepted and rejected emails within 24 hours.</p>
                      <p>The quick feedback and simple design increase velocity and user satisfaction, growing our NPS to a promoter score, where users are loyal, likely to raise with us again, and recommend us to other startups.</p>
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
                              <p>Smaller chunks of work means work is done more quickly, which means we close the feedback loop more quickly. This increases momentum throughout the process.</p>
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
        <section className="py-8 py-lg-10 bg-light">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section className="mb-5">
                    <div className="section-header text-center mb-7 col-lg-8 mx-auto">
                      <h1 className="display-4 mb-4">Mockup & Prototype Explorations</h1>
                      <p>Redefining the onboarding process was a 4-year effort and went through a lot of different mockup and prototype variations. Below are different versions of the onboarding process that were explored during this time. Designs were created using <strong>Sketch</strong> and <strong>Adobe Creative Suites</strong>. Some features were also prototyped directly in <strong>HTML, CSS, and Vue.js</strong> on a developer branch to improve the engineering team’s velocity and overall collaboration.</p>
                    </div>               
                  </section>
                  <section>
                    <div className="section-content ReactGridGalleryThreeColumns text-center">
                      <Gallery images={IMAGES} backdropClosesModal={true} enableImageSelection={false} showCloseButton={false} />
                    </div>
                  </section>
                  <section className="my-5 text-center">
                    <div className="my-5 col-12 mx-auto">
                      <div className="container-header text-uppercase py-5 ">
                        <h5 className="pb-3">Final Mockups & Prototypes</h5>
                        <hr/>
                      </div>
                    </div>
                  </section>
                  <section className="my-5">
                    <div className="my-5 col-12 col-md-11 mx-auto">
                      <img className="product-img box-shadow" src={LandingPage} alt="LandingPage" />
                    </div>
                  </section>
                  <section className="my-5 col-12 col-md-11 mx-auto">
                    <div className="section-content my-5">
                      <img className="product-img box-shadow" src={PreQual} alt="PreQual" />
                    </div>
                  </section>
                  <section className="my-5 col-12 col-md-11 mx-auto">
                    <div className="section-content my-5">
                        <div className="video-wrapper product-img box-shadow">
                          <video className="video" preload="none" autoplay="autoplay" loop="loop" width="100%">
                            <source src={AppVideo} type="video/mp4" />
                          </video>
                        </div>
                    </div>
                  </section>
                  <section className="my-5 col-12 col-md-11 mx-auto">
                    <div className="section-content my-5">
                      <img className="product-img box-shadow" src={PreOnboarding} alt="placeholder" />
                    </div>
                  </section>
                  <section className="my-5 col-12 col-md-11 mx-auto">
                    <div className="section-content my-5">
                      <img className="product-img box-shadow" src={WorkSpace} alt="workspace" />
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
                    <div className="section-header mb-5 col-lg-8 mx-auto text-white">
                      <h1 className="display-4 mb-4">Product Impact</h1>
                      <p>The onboarding process was easily the biggest design challenge at SeedInvest due to its complexity and ever-evolving nature. Every department was involved in the research, brainstorming, and planning for this project, and it continues to be an iterative process for the team. The new pre-qualification, application, and profile builder features have been in effect since 2019 and show promising results. The workspace is still evolving.</p>
                    </div>                
                  </section>
                  <section>
                    <div className="section-content mt-7">
                      <div className="laptop-mask-wrapper">
                        <video className="final-video" preload="none" autoplay="autoplay" loop="loop" width="100%">
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
                        <div className="col">
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
        <section className="py-8">
          <div className="container text-center px-5 px-md-8">
            <div className="container-header text-uppercase py-5 ">
              <h5>Check Out More Work</h5>
              <p className="font-weight-normal"></p>
            </div>
            <div className="section-content">
              <div className="row">
                <div className="col-12 col-md-4 mb-5">
                  <Link to="/work/3">
                    <img className="work-img" src={workCoverThreeSmall} alt="work" />
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