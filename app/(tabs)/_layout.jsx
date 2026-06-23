import { Tabs } from "expo-router";
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Text, View } from "react-native";

const TabsLayout = ()=>{


    const TabIcon = ({ name, focused})=>{
        return(
            <View style={{gap:10, alignItems:'center'}}>
              
                {focused ?  <Octicons name="home" size={24} color={'white'} /> :  <Octicons name="home" size={24} color={'#C1B9F9'} />}
            
            </View>
        )


    }

    return(
        <Tabs screenOptions={{
            headerShown:false,
            tabBarStyle:{backgroundColor:"blue", borderWidth:0, height:100, paddingTop:20, marginHorizontal:20, position:"absolute", borderRadius:50, bottom:20},
            tabBarActiveTintColor:"white",
            tabBarInactiveTintColor:"#C1B9F9",
            
        }}>
            <Tabs.Screen name="home"

            options={{
                title:"Home",
    
                tabBarIcon : ({focused, color})=> {
                    return(
                       <TabIcon name={"Home"} focused={focused} />
                    )

                }
            }}
            
            />
            <Tabs.Screen name="budget" 
            
            options={{
                title:"Budget",
                tabBarIcon : ({color})=> <AntDesign name="pie-chart" size={24} color={color} />
            }}/>
            <Tabs.Screen name="insight" 
            options={{
                title:"Budget",
                tabBarIcon : ({color,})=> <AntDesign name="bar-chart" size={24} color={color} />
            }}
    
            
            />
            <Tabs.Screen name="profile" 

                options={{  title:"Profile",
                tabBarIcon : ({color})=> <FontAwesome5 name="user" size={24} color={color} />
            }}
            
            />

        </Tabs>

    )
}

export default TabsLayout;