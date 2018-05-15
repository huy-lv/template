import React from 'react'
import {
  TabNavigator,
  StackNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import HomeContainer from '../container/HomeContainer'
import Tab2Container from '../container/Tab2Container'

export default createBottomTabNavigator(
  {
    Home: HomeContainer,
    Tab2: Tab2Container
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
)
