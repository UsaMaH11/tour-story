import React from 'react';
import { Image } from 'react-native';
import {View, Text , StyleSheet} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import {
    heightScale,
    widthScale
  }
  from 'globalStyle';
import ButtonComponent from '../buttonComponent';
const Reviews
 = () => {
return (
<View style={styles.container}> 
<Text style={styles.title}>
             Reviews (91)
       </Text>
  <View style={styles.header}>
      <Image source={{uri:'https://i.pinimg.com/236x/4c/10/eb/4c10eb90638d0c5d79d975fc5e314a0a.jpg'}} style={styles.image}/>
      <View style={{ justifyContent:'center' , marginHorizontal:10}}>
            <Text>Abraham</Text>
            <Rating 
                imageSize={15} 
                ratingColor="#d908a0"
                style={{  marginHorizontal:null , alignSelf:'flex-start' }}
            />
            <Text>13 August 2019</Text>

      </View>
       
       
  </View>
   <View style={styles.review}>
        <Text>Ratings component for React Native with tap and swipe enabled. Demo -
             try it now. Tap Rating. Installation. Install the package using yarn or npm:
             API. AirbnbRating. Try it out. You can try it out with Expo here. Motivation. Feedback.</Text>
   </View>




   <View style={styles.header}>
      <Image source={{uri:'https://i.pinimg.com/236x/4c/10/eb/4c10eb90638d0c5d79d975fc5e314a0a.jpg'}} style={styles.image}/>
      <View style={{ justifyContent:'center' , marginHorizontal:10}}>
            <Text>Abraham</Text>
            <Rating 
                imageSize={15}
                style={{  marginHorizontal:null , alignSelf:'flex-start' }}
            />
            <Text>13 August 2019</Text>

      </View>
       
       
  </View>
   <View style={styles.review}>
        <Text>Ratings component for React Native with tap and swipe enabled. Demo -
             try it now. Tap Rating. Installation. Install the package using yarn or npm:
             API. AirbnbRating. Try it out. You can try it out with Expo here. Motivation. Feedback.</Text>
   </View>
  <View style={{ alignItems:'flex-end'}}>
      <ButtonComponent >
       <Text style={{color:'#d908a0'}}>See All Reviews</Text>
   </ButtonComponent>
   </View>
   


</View>
);
}

const styles = StyleSheet.create({
    container:{
        borderBottomColor:'grey',
        borderBottomWidth:1,
        paddingBottom:10
    },
    title:{ 
        color:'#116784' ,
         marginVertical:15 ,
         fontSize:16,
         fontWeight:'700'
        },
    header:{
      flexDirection:'row',
      justifyContent:'flex-start',
      width:widthScale(330),
     
    }, 
    image:{
   height:heightScale(40),
   width:widthScale(40),
   borderRadius:30,
   marginVertical:20
    },
    review:{
        width:widthScale(330)
    }

});

export default Reviews
;