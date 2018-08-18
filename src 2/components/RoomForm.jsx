import React from 'react'
import { reduxForm } from 'redux-form'
import { roomFormFields, roomFormValidate } from './fields'
import FieldsGenerator from './FieldsGenerator'

export class RoomForm extends React.Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <FieldsGenerator fields={roomFormFields} />
        <input type='submit' value='enviar' />
      </form>
    )
  }
}

export default reduxForm({
  form: 'roomForm',
  validate: roomFormValidate,
})(RoomForm)