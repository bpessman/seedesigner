import React from 'react'
import '../Button/Button.css'

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

export default class PlayButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      onClick: this.props.onClick
    }
  }
  render() {
    const { onClick } = this.state

    return <button onClick={onClick}><PlayArrowIcon /></button>
  }
}
