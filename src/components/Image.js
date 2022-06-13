
import React from 'react';
import { ImageBackground } from 'react-native';
import {View,Text , Image, StyleSheet, TouchableOpacity} from 'react-native';
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

const ImageComponent = ({imagewidth, imageheight , title , Description, url , borderRadius=20 , Category=null}) => {
return (
<View style={styles.container}>

<ImageBackground source={{uri:url}} 
imageStyle={{
    borderRadius:borderRadius,
}}
style={
    {
    width:imagewidth,
    height:imageheight,
    alignSelf:'center',
    resizeMode:'contain',
    justifyContent:Category=="Top Destination" ? "space-between" :'flex-end'
    
    }}>
 { Category=="Top Destination" && <View style={{alignItems:"center" , justifyContent:'center', alignSelf:'flex-end', backgroundColor:'tomato', height:heightScale(30), width:widthScale(60) , borderTopEndRadius:20, borderTopStartRadius:20, borderBottomStartRadius:20}}> 
         <Text style={{ textAlign:'center', color:'#fff'}}>51 Tours</Text>
   </View>  }   
  


  <View style={{ justifyContent:'flex-end'}}>
       { title && <Text style={styles.title}>
        {title}
     </Text> }

     { Description && <Text style={styles.Description}>
        {Description}
     </Text> }
     
     </View>
    </ImageBackground>
 </View>
);
}

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'700',
        color:'#000',
        marginHorizontal:10,
        color:'#fff',
        paddingVertical:5 
    },
    Description:{
        fontSize:14,
        fontWeight:'700',
        color:'#000',
        marginHorizontal:10,
        color:'#fff',
        marginBottom:5
        
    },

});

export default ImageComponent;