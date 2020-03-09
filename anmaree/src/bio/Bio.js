import React, { Component } from 'react'
import portrait from '../imgs/portrait.jpg';
import portraitSmall from '../imgs/portrait-small.jpg';
import Resume from '../downloads/AnMaree_Resume.pdf';
import PersonalWorkOne from '../imgs/posters/poster-1.jpg';
import PersonalWorkTwo from '../imgs/posters/poster-2.jpg';
import PersonalWorkThree from '../imgs/posters/poster-3.jpg';
import PersonalWorkSix from '../imgs/posters/poster-6.jpg';
import PersonalWorkSeven from '../imgs/posters/poster-7.jpg';
import PersonalWorkEight from '../imgs/posters/poster-8.jpg';

class Bio extends Component {
  render() {
    return (
      <section>
        <div className="container mt-0 mb-5 my-md-16">
          <div className="row">
            <div className="col-12 col-lg-6 order-3 order-lg-1">
              <section>
                <div className="section-header">
                  <div className="section-title display-4 mb-4">About Me</div>
                </div>
                <div className="section-content">
                  <p>My love for design and technology was obvious at an early age. I was born into a family of entrepreneurs who taught me that design was a differentiating factor for any business. When I wasn't climbing palm trees as a kid in my hometown of St.Thomas, I was making business cards for my part-time snow cone business, creating pitch presentations for my mother's wedding company, and learning HTML and CSS through my embarrassing obsession with MySpace.</p>
                  <p>I continued to hone my design skills at the University of Michigan's School of Art & Design. There I focused on UX/UI design and took independent studies in HTML, CSS, and JavaScript. After college, I fell in love with the hustle and grit of Detroit. I worked with over 25 Detroit startups on product design and development, helping to build a technology ecosystem in a town that desperately needed tech innovation.</p>
                  <p>After my time in Detroit I joined SeedInvest, a leading Equity Crowdfunding platform based in New York City. Being in the financial capital of the world and helping startups raise money honored my passion for supporting small business. When I’m not jumping on the L to Manhattan, you can find me at Black Star Coffee researching UX trends or deploying new features to my Github account.</p>
                  <p className="mt-5"><a href={Resume} target="_blank">View My Resume</a></p>
                </div>
              </section>
            </div>
            <div className="col order-1 order-lg-2">
            </div>
            <div className="col-12 col-lg-5 order-1 order-lg-3 mb-5">
              <img className="portait-img d-none d-lg-block" src={portrait} alt="portrait" />
              <img className="portait-small-img d-block d-lg-none" src={portraitSmall} alt="portrait-small" />
            </div>
          </div>
        </div>
        <div className="container border-top text-center pt-5 pb-8">
          <div className="container-header py-5">
            <h1>My Personal Work</h1>
            <p className="font-weight-normal">I enjoy making posters for local bands and organizations in my free time.</p>
          </div>
          <div className="section-content">
            <div className="row">
              <div className="col-12 col-md-4 mb-5">
                <img className="personal-work-img" src={PersonalWorkSix} alt="personal work" />
              </div>
              <div className="col-12 col-md-4 mb-5">
                <img className="personal-work-img" src={PersonalWorkOne} alt="TresAmigosk" />
              </div>
              <div className="col-12 col-md-4 mb-5">
                <img className="personal-work-img" src={PersonalWorkThree} alt="personal work" />
              </div>
              <div className="col-12 col-md-4 mb-5">
                <img className="personal-work-img" src={PersonalWorkTwo} alt="personal work" />
              </div>
              <div className="col-12 col-md-4 mb-5">
                <img className="personal-work-img" src={PersonalWorkSeven} alt="personal work" />
              </div>
              <div className="col-12 col-md-4 mb-5">
                <img className="personal-work-img" src={PersonalWorkEight} alt="personal work" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Bio