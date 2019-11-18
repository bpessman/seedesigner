import React from 'react'
import '../Button/Button.css'

import SaveIcon from '@material-ui/icons/Save';
export default class SaveButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      onClick: this.props.onClick
    }
  }
  render() {
    const { onClick } = this.state

    return <button onClick={onClick}><SaveIcon /></button>
  }
}
