import React, { PropTypes } from 'react';
import { connect, pushState } from 'react-redux';
import { Link } from 'react-router';
import { Button, ButtonGroup } from 'react-bootstrap';

import '../assets/stylesheets/base.scss';

const App = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div>
        Welcwome!
        {' '}
        <Link to='/list'>List Maker</Link>
        {' '}
        <Link to='/about'>About</Link>

        <div>
                    <ButtonGroup>
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </div>
        <br /><br />

        {this.props.children}
      </div>
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
