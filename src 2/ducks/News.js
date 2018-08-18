import { mod, mac, createReducer, reduceReducer} from './utils'
import {addHOR, selectHOR} from './hors'

const t = mod('news')
const ADD_NEWS = t('add')

export const addNews = (categoryId, { value }) =>
    mac(ADD_NEWS, 'payload')({
        id: Math.random().toString(36),
        text: value,
        categoryId
    })

const initialState = {
    data: [],
}

const addReducer = createReducer(initialState, addHOR({ ADD: ADD_NEWS}))

export default addReducer