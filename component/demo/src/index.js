import React, {Component} from 'react'
import {render} from 'react-dom'
import CV from '../../src'

class Demo extends Component {
  render() {
    var el = "divEl"
    return <div id={el}>
      <CV divId={el} print={true}/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
