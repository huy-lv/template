import React from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'
import Const from '../util/Const'
import { connect } from 'react-redux'
import { saveGAT } from '../stores/appState/actions'

class AuthLoadingContainer extends React.Component {
  async componentDidMount() {
    let access_token = await AsyncStorage.getItem(
      Const.ASKEY_GOOGLE_ACCESS_TOKEN
    )
    if (access_token) {
      this.props.navigation.navigate('App')
      this.props.dispatch(saveGAT(access_token))
    } else this.props.navigation.navigate('Auth')
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  appState: state.appState
})

export default connect(mapStateToProps)(AuthLoadingContainer)
