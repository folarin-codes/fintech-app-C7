import { SafeAreaView,  } from "react-native-safe-area-context"
import { Text , Pressable, StyleSheet,} from "react-native"
import { router } from "expo-router"
import Header from "../components/header"


const SignUp = ()=>{

    return(
        <SafeAreaView style={styles.container}>
            <Header text={"Sign up"}/>

            
        </SafeAreaView>
    )
}


export const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F5F7FF', flex:1, paddingHorizontal:20

    }
})  

export default SignUp;