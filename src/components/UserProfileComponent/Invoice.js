import React from 'react';
import {View, Text , StyleSheet} from 'react-native';
import {
    heightScale,
    widthScale
  }
  from 'globalStyle';

const Invoice = () => {
return (
<View style={styles.container}>
            <Text style={styles.title}>
                Invoice
        </Text>

        <View>
           <View style={{flexDirection:'row' ,  justifyContent:'space-evenly' , paddingVertical:10 ,  width:widthScale(330)}} >
               <Text style={styles.titleText}>Day Tour </Text>
               <Text style={styles.calculation}> 2 days x 2 Adults</Text>
               <Text Style={styles.amount}> RS6000</Text>

           </View>
           <View style={{flexDirection:'row' , justifyContent:'space-evenly', paddingVertical:10 , width:widthScale(330)}}>
               <Text style={styles.titleText}> Transportation </Text>
               <Text  style={styles.calculation}> 2 days x 2 Adults</Text>
               <Text  Style={styles.amount}>RS12000</Text>

           </View>
           <View style={{flexDirection:'row' , justifyContent:'space-evenly' , paddingVertical:10 ,  width:widthScale(330) }}>
               <Text style={styles.titleText}>Accomodation </Text>
               <Text style={styles.calculation}>  x 2 Adults</Text>
               <Text Style={styles.amount}>RS0</Text>
              
                 
              </View>
              <View style={{ width:widthScale(330), flexDirection:'row' , justifyContent:'flex-end' , paddingVertical:10}}> 
                <Text style={{color:"#d908a0"}}>Total Amount:</Text>
                  <View style={{ borderTopColor:'grey', borderTopWidth:1 , width:widthScale(80) , alignSelf:'flex-end' }}>  
                 <Text style={{alignSelf:'center'}}>RS18000</Text>
                </View>
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
    titleText:{
        width:widthScale(110)
    },
    calculation:{
        width:widthScale(110),
        color:"#d908a0"},
    amount:{
        width:widthScale(110),
      
        
        
    },
    
});

export default Invoice;