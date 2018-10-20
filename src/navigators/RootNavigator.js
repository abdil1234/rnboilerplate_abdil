import { StackNavigator } from 'react-navigation';

import Dashboard from '../components/Dashboard'
import BiodataCreate from '../components/Dashboard/CreateScreen'
import BiodataUbah from '../components/Dashboard/UbahScreen'
import Login  from '../components/Login'
import HalamanDepan  from '../components/HalamanDepan'
import UbahPassword  from '../components/UbahPassScreen'

const RootNavigator = StackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'DashBoard'
      }
    },
    HalamanDepan: {
      screen: HalamanDepan,
      navigationOptions: {
        title: 'Halaman Depan'
      }
    },
    BiodataList: {
      screen: Dashboard,
      navigationOptions: {
        title: 'DashBoard'
      }
    }, 
    BiodataList: {
      screen: Dashboard,
      navigationOptions: {
        title: 'DashBoard'
      }
    },    
    UbahPassword: {
      screen: UbahPassword,
      navigationOptions: {
        title: 'Ubah Password'
      }
    },
    BiodataUbah: {
      screen: BiodataUbah,
      navigationOptions: {
        title: 'Ubah Contact'
      }
    },
  },  
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
)

export default RootNavigator
