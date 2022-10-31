import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
} from '../actions/uiActionTypes'
import { Map } from 'immutable';

export const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
}

const uiReducer = (state = Map(initialState), action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true)
    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false)
    case LOGIN_SUCCESS:
      return state.merge({
        isUserLoggedIn: true,
        user: action.payload
      })
    case LOGIN_FAILURE:
      return state.merge({
        isUserLoggedIn: false,
        error: action.payload
      })
    case LOGOUT:
      return state.merge({
        isUserLoggedIn: false,
      })
    default:
      return state
  }
}

export default uiReducer
