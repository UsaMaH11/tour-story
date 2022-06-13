import React from 'react';
import {View, Text , StyleSheet , ImageBackground , TextInput} from 'react-native';
import ButtonComponent from '../../components/buttonComponent';
import Header from "../../components/CustomHeader/Header"

import {
    font,
    color,
    heightScale,
    widthScale,
    widthScaleSub,
    
  }
  from 'globalStyle';
 import styles from "./styles"
import InputComponent from '../../components/inputComponent';
import Icon from '../../components/Icon';

const ContactUs = ({navigation}) => {
return (
<View >
{/* <ImageBackground source={require('../../../assets/blue.jpg')} style={ styles.backimagecontianer}> */}
<View style={{ height:'100%'}}>
<Header style={{height:'100%', flex:1}} userprofile="usama">
      <View style={{justifyContent:'center', alignItems:'center'}}>
     
           {/* Tourist form  starts here*/}
           <View>
          <InputComponent placeholder="Reason for query"
           inputHeight={50}
            inputWidth={widthScale(300)} 
            placeholderColor="#fff"
            borderBottomColor="#fff"
            borderBottomWidth={1}
            color="#fff"
            >
         </InputComponent>
          </View>

       <View style={styles.inputsContainer}>
            <InputComponent 
            placeholder="first Name" inputHeight={50}
            inputWidth={widthScale(140)} 
            placeholderColor="#fff"
            borderLeftColor="#fff"
            borderLeftWidth={1}
            marginHorizontal={10}
            borderBottomColor="#fff"
            borderBottomWidth={1}
            color="#fff"
            >
            <Icon name="human-male-boy" size={20} color="#fff"/>
         </InputComponent>
              

           <InputComponent placeholder="last Name"
            inputHeight={50}
            inputWidth={widthScale(140)} 
            marginHorizontal={10}
            placeholderColor="#fff"
            borderLeftColor="#fff"
            borderLeftWidth={1}
            borderBottomColor="#fff"
            borderBottomWidth={1}
            color="#fff"
            >
         </InputComponent>
           </View>
          <View>
          <InputComponent placeholder="Email" inputHeight={50}
            inputWidth={widthScale(300)} 
            placeholderColor="#fff"
            borderLeftColor="#fff"
            borderLeftWidth={1}
            borderBottomColor="#fff"
            borderBottomWidth={1}
            color="#fff"
            >
           <Icon name="email" size={20} color="#fff"/>
           </InputComponent>
           </View>

          <View>
          <InputComponent placeholder="Contact"
           inputHeight={50}
            inputWidth={widthScale(300)} 
            placeholderColor="#fff"
            borderLeftColor="#fff"
            borderLeftWidth={1}
            borderBottomColor="#fff"
            borderBottomWidth={1}
            color="#fff"
            >
                  <Icon name="phone-hangup-outline" size={20} color="#fff"/>
         </InputComponent>
          </View>
           






           {/* Tourist form  ends  here*/}
           <View style={styles.note}>
               <Text style={styles.singleText}>
                   Please Explain you query.
               </Text>
              <View style={styles.noteContainer}>
                   <Text style={styles.noteText}>
                   The tour starts early in the morning from picking you from hotel.We will leave for breakfast in local market where you can enjoy traditional food and 
                   tea.
                   </Text>
                   <Text style={styles.noteText}>
                   We later leave for grand masjid in the city and move onwords to the market for shoping.lunch is served hot at the top of the mountain will beautiful scenary.
                   </Text>
              </View> 

           </View>


         {/* SignUp button and Bottom text  starts here*/}

    
            <ButtonComponent 
             onPress={()=>{navigation.navigate("HomeStack")}}
            ButtonHeight={50} ButtonWidth={widthScale(300)} borderRadius={20} marginHorizontal={20} backgroundColor="#d908a0" marginVertical={20}>
                <Text  style={styles.buttonText}>
                     Submit
                </Text>
            </ButtonComponent>
           <View style={{ alignItems:'center' , justifyContent:'center' ,  width:'100%'}}>
              <Text style={styles.bottonText}>By clicking Sign Up you agree to the</Text> 
            <View style={styles.bottonTextContainer}>
                    <ButtonComponent><Text style={styles.bottonTextSignUp}>Terms and Conditions</Text></ButtonComponent>    
                    <Text style={styles.bottonText}> and </Text> 
                    <ButtonComponent><Text style={styles.bottonTextSignUp}>Privacy Policy</Text></ButtonComponent>  
          </View>
          </View> 
           {/* SignUp button and Bottom text  ends  here*/}
      </View>
{/* </ImageBackground> */}
</Header>
</View>
</View>
);
}



export default ContactUs;