import * as types from './actionTypes'
import axios from 'axios'
import { AsyncStorage} from 'react-native'
import { NavigationActions } from 'react-navigation'
import { 
  Toast
} from 'native-base'


export const restoreSession = () => {
    return (dispatch) => {
      dispatch(sessionRestoring())
      AsyncStorage.getItem('dataUser')
      .then(user => {       
          const dataUser = JSON.parse(user)
          dispatch(sessionSuccess(dataUser))
      }) 
      .catch(function(error){
        dispatch(sessionLogout());   
        AsyncStorage.removeItem('dataUser')

      });       
    }
}

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
    .then(user => {
        dispatch(sessionSuccess(user.data))
        AsyncStorage.setItem('dataUser', JSON.stringify(user.data))
    })
    .catch(function(error){
      dispatch(sessionError(error.response.data.error))    
      alert(error.response.data.error)      
    });
  }
}

export const ubahPassword = (passwordLama, passwordBaru) => {
  return (dispatch, getState) => {
    // dispatch(sessionLoading())
    axios({
        method: 'post',
        url: 'http://ws.uinsu.ac.id/Portal/UpdatePassword',
        headers: {'UINSU-KEY': '8okkc8wsws4sso8ww4wscw8ssg4cc0c4kccscc0o'},
        data: {
          username: getState().session.user.OtentikasiUser[0].referensi_id,
          password_lama: passwordLama,
          password_baru: passwordBaru
        }
    })
    .then(user => {
      Toast.show({
        text: 'Password Berhasil Diubah',
        buttonText: 'Ok'
      })
      dispatch(ubahPasswordSuccess())
    })
    .catch(function(error){
      const status = {
        status: error.response.status,
        error: error.error
      }
      dispatch(ubahPasswordGagal(status)) 
      alert(error)   
    });
  }
}

export const logoutUser = () => {
  return (dispatch) => {   
    AsyncStorage.removeItem('dataUser')
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

const ubahPasswordGagal = error => ({
  type: types.UBAH_PASSWORD_GAGAL,
  error
})

const ubahPasswordSuccess = () => ({
  type: types.UBAH_PASSWORD_SUCCESS
})

const sessionLogout = () => ({
  type: types.SESSION_LOGOUT
})
