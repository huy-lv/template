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
import { connect } from 'react-redux'
import { saveGAT } from '../stores/appState/actions'

class LoginContainer extends React.Component {
  state = {
    google_access_token: null
  }
  render() {
    return (
      <View style={styles.container}>
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
        // this.setState({ google_access_token: result.accessToken })
        //save token to redux store
        this.props.dispatch(saveGAT(result.accessToken))
        this.props.navigation.navigate('App')
      } else {
        Alert.alert(Strings.error, 'User canceled')
      }
    } catch (e) {
      Alert.alert(Strings.error, JSON.stringify(e))
    }
  }
}

const mapStateToProps = state => ({
  appState: state.appState
})

export default connect(mapStateToProps)(LoginContainer)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
