import React from 'react';
import {View, Text , StyleSheet , ImageBackground , TextInput} from 'react-native';
import ButtonComponent from '../../components/buttonComponent';

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

const SignupTourist = ({navigation}) => {
return (
<View style={styles.container}>
    
<View style={styles.dataContainer}>
 
<ImageBackground source={require('../../../assets/blue.jpg')} style={ styles.backimagecontianer}>
      <View style={{justifyContent:'center', alignItems:'center'}}>
      <View style={styles.headerText}>
         <Text style={styles.headerTextStyle}> Create Account </Text>
         <Text  style={styles.headerTextStyle2} > (Tourist)</Text>
         <Text style={styles.headerTextdes}>Please fill all the required information and submit your profile.
             we will review your infromation and contact you via your provided email.
         </Text>
     </View>  
           {/* Tourist form  starts here*/}
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
          <InputComponent placeholder="Password" inputHeight={50}
            inputWidth={widthScale(300)} 
            placeholderColor="#fff"
            borderLeftColor="#fff"
            borderLeftWidth={1}
            borderBottomColor="#fff"
            borderBottomWidth={1}
            color="#fff"
            >
                  <Icon name="lock" size={20} color="#fff"/>
         </InputComponent>
          </View>
          <View style={styles.inputsContainer}>
            <InputComponent placeholder="Gender" inputHeight={50}
            inputWidth={widthScale(140)} 
            placeholderColor="#fff"
            borderLeftColor="#fff"
            borderLeftWidth={1}
            marginHorizontal={10}
            borderBottomColor="#fff"
            borderBottomWidth={1}
            color="#fff"
            > 
             <Icon name="gender-male-female" size={20} color="#fff"/>
            </InputComponent>

           <InputComponent placeholder="Age"
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
                  <Icon name="heart-outline" size={20} color="#fff"/>
         </InputComponent>
           </View>
           
           <View>
          <InputComponent placeholder="City" inputHeight={50}
            inputWidth={widthScale(300)} 
            placeholderColor="#fff"
            borderLeftColor="#fff"
            borderLeftWidth={1}
            borderBottomColor="#fff"
            borderBottomWidth={1}
            color="#fff"
            >
                  <Icon name="map-marker-question-outline" size={20} color="#fff"/>
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


         {/* SignUp button and Bottom text  starts here*/}

    
            <ButtonComponent 
             onPress={()=>{navigation.navigate("HomeStack")}}
            ButtonHeight={50} ButtonWidth={widthScale(300)} borderRadius={20} marginHorizontal={20} backgroundColor="#d908a0" marginVertical={20}>
                <Text  style={styles.buttonText}>
                     Sign Up
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
</ImageBackground>
   </View> 
 </View>
);
}



export default SignupTourist;