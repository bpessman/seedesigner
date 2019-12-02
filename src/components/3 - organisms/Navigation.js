import React from 'react'
import './Navigation.css'

import PlayButton from '../1 - atoms/IconButtons/PlayButton'
import SaveButton from '../1 - atoms/IconButtons/SaveButton'
import GenerateButton from '../1 - atoms/IconButtons/GenerateButton'
import DocumentationButton from '../1 - atoms/IconButtons/DocumentationButton'

const seeScript = require('seescript')

export default class Viewport extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      dragging: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this)
  }

  handleSubmit () {
    const parent = document.getElementById('canvas')
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }

    seeScript.runSeeScript(
      document.getElementById('programmingTextarea').childNodes[2].childNodes[0]
        .childNodes[2].innerText
    )
  }

  handleSubmitEdit () {
    var canvas = document.getElementById('canvas')

    for (let i = 0; i < canvas.childNodes.length; i++) {
      let childNode = canvas.childNodes[i]
      childNode.setAttribute('class', 'draggable')

      childNode.onmousedown = e => {
        this.setState({ dragging: e })
      }
      childNode.onmousemove = e => {
        // if (dragging) {
        if (this.state.dragging !== '') {
          // console.log(this.state.dragging)
          var CTM = document.getElementById('canvas').getScreenCTM()
          var fixedX = (this.state.dragging.clientX - CTM.e) / CTM.a - 50
          var fixedY = (this.state.dragging.clientY - CTM.f) / CTM.d - 50

          this.state.dragging.target.setAttribute('x', fixedX)
          this.state.dragging.target.setAttribute('y', fixedY)
        }
        // }
      }
      childNode.onmouseup = e => {
        this.setState({ dragging: '' })
      }
    }

    console.log(this.state.dragging)
  }

  render () {
    return (
      <div className='navigation'>
        <PlayButton onClick={this.handleSubmit} />
        <SaveButton onClick={this.handleSubmitEdit} />
        <GenerateButton onClick={this.handleSubmit} />
        <DocumentationButton onClick={this.handleSubmit} />
      </div>
    )
  }
}
