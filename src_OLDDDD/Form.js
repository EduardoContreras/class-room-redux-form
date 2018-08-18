import React, { Component } from 'react'

export const validate = ({ name, lastname, email }) => {
  const errors = []
  if (!name) {
    errors.push('Nombre es requerido')
  }
  if (!lastname) {
    errors.push('Apellido es requerido')
  }
  if (!email) {
    errors.push('Email es requerido')
  }

  return errors
}

export default class Form extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange('message')} type='text' placeholder='Mensaje' />
        <button type='submit'>Enviar</button>
      </form>
    )
  }
}