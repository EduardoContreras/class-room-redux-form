import React from 'react'
import { Field } from 'redux-form'

export default class FieldGenerator extends React.Component {
  render() {
    const { fields } = this.props
    return (
      fields.map((x, i) =>
        <Field key={i} {...x} />)
    )
  }
}