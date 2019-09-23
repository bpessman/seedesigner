import React from 'react'
import './Programming.css'

export default class Programming extends React.Component {
  render() {
    return (
      <div>
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
