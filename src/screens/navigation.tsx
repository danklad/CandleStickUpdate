import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Home from "./Home/Home";
import CoinbasePro from "./CoinbasePro";
import Account from "./Account/Account";



const Tab = createMaterialBottomTabNavigator();


export default function MyTabs() {
  return (
      <NavigationContainer>
          <Tab.Navigator
              screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color}) => {
                      let iconName;

                      if (route.name === 'Home') {
                          iconName = focused
                              ? 'ios-information-circle'
                              : 'ios-information-circle-outline';
                      } else if (route.name === 'Settings') {
                          iconName = focused ? 'ios-list-box' : 'ios-list';
                      } else if (route.name === 'CoinbasePro'){
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                      }

                      // You can return any component that you like here!
                      return <Ionicons icon={iconName} size={25} color={"red"}/>
                  },
              })}
              

          >
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Account" component={Account} />
              <Tab.Screen name="CoinbasePro" component={CoinbasePro} />
          </Tab.Navigator>
      </NavigationContainer>
  );
}



























// const switchNavigator = createSwitchNavigator({

//     // coinStack:{
//     //   screen: createSwitchNavigator({
//     //     Coin: CoinbasePro,
//     //   },{
//     //     defaultNavigationOptions:{
//     //       headerShown: false,
//     //     }
//     //   })
//     // },
// homeStack: createBottomTabNavigator({
//     homeStack:{
//         screen: createStackNavigator({
//           HomePage: Home
//         }),
//         navigationOptions:{
//           tabBarIcon:()=>{
            
//           }
//         }
//     },
//     accountStack:{
//       screen: createStackNavigator({
//         AccountPage: Account
//       }),
//       navigationOptions:{
//         tabBarIcon:({tintColor})=>{
//           <Ionicons name={'ios-home'} size={25} style={[{ color: tintColor }]} />
//         }
//       }
//   },
//   marketStack:{
//     screen: createStackNavigator({
//       MarketPage: CoinbasePro
//     }),
//     navigationOptions:{
//       tabBarIcon:()=>{
        
//       }
//     }
// }
// })
// })

// const AppNavigation = createAppContainer(switchNavigator);


// export default function App(){
//   return(
//     <AppNavigation/>
//   )
// }






const styles = StyleSheet.create({
    tabIcon:{
      width:30,
      height:30
    }
})






// functa
// const Tab = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator initialRouteName="CoinbasePro">
//         <Tab.Screen name="Home" component={Home} options={{title: "Home"}}/>
//         <Tab.Screen name="CoinbasePro" component={CoinbasePro} options={{title: "CoinbasePro"}}/>
//         <Tab.Screen name="Account" component={Account} options={{title: "Account"}}/>
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }


//to here

//another way
// const screens= {
// Home:{
//       screen: Home,
//       navigationOptions: {
//         title: "Home",
//         header: () => null,
//       },
//   },
//   CoinbasePro:{
//       screen: CoinbasePro,
//       navigationOptions: {
//         title: "Coinbase Pro",
//         header: () => null,
//       },
//   }
// }

// const Stack = createStackNavigator(screens);

// export default createAppContainer(Stack);

//another way till here