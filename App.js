import React from 'react'
import { Text, View, AsyncStorage, BackHandler } from 'react-native'
import { Permissions, Notifications } from 'expo'
import { Provider } from 'react-redux'
import configureStore from './app/stores/configureStore'
import RootWithNavigationState from './app/navigator/RootNavigator'
import ProcessingPrompt from './app/component/ProcessingPrompt'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import HomeContainer from './app/container/HomeContainer'
import LoginContainer from './app/container/LoginContainer'
import AuthLoadingContainer from './app/container/AuthLoadingContainer'
import MainTabNavigator from './app/navigator/MainTabNavigator'

const store = configureStore()

async function registerPushNotification() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  )
  let finalStatus = existingStatus
  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    finalStatus = status
  }
  if (finalStatus !== 'granted') {
    return
  }
  let token = await Notifications.getExpoPushTokenAsync()
  console.log('expo token ', token)
}

const RootSwitch = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingContainer,
    App: RootWithNavigationState,
    Auth: LoginContainer
  },
  {
    initialRouteName: 'AuthLoading'
  }
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <RootSwitch />
          <ProcessingPrompt />
        </View>
      </Provider>
    )
  }
}
