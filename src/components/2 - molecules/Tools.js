import React from 'react'
import './Tools.css'

import SquareIcon from '@material-ui/icons/CropDin'
import CircleIcon from '@material-ui/icons/RadioButtonUnchecked'
import TriangleIcon from '@material-ui/icons/ChangeHistory'
import LineIcon from '@material-ui/icons/Remove'
import CropIcon from '@material-ui/icons/Crop'
import MoveIcon from '@material-ui/icons/OpenWith'
import DeleteIcon from '@material-ui/icons/DeleteOutline'
import LayersIcon from '@material-ui/icons/Layers'
import ZoomInIcon from '@material-ui/icons/ZoomIn'
import ZoomOutIcon from '@material-ui/icons/ZoomOut'

export default class Tools extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      programming: props.programming
    }

    this.handleAddRectangle = this.handleAddRectangle.bind(this)
    this.handleAddCircle = this.handleAddCircle.bind(this)
  }

  handleAddRectangle () {
    var svg = document.getElementById('canvas')
    var size = svg.getBoundingClientRect()

    var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    rect.setAttribute('id', new Date())
    rect.setAttribute('x', 0 + size.width / 2 - 100 / 2)
    rect.setAttribute('y', 0 + size.height / 2 - 100 / 2)
    rect.setAttribute('width', 100)
    rect.setAttribute('height', 100)
    rect.setAttribute('fill', 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')')

    document.getElementById('canvas').appendChild(rect)
  }

  handleAddCircle () {
    var svg = document.getElementById('canvas')
    var size = svg.getBoundingClientRect()

    var rect = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    rect.setAttribute('id', new Date())
    rect.setAttribute('x', 0 + size.width / 2 - 100 / 2)
    rect.setAttribute('y', 0 + size.height / 2 - 100 / 2)
    rect.setAttribute('r', 100)
    rect.setAttribute('fill', 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')')

    document.getElementById('canvas').appendChild(rect)
  }

  render () {
    return (
      <div id='tools'>
        <SquareIcon onClick={this.handleAddRectangle} className='toolButton' />
        <CircleIcon onClick={this.handleAddCircle} className='toolButton' />
        <TriangleIcon className='toolButton' />
        <LineIcon className='toolButton' />
        <MoveIcon className='toolButton' />
        <CropIcon className='toolButton' />
        <DeleteIcon className='toolButton' />
        <LayersIcon className='toolButton' />
        <ZoomInIcon className='toolButton' />
        <ZoomOutIcon className='toolButton' />
      </div>
    )
  }
}
