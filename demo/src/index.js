import React, { Component } from 'react'
import { render } from 'react-dom'

import Guidde from '../../src'

class Demo extends Component {
  render() {
    return (
      <div>
        <Guidde account="guidde" />
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'))
