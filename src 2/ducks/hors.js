// Higher order reducer
export const addHOR = ({ ADD }) => ({
    [ADD]: (state, { payload }) => ({
      ...state,
      data: [payload].concat(state.data),
    })
  })
  
  export const selectHOR = ({ SELECT }) => ({
    [SELECT]: (state, { payload }) => ({
      ...state,
      data: state.data.map(x => ({
        ...x,
        selected: x.id === payload,
      }))
    }),
  })