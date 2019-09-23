import React from 'react'
import './Canvas.css'

export default class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dragging: false,
    }
  }

  componentDidMount() {
    var circle = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle'
    )

    var svg = document.getElementById('canvas')
    var size = svg.getBoundingClientRect()

    circle.setAttribute('id', 'one')
    circle.setAttribute('class', 'svgCircle draggable')
    circle.setAttribute('cx', size.width / 2)
    circle.setAttribute('cy', size.height / 2)
    circle.setAttribute('r', '100px')
    circle.setAttribute('fill', 'rgb(' + 100 + ',' + 100 + ',' + 100 + ')')

    circle.onmousedown = e => {
      this.setState({ dragging: true })
    }
    circle.onmousemove = e => {
      if (this.state.dragging) {
        var CTM = document.getElementById('canvas').getScreenCTM()
        var fixedX = (e.clientX - CTM.e) / CTM.a
        var fixedY = (e.clientY - CTM.f) / CTM.d

        //var x = parseFloat(e.target.getAttribute('cx'))

        e.target.setAttribute('cx', fixedX)
        e.target.setAttribute('cy', fixedY)
      }
    }
    circle.onmouseup = e => {
      this.setState({ dragging: false })
    }

    document.getElementById('canvas').appendChild(circle)

    var circle = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle'
    )
    circle.setAttribute('id', 'one')
    circle.setAttribute('class', 'svgCircle draggable')
    circle.setAttribute('cx', size.width / 2 + 50)
    circle.setAttribute('cy', size.height / 2 + 50)
    circle.setAttribute('r', '100px')
    circle.setAttribute('fill', 'rgb(' + 100 + ',' + 100 + ',' + 100 + ')')

    circle.onmousedown = e => {
      this.setState({ dragging: true })
    }
    circle.onmousemove = e => {
      if (this.state.dragging) {
        var CTM = document.getElementById('canvas').getScreenCTM()
        var fixedX = (e.clientX - CTM.e) / CTM.a
        var fixedY = (e.clientY - CTM.f) / CTM.d

        //var x = parseFloat(e.target.getAttribute('cx'))

        e.target.setAttribute('cx', fixedX)
        e.target.setAttribute('cy', fixedY)
      }
    }
    circle.onmouseup = e => {
      this.setState({ dragging: false })
    }

    document.getElementById('canvas').appendChild(circle)
  }

  render() {
    return (
      <div>
        <svg id="canvas"></svg>
      </div>
    )
  }
}
