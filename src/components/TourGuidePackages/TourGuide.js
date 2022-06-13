import React from 'react';
import {View, Text , StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import categories from '../../utils/TourGuidesPackages'
import CardComponent from '../Card';
import ImageComponent from '../../components/Image'
import { Rating, AirbnbRating } from 'react-native-ratings';
import {
    heightScale,
    widthScale
  }
  from 'globalStyle';
import ButtonComponent from '../buttonComponent';


const Data = categories
const TourGuidesAndPackges = () => {
return (

<View style={styles.container}>
<Text style={styles.title}>Tour Guides and Packages</Text>
        <FlatList
        showsVerticalScrollIndicator={false}
           data={Data}
           keyExtractor={item => item.id}
           renderItem={({item}) => 
           <View style={styles.dataContainer}>
           <View>    
           <CardComponent cardheight={200} cardwidth={150}> 
                  <ImageComponent url={item.image}  imageheight={200} imagewidth={150}/>  
           </CardComponent>
           </View>

           <View style={styles.headerContainer}>
               <View>
                  <Text>{item.name}</Text>
                  <Text>{item.location}</Text>
               </View>
               <View>
                  <Text>31 Reviews</Text>
                  <Rating 
                        imageSize={15} 
                        ratingColor="#d908a0"
                        style={{  marginHorizontal:null , alignSelf:'flex-start' }}
                    />
               </View>
             
           </View>
           <View>
             <Text>accomdation</Text>
             <Text>Tranportation</Text>
           </View>

           <View style={styles.buttonsContainer}>
             <ButtonComponent ButtonHeight={heightScale(40)} ButtonWidth={widthScale(70)} backgroundColor="#116784">
                 <Text>{item.fee}</Text>
             </ButtonComponent>

             <ButtonComponent ButtonHeight={heightScale(40)} ButtonWidth={widthScale(70)} backgroundColor="#d908a0">
                 <Text>VIEW PROFILE</Text>
             </ButtonComponent>
           </View>

          </View>
          }
        
        
        />
</View>
);
}

const styles = StyleSheet.create({
container:{
     marginHorizontal:20
},
title:{ 
    color:'#116784' ,
     marginTop:20 ,
     fontSize:16,
     fontWeight:'700'
    },
    dataContainer:{
        borderBottomColor:'grey',
        borderBottomWidth:1,
        paddingVertical:10,
        flexDirection:'row'
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:widthScale(200),
        borderBottomColor:'grey',
        borderBottomWidth:1,
        height:heightScale(50)
    }
});

export default TourGuidesAndPackges;