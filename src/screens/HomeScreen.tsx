import React, { useState, useEffect} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native'






export const HomeScreen=()=>{

return (
<View style={styles.container}>
       
       
   <Text>Home</Text>
 </View>
 )}


const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: '#000000'},
navigation: { flex: 1,  marginTop: 43, },
body: { flex: 10, justifyContent: 'center', alignItems: 'center' },
footer: { flex: 1, backgroundColor: 'cyan' }
})

