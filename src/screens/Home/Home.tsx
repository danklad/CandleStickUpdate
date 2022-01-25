import React from 'react';
import { StyleSheet, View, Text,Button } from 'react-native';
import CoinbasePro from '../CoinbasePro';
import navigation from '../navigation';
import { useValue } from 'react-native-reanimated';
// import {useNavigation} from '@react-navigation/native'

export default function Home({navigation}:any) {

    
    const pressHandler =()=>{
        navigation.navigate("CoinbasePro")
    }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title='Go to Coin Market' onPress={pressHandler}/>
    </View>
  );
}

const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText:{
        color:'blue'
    }
})