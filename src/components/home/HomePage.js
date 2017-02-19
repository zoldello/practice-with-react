import React from 'react';
import {Link} from 'react-router';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
          <h1>Pluralsight Adminstration</h1>
          <p>React, Redux and Reat Router in ES6 for something</p>
          <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}
