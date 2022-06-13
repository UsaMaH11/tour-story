import React from 'react';
import {View, Text , StyleSheet} from 'react-native';
import { MaterialCommunityIcons , Ionicons , MaterialIcons} from '@expo/vector-icons';

const Icon = ({name , size , color, padding=null , Iconname , MaterialIconName}) => {
return (
<View style={styles.container}>
    { name &&  <MaterialCommunityIcons name={name} size={size} color={color} style={{padding:padding ,  marginHorizontal:5}}/>}
     { Iconname &&   <Ionicons name={Iconname} size={size} color={color} style={{padding:padding ,  marginHorizontal:5}}/>}
     { MaterialIconName &&   <MaterialIcons name={MaterialIconName} size={size} color={color} style={{padding:padding, marginHorizontal:5}}/>}
     
 </View>
);
}

const styles = StyleSheet.create({

});

export default Icon;