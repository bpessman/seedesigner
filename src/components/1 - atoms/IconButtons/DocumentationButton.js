import React from 'react'
import '../Button/Button.css'

import DocumentationButton from '@material-ui/icons/FindInPage';
export default class SaveButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      onClick: this.props.onClick
    }
  }
  render() {
    const { onClick } = this.state

    return <button onClick={onClick}><DocumentationButton /></button>
  }
}
