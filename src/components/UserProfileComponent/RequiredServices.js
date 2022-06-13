import React, { useState } from 'react';
import {View, Text , StyleSheet} from 'react-native';
import { CheckBox } from 'react-native-elements'
import {
    heightScale,
    widthScale
  }
  from 'globalStyle';

const RequiredSevices = () => {
   
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

return (
<View style={styles.container}>
  <Text style={styles.title}>
         Required Services
  </Text>
  <Text style={{ fontSize:12}}>
        Please select your required services before proceeding to checkout.
  </Text>
  <View style={styles.servicesContainer}> 
       <View style={styles.content}>
       <CheckBox 
                checked={toggleCheckBox}
                onPress={() => setToggleCheckBox(!toggleCheckBox)}
             /> 
             <Text>Complete Tour</Text>
       </View>
       
        <View style={styles.content}>
        <CheckBox 
                    checked={toggleCheckBox}
                    onPress={() => setToggleCheckBox(!toggleCheckBox)}
                /> 
                <Text>Transportation</Text>
        </View>
           
            <View style={styles.content}>
                    <CheckBox 
                            checked={toggleCheckBox}
                            onPress={() => setToggleCheckBox(!toggleCheckBox)}
                        /> 
                        <Text>Accomdation</Text>
             </View>
           
  </View> 



     </View>
);
}

const styles = StyleSheet.create({
container:{
    width:widthScale(330),
    borderTopColor:'grey',
    borderTopWidth:1,
    marginTop:heightScale(10)
},
    title:{ 
        color:'#116784' ,
         marginVertical:15 ,
         fontSize:16,
         fontWeight:'700'
        },
        servicesContainer:{
            flexDirection:'row',
            alignItems:'center',
            width:widthScale(300),
            justifyContent:'center'
        },
        content:{
            flexDirection:'row',
            alignItems:"center",
         width:widthScale(110),
         justifyContent:"space-around",

        }
    

});

export default RequiredSevices;