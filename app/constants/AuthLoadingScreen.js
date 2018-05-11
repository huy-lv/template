import React from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'

class AuthLoadingScreen extends React.Component {
  componentWillMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Auth')
    }, 1000)
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    )
  }
}
