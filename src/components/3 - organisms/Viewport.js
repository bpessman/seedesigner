import React from 'react'
import './Viewport.css'
import Canvas from '../2 - molecules/Canvas'
import Programming from '../2 - molecules/Programming'

export default class Viewport extends React.Component {
  render() {
    return (
      <div>
        <div className="programming">
          <Programming />
        </div>
        <div className="canvas">
          <Canvas />
        </div>
      </div>
    )
  }
}
