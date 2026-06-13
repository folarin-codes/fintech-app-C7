import { Text } from "react-native"
import { View , TextInput, StyleSheet} from "react-native"



const CustomTextInput = ({label, placeHolder})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput placeholder={placeHolder} placeholderTextColor={'black'} />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        borderRadius:25,
        height:61,
        paddingLeft:16,
        justifyContent:"center",
        gap:5
    },
    label:{
        color:"#8F94A3",
        fontSize:10,
        fontWeight:'semibold'
    }

})

export default CustomTextInput;