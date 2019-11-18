import React from 'react'
import '../Button/Button.css'

import CodeIcon from '@material-ui/icons/Code';

export default class GenerateButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      onClick: this.props.onClick
    }
  }
  render() {
    const { onClick } = this.state

    return <button onClick={onClick}><CodeIcon /></button>
  }
}
