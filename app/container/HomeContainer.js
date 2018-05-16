import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from 'react-native'
import { logout } from '../stores/appState/actions'
import { connect } from 'react-redux'
import Const from '../util/Const'

class HomeContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home O pen up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Setting')
          }}
        >
          <Text>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Alert.alert('Logout', 'Are you sure to logout?', [
              { text: 'Yes', onPress: this.logout },
              { text: 'No' }
            ])
          }
        >
          <Text>Log out</Text>
        </TouchableOpacity>
      </View>
    )
  }

  logout = async () => {
    this.props.dispatch(logout())
    await AsyncStorage.removeItem(Const.ASKEY_GOOGLE_ACCESS_TOKEN)
    this.props.navigation.navigate('AuthLoading')
  }
}

const mapStateToProps = state => ({
  appState: state.appState
})

export default connect(mapStateToProps)(HomeContainer)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
