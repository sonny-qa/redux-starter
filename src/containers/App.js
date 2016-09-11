import React, { PropTypes } from 'react';
import { connect, pushState } from 'react-redux';
import { Link } from 'react-router';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Hero, Page, Navbar, Section, NavItem, DropdownToggle, DropdownMenu, HorizontalSplit } from 'neal-react'
import '../assets/stylesheets/base.scss';
import image from '../assets/img/hero-bg-01.jpg'


const brandName = "SamplePage";
  const brand = <span>{brandName}</span>;


const App = React.createClass({
  displayName: 'App',

  

  render() {
    return (
  <Page>
            <Navbar brand={brand}>
        <NavItem><Link to="Home" className="nav-link">Home</Link></NavItem>
        <NavItem dropdown={true}>
          <DropdownToggle>Github</DropdownToggle>
          <DropdownMenu>
            <a href="https://github.com/dennybritz/neal-react" className="dropdown-item" target="_blank">
              Neal React
            </a>
            <a href="https://github.com/dennybritz/neal-sample" className="dropdown-item" target="_blank">
              Sample Page
            </a>
          </DropdownMenu>
        </NavItem>
      </Navbar>
      <Hero backgroundImage={image} className="text-xs-center"> <h1>test</h1> </Hero>
      <Section heading="Hello!">
        <HorizontalSplit padding="md"> some text </HorizontalSplit>
      </Section>
      more text
    </Page>


     

        
     
    );
  },

  propTypes: {
    children: PropTypes.object.isRequired
  }
});

function select(state) {
  return state;
}

export default connect(select, { pushState })(App);
