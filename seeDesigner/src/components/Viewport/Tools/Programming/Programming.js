import React from 'react'
import './Programming.css'

const seeScript = require('seescript')

export default class Programming extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    seeScript.runSeeScript(document.getElementById('programmingTextarea').value)
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
      <div>
        <button onClick={this.handleSubmit}>Update</button>
        <form onSubmit={this.handleSubmit}>
          <center>
            <textarea
              className="programmingTextarea"
              id="programmingTextarea"
              onChange={this.handleChange}
            />
          </center>
        </form>
      </div>
    )
  }
}
