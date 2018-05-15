import React, { Component } from 'react'
import {
  AppState,
  BackHandler,
  NetInfo,
  Dimensions,
  Platform,
  StatusBar,
  Alert,
  Animated,
  View,
  Text
} from 'react-native'
import { connect } from 'react-redux'
import {
  addNavigationHelpers,
  NavigationActions,
  createStackNavigator
} from 'react-navigation'
import * as AppStateActions from '../stores/appState/actions'
import { ScreenOrientation, Updates } from 'expo'
import Constants from '../constants/Constants'
import MainTabNavigator from '../navigator/MainTabNavigator'
import LoginContainer from '../container/LoginContainer'

export const RootNavigator = createStackNavigator(
  {
    Home: LoginContainer
  },
  {
    navigationOptions: {
      gesturesEnabled: false
    },
    initialRouteName: 'Home'
  }
)

class RootWithNavigationState extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props)
    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT_UP)
    this.state = {
      updateMessage: null,
      translateY: new Animated.Value(50)
    }
  }

  async componentDidMount() {
    //show snackbar
    Animated.timing(this.state.translateY, {
      toValue: 0,
      duration: 2000
    }).start()

    this.setState({ updateMessage: 'Đang kiểm tra phiên bản mới...' })

    try {
      const update = await Updates.checkForUpdateAsync()
      if (update.isAvailable) {
        this.setState({ updateMessage: 'Đang cập nhật phiên bản mới...' })
        await Updates.fetchUpdateAsync()
        Alert.alert(
          'Cập nhật',
          'Vui lòng khởi động lại app để cập nhật phiên bản mới',
          [
            {
              text: 'Khởi động lại',
              onPress: () => Updates.reload()
            }
          ]
        )
      } else {
        this.setState({
          updateMessage:
            'Bạn đang sử dụng phiên bản mới nhất: ' + Constants.version
        })

        setTimeout(() => {
          this.state.translateY.setValue(0)
          Animated.timing(this.state.translateY, {
            toValue: 50,
            duration: 2000
          }).start(() => this.setState({ updateMessage: null }))
        }, 5000)
      }
    } catch (e) {
      this.setState({ updateMessage: e.message })

      setTimeout(() => {
        this.state.translateY.setValue(0)
        Animated.timing(this.state.translateY, {
          toValue: 50,
          duration: 2000
        }).start(() => this.setState({ updateMessage: null }))
      }, 5000)
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <RootNavigator />
        {this.state.updateMessage ? (
          <Animated.View
            style={{
              position: 'absolute',
              bottom: 0,
              backgroundColor: '#FFFF0089',
              width: Constants.screen.width,
              alignItems: 'center',
              flexDirection: 'row',
              transform: [{ translateY: this.state.translateY }]
            }}
          >
            <Text style={{ flex: 1, textAlign: 'center', margin: 7 }}>
              {this.state.updateMessage}
            </Text>
          </Animated.View>
        ) : null}
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    checkLearnedToday: () => dispatch(AppStateActions.checkLearnedToday()),
    saveSetting: payload => dispatch(SettingActions.saveSetting(payload))
  }
}

const mapStateToProps = state => ({
  navigatorRoot: state.navigatorRoot
})

export default connect(mapStateToProps, mapDispatchToProps)(
  RootWithNavigationState
)
