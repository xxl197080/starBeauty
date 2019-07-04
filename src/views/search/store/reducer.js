import * as Types from './actionTypes'

const initSearch = {
  inputVal: '',
  goodsList: []
}

export default (state = initSearch, action) => {
  let newState = JSON.parse(JSON.stringify(state))

  if (action.type === Types.CHG_INPUT_VAL) {
    newState.inputVal = action.value
  }
  if (action.type === Types.GET_SEARCH_LIST) {
    newState.goodsList = action.list
  }
  return newState
}
