import { mod, mac, createReducer, reduceReducers } from './utils'
import { addHOR, selectHOR } from './hors'

const t = mod('category')

const SELECT = t('select')
const ADD = t('add')
const DEL = t('del')

export const selectCategory = mac(SELECT, 'payload')
export const addCategory = mac(ADD, 'payload')
export const delCategory = mac(DEL, 'payload')

const initialState = {
  data: [
    { id: 1, name: 'Defecto', selected: true },
    { id: 2, name: 'Deportes', selected: false },
    { id: 3, name: 'Tecnología', selected: false },
  ],
}
const addReducer = createReducer(initialState, addHOR({ ADD }))
const selectReducer = createReducer(initialState, selectHOR({ SELECT }))

export default reduceReducers(addReducer, selectReducer)