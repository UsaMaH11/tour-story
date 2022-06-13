import React from 'react';
import {View, Text , StyleSheet} from 'react-native';
import { DrawerContentScrollView ,DrawerItem} from "@react-navigation/drawer"
import { Image } from 'react-native';
import Icon from '../components/Icon';
import { useNavigation } from '@react-navigation/native'

export const DrawerContent = (props) => {
    const navigation = useNavigation()
return (
    <>
<View style={styles.container}> 
<DrawerContentScrollView>
     <View style={styles.imageContainer}>
         <Image style={styles.profileImage} source={{uri:"https://i.pinimg.com/236x/4c/10/eb/4c10eb90638d0c5d79d975fc5e314a0a.jpg"}}/>
         <Text style={{color:"#fff" , fontSize:20 , fontWeight:"700"}}>Muhammad Yaseen</Text>
     </View>
     <View style={styles.contentContainer}>
            <DrawerItem
             icon={()=>(
                 <Icon name="face-profile" size={20} color="#fff"/>
             )}
             label="Profile"
             labelStyle={{color:'#fff'}}
             onPress={()=>{navigation.navigate('Profile')}}
             style={{
                borderBottomWidth:1,
                borderBottomColor:"#fff"
            }}
            
            />
                <DrawerItem
             icon={()=>(
                 <Icon MaterialIconName="explore" size={20} color="#fff"/>
             )}
             label="Explore"
             labelStyle={{color:'#fff'}}
             onPress={()=>{navigation.navigate('Explore')}}
             style={{
                borderBottomWidth:1,
                borderBottomColor:"#fff"
            }}
            
            />
                <DrawerItem
             icon={()=>(
                 <Icon Iconname="people-outline" size={20} color="#fff"/>
             )}
             label="Travel with Wander"
             onPress={()=>{}}
             labelStyle={{color:'#fff'}}
             style={{
                borderBottomWidth:1,
                borderBottomColor:"#fff"
            }}
            
            />
                <DrawerItem
             icon={()=>(
                 <Icon Iconname="settings" size={20} color="#fff"/>
             )}
             label="Settings"
             onPress={()=>{}}
             labelStyle={{color:'#fff'}}
             style={{
                 borderBottomWidth:1,
                 borderBottomColor:"#fff"
             }}
            
            />
                <DrawerItem
             icon={()=>(
                 <Icon MaterialIconName="payment" size={20} color="#fff"/>
             )}
             label="Payments"
             onPress={()=>{}}
             labelStyle={{color:'#fff'}}
             style={{
                borderBottomWidth:1,
                borderBottomColor:"#fff"
            }}
            
            />

          <DrawerItem
             icon={()=>(
                 <Icon MaterialIconName="history" size={20} color="#fff"/>
             )}
             label="History"
             labelStyle={{color:'#fff'}}
             onPress={()=>{}}
             style={{
                borderBottomWidth:1,
                borderBottomColor:"#fff"
            }}
            
            />

          <DrawerItem
             icon={()=>(
                 <Icon MaterialIconName="contact-support" size={20} color="#fff"/>
             )}
             label="Contact Us"
             labelStyle={{color:'#fff'}}
             onPress={()=>{navigation.navigate('Contact Us')}}
             style={{
                borderBottomWidth:1,
                borderBottomColor:"#fff"
            }}
            
            />

        </View>
</DrawerContentScrollView>


      
   
</View>

   

</>
);
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#d908a0",
    borderBottomRightRadius:100
},
imageContainer:{
 justifyContent:'center',
 alignItems:'center'
},
profileImage:{
    height:120,
    width:120,
    borderRadius:60
},
contentContainer:{
    marginTop:20,
    flex:1,
    marginHorizontal:10
}
});

