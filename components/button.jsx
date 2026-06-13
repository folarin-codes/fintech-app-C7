import { TouchableOpacity , Text, StyleSheet} from "react-native"



const CustomButton = ({text, textColor, style})=>{
    return(
        <TouchableOpacity style={[styles.container, style]}>
            <Text style={[styles.text, {color:textColor?textColor:'white'}]}>{text}</Text>

        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#2C14DD',
        height:62,
        borderRadius:30,
        justifyContent:'center'
    },
    text:{
        textAlign:'center',
        fontWeight:"semibold"
    }

})

export default CustomButton;