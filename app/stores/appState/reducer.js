import * as types from './types'

const initialState = {
  loadingModal: {
    message: null,
    visible: false
  }
}

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_HIDE_LOADING:
      return {
        ...state,
        loadingModal: {
          message: action.message,
          visible: action.visible
        }
      }
    case types.SAVE_GAT:
      return {
        ...state,
        gat: action.gat
      }
    case types.LOGOUT:
      return JSON.parse(JSON.stringify(initialState))
    default:
      return state
  }
}
