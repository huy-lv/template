import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { logout } from '../stores/appState/actions'

export default class HomeContainer extends React.Component {
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
              { text: 'Yes', onPress: () => this.props.dispatch(logout()) },
              { text: 'No' }
            ])
          }
        >
          <Text>Log out</Text>
        </TouchableOpacity>
      </View>
    )
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
