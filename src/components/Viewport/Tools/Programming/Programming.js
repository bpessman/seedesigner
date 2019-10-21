import React from 'react'
import './Programming.css'

import AceEditor from 'react-ace'

import CustomSqlMode from './SeeScriptMode.js'
import 'brace/theme/github'

const seeScript = require('seescript')

export default class Programming extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    const customMode = new CustomSqlMode()
    //this.refs.aceEditor.editor.getSession().setMode(customMode)
  }

  handleChange(newValue) {
    console.log('change', newValue)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <center>
            <AceEditor
              mode="text"
              theme="github"
              name="programmingTextarea"
              onChange={this.handleChange}
              editorProps={{ $blockScrolling: true }}
            />

            {/* <textarea
              className="programmingTextarea"
              id="programmingTextarea"
              onChange={this.handleChange}
            /> */}
          </center>
        </form>
      </div>
    )
  }
}
