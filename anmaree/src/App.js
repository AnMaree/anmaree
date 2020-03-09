import React, { Component } from 'react';
import { Router, Link, Route, Switch, } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import createHistory from 'history/createBrowserHistory'
import MainNav from "./components/MainNav";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./NotFound";
import Work from "./work/Work";
import WorkOne from "./work/WorkOne";
import WorkTwo from "./work/WorkTwo";
import WorkThree from "./work/WorkThree";
import WorkFour from "./work/WorkFour";
import WorkFive from "./work/WorkFive";
import Studies from "./studies/Studies";
import Bio from "./bio/Bio";
import Resume from "./resume/Resume";
import logo from './logo.svg';
import codepen from './imgs/icons/codepen.png';
import dribble from './imgs/icons/dribbble.png';
import github from './imgs/icons/github.png';
import instagram from './imgs/icons/instagram.png';
import linkedin from './imgs/icons/linkedin.png';
import react from './imgs/icons/react.png';
import './css/App.css';
const history = createHistory()

let styles = {}

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={400} classNames='fade'>
              <div className="site" style={styles.fill}>
                <ScrollToTop>
                  <div className="site-nav">
                    <div className="container">
                      <div className="logo">
                        <Link to="/"><img src={logo} alt="Logo" /></Link>
                      </div>
                      <MainNav/>
                    </div>
                  </div>
                  <div className="site-content">
                    <div className="page">
                      <Switch location={location}>
                        <Route exact path="/" component={Work}/>
                        <Route exact path="/work/1" component={WorkOne}/>
                        <Route exact path="/work/2" component={WorkTwo}/>
                        <Route exact path="/work/3" component={WorkThree}/>
                        <Route exact path="/work/4" component={WorkFour}/>
                        <Route exact path="/work/5" component={WorkFive}/>
                        <Route path="/studies" component={Studies}/>
                        <Route path="/bio" component={Bio}/>
                        <Route path="/resume" component={Resume}/>
                        <Route component={NotFound}/>
                      </Switch>
                    </div>
                  </div>
                  <footer className="footer border-top py-8 text-center">
                    <h2>Let's Connect</h2>
                    <p>Feel free to reach out with questions or just to say 👋</p>
                    <p><a href="mailto:create@anmaree.com">create@anmaree.com</a></p>
                    <ul className="list-inline pt-5">
                      <li className="list-inline-item">
                        <a className="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/anmaree/"><img src={linkedin} alt="linkedin" /></a>
                      </li>
                      <li className="list-inline-item">
                        <a className="social-icon text-xs-center" target="_blank" href="https://dribbble.com/anmaree"><img src={dribble} alt="dribble" /></a>
                      </li>
                      <li className="list-inline-item">
                        <a className="social-icon text-xs-center" target="_blank" href="https://github.com/anmaree"><img src={github} alt="github" /></a>
                      </li>
                      <li className="list-inline-item">
                        <a className="social-icon text-xs-center" target="_blank" href="https://codepen.io/anmaree"><img src={codepen} alt="codepen" /></a>
                      </li>
                    </ul>
                  </footer>
                  <footer className="border-top footer bg-light py-4 text-center">
                    <h5>Designed and coded with <img className="react-icon" src={react} alt="react" /> by AnMaree.</h5>
                  </footer>
                </ScrollToTop>
              </div>
            </CSSTransition>
          </TransitionGroup>
        )}/>
      </Router>
    );  
  }
}

export default App;
