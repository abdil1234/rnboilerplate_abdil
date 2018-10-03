import React from 'react'
import { Provider } from 'react-redux'
import { Root } from "native-base";
import { configureStore } from './store'

import RootNavigator  from './navigators/RootNavigator';


const store = configureStore()

const App = () =>
  <Root>
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  </Root>

export default App
