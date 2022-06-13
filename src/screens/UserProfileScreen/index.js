import React from 'react';
import {View, Text , StyleSheet} from 'react-native';
import styles from './styles'
import { Image } from 'react-native';
import CustomHeader from "../../components/CustomHeader/Header"
import { ScrollView } from 'react-native';
import {
    heightScale,
    widthScale
  }
  from 'globalStyle';
import ButtonComponent from '../../components/buttonComponent';
import InputComponent from '../../components/inputComponent';
import GuidePhotos from "../../components/UserProfileComponent/Photos"
import Services from '../../components/UserProfileComponent/Services';
import Reviews from '../../components/UserProfileComponent/Reviews';
import NumberofPeople from '../../components/UserProfileComponent/NumberOfPeople';
import RequiredSevices from '../../components/UserProfileComponent/RequiredServices';
import Invoice from '../../components/UserProfileComponent/Invoice';


const UserProfile = () => {
return (
   <ScrollView showsVerticalScrollIndicator={false}>
<View style={styles.container}>  
     <View style={{ height:'100%'}}>
     
     <View style={{ height:heightScale(130)}}>
              <CustomHeader userprofile="usama"/> 
         </View>
         <View style={{justifyContent:'center', alignItems:'center', flex:1, bottom:60}}>
              <Image source={{uri:'https://i.pinimg.com/236x/35/cf/10/35cf10d61fe4d10c180560204be44144.jpg'}} style={{height:200, resizeMode:'cover', width:200 , borderRadius:100}}/>
          <View>
              <Text style={styles.profileName}>Muhammad Yaseen</Text>   
          </View>
          <View>
          <Text style={styles.about}>Tour guide in Naran</Text>
          </View>
            
            <View>
                <ButtonComponent backgroundColor="#d908a0" ButtonWidth={200} ButtonHeight={50} borderRadius={20} marginVertical={15}>
                            <Text style={styles.fvrtButtonText}>Add to Favourites</Text>
                    </ButtonComponent>
            </View>


          <View style={{ justifyContent:'center', alignItems:'center' }}>
               <InputComponent  inputHeight={70} inputWidth={350} borderBottomWidth={1} borderBottomColor="grey">
                    <View style={{ justifyContent:'center', alignItems:'center' , width:widthScale(110)}}>
                        <Text style={styles.counts}>335</Text>  
                        <Text style={styles.countColor}>Successful Tours</Text>
                    </View>
                    <View style={{ justifyContent:'center', alignItems:'center' , width:widthScale(110) , borderLeftWidth:1, borderRightWidth:1}}>
                        <Text style={styles.counts}>91</Text>  
                        <Text style={styles.countColor}>Reviews</Text>
                    </View>
                    <View style={{ justifyContent:'center', alignItems:'center' , width:widthScale(110)}}>
                        <Text style={styles.counts}>4</Text>  
                        <Text style={styles.countColor}>Languages</Text>
                    </View>
               </InputComponent>
          </View>
           {/* GuideTour Photos */}
          <View style={{flex:1}}>
                  <GuidePhotos/>
          </View>

          {/* Serivices  */} 
        <View style={{ width:widthScale(330) }}>  
             <Services />
         </View>
           {/* Reviews  */} 
         <View style={{flex:1}}>
            <Reviews/>

         </View>
             {/* Number of People  */} 
         <View style={{flex:1}}>
            <NumberofPeople/>

         </View>
                {/* Required Serivices  */} 
         <View style={{flex:1}}>
            <RequiredSevices/>

         </View>

            {/* Invoices  */} 
         <View style={{flex:1}}>
            <Invoice/>
            <View style={{ justifyContent:'center', alignItems:"center" , marginTop:heightScale(30)}}>
                <ButtonComponent ButtonWidth={150} ButtonHeight={45} backgroundColor="#d908a0" borderRadius={20}>
                  <Text style={{color:'#fff'}}>Book Now</Text>
             </ButtonComponent>
            </View> 
         
            
         </View>

         <View style={{ alignItems:'center' , justifyContent:'center' ,  width:'100%' , marginVertical:heightScale(30)}}>
              <Text style={styles.bottonText}>By clicking Book Now you agree to the</Text> 
            <View style={styles.bottonTextContainer}>
                    <ButtonComponent><Text style={styles.bottonTextSignUp}>Terms and Conditions</Text></ButtonComponent>    
                    <Text style={styles.bottonText}> and </Text> 
                    <ButtonComponent><Text style={styles.bottonTextSignUp}>Privacy Policy</Text></ButtonComponent>  
          </View>
          </View> 




      </View>

       
        
        
            
     </View>
</View>
</ScrollView>   
);
}


export default UserProfile;