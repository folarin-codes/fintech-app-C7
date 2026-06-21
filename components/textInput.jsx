import { Pressable, Text } from "react-native"
import { View , TextInput, StyleSheet, Dimensions} from "react-native"
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from "react";



const CustomTextInput = ({label, placeHolder, keyboardType, onTextChange})=>{



    const [visible , setVisible] = useState(true)

    console.log(visible)


    const {width} = Dimensions.get('screen')
    return(
        <View style={styles.container}>

            <View style={{gap:10}}>

                <Text style={styles.label}>{label}</Text>

                <TextInput secureTextEntry={!visible} style={{width:width*.7}} keyboardType={keyboardType} placeholder={placeHolder} placeholderTextColor={'black'}  onChangeText= {(text)=>{
                    onTextChange(text)
                }}/>  

            </View>
           

            <View>



                {
                    label.toLowerCase() == "password" ? <Pressable onPress={()=>{
                        setVisible(!visible)
                    }}>

                    {
                   visible ? 
                <Entypo name="eye" size={24} color="blue" /> : <Entypo name="eye-with-line" size={24} color="blue" />
                }
                    </Pressable>

                    : null
                }

               
                


            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        borderRadius:25,
        height:61,
        paddingHorizontal:16,
        justifyContent:"space-between",
        gap:5,
        flexDirection:"row",
        alignItems:"center"
    },
    label:{
        color:"#8F94A3",
        fontSize:10,
        fontWeight:'semibold'
    }

})

export default CustomTextInput;