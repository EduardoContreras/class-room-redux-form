import React from 'react'
import { reduxForm } from 'redux-form'
import { userFormFields, userFormValidate } from './fields'
import FieldsGenerator from './FieldsGenerator'

export class StudentForm extends React.Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <FieldsGenerator fields={userFormFields} />
        <input type='submit' value='enviar' />
      </form>
    )
  }
}

export default reduxForm({
  form: 'studentForm',
  validate: userFormValidate,
})(StudentForm)