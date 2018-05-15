import { AsyncStorage } from 'react-native'
import * as types from './types'
import Constants from '../../constants/Constants'

export const checkLearnedToday = () => {
  return async dispatch => {
    let lastSaveDay = await AsyncStorage.getItem(Constants.StorageKey.LEARNED)
    dispatch({
      type: types.SET_LEARNED_TODAY,
      lastSaveDay
    })
  }
}

export const showHideLoading = (visible, message) => {
  return dispatch => {
    dispatch({
      type: types.SHOW_HIDE_LOADING,
      visible,
      message
    })
  }
}

export const saveGAT = gat => {
  return dispatch => {
    dispatch({
      type: types.SAVE_GAT,
      gat
    })
  }
}

export const logout = () => {
  return dispatch => {
    dispatch({
      type: types.LOGOUT
    })
  }
}
