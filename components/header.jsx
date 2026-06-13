import { View , Text, Pressable} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from "expo-router";

const Header = ({text})=>{
    return (
        <View style={{flexDirection:"row", alignItems:'center', justifyContent:'space-between', marginBottom:20}}>

            <Pressable onPress={()=> {
                router.back()
                
                }} style={{backgroundColor:"white", height:32, width:32, alignItems:"center", borderRadius:16,justifyContent:"center"}}>

                <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />

            </Pressable>

            <Text style={{fontSize:16}}>{text}</Text>

            <View/>

        </View>
    )
}


export default Header;