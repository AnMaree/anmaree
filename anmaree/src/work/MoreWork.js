import React, { Component } from 'react'
import { Link } from "react-router-dom";
import workCoverOneSmall from '../imgs/work-one-cover-small.jpg';
import workCoverTwoSmall from '../imgs/work-two-cover-small.jpg';
import workCoverThreeSmall from '../imgs/work-three-cover-small.jpg';
import workCoverFourSmall from '../imgs/work-four-cover-small.jpg';
import workCoverFiveSmall from '../imgs/work-five-cover-small.jpg';

class MoreWork extends Component {
  render() {
    return (
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
                <Link to="/work/2">
                  <img className="work-img" src={workCoverTwoSmall} alt="work" />
                </Link>
              </div>
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
    )
  }
}

export default MoreWork