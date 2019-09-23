import React from 'react'
import './Navigation.css'

export default class Viewport extends React.Component {
  render() {
    return (
      <div className="navigation">
        <ul>
          <li>
            <a href="">Save</a>
          </li>
          <li>
            <a href="">Load</a>
          </li>
          <li>
            <a href="">Edit</a>
          </li>
          <li>
            <a href="">Tools</a>
          </li>
          <li>
            <a href="">Views</a>
          </li>
        </ul>
      </div>
    )
  }
}
