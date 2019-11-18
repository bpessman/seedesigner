import React from 'react'
import './Tools.css'

import SquareIcon from '@material-ui/icons/CropDin';
import CircleIcon from '@material-ui/icons/RadioButtonUnchecked';
import TriangleIcon from '@material-ui/icons/ChangeHistory';
import LineIcon from '@material-ui/icons/Remove';
import CropIcon from '@material-ui/icons/Crop';
import MoveIcon from '@material-ui/icons/OpenWith';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import LayersIcon from '@material-ui/icons/Layers';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
export default class Tools extends React.Component {
  render() {
    return (
      <div id="tools">
          <SquareIcon className="toolButton" />
          <CircleIcon className="toolButton" />
          <TriangleIcon className="toolButton" />
          <LineIcon className="toolButton" />
          <MoveIcon className="toolButton" />  
          <CropIcon className="toolButton" />   
          <DeleteIcon className="toolButton" />    
          <LayersIcon className="toolButton" />  
          <ZoomInIcon className="toolButton" />  
          <ZoomOutIcon className="toolButton" />     
      </div>
    )
  }
}
