import * as types from './actionTypes'

const initialState = {
  restoring: false,
  loading: false,
  user: null,
  error: null,
  statusubah: false
}

const session = (state = initialState, action) => {
  switch(action.type) {
    case types.SESSION_RESTORING:
      return { ...state, restoring: true}
    case types.SESSION_LOADING:
      return { ...state, restoring: false, loading: true, error: null }
    case types.UBAH_PASSWORD_GAGAL:
      return { ...state, loading: false, statusubah:false, error: action.error }
    case types.UBAH_PASSWORD_SUCCESS:
      return { ...state, loading: true, statusubah:true }
    case types.SESSION_SUCCESS:
      return { restoring: false, loading: true, user: action.user, error: null }
    case types.SESSION_ERROR:
      return { restoring: false, loading: false, user: null, error: action.error }
    case types.SESSION_LOGOUT:
      return initialState
    default:
      return state
  }
}

export default session
