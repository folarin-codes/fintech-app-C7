
import BSafeAreaView from "../../components/safeareaview"
import Header from '../../components/header'
import { ScrollView, View, Text, Image, Linking , Pressable, Alert} from "react-native"
import { useLocalSearchParams } from "expo-router"
import useMovieStore from "../../store/movie.store"

const Details = ()=>{

    // const {movieData} = useLocalSearchParams();
    const {movieObject} = useMovieStore()

    // console.log('movie data from home ',  typeof movieData)

    // const parsedMovieData = JSON.parse(movieData);

    //    console.log(parsedMovieData)

// thumbnails


    return(
        <BSafeAreaView>
            <Header text={'Details'}/>

            <ScrollView>
                <Pressable onPress={()=>{


                    if(movieObject.url){
                        Linking.openURL(movieObject.url)

                        
                    }
                    else{
                        Alert.alert("This movie does not have a trailer")

                    }

                    // Linking.canOpenURL(movieObject.trailer).then(data=>{
                        

                    // }).catch(error=>{

                    //     Alert.alert("This movie does not have a trailer")


                    // })

                  

                }}>
                    <Image style={{ borderRadius:10, resizeMode:'cover', height:562}} source={{uri:movieObject.primaryImage}}/>
                </Pressable>

                <View style={{flexDirection:'row', justifyContent:"space-between", marginVertical:30, }}>
                    {
                        movieObject.thumbnails.map((item)=>{

                            return(
                                <Pressable key={item?.url}>
                                    <Image source={{uri: item.url}} style={{height:100, width:100, resizeMode:'cover', borderRadius:10}} />
                                </Pressable>
                            )

                        })
                    }
                </View>



                <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                    <Text style={{color:'black', fontWeight:"bold", fontSize:16}}>{movieObject.primaryTitle}</Text>

                    <Text style={{fontWeight:"bold",color:'gold'}}>{movieObject.averageRating}</Text>


                </View>

                <View style={{gap:5}}>
                    <Text style={{textAlign:'justify'}}>{movieObject.description}</Text>
                    <Text>Release date : {movieObject.releaseDate}</Text>
                    <Text>Runtime : {movieObject.runtimeMinutes}</Text>
                </View>


            </ScrollView>

        

        </BSafeAreaView>
    )
}

export default Details;