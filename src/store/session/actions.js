import * as types from './actionTypes'
import axios from 'axios'
import { AsyncStorage} from 'react-native';


export const loginUser = (username, password) => {
  return (dispatch) => {
    dispatch(sessionLoading())
    axios({
        method: 'post',
        url: 'http://ws.uinsu.ac.id/Portal/OtentikasiUser',
        headers: {'UINSU-KEY': 'gg48ks88og04kco4k48sw4wos8k8s4kwkkkcwo0g'},
        data: {
          username: username,
          password: password
        }
    })
    .catch(function(error){
      dispatch(sessionError(error.message));      
    });
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    feathersClient.logout();
    dispatch(sessionLoading())    
    dispatch(sessionLogout())
      
  }
}

const sessionRestoring = () => ({
  type: types.SESSION_RESTORING
})

const sessionLoading = () => ({
  type: types.SESSION_LOADING
})

const sessionSuccess = user => ({
  type: types.SESSION_SUCCESS,
  user
})

const sessionError = error => ({
  type: types.SESSION_ERROR,
  error
})

const sessionLogout = () => ({
  type: types.SESSION_LOGOUT
})
