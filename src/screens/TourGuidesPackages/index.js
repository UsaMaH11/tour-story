import React from 'react';
import {View, Text , StyleSheet} from 'react-native';
import Header from "../../components/CustomHeader/Header"
import TourGuidesAndPackges from '../../components/TourGuidePackages/TourGuide';
import styles from "./styles"

const TourGuidePackages = () => {
return (
<>
    <View style={{flex:0.45,}}>
         <Header/>
    </View>
    <View style={styles.maincontainer}>
         <View>
              <TourGuidesAndPackges/>
         </View>
    </View>
 
 </>
);
}



export default TourGuidePackages;