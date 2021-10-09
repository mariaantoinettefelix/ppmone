/**
* Stepper.js
*/

import React, { Component } from 'react';
import _ from 'underscore';

class Stepper extends Component {
  constructor(props) {
    super(props);
  }

  getActiveStep = () => {
    const { activeKey, data, activeValue } = this.props;
    let result = _.find(data, d => {
      return d[activeKey] == activeValue;
    })

    if (result) return result.content;
    return null;
  }

  render() {

    return (
      <div>
        {this.getActiveStep()}
      </div>
    );
  }
}

Stepper.propTypes = {
  // props definition
}

Stepper.defaultProps = {
  // default props
}


export default Stepper;
