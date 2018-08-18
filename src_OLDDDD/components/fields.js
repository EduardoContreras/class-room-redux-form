import { Input } from './Elements'

export const userFormFields = [
  { name: 'name', component: Input, type: 'text', placeholder: 'Nombre' },
  { name: 'lastname', component: Input, type: 'text', placeholder: 'Apellido' },
  { name: 'age', component: Input, type: 'number', placeholder: 'Edad' },
]

export const userFormValidate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'El nombre es obligatorio'
  }

  if (!values.lastname) {
    errors.lastname = 'El apellido es obligatorio'
  }

  return errors
}