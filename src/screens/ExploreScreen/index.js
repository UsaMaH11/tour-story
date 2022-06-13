import React from 'react';
import {View, Text , StyleSheet, ScrollView} from 'react-native';
import TopDestinations from "../../components/ExploreScreen/TopDestionations"
import TopTourGuides from '../../components/ExploreScreen/TopTourGuides';
import TravelWithTourStory from "../../components/ExploreScreen/TravelWithTourStory"

import Header from "../../components/CustomHeader/Header"
import CustomFooter from "../../components/Footer"

const ExploreScreen = (props) => {
return (
    <>
    <ScrollView showsVerticalScrollIndicator={false}>
       <View style={{height:200 , flex:1}}>
           <Header/>
       </View>

       <View style={{flex:1}}>
         <TopDestinations/>
        </View>


        <View  style={{flex:1}}>
        <TravelWithTourStory/>
        </View>

        <View  style={{flex:1,marginBottom:20}}>
        <TopTourGuides/>
        </View>

        <View style={{flex:1}}>
               <CustomFooter/>
        </View>

        </ScrollView>
     
         
</>
);
}

const styles = StyleSheet.create({
container:{
    
}
});

export default ExploreScreen;