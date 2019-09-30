import React from 'react'
import './Viewport.css'
import Canvas from './Canvas/Canvas'
import Tools from './Tools/Tools'

export default class Viewport extends React.Component {
  render() {
    return (
      <div>
        <div className="tools">
          <Tools />
        </div>
        <div className="canvas">
          <Canvas />
        </div>
      </div>
    )
  }
}
