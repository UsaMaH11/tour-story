import React from 'react';
import {View, Text , StyleSheet, TextInput} from 'react-native';
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
  import { Ionicons } from '@expo/vector-icons';

const InputComponent = ({ children, header=null, placeholder , inputWidth , inputHeight , marginHorizontal=null , borderLeftColor=null, marginLeft=null,
  backgroundColor=null , borderRadius=null , borderBottomColor=null , borderBottomWidth=null , borderLeftWidth=null , placeholderColor=null , color=null}) => {
return (
<View style={styles.container}> 
    
        <View 
        style={[styles.inputContainer , 
          { width:inputWidth, 
            height:inputHeight, 
          marginHorizontal:marginHorizontal,
          backgroundColor:backgroundColor,
          borderRadius:borderRadius,
          borderBottomWidth:borderBottomWidth,
          borderBottomColor:borderBottomColor,
          alignItems:'center'
         
          
      }]}>

           {children}
          { header==1 ? null : <TextInput placeholder={placeholder} placeholderTextColor={placeholderColor} style={{ color:color ,
             marginLeft:marginLeft , borderLeftWidth:borderLeftWidth , borderLeftColor:borderLeftColor  , height:40 , paddingLeft:10}}/>} 
              </View>
</View>
);
}

const styles = StyleSheet.create({
    inputContainer:{
      alignItems:'center',
      justifyContent:'flex-start',
      flexDirection:'row',
      marginTop:10
      
     
    }
});

export default InputComponent;