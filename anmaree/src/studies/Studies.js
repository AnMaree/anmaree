import React, { Component } from 'react'

class Tabs extends React.Component {
  constructor(props) {
    super();
    this.state = {
      active: 0
    }
  }
  
  select = (i) => {
    let _this = this;
    return function() {
      _this.setState({
        active: i
      });
    }
  }
  
  renderTabs = () => {
    return React.Children.map(this.props.children, (item, i) => {
      if (i%2 === 0) {
        let active = this.state.active === i ? 'active' : '';
        return <a onClick={this.select(i)} className={`${active} tab`}>{item}</a>;
      }
    });
  }
  
  renderContent() {
    return React.Children.map(this.props.children, (item, i) => {
      if (i-1 === this.state.active) {
        return <div className='code-display-content'>{item}</div>;
      } else {
        return;
      }
    });
  }
  
  render() {
    return (
      <div className="tabs">
        {this.renderTabs()}
        {this.renderContent()}
      </div>
    );
  }
}

class Studies extends Component {
  render() {
    return (
      <section>
        <div className="container my-16">
          <div className="section-header border-bottom mb-5">
            <h2 className="display-4 mb-4">Code Studies</h2>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-6 my-4">
              <div className="code-display-wrapper">
                <div className="code-display-inner">
                  <Tabs>
                    HTML
                    <span>html</span>
                    CSS
                    <span>css</span>
                    JS
                    <span>js</span>
                  </Tabs>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 mt-5">
              <div className="px-5 mt-5 bg-light border text-center overflow-hidden">
                <h2 className="display-5 py-16">Display</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-16">
          <div className="row">
            <div className="col-sm-12 col-lg-6 my-4">
              <div className="code-display-wrapper">
                <div className="code-display-inner">
                  <Tabs>
                    HTML
                    <span>html</span>
                    CSS
                    <span>css</span>
                    JS
                    <span>js</span>
                  </Tabs>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 mt-5">
              <div className="px-5 mt-5 bg-light border text-center overflow-hidden">
                <h2 className="display-5 py-16">Display</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-16">
          <div className="row">
            <div className="col-sm-12 col-lg-6 my-4">
              <div className="code-display-wrapper">
                <div className="code-display-inner">
                  <Tabs>
                    HTML
                    <span>html</span>
                    CSS
                    <span>css</span>
                    JS
                    <span>js</span>
                  </Tabs>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 mt-5">
              <div className="px-5 mt-5 bg-light border text-center overflow-hidden">
                <h2 className="display-5 py-16">Display</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-16">
          <div className="row">
            <div className="col-sm-12 col-lg-6 my-4">
              <div className="code-display-wrapper">
                <div className="code-display-inner">
                  <Tabs>
                    HTML
                    <span>html</span>
                    CSS
                    <span>css</span>
                    JS
                    <span>js</span>
                  </Tabs>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 mt-5">
              <div className="px-5 mt-5 bg-light border text-center overflow-hidden">
                <h2 className="display-5 py-16">Display</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Studies