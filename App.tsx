import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { LandingScreen } from './src/screens/LandingScreen';

import { Provider } from 'react-redux'
import { store } from './src/redux'


import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { AccountScreen } from './src/screens/AccountScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import CoinbasePro from './src/screens/CoinbasePro';


const switchNavigator = createSwitchNavigator({

    // landingStack: {
    //   screen: createStackNavigator({
    //     Landing: LandingScreen,
    //     // search address screen
    //   },{
    //     defaultNavigationOptions: {
    //       headerShown: false
    //     }
    //   }),

    // },

    homeStack:  createBottomTabNavigator({

      // Home tab Icon
      Home: {
        screen: createStackNavigator({
          HomePage: HomeScreen,
          AccountPage: AccountScreen,
        },{
          defaultNavigationOptions: {
            headerShown: true
          }
        }),
        
        navigationOptions: {
          tabBarIcon: ({ focused, tintColor}) => {
            let icon = focused == true ? require('./src/images/home_icon.png') : require('./src/images/home_n_icon.png') 
            return <Image source={icon} style={styles.tabIcon} />
          }
        }
      },

      // Home tab Icon
      Market: {
        screen: createStackNavigator({
          MarketPage: HomeScreen 
        }),
        navigationOptions: {
          tabBarIcon: ({ focused, tintColor}) => {
            let icon = focused == true ? require('./src/images/offer_icon.png') : require('./src/images/offer_n_icon.png') 
            return <Image source={icon} style={styles.tabIcon} />
          }
        }
      },
      Trade: {
        screen: createStackNavigator({
          CoinPage: CoinbasePro 
        }),
        navigationOptions: {
          tabBarIcon: ({ focused, tintColor}) => {
            let icon = focused == true ? require('./src/images/chart_n_icon.png') : require('./src/images/chart_icon.png') 
            return <Image source={icon} style={styles.tabIcon} />
          }
        }
      },

       
       // Home tab Icon
       Account: {
        screen: createStackNavigator({
          AccountPage: AccountScreen,
        }),
        navigationOptions: {
          tabBarIcon: ({ focused, tintColor}) => {
            let icon = focused == true ? require('./src/images/account_icon.png') : require('./src/images/account_n_icon.png') 
            return <Image source={icon} style={styles.tabIcon} />
          }
        }
      }

     },
     {

      
      
      
       tabBarOptions:{
        showLabel: true,
        style: {
          borderTopWidth: 0,
          paddingTop: 3,
          paddingBottom: 5,
          height: 60,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 20,
          backgroundColor: "#112222",
          shadowOffset: { width: 0, height: 0 }
        }
       }
     }
     
     
     
     
     )

});


const AppNavigation = createAppContainer(switchNavigator);
 
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation  />
    </Provider>
  );
}

const styles = StyleSheet.create({
   tabIcon: {
     width: 30,
     height: 30
   }
});
