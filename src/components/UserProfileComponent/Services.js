import React from 'react';
import {View, Text , StyleSheet} from 'react-native';
import Icon from '../Icon';
import {
    heightScale,
    widthScale
  }
  from 'globalStyle';

const Services = () => {
return (
<View style={styles.container}> 
<Text style={styles.title}>Services</Text>
    <View style={{ flexDirection:'row' , alignItems:'center' , marginVertical:5 , justifyContent:'space-between' , width:widthScale(300)}} >
       <View style={{ flexDirection:'row' , alignItems:'center'}}>
        <Icon MaterialIconName="location-history" color="#0986b0" size={30}/> 
        <Text style={styles.servicesText}>Naran</Text>
        </View> 
        <View style={{ flexDirection:'row' , alignItems:'center', width:widthScale(130)}}>
        <Icon Iconname="bus-outline" color="#0986b0" size={30}/> 
        <Text style={styles.servicesText}>Personal Car</Text>
        </View> 
    </View>

    <View style={{ flexDirection:'row' , alignItems:'center' ,marginVertical:5 , justifyContent:'space-between' , width:widthScale(300)}} >
       <View style={{ flexDirection:'row' , alignItems:'center'}}>
        <Icon MaterialIconName="location-history" color="#0986b0" size={30}/> 
        <Text style={styles.servicesText}>Private Tour</Text>
        </View> 
        <View style={{ flexDirection:'row' , alignItems:'center', width:widthScale(130)}}>
        <Icon Iconname="home" color="#0986b0" size={30}/> 
        <Text style={styles.servicesText}>3 star hotel</Text>
        </View> 
    </View>

    <View style={{ flexDirection:'row' , alignItems:'center' , marginVertical:5 , justifyContent:'space-between' , width:widthScale(300)}} >
       <View style={{ flexDirection:'row' , alignItems:'center'}}>
        <Icon Iconname="time-outline" color="#0986b0" size={30}/> 
        <Text style={styles.servicesText}>3 days 4 Nights</Text>
        </View> 
        <View style={{ flexDirection:'row' , alignItems:'center', width:widthScale(130)}}  >
        <Icon MaterialIconName="location-history" color="#0986b0" size={30}/> 
        <Text style={styles.servicesText}>Tickets not Included</Text>
        </View> 
    </View>
       
    <View style={{ justifyContent:'center' , marginVertical:5 , width:widthScale(300)}} >
       <View style={{ flexDirection:'row' , alignItems:'center'}}>
        <Icon Iconname="md-globe-outline" color="#0986b0" size={30}/> 
        <Text style={styles.servicesText}>English , Pashto , Urdu , Hindko</Text>
        </View> 
      
    </View>

    <View style={styles.TourItinerary}>
       <Text style={styles.title}>
           Tour Itinerary
       </Text>
       <View style={styles.reviewContainer}> 
           <Text style={styles.subtitle}>
           Day 1
       </Text>
       <Text style={styles.description}>
             Ratings component for React Native with tap and swipe enabled. Demo - 
             try it now. Tap Rating. Installation.API. AirbnbRating. Try it out. 
             You can try it out with Expo here. Motivation. Feedback. Ratings component for React Native with tap and swipe enabled. Demo - 
             try it now. Tap Rating. Installation.API. AirbnbRating. Try it out. 
             You can try it out with Expo here. Motivation. Feedback.
       </Text>
       </View>
      
   <View style={styles.reviewContainer}>  
       <Text style={styles.subtitle}>
           Day 2
       </Text>
       <Text style={styles.description}>
             Ratings component for React Native with tap and swipe enabled. Demo - 
             try it now. Tap Rating. Installation.API. AirbnbRating. Try it out. 
             You can try it out with Expo here. Motivation. Feedback. Ratings component for React Native with tap and swipe enabled. Demo - 
             try it now. Tap Rating. Installation.API. AirbnbRating. Try it out. 
             You can try it out with Expo here. Motivation. Feedback.
       </Text>
       </View>
     
    <View style={styles.reviewContainer}> 
        <Text style={styles.subtitle}>
           Day 3
       </Text>
       <Text style={styles.description}>
             Ratings component for React Native with tap and swipe enabled. Demo - 
             try it now. Tap Rating. Installation.API. AirbnbRating. Try it out. 
             You can try it out with Expo here. Motivation. Feedback. Ratings component for React Native with tap and swipe enabled. Demo - 
             try it now. Tap Rating. Installation.API. AirbnbRating. Try it out. 
             You can try it out with Expo here. Motivation. Feedback.
       </Text>
       
       </View>
      

       

    </View>




</View>
);
}

const styles = StyleSheet.create({
container:{
    borderBottomWidth:1,
    borderBottomColor:"grey",
    borderTopWidth:1,
    borderTopColor:"grey",
    marginVertical:10
},
title:{ 
    color:'#116784' ,
     marginVertical:15 ,
     fontSize:16,
     fontWeight:'700'
    },
    servicesText:{
        fontSize:18,
        color:'grey'
    },
    TourItinerary:{
         borderTopWidth:1,
         borderTopColor:'grey'
    },
    reviewContainer:{
      marginVertical:10
    },
    subtitle:{
        color:'#d908a0',
        fontSize:18,
        fontWeight:"600"
    }
});

export default Services;