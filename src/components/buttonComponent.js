import React from 'react';
import {View, Text , StyleSheet, TouchableOpacity} from 'react-native';

const ButtonComponent = ({children , onPress, ButtonWidth ,borderTopRightRadius=null, borderTopLeftRadius=null, ButtonHeight , backgroundColor=null , marginHorizontal=null , borderRadius=null , marginVertical=null}) => {
return (
<View style={styles.container}> 
      <TouchableOpacity
       style={[styles.buttonContainer ,
       { width:ButtonWidth, 
         height:ButtonHeight , 
         marginHorizontal:marginHorizontal,
         backgroundColor:backgroundColor,
         borderRadius:borderRadius,
         marginVertical:marginVertical,
         borderTopLeftRadius:borderTopLeftRadius,
         borderTopRightRadius:borderTopRightRadius,
         
         }]} onPress={onPress}>
            {children}
      </TouchableOpacity>
</View>
);
}

const styles = StyleSheet.create({
    buttonContainer:{
        alignItems:"center",
        justifyContent:'center'
    }
});

export default ButtonComponent;