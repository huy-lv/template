import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  Alert
} from 'react-native'
import { Google } from 'expo'
import Const from '../util/Const'
import Strings from '../util/Strings'
import config from '../../config'

export default class LoginContainer extends React.Component {
  state = {
    google_access_token: null
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <TouchableOpacity onPress={this.loginWithGoogle}>
          <Text>login with google</Text>
        </TouchableOpacity>
        {this.state.google_access_token && <Text>Logged in</Text>}
      </View>
    )
  }

  loginWithGoogle = async () => {
    try {
      const result = await Google.logInAsync(config.google_client_id)
      console.log(result)
      if (result.type === 'success') {
        //save accesstoken to asyncstorage
        await AsyncStorage.setItem(
          Const.ASKEY_GOOGLE_ACCESS_TOKEN,
          result.accessToken
        )
        this.setState({ google_access_token: result.accessToken })
      } else {
        return Alert.alert(Strings.error, 'User canceled')
      }
    } catch (e) {
      return Alert.alert(Strings.error, JSON.stringify(e))
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
