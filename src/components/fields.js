import { Input } from './Elements'

export const userFormFields = [
  { name: 'name', component: Input, type: 'text', placeholder: '' }
]

export const userFormValidate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Campo es obligatorio'
  }

  return errors
}