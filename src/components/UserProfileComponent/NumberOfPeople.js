import React from 'react';
import {View, Text , StyleSheet} from 'react-native';
import {
    heightScale,
    widthScale
  }
  from 'globalStyle';
import Icon from '../Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NumberofPeople = () => {
return (
<View style={styles.container}>

<Text style={styles.title}>
             Number of People
       </Text>
        <View style={styles.adults}>
              <Text style={{color:'grey' , fontSize:18}}>Adults</Text>
              <View style={{flexDirection:'row' , alignItems:'center'}}>
                 <TouchableOpacity>
                       <Icon name="minus-circle-outline" size={30} color="#d908a0"/>
                     </TouchableOpacity> 
                 
                 <Text> 0 </Text>
                <TouchableOpacity> 
                    <Icon name="plus-circle-outline" size={30} color="#d908a0"/>
                    </TouchableOpacity> 
              </View>
        </View>
       
        <View style={styles.adults}>
              <Text style={{color:'grey' , fontSize:18}}>Children</Text>
              <Text style={{color:'#d908a0' , fontSize:14}}>0 - 5 years (free)</Text>

              <View style={{flexDirection:'row' , alignItems:'center'}}>
              <TouchableOpacity>
                       <Icon name="minus-circle-outline" size={30} color="#d908a0"/>
                     </TouchableOpacity> 
                 <Text> 0 </Text>
                 <TouchableOpacity> 
                     <Icon name="plus-circle-outline" size={30} color="#d908a0"/>
                     </TouchableOpacity> 
              </View>
        </View>
     </View>
);
}

const styles = StyleSheet.create({
container:{},
title:{ 
    color:'#116784' ,
     marginVertical:15 ,
     fontSize:16,
     fontWeight:'700'
    },
adults:{
  flexDirection:'row',
  justifyContent:'space-between',
  width:widthScale(330),
  alignItems:'center',
marginVertical:heightScale(5),

}

});

export default NumberofPeople;