import React from 'react'
import './Programming.css'

import AceEditor from 'react-ace'
import 'brace/theme/github'

export default class Programming extends React.Component {
  render () {
    return (
      <AceEditor
        mode='java'
        theme='github'
        name='programmingTextarea'
        editorProps={{ $blockScrolling: true }}
      />
    )
  }
}
