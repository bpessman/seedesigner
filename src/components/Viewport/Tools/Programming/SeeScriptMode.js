import 'brace/mode/java'

export class CustomHighlightRules extends window.ace.acequire(
  'ace/mode/text_highlight_rules'
).TextHighlightRules {
  constructor() {
    super()
    this.$rules = {
      start: [
        {
          token: 'comment',
          regex: '#.*$',
        },
        {
          token: 'string',
          regex: '".*?"',
        },
      ],
    }
  }
}

export default class CustomSqlMode extends window.ace.acequire('ace/mode/java')
  .Mode {
  constructor() {
    super()
    this.HighlightRules = CustomHighlightRules
  }
}
