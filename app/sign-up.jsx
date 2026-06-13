import { SafeAreaView,  } from "react-native-safe-area-context"
import { Text , Pressable, StyleSheet,View} from "react-native"
import { router } from "expo-router"

import Header from "../components/header"
import CustomTextInput from "../components/textInput"
import { Checkbox } from 'expo-checkbox';
import { useState } from "react"
import CustomButton from "../components/button"


const SignUp = ()=>{

    const [isChecked, setChecked] = useState(false);


    return(
        <SafeAreaView style={styles.container}>
            <Header text={"Sign up"}/>

            <View style={styles.textContainer}>
                <Text style={styles.mainText}>Welcome to Bress</Text>
                <Text style={styles.subText}>Complete the sign up to get started</Text>

            </View>

            <View style={styles.inputContainer}>
                <CustomTextInput label={'Name'} placeHolder={'Enter your full name'}/>

                <CustomTextInput label={'Email'} placeHolder={'Enter your email'}/>

                <CustomTextInput label={'Password'} placeHolder={'password'}/>

            </View>

            <View style={styles.privacy}>
                <Checkbox color={'#2C14DD'} style={styles.checkbox} value={isChecked} onValueChange={()=>{
                    setChecked(!isChecked)
                }} />

                <Text style={styles.policyText}>By signing up, you agree to the <Text style={{color:'#2C14DD'}}>Terms of {'\n'}Service and Privacy Policy</Text> </Text>

            </View>

            <View style={styles.buttonContainer}>
                <CustomButton style={{backgroundColor:"#E1E0fc", width:"30%", height:34}} textColor={'#2C14DD'} text={'Register'}/>
                <CustomButton style={{width:'60%'}} text={'Login'}/>
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

export default SignUp;