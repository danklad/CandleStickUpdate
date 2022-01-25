import React from 'react';
import { StyleSheet, View, Text,Button } from 'react-native';
import CoinbasePro from '../CoinbasePro';
import navigation from '../navigation';
import { useValue } from 'react-native-reanimated';

export default function Account({navigation}:any) {

    
 const pressHandle = ()=>{
  //  navigation.navigate('Home')
 }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title='Go back' onPress={pressHandle}/>
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


