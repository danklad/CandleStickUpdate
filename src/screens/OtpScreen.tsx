import React, { useState, useEffect, useRef, useReducer} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput,KeyboardAvoidingView} from 'react-native'
import { TextField } from '../components'
import { connect } from 'react-redux';
import { ApplicationState, OnUserLogin, OnUserSignup, UserState } from '../redux';
import {useNavigation} from '../utils'
import Separator from '../components/Separator';
import Ionicons from '@expo/vector-icons';




const OtpScreen = (props:any) => {
    var mail = "email"
    const {navigate} = useNavigation();
    var textInput = useRef(null)
    const lengthInput = 4;
    const defaultCountDown = 30;
    let clockCall = null;



    // const {getParam, goBack} = props.navigation;
    console.log(props);




    const [email, setEmail] = useState(mail);
    const [internalVal,setInternalVal] = useState("")
    const [countdown, setCountdown] = useState(defaultCountDown)
    const [enableResend, setEnableResend] = useState(false)
   

    // useEffect(()=>{
    //     clockCall = setInterval(()=>{
    //         decrementClock();
    //     },1000)
    //     return () =>{
    //         clearInterval(clockCall)
    //     }
    // })

    // const decrementClock=()=>{
    //     if(countdown === 0){
    //         setEnableResend(true)
    //         setCountdown(0)
    //         clearInterval(clockCall)

    //     }else{
    //         setCountdown(countdown - 1)
    //     }
    // }

    // const onResendOtp = () =>{
    //     if(enableResend){
    //         set
    //     }
    // }


    const auth = async () => {
        return fetch('http://backend.bittez.io/login?email='+email, {
        method: 'GET'
        })
        .then(response => response.json())
    .then((result) => {
        console.log(result)
        
    })
    .catch(error => console.log(error));
        
      };

      const onChangeText = (val:any) =>{
            setInternalVal(val)
      }
      useEffect(()=>{
          textInput.focus()
      },[])
      
      
return (
<View style={styles.container}>
     <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={'padding'}
        style={styles.containerAvoidingView}
      
     >

         <Text style={styles.textTitle}>{"Input your OTP code sent to "+email}</Text>

        <View>
            <TextInput 
                ref={(input)=>textInput = input}
                onChangeText={onChangeText}
                style={{width:0,height:0}}
                value={internalVal}
                maxLength={lengthInput}
                returnKeyType='done'
                keyboardType='numeric'
            />

            <View style={styles.containerInput}>

                {
                    Array(lengthInput).fill().map((data,index)=>(
                        <View 
                         key={index}
                         style={[styles.cellView,
                                {
                                    borderBottomColor: index === internalVal.length ? '#FB6C6A' : '#234DB7'
                                }
                         
                         ]}>

                            <Text style={styles.cellText}
                                onPress={()=> textInput }
                                >  
                                {internalVal &&  internalVal.length > 0 ? internalVal[index] : ""}
                                </Text>

                         </View>
                    ))

                }

            </View>

        </View>

            <View style={styles.bottomView}>
                
            <TouchableOpacity onPress={()=>navigate('Login')}>
                            <View style={styles.btnChangeNumber}>
                            <Text style= {styles.textChange}>Change Number</Text>
                            </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={auth}>
                            <View style={styles.btnResend}>
                            <Text style= {styles.textResend}>Resend Otp ({countdown})</Text>
                            </View>
            </TouchableOpacity>

            </View>


        
     </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems:'center',
    padding:10
  },
  containerAvoidingView:{
    flex: 1,
    backgroundColor: 'white',
    alignItems:'center',
    padding:10
  },
  textTitle:{
      marginBottom:50,
      marginTop:50,
      fontSize:15
  },
  containerInput:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'

  },
  cellView:{
      paddingVertical:11,
      width :50,
      margin: 5,
      justifyContent:'center',
      alignItems: 'center',
      borderBottomWidth: 1.5
  },
  cellText:{
      textAlign:'center',
      fontSize: 16,

  },
  bottomView:{
      flexDirection: 'row',
      flex: 1,
    //   justifyContent: 'flex-end',
      alignItems: 'flex-end',  
  },
  btnChangeNumber:{
      width: 150,
      height: 50,
      borderRadius:10,
      alignItems:'flex-start',
      justifyContent: 'center',
  },
  textChange:{
      color: '#234DB7',
      alignItems: 'center'
  },
  btnResend:{
      width:150,
      height:50,
      borderRadius: 10,
      alignItems: 'flex-end',
      justifyContent: 'center'
  },
  textResend:{
      alignItems:'center',

  }
  

})






 export { OtpScreen }