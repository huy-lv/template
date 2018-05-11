// import React from 'react'
// import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation'
// import { Ionicons } from '@expo/vector-icons'
// import HomeContainer from '../container/HomeContainer'

// const MainTabNavigator = TabNavigator(
//   {
//     Lesson: { screen: Lesson, title: 'Bài học' },
//     History: { screen: History, title: 'Lịch sử' },
//     Topic: { screen: Topic, title: 'Chủ đề' },
//     Setting: { screen: Setting, title: 'Cài đặt' }
//   },
//   {
//     navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state
//         let iconName
//         switch (routeName) {
//           case 'Lesson':
//             iconName = `ios-book${focused ? '' : '-outline'}`
//             break
//           case 'History':
//             iconName = `ios-timer${focused ? '' : '-outline'}`
//             break
//           case 'Topic':
//             iconName = `ios-list${focused ? '' : '-outline'}`
//             break
//           case 'Setting':
//             iconName = `ios-cog${focused ? '' : '-outline'}`
//             break
//           default:
//             break
//         }
//         return <Ionicons name={iconName} size={25} color={tintColor} />
//       }
//     }),
//     tabBarOptions: {
//       activeTintColor: 'red',
//       inactiveTintColor: 'gray'
//     },
//     tabBarComponent: TabBarBottom,
//     tabBarPosition: 'bottom',
//     animationEnabled: false,
//     swipeEnabled: false
//   }
// )

// export default MainTabNavigator
