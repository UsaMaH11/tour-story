import React from 'react';
import { View , StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import {
  font,
  color,
  heightScale,
  widthScale,
  widthScaleSub,
  square,
  width,
  height,
}
from 'globalStyle';
import ButtonComponent from '../buttonComponent';


const CustomFooter = () => {
return (
<View style={styles.container}>
<View style={styles.dataContainer}>
<ImageBackground source={require('../../../assets/blue.jpg')} style={ styles.backimagecontianer}>
  <View style={{flexDirection:'row', width:widthScale(300), alignSelf:'center', justifyContent:'space-between'}}>
     <View>
          <Text style={{fontSize:22, fontWeight:"600", color:'#fff'}}>
              Not your type of Tours?
         </Text>   
         <Text style={{fontSize:14, fontWeight:"600", color:'#fff'}}>
             Let us know your requrement and we will find a suitable tour for you.
         </Text> 
         <ButtonComponent ButtonWidth={170} ButtonHeight={40} backgroundColor="#d908a0" marginVertical={10} borderRadius={20}>
             <Text  style={{fontSize:18, fontWeight:"600", color:'#fff'}}>CONTACT US</Text>
         </ButtonComponent>
         
  </View>
  </View>
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
   justifyContent:'center'
},

})


export default CustomFooter;