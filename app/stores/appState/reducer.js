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
    default:
      return state
  }
}
