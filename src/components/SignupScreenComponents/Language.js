import React, {useState} from 'react';
import {View, Text , StyleSheet} from 'react-native';
import { CheckBox } from 'react-native-elements'
import {
    font,
    color,
    heightScale,
    widthScale,
    widthScaleSub,
    
  }
  from 'globalStyle';

const Language = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
return (
<View style={styles.container}> 
 <View style={{flexDirection:'row' , justifyContent:'space-evenly', width:widthScale(300) , }}>
     
<View style={{justifyContent:'space-around', flexDirection:'row', alignItems:"center" ,  width:widthScale(100)}}>
                 <CheckBox 
                checked={toggleCheckBox}
                onPress={() => setToggleCheckBox(!toggleCheckBox)}
              /> 
              <Text style={{width:widthScale(60)}}>English</Text>
               </View> 
               <View style={{justifyContent:'center', flexDirection:'row', alignItems:"center" ,  width:widthScale(100)}}>
                 <CheckBox 
                checked={toggleCheckBox}
                onPress={() => setToggleCheckBox(!toggleCheckBox)}
              /> 
              <Text style={{width:widthScale(60)}}>Punjabi</Text>
               </View> 
              <View style={{justifyContent:'space-around', flexDirection:'row', alignItems:"center" ,  width:widthScale(100)}}>
                 <CheckBox 
                checked={toggleCheckBox}
                onPress={() => setToggleCheckBox(!toggleCheckBox)}
              /> 
              <Text style={{width:widthScale(60)}}>Dutch</Text>
               </View>          
 </View>
 <View style={{flexDirection:'row' , justifyContent:'space-evenly', width:widthScale(300)}}>
<View style={{justifyContent:'space-around', flexDirection:'row', alignItems:"center" ,  width:widthScale(100)}}>
                 <CheckBox 
                checked={toggleCheckBox}
                onPress={() => setToggleCheckBox(!toggleCheckBox)}
              /> 
              <Text style={{width:widthScale(60)}} >Urdu</Text>
               </View> 
               <View style={{justifyContent:'space-around', flexDirection:'row', alignItems:"center" ,  width:widthScale(100)}}>
                 <CheckBox 
                checked={toggleCheckBox}
                onPress={() => setToggleCheckBox(!toggleCheckBox)}
              /> 
              <Text style={{width:widthScale(60) , alignItems:'flex-start'}}>Kashmiri</Text>
               </View> 
            <View style={{justifyContent:'space-around', flexDirection:'row', alignItems:"center" ,  width:widthScale(100)}}>
                 <CheckBox
                checked={toggleCheckBox}
                onPress={() => setToggleCheckBox(!toggleCheckBox)}
              /> 
              <Text style={{width:widthScale(60)}}>Russian</Text>
               </View> 
                      
 </View>
 {/* <View style={{flexDirection:'row', justifyContent:'center', width:widthScale(300)}}>
<View style={{justifyContent:'space-around', flexDirection:'row', alignItems:"center" ,  width:widthScale(100)}}>
                 <CheckBox 
                checked={toggleCheckBox}
                onPress={() => setToggleCheckBox(!toggleCheckBox)}
              /> 
              <Text>Balochi</Text>
               </View> 
              <View style={{justifyContent:'space-around', flexDirection:'row', alignItems:"center" ,  width:widthScale(100)}}>
                 <CheckBox 
                checked={toggleCheckBox}
                onPress={() => setToggleCheckBox(!toggleCheckBox)}
              /> 
              <Text>Hindko</Text>
               </View> 
              <View style={{justifyContent:'space-around', flexDirection:'row', alignItems:"center" ,  width:widthScale(100)}}>
                 <CheckBox 
                checked={toggleCheckBox}
                onPress={() => setToggleCheckBox(!toggleCheckBox)}
              /> 
              <Text>Chinese</Text>
               </View>          
 </View>
 <View style={{flexDirection:'row', justifyContent:'center', width:widthScale(300)}}>
 <View style={{justifyContent:'flex-start', flexDirection:'row', alignItems:"center" }}>
                 <CheckBox 
                checked={toggleCheckBox}
                onPress={() => setToggleCheckBox(!toggleCheckBox)}
              /> 
              <Text>Pashto</Text>
               </View> 
              <View style={{justifyContent:'space-around', flexDirection:'row', alignItems:"center" ,  width:widthScale(100)}}>
                 <CheckBox 
                checked={toggleCheckBox}
                onPress={() => setToggleCheckBox(!toggleCheckBox)}
              /> 
              <Text>Saraiki</Text>
               </View> 
              <View style={{justifyContent:'space-around', flexDirection:'row', alignItems:"center" ,  width:widthScale(100)}}>
                 <CheckBox 
                checked={toggleCheckBox}
                onPress={() => setToggleCheckBox(!toggleCheckBox)}
              /> 
              <Text>French</Text>
               </View>          
 </View>
 <View style={{flexDirection:'row' , justifyContent:'space-evenly', width:widthScale(300)}}>
<View style={{justifyContent:'space-around', flexDirection:'row', alignItems:"center" ,  width:widthScale(100)}}>
                 <CheckBox 
                checked={toggleCheckBox}
                onPress={() => setToggleCheckBox(!toggleCheckBox)}
              /> 
              <Text>Sindhi</Text>
               </View> 
              <View style={{justifyContent:'space-around', flexDirection:'row', alignItems:"center" ,  width:widthScale(100)}}>
                 <CheckBox 
                checked={toggleCheckBox}
                onPress={() => setToggleCheckBox(!toggleCheckBox)}
              /> 
              <Text>Spanish</Text>
               </View> 
              <View style={{justifyContent:'space-around', flexDirection:'row', alignItems:"center" ,  width:widthScale(100)}}>
                 <CheckBox 
                checked={toggleCheckBox}
                onPress={() => setToggleCheckBox(!toggleCheckBox)}
              /> 
              <Text>Japanese</Text>
               </View>          
 </View> */}
 
 
</View>
);
}

const styles = StyleSheet.create({
container:{}
});

export default Language;