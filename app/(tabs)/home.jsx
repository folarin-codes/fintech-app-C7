
import { router } from "expo-router";
import BSafeAreaView from "../../components/safeareaview";
import { Text , View, ImageBackground, ScrollView, Pressable, FlatList, Image} from "react-native"
import { useEffect, useState } from "react";

const Home = ()=>{


    console.log('I refreshed')


    const [state , setState] = useState(false)
    const [moviesData , setMoviesData] = useState([])

    




    const object = undefined
    
    // {name:"Folarin", age:30}


    // console.log(object.nationality)



    useEffect(()=>{


        getTop250MoviesFromImdb()

    }, [state, ])




// const url = 'https://imdb236.p.rapidapi.com/api/imdb/top250-movies';

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '05f1179be4mshfdce8c5340638d0p1a85f3jsn97608f89afcf',
// 		'x-rapidapi-host': 'imdb236.p.rapidapi.com',
// 		'Content-Type': 'application/json'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }



const getTop250MoviesFromImdb = async ()=>{

  



    try{

        const data = await fetch('https://imdb236.p.rapidapi.com/api/imdb/most-popular-movies', {
            "method":"GET",
            headers:{
                'x-rapidapi-key': '05f1179be4mshfdce8c5340638d0p1a85f3jsn97608f89afcf',
                'x-rapidapi-host': 'imdb236.p.rapidapi.com',
                'Content-Type': 'application/json'
                }

            })
            const result = await data.json()

            if(result[0]){

                setMoviesData(result)
            }

            

    }

    catch(error){

        console.log('There was an error ', error)

    }



}





    return(
        <BSafeAreaView style={{backgroundColor:'white'}}>
            <View style={{gap:5, marginTop:30}}>
                <Text style={{color:'black'}}>Hello John</Text>
                <Text style={{color:'black'}}>Your finances are looking good!</Text>

            </View>

            {/* <ScrollView>
                 <View style={{marginTop:30}}>

                <ImageBackground imageStyle={{borderRadius:30}} source={require('../../assets/images/small.png')} style={{height:335}}>

                <Pressable style={{marginTop:20}} onPress={()=>
                    
                    setState(!state)
                    
                    // router.push('../account')

                    
                }

                    
                    >
                    <Text style={{textAlign:'center'}}>Account</Text>
                </Pressable>

                </ImageBackground>

            </View>

            </ScrollView> */}


            <FlatList

            contentContainerStyle={{gap:40}}

            data={moviesData}
            // keyExtractor={}

            renderItem={(movie)=>{

                return(

                    <Pressable onPress={()=>{
                        router.push('../details')
                    }} style={{gap:10 }}>

                        <Image style={{ borderRadius:10, resizeMode:'cover', height:562}} source={{uri:movie.item.primaryImage}}/>

                        <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                            <Text style={{color:'black', fontWeight:"bold", fontSize:16}}>{movie?.item?.primaryTitle}</Text>

                            <Text style={{fontWeight:"bold",color:'gold'}}>{movie.item.averageRating}</Text>


                        </View>

                        <View style={{gap:5}}>
                            <Text style={{textAlign:'justify'}}>{movie.item.description}</Text>
                            <Text>Release date : {movie.item.releaseDate}</Text>
                            <Text>Runtime : {movie.item.runtimeMinutes}</Text>
                        </View>

                      

                    </Pressable>
                )
            }}                
            />

        </BSafeAreaView>
    )
}

export default Home;