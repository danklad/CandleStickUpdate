import React, { useState, useEffect} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native'






export const AccountScreen=()=>{

return (
<View style={styles.container}>
       
       
           <Text>Account</Text>
 </View>
 )}


const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: '#F2F2F2'},
navigation: { flex: 1,  marginTop: 43, },
body: { flex: 10, justifyContent: 'center', alignItems: 'center' },
footer: { flex: 1, backgroundColor: 'cyan' }
})

