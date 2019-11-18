import React from 'react'
import './Button.css'

export default class Button extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: this.props.text,
      onClick: this.props.onClick
    }
  }
  render() {
    const { text, onClick } = this.state

    return <button onClick={onClick}>{text}</button>
  }
}
