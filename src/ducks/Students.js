
import { mod, mac, createReducer} from './utils'
import {addHOR} from './hors'

const t = mod('students')
const ADD_STUDENTS = t('add')

export const addStudents = (roomId, {value}) => {
    const student = {
        id: Math.random().toString(36),
        text: value.name,
        roomId
    }
    console.log('STUDENTS ------>', student);
    return mac(ADD_STUDENTS, 'payload')(student)
}
const initialState = {
    data: [{id: 'yyyyy', text: 'STUDENT DE PRUEBA'},
    {id: 'yyyyy', text: 'STUDENT DE PRUEBA 2 '},
    {id: 'yyyyy', text: 'STUDENT DE PRUEBA 3'}],
}

const addReducer = createReducer(initialState, addHOR({ADD: ADD_STUDENTS}))

export default addReducer