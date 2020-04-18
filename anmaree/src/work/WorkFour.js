import React, { Component} from 'react';

import heroMockup from '../imgs/work-four/hero.png';
import AccountTypes from '../imgs/work-four/account-types.jpg';
import AI from '../imgs/work-four/ai.jpg';
import ColorType from '../imgs/work-four/color-type.png';
import SanSerif from '../imgs/work-four/sans-serif.png';
import Serif from '../imgs/work-four/sans-serif.png';
import DesignProcess from '../imgs/work-four/design-process.jpg';
import InvestFlow from '../imgs/work-four/invest-flow.jpg';

import AccountNavOne from '../imgs/work-four/navigation/accounts-nav-one.jpg';
import AccountNavTwo from '../imgs/work-four/navigation/accounts-nav-two.jpg';
import AccountNavThree from '../imgs/work-four/navigation/accounts-nav-three.jpg';
import AccountNavFour from '../imgs/work-four/navigation/accounts-nav-four.jpg';
import AccountNavFive from '../imgs/work-four/navigation/accounts-nav-five.jpg';
import AccountNavSix from '../imgs/work-four/navigation/accounts-nav-six.jpg';
import AccountNavSeven from '../imgs/work-four/navigation/accounts-nav-seven.jpg';
import AccountNavEight from '../imgs/work-four/navigation/accounts-nav-eight.jpg';

import AccountOne from '../imgs/work-four/account/account-1.jpg';
import AccountTwo from '../imgs/work-four/account/account-2.jpg';
import AccountThree from '../imgs/work-four/account/account-3.jpg';
import AccountFour from '../imgs/work-four/account/account-4.jpg';

import PortfolioOne from '../imgs/work-four/portfolio/portfolio-wire-01.jpg';
import PortfolioTwo from '../imgs/work-four/portfolio/portfolio-wire-02.jpg';
import PortfolioThree from '../imgs/work-four/portfolio/portfolio-wire-03.jpg';
import PortfolioFour from '../imgs/work-four/portfolio/portfolio-wire-04.jpg';

import AccountFinalOne from '../imgs/work-four/final/account-01.jpg';
import AccountFinalTwo from '../imgs/work-four/final/account-02.jpg';
import AccountFinalThree from '../imgs/work-four/final/account-03.jpg';
import AccountFinalFour from '../imgs/work-four/final/account-04.jpg';
import AccountFinalFive from '../imgs/work-four/final/account-05.jpg';
import AccountFinalSix from '../imgs/work-four/final/account-06.jpg';
import AccountFinalSeven from '../imgs/work-four/final/account-07.jpg';
import AccountFinalEight from '../imgs/work-four/final/account-08.jpg';
import AccountFinalNine from '../imgs/work-four/final/account-09.jpg';
import AccountFinalEleven from '../imgs/work-four/final/account-11.jpg';
import AccountFinalTwelve from '../imgs/work-four/final/account-12.jpg';
import AccountFinalThirteen from '../imgs/work-four/final/account-13.jpg';

import Impact from '../imgs/work-four/final/impact.jpg';

class WorkFour extends Component {
  render() {
    return (
      <div className="page-content">
        <div className="hero-header">
          <div className="hero-header-img position-relative overflow-hidden text-center bg-yellow">
            <div className="container col">
              <div className="hero-back"><a href="/work/3">←</a></div>
            </div>
            <div className="container col-10 col-md-8 col-lg-6 col-xl-5 mb-5 mx-auto">
              <h1 className="display-3 font-weight-bold mb-4">Account Management</h1>
              <h3 className="font-weight-normal">Enabling investors to create and manage their accounts while staying up-to-date on their investments.</h3>
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
                      <p>SeedInvest connects thousands of investors with private investment opportunities. As a crowdfunding intermediary and financial institution, the company is obligated to implement technology that is compliant with the SEC/FINRA regulatory guidelines and the Bank Secrecy Act/Anti-money laundering program, while staying user-friendly.</p>
                      <p>Since crowdfunding laws are being created and refined almost every day, it was clear we needed to design a more user-centric account management system that is based on simple and flexible solutions. While doing so, we hoped to solve some of our largest accounting related support tickets.</p>
                      <p>To achieve a great user experience, I chose to take a holistic design approach. This meant understanding the laws required, analyzing the possible compliant touchpoint a user will encounter, and designing an interconnected and evolving system of features. By taking this approach our compliance implementation will not be a patchwork of experiences, but rather build into the product as a core value of the company's brand to promote customer trust.</p>
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
                      <p>Product Planning, User Research, Compliance Analysis, Information Architecture, Visual Design, Wireframing, Prototyping, Testing, Front-End Development.</p>
                    </div>
                  </section>
                </div>      
              </div>   
            </div>
          </div>
        </section>
        <section className="py-10 bg-light text-center">
          <div className="container">
            <div className="section-content">
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
                              <p>Not all the questions required to verify an Investor Account are present.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <section className="my-5 p-5 border">
                            <div className="section-header">
                              <h4 className="section-title display-4 font-weight-bold">#2</h4>
                            </div>
                            <div className="section-content">
                              <p>Users can't find their Investor Accounts and don't understand their purpose.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <section className="my-5 p-5 border">
                            <div className="section-header">
                              <h4 className="section-title display-4 font-weight-bold">#3</h4>
                            </div>
                            <div className="section-content">
                              <p>Users have a hard time completing the investor verification process.</p>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <section className="my-5 p-5 border">
                            <div className="section-header">
                              <h4 className="section-title display-4 font-weight-bold">#4</h4>
                            </div>
                            <div className="section-content">
                              <p>50% of support tickets are of investors requesting the status of their investment.</p>
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
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section>
                    <div className="section-header col-11 col-lg-8 mx-auto">
                      <h1 className="display-4 mb-4">The Design Process</h1>
                      <p>The design vision and plan was to create a simple and intuitive experience for investors, from creating their first investment to managing a portfolio of investments. Investor Accounts are an integral part of the entire product, however, they are not being used essentially. To make Investor Accounts more clear, we must re-think the entire structure of the platform and design them as a fundamental part of the user's experience. This would take several deployment phases to achieve our final results.</p>
                    </div> 
                    <div className="section-content mt-7 text-center mt-5">
                      <img className="design-process-img" src={DesignProcess} alt="design-process" />
                    </div> 
                  </section>
                  <section className="my-5">
                    <div className="section-header my-7 col-11 col-lg-8 mx-auto">
                      <h2 className="font-weight-normal mb-4">Defining the different investor account types and their compliance requirements.</h2>
                      <p>Investor Accounts describe who owns the investments made on the platform. User's can invest on behalf of several account types, personal, joint, business entity, or trust entity. Each account type has different KYC (Know Your Customer) laws, requiring the user to input a lot of information. I needed to understand these requirements to think creatively about the information architecture and user flow.</p>
                    </div> 
                    <div className="section-content mt-7 text-center">
                      <img className="accounts-img" src={AccountTypes} alt="accounts" />
                    </div>
                  </section>
                  <section className="my-5">
                    <div className="section-header my-7 col-11 col-lg-8 mx-auto">
                      <h2 className="font-weight-normal mb-4">Laying out the investor account information architecture.</h2>
                      <p>Investor Accounts were previously hidden in sub-navigation of the settings page, making them hard to find. Investor Accounts hold investments, have associated payment methods, as well as statements & tax documents. Because investments change in value over time and account information needs to be maintained, investors should be able to view the performance of their account, check account statements, and make edits to their account details. This makes Investor Accounts an integral aspect of the product. Through several AI iteration, the team came to a consensus and decided to bring "Accounts" to the primary navigation.</p>
                    </div> 
                    <div className="section-content mt-7 text-center">
                      <img className="accounts-img" src={AI} alt="accounts" />
                    </div>
                  </section>
                  <section className="my-5">
                    <div className="section-header my-7 col-11 col-lg-8 mx-auto">
                      <h2 className="font-weight-normal mb-4">Identifying compliance touchpoints through user flow charts.</h2>
                      <p>We want to make startup investing easy and frictionless. The user shouldn't have to think about the complicated compliance review process when trying to back a company they love. That is why after several user flow iterations the team decided on a version that has the user simply select their Investor Account type and confirm their investment. Investors will have a chance to complete and verify their Investor Account any time before the fundraising campaign closes through their "Investment Follow-ups" page.</p>
                    </div> 
                    <div className="section-content my-7">
                      <img className="invest-process-img" src={InvestFlow} alt="invest-process" />
                    </div>
                  </section>
                  <section className="my-5">
                    <div className="section-header my-7 col-11 col-lg-8 mx-auto">
                      <h2 className="font-weight-normal mb-4">Defining The Project's Scope</h2>
                      <p>After developing the AI and wireframing each page, the PM and I determined a list of features to build. Because the project was big and had many dependencies, we would need to break up the build in phases.</p>
                    </div>
                    <div className="section-content mt-5 col-12 col-lg-9 mx-auto">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <section className="mb-5 p-5 bg-white border">
                            <div className="section-header">
                              <h3 className="section-title font-weight-normal text-left">Phase One</h3>
                            </div>
                            <div className="section-content mt-5">
                              <ul className="list-unstyled">
                                <li>Primary Navigation</li>
                                <li>Primary Nav Dropdowns</li>
                                <li>Account Layout</li>
                                <li>Transfer old pages to account layout</li>
                              </ul>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6">
                          <section className="mb-5 p-5 bg-white border">
                            <div className="section-header">
                              <h3 className="section-title font-weight-normal text-left">Phase Two</h3>
                            </div>
                            <div className="section-content mt-5">
                              <ul className="list-unstyled">
                                <li>Account Details Page</li>
                                <li>Personal, Company, Trust Account CIP Feedback</li>
                                <li>Account Activity Page</li>
                                <li>Withdraw & Deposit</li>
                              </ul>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6">
                          <section className="mb-5 p-5 bg-white border">
                            <div className="section-header">
                              <h3 className="section-title font-weight-normal text-left">Phase Two</h3>
                            </div>
                            <div className="section-content mt-5">
                              <ul className="list-unstyled">
                                <li>Portfolio Clean Up V1</li>
                                <li>Funding Methods Page</li>
                                <li>Invitation to Join Setup</li>
                                <li>User Settings</li>
                              </ul>
                            </div>
                          </section>
                        </div>
                        <div className="col-12 col-md-6">
                          <section className="mb-5 p-5 bg-white border">
                            <div className="section-header">
                              <h3 className="section-title font-weight-normal text-left">Phase Four-Six</h3>
                            </div>
                            <div className="section-content mt-5">
                              <ul className="list-unstyled">
                                <li>Portfolio Page V2</li>
                                <li>Funded Company Profile Page</li>
                                <li>Link old Funding Methods</li>
                                <li>Statement & Tax Documents</li>
                                <li>Associated Auto Invest</li>
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
                  <section className="mb-7">
                    <div className="section-header col-11 col-lg-8 mx-auto">
                      <h1 className="display-4 mb-4">Ideating On Account Navigation</h1>
                      <p>During the ideation phase, I created wireframes to prototype our AI and navigation to Investor Accounts. Some of the options included a dedicated Accounts page and a top navigation dropdown list of accounts. Based on team consensus we ultimately decided that the Accounts page was redundant, and the top navigation dropdown would cut down our click-through rate and be intuitive to the user.</p>
                    </div>
                    <div className="section-content my-7">
                      <div className="row">
                        <div className="col-12">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Accounts Page</p>
                            <img className="homepage-wire-img box-shadow" src={AccountNavEight} alt="homepage" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="section-content mt-7">
                      <div className="row">
                        <div className="col-12 col-md-4">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Top Nav Dropdown Accounts V1</p>
                            <img className="homepage-wire-img box-shadow" src={AccountNavFive} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Top Nav Dropdown Accounts V2</p>
                            <img className="homepage-wire-img box-shadow" src={AccountNavSix} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Top Nav Dropdown Accounts V2</p>
                            <img className="homepage-wire-img box-shadow" src={AccountNavSeven} alt="homepage" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="section-content my-7">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Account Page Navigation V1</p>
                            <img className="homepage-wire-img box-shadow" src={AccountNavOne} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Account Page Navigation V2</p>
                            <img className="homepage-wire-img box-shadow" src={AccountNavTwo} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Account Page Navigation V3</p>
                            <img className="homepage-wire-img box-shadow" src={AccountNavThree} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Account Page Navigation V4</p>
                            <img className="homepage-wire-img box-shadow" src={AccountNavFour} alt="homepage" />
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
                  <section className="mb-7">
                    <div className="section-header col-11 col-lg-8 mx-auto">
                      <h1 className="display-4 mb-4">Exploring The Account Layout</h1>
                      <p>I explored different layout types to discuss contrast options with our stakeholders. I created options that were high contrast, low contrast, two-column layouts, and single-column layouts. Through user interviews, we found that the single column option was more intuitive and that the low contrast option aligned more similarly to our brand's aesthetic.</p>
                    </div> 
                    <div className="section-content my-7">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">High Contrast Header | Boxed | Two Column</p>
                            <img className="homepage-wire-img box-shadow" src={AccountOne} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Low Contrast Page Content | Boxed | Two Column</p>
                            <img className="homepage-wire-img box-shadow" src={AccountTwo} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Low Contrast | Single Column</p>
                            <img className="homepage-wire-img box-shadow" src={AccountThree} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Low Contrast | Boxed | Two Column</p>
                            <img className="homepage-wire-img box-shadow" src={AccountFour} alt="homepage" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="my-5">
                    <div className="section-header my-7 col-11 col-lg-8 mx-auto">
                      <h2 className="font-weight-normal mb-4">Mocking up the portfolio page.</h2>
                      <p>While designing the portfolio page, I interviewed experts in our investment team and reviewed customer support reports. This helped me understand what data investors will need to get an accurate read of there portfolio's performance.</p>
                    </div> 
                    <div className="section-content my-7">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Valuation Over Time</p>
                            <img className="homepage-wire-img box-shadow" src={PortfolioOne} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Diversification</p>
                            <img className="homepage-wire-img box-shadow" src={PortfolioTwo} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Performance Comparasent</p>
                            <img className="homepage-wire-img box-shadow" src={PortfolioThree} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Account Investment/Balance Activity</p>
                            <img className="homepage-wire-img box-shadow" src={PortfolioFour} alt="homepage" />
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
          <div className="container pt-8 px-4 px-lg-8">
            <div className="section-content">
              <div className="row">
                <div className="col-12">
                  <section>
                    <div className="section-header col-11 col-lg-8 mx-auto">
                      <h1 className="display-4 mb-4">The Visual Design</h1>
                      <p>When thinking about the visual design, I needed to come up with a look that appeals to a variety of users, from experienced investors to newbies. This led me to think about a design that is simple and inviting, not intimidating or condescending. I chose soft, yet vibrant blues and greens to promote trust, traction, and youthfulness. I took a minimalist design approach by removing unnecessary information and decoration, helping the user focus on what's happening in the moment.</p>
                    </div> 
                    <div className="section-content mt-7 text-center">
                      <div className="row">
                        <div className="col-11 mx-auto">
                          <div className="img-wrapper mb-7">
                            <img className="homepage-wire-img" src={ColorType} alt="homepage" />
                          </div>
                        </div>
                      </div>
                      <div className="row pl-4">
                        <div className="col-12 col-md-6 mx-auto">
                          <div className="img-wrapper mb-7 mb-md-5 text-md-center">
                            <img className="homepage-wire-img" src={SanSerif} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 mx-auto">
                          <div className="img-wrapper mb-7 mb-md-5 text-md-center">
                            <img className="homepage-wire-img" src={Serif} alt="homepage" />
                          </div>
                        </div>
                      </div>
                    </div> 
                  </section>
                  <hr/>
                  <section className="my-5">
                    <div className="section-header my-7 col-11 col-lg-8 mx-auto">
                      <h2 className="font-weight-normal mb-4">Investor Account: Portfolio</h2>
                      <p>The portfolio page helps investors analyze the performance of their accounts. Investors can see a complete overview, IRR stats, allocation of assets, and of course holdings. When navigating to a particular holding, the user can see the company's investor report which includes the company's current valuation, fundraising history, company highlights, and press. I used color as a way of communicating what’s happening and what needs attention.</p>
                    </div> 
                    <div className="section-content">
                      <div className="img-wrapper mb-7">
                        <p className="lead text-secondary">Portfolio Page</p>
                        <img className="homepage-wire-img box-shadow" src={AccountFinalOne} alt="homepage" />
                      </div>
                      <div className="img-wrapper mb-7">
                        <p className="lead text-secondary">Holding: Investor Report</p>
                        <img className="homepage-wire-img box-shadow" src={AccountFinalTwo} alt="homepage" />
                      </div>
                    </div>
                  </section>
                  <section className="my-5">
                    <div className="section-header my-7 col-11 col-lg-8 mx-auto">
                      <h2 className="font-weight-normal mb-4">Investor Account: Account Activity</h2>
                      <p>The Account Activity page is a great addition to an account as it helping investors get a clear view of the status of their pending investments. Investors can track where their recent investment is within the compliance review process, confirm their investment has been funded, and when their investment will be closed upon and distributed to the company.</p>
                    </div> 
                    <div className="section-content">
                      <div className="img-wrapper mb-7">
                        <p className="lead text-secondary">Account Activity Page</p>
                        <img className="homepage-wire-img box-shadow" src={AccountFinalThree} alt="homepage" />
                      </div>
                    </div>
                  </section>
                  <section className="my-5">
                    <div className="section-header my-7 col-11 col-lg-8 mx-auto">
                      <h2 className="font-weight-normal mb-4">Investor Account: Account Details</h2>
                      <p>The Account Details page is an editable display of the user's account information. Investors can see the verification status of their account from the account summary snippet. If a particular item requires updated information, identified by our compliance team, that line item in the user's account information will be highlighted in red.</p>
                    </div> 
                    <div className="section-content">
                      <div className="img-wrapper mb-7">
                        <p className="lead text-secondary">Account Details Page</p>
                        <img className="homepage-wire-img box-shadow" src={AccountFinalFour} alt="homepage" />
                      </div>
                    </div>
                  </section>
                  <section className="my-5">
                    <div className="section-header my-7 col-11 col-lg-8 mx-auto">
                      <h2 className="font-weight-normal mb-4">Investor Account: Statements & Tax Docs</h2>
                      <p>The Statements & Tax Document page gives investors access to their important documents. The information is displayed in a simple and clean table with a downloadable feature.</p>
                    </div> 
                    <div className="section-content">
                      <div className="img-wrapper mb-7">
                        <p className="lead text-secondary">Documents Page</p>
                        <img className="homepage-wire-img box-shadow" src={AccountFinalFive} alt="homepage" />
                      </div>
                    </div>
                  </section>
                  <section className="my-5">
                    <div className="section-header my-7 col-11 col-lg-8 mx-auto">
                      <h2 className="font-weight-normal mb-4">Top Navigation</h2>
                      <p>Through several iterations of the top navigation, we landed on a simple and clear rendition that is free of bulky and interpretational icons. The link names are straight forward, communicates their function, and evokes a personal touch.</p>
                    </div> 
                    <div className="section-content">
                      <div className="row">
                        <div className="col-12 col-md-4">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Collapsed View</p>
                            <img className="homepage-wire-img box-shadow" src={AccountFinalNine} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Uncollapsed Accounts</p>
                            <img className="homepage-wire-img box-shadow" src={AccountFinalSeven} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Uncollapsed User Settings</p>
                            <img className="homepage-wire-img box-shadow" src={AccountFinalEight} alt="homepage" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="my-5">
                    <div className="section-header my-7 col-11 col-lg-8 mx-auto">
                      <h2 className="font-weight-normal mb-4">Tasks (Follow-Ups & Notifications)</h2>
                      <p>The Tasks pages were designed as a clean and clear compliance checklist. This helps the investor know what needs to be completed to pass compliance review and finalize an investment.</p>
                    </div> 
                    <div className="section-content">
                      <div className="img-wrapper mb-7">
                        <p className="lead text-secondary">Tasks Pages</p>
                        <img className="homepage-wire-img box-shadow" src={AccountFinalSix} alt="homepage" />
                      </div>
                    </div>
                  </section>
                  <section className="my-5">
                    <div className="section-header my-7 col-11 col-lg-8 mx-auto">
                      <h2 className="font-weight-normal mb-4">Mobile View</h2>
                      <p>The account page, along with the rest of the platform, has been designed responsively to mobile and reflects the aesthetic of the desktop by using white space to eliminate clutter. The page navigation is a horizontal scroll and the primary navigation slides in to view on click.</p>
                    </div> 
                    <div className="section-content">
                      <div className="row">
                        <div className="col-12 col-md-4">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Single-Page Pre-Qual Questionnaire</p>
                            <img className="homepage-wire-img box-shadow" src={AccountFinalThirteen} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Single-Question Pre-Qual Flow</p>
                            <img className="homepage-wire-img box-shadow" src={AccountFinalTwelve} alt="homepage" />
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="img-wrapper mb-5">
                            <p className="lead text-secondary">Single-Question Application Flow</p>
                            <img className="homepage-wire-img box-shadow" src={AccountFinalEleven} alt="homepage" />
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
                  <section className="mb-7">
                    <div className="section-header col-11 col-lg-8 mx-auto">
                      <h1 className="display-4 mb-4">Product Impact</h1>
                      <p>As a result of careful planning, prototyping, and developing, investors at SeedInvest can now analyze the performance of their account, track their investment activity, and manage their account details. Taking a holistic approach to this project ensured a complete and cohesive user experience. Because this was such a large project, we developed and deployed this project in phases, learned from user feedback, and made adjustments. To help support many of these features, several internal tools were also created, helping to increase the number of accounts verified in a week, decrease the number of account-related support tickets, and bring our NPS scores up to an applauding number.</p>
                    </div>                
                  </section>
                  <section>
                    <div className="section-content mt-7 text-center col-11 col-lg-10 mx-auto mb-7">
                      <div className="img-wrapper mb-5">
                        <img className="homepage-wire-img" src={Impact} alt="homepage" />
                      </div>
                    </div>
                  </section>
                  <section>
                    <div className="section-content mt-5 col-11 col-lg-8 mx-auto">
                      <div className="row">
                        <div className="col">
                          <div className="snippet">
                            <div className="snippet-header mb-5">
                              <div className="snippet-title count display-4 font-weight-bold">3x</div>
                              <p>Verification Per Week</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="snippet">
                            <div className="snippet-header mb-5">
                              <div className="snippet-title count display-4 font-weight-bold">42%</div>
                              <p>Fewer Account Tickets</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="snippet">
                            <div className="snippet-header mb-5">
                              <div className="snippet-title count display-4 font-weight-bold">23</div>
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
                  <section className="mb-7">
                    <div className="section-header mb-5 col-lg-8 mx-auto">
                      <h1 className="display-4 mb-4">Lessons Learned</h1>
                    </div>
                    <div className="section-content col-lg-8 mx-auto">
                      <div className="snippet mb-5">
                        <div className="snippet-header">
                          <h4 className="snippet-title">Careful planning pays off.</h4>
                        </div>
                        <div className="snippet-content">
                          <p>This was a huge project with lots of dependencies. It was a great exercise to take a large project and work with the PM and engineering team to break it up into realistic development phases based on scope.</p>
                        </div>
                      </div>
                      <div className="snippet mb-5">
                        <div className="snippet-header">
                          <h4 className="snippet-title">Don't be afraid to think holistically.</h4>
                        </div>
                        <div className="snippet-content">
                          <p>We often are faced with time constraints and limited resources, which sometimes leads us to pushing band-aid fixes and features that stand on their own. It was a great opportunity to consider the entire platform and how accounts impact the entire platform to create a consistent and connected user experience.</p>
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

export default WorkFour