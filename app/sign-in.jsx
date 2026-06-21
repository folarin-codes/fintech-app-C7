import { SafeAreaView,  } from "react-native-safe-area-context"
import { Text , Pressable, StyleSheet,View, TextInput} from "react-native"
import { router } from "expo-router"
import { useRouter } from "expo-router"

import Header from "../components/header"
import CustomTextInput from "../components/textInput"
import { Checkbox } from 'expo-checkbox';
import { useState , useEffect} from "react"
import CustomButton from "../components/button"
import AsyncStorage from '@react-native-async-storage/async-storage';


// console.log(AsyncStorage)


const SignIn = ()=>{


    const [email, setEmail] = useState('')
    
    const [password , setPassword] = useState('')






    return(
        <SafeAreaView style={styles.container}>
            <Header text={"Login"}/>

            <View style={styles.textContainer}>
                <Text style={styles.mainText}>Welcome Back</Text>
                <Text style={styles.subText}>Hey you’re back, fill in your details to get back in</Text>

            </View>

        

            <View style={styles.inputContainer}>

             

                <CustomTextInput label={'Email'} keyboardType={'email-address'} placeHolder={'Enter your email'} onTextChange={(value)=>{
                    setEmail(value)
                }}/>


                <CustomTextInput label={'Password'} placeHolder={'password'} onTextChange={(value)=>{
                    setPassword(value)
                }}/>

                <Pressable style={{alignSelf:"flex-end"}}>
                    <Text style={{color:'#2C14DD'}}>Forgot password?</Text>
                </Pressable>

           
            </View>

       

            <View style={styles.buttonContainer}>
                <CustomButton style={{backgroundColor:"#E1E0fc", width:"30%", height:34}} textColor={'#2C14DD'} text={'Register'}/>
                <CustomButton onPress={()=>{

                    router.push('./budget')
                  
                }} style={{width:'60%'}} text={'Login'}/>
            </View>

            
        </SafeAreaView>
    )
}


export const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F5F7FF', flex:1, paddingHorizontal:20

    },
    mainText:{
        color:'#240F51',
        fontSize:24,
        fontWeight:"bold"

    },
    subText:{
        color:'#292B2D'
    },
    textContainer:{
        gap:16,
        marginTop:30

    },
    inputContainer:{
        gap:16,
        marginTop:30
    },
    checkbox: {
    margin: 8,
    borderRadius:5
  },
  privacy:{
    marginTop:30,
    flexDirection:'row',
    
  },
  policyText:{
    marginTop:8,
    fontWeight:'medium'

  },
  buttonContainer:{
    marginTop:30,
    gap:16,
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:"center",
    position:"absolute",
    bottom:40,
    left:"10%"
  }
})  

export default SignIn;