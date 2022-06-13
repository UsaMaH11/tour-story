import React from 'react';
import {View, Text , StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import categories from '../../utils/categories'
import CardComponent from '../Card';
import ImageComponent from '../../components/Image'


const Data = categories
const GuideTourPhotos = () => {
return (

<View style={styles.container}>
<Text style={styles.title}>All Photos</Text>
        <FlatList
        showsHorizontalScrollIndicator={false}
           data={Data}
           keyExtractor={item => item.id}
           horizontal
           renderItem={({item}) => 
           <TouchableOpacity>
           <CardComponent cardheight={200} cardwidth={150}>
                  
                  <ImageComponent url={item.image}  imageheight={200} imagewidth={150} />
                  
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

export default GuideTourPhotos;