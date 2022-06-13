import React from 'react';
import {View, Text , StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import TourGuide from '../../utils/TourGuideProfile'

const Data = TourGuide

console.log(Data)
const TourGuideProfileData = () => {
return (

<View style={styles.container}>
<Text style={styles.title}>All Photos</Text>
        <FlatList
        showsHorizontalScrollIndicator={false}
           data={Data}
           keyExtractor={item => item.id}
           horizontal
           renderItem={({item}) =>
           <View style={styles.container}> 
                <Text style={styles.title}>Services</Text>
                    <View style={{ flexDirection:'row'}}>

                    <Text >usama</Text>
                    <Icon/>
               </View>
           </View> 
         }
        
        
        />
</View>
);
}

const styles = StyleSheet.create({
container:{
     marginHorizontal:20,
     flex:1,
     
},
title:{ 
    color:'#116784' ,
     marginTop:20 ,
     fontSize:16,
     fontWeight:'700'
    }
});

export default TourGuideProfileData;