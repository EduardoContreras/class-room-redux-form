
import { mod, mac, createReducer} from './utils'
import {addHOR} from './hors'

const t = mod('rooms')
const ADD_ROOMS = t('add')

export const addRooms = value => {
    console.log('ROOMs ------>', value);
    return mac(ADD_ROOMS, 'payload')({
        id: Math.random().toString(36),
        text: value.name,
        selected: true
    })
}
const initialState = {
    data: [{id: 'xxxxx', text: 'SALA DE PRUEBA', selected: false}],
}

const addReducer = createReducer(initialState, addHOR({ADD: ADD_ROOMS}))

export default addReducer