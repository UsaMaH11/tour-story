import React from 'react';
import { View , StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Icon from '../Icon';
import InputComponent from '../inputComponent';
import { useNavigation } from '@react-navigation/native'
import {
  heightScale,
  widthScale
}
from 'globalStyle';


const CustomHeader = ({navigation , userprofile , children}) => {
const DrawerNavigation = useNavigation()
return (
<View style={styles.container}>
<View style={styles.dataContainer}>
<ImageBackground source={require('../../../assets/blue.jpg')} style={ styles.backimagecontianer}>
  <View style={{flexDirection:'row', width:widthScale(320), alignSelf:'center', justifyContent:'space-between'}}>
     <View>
         <TouchableOpacity onPress={() => DrawerNavigation.openDrawer()}>
                   <Icon name="menu"  size={25} color="#fff"/>
         </TouchableOpacity>
         </View>
         <View style={{flexDirection:'row'}}>
         <TouchableOpacity>
                   <Icon name="bell-outline"  size={25} color="#fff"/>
         </TouchableOpacity>
         <TouchableOpacity>
                   <Icon Iconname="search"  size={25} color="#fff"/>
         </TouchableOpacity>
         </View>
  </View>
{ userprofile ? null : <View style={{justifyContent:'center', alignItems:'center'}}>
  <InputComponent inputHeight={50} inputWidth={widthScale(300) } backgroundColor="#fff" borderRadius={20} header={1}>
     <Icon Iconname="search" size={25} color="blue" style={{padding:2}}/>
     <TextInput placeholder="Search"  style={{marginHorizontal:5 , width:widthScale(260) }} /> 
  </InputComponent>
  <View style={{ flexDirection:'row', justifyContent:'space-between' , width:widthScale(300)}}>
  <InputComponent inputHeight={50} inputWidth={widthScale(160) } backgroundColor="#fff" borderRadius={20} header={1}>
      <Icon MaterialIconName="date-range" size={25} color="blue" style={{padding:2}}/>
  </InputComponent>
  <InputComponent inputHeight={50} inputWidth={widthScale(130) } backgroundColor="#fff" borderRadius={20} header={1}>
      <Icon Iconname="search" size={25} color="blue"/>
  </InputComponent>
  </View>
  </View>}
  {children}
</ImageBackground>
</View>
 </View>

);
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    height:heightScale(200),
    width:'100%',
    
   
},
dataContainer:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
},
backimagecontianer:{
  height:"100%",
   width:"100%" , 
   justifyContent:'center',
},

})


export default CustomHeader;