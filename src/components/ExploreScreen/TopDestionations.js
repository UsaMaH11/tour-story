import React from 'react';
import {View, Text , StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import categories from '../../utils/categories'
import CardComponent from '../Card';
import ImageComponent from '../../components/Image'


const Data = categories
const TopDestinations = () => {
return (

<View style={styles.container}>
<Text style={styles.title}>Top Destinations In Pakistan</Text>
        <FlatList
        showsHorizontalScrollIndicator={false}
           data={Data}
           keyExtractor={item => item.id}
           horizontal
           renderItem={({item}) => 
           <TouchableOpacity>
           <CardComponent cardheight={300} cardwidth={180}>
                  
                  <ImageComponent url={item.image}  imageheight={300} imagewidth={180} title={item.title} Description={item.Description} Category={item.Category}/>
                  
           </CardComponent>
           </TouchableOpacity> }
        
        
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

export default TopDestinations;