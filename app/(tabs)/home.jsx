
import { router } from "expo-router";
import BSafeAreaView from "../../components/safeareaview";
import { Text , View, ImageBackground, ScrollView, Pressable} from "react-native"

const Home = ()=>{




    // Promise

    // API (APPLICATION PROGRAMMING INTERFACE....)


    // console.log(" I am a boy")


    // setTimeout(()=>{

    //     console.log("I am a transgender")

    // }, 1000)


    // console.log("I am a girl")








    return(
        <BSafeAreaView style={{backgroundColor:'#2C14DD'}}>
            <View style={{gap:5, marginTop:30}}>
                <Text style={{color:'white'}}>Hello John</Text>
                <Text style={{color:'white'}}>Your finances are looking good!</Text>

            </View>

            <ScrollView>
                 <View style={{marginTop:30}}>

                <ImageBackground imageStyle={{borderRadius:30}} source={require('../../assets/images/small.png')} style={{height:335}}>

                <Pressable style={{marginTop:20}} onPress={()=> router.push('../account')}>
                    <Text style={{textAlign:'center'}}>Account</Text>
                </Pressable>

                </ImageBackground>

            </View>

            </ScrollView>

           

        </BSafeAreaView>
    )
}

export default Home;