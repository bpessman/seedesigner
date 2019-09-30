import React from 'react'
import './Navigation.css'

const seeScript = require('seescript')

export default class Viewport extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    const parent = document.getElementById('canvas')
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }

    seeScript.runSeeScript(document.getElementById('programmingTextarea').value)
  }

  render() {
    return (
      <div className="navigation">
        <button onClick={this.handleSubmit}>Play</button>
      </div>
    )
  }
}
