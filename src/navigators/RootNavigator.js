import { StackNavigator } from 'react-navigation';

import Dashboard from '../components/Dashboard'
import BiodataCreate from '../components/Dashboard/CreateScreen'
import BiodataUbah from '../components/Dashboard/UbahScreen'

const RootNavigator = StackNavigator(
  {
    BiodataList: {
      screen: Dashboard,
      navigationOptions: {
        title: 'DashBoard'
      }
    },   
    BiodataCreate: {
      screen: BiodataCreate,
      navigationOptions: {
        title: 'Tambah Contact'
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
    initialRouteName: 'BiodataList',
    headerMode: 'none'
  }
)

export default RootNavigator
