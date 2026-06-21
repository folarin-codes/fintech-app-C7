import { Pressable, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { router } from "expo-router";

export default function Index() {

  const {height , width} = Dimensions.get("screen")
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal:20,
       
      }}
    >
      <Text>Hello wolrd</Text>


      <View style={{gap:20}}>

        <TouchableOpacity onPress={()=>{

          router.push('./sign-in')

     
        }} style={{ justifyContent:"center", padding:20,backgroundColor:'blue', }}>
          <Text style={{alignSelf:'center'}}>Sign in</Text>

        </TouchableOpacity>

          <TouchableOpacity onPress={()=>{
            router.push('./sign-up')
          }}  style={{ justifyContent:"center", padding:20, backgroundColor:"red"}}>
          <Text style={{alignSelf:'center'}}>Sign up</Text>

        </TouchableOpacity>
      </View>
    </View>
  );
}
