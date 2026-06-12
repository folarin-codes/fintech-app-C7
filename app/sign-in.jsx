import { SafeAreaView } from "react-native-safe-area-context"
import { Pressable, Text } from "react-native"
import { router } from "expo-router"
import Header from "../components/header"
import { styles } from "./sign-up"

const SignIn = ()=>{

    return(
        <SafeAreaView style={styles.container}>
            <Header text={"Login"}/>

           
        </SafeAreaView>
    )
}


export default SignIn;