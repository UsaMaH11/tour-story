import React from 'react';
import {View, Text , StyleSheet , ImageBackground , TextInput, ScrollView} from 'react-native';
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

const SignupTourGuide = ({navigation}) => {
return (
  
<View style={styles.container}>
    
<View style={styles.dataContainer}>
 
<ImageBackground source={require('../../../assets/blue.jpg')} style={ styles.backimagecontianer}>
<ScrollView showsVerticalScrollIndicator={false}>  
      <View style={{justifyContent:'center', alignItems:'center' , marginVertical:20}}>
      <View style={styles.headerText}>
         <Text style={styles.headerTextStyle}> Create Account </Text>
         <Text  style={styles.headerTextStyle2} > (Tour Guide)</Text>
         <Text style={styles.headerTextdes}>Please fill all the required information and submit your profile.
             we will review your infromation and contact you via your provided email.
         </Text>
     </View>  
           {/* TourGuide Guide form  starts here*/}
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
           
           <View style={{flexDirection:'row' , alignItems:"center"}}>
            <Icon name="camera" size={20} color="#fff"/>
            <Text style={styles.bottonText}>Attach front and back of your CNIC</Text>

           </View>
           <View style={{flexDirection:'row' , alignItems:"center"}}>
            <ButtonComponent  ButtonHeight={50} ButtonWidth={widthScale(140)} borderRadius={20} marginHorizontal={10} backgroundColor="#d908a0" marginVertical={20}>
                    <Text  style={styles.buttonText}>
                        Select Images
                    </Text>
                </ButtonComponent>
                <ButtonComponent  ButtonHeight={50} ButtonWidth={widthScale(140)} borderRadius={20} marginHorizontal={10} backgroundColor="#d908a0" marginVertical={20}>
                    <Text  style={styles.buttonText}>
                        Upload
                    </Text>
                </ButtonComponent>
           </View>
          
           <View>
          <InputComponent placeholder="CNIC Number  81100-1111111-1" inputHeight={50}
            inputWidth={widthScale(300)} 
            placeholderColor="#fff"
            borderLeftColor="#fff"
            borderLeftWidth={1}
            borderBottomColor="#fff"
            borderBottomWidth={1}
            color="#fff"
            >
                  <Icon name="book-information-variant" size={20} color="#fff"/>
         </InputComponent>
          </View>

          <View>
          <InputComponent placeholder="Complete Address" inputHeight={50}
            inputWidth={widthScale(300)} 
            placeholderColor="#fff"
            borderLeftColor="#fff"
            borderLeftWidth={1}
            borderBottomColor="#fff"
            borderBottomWidth={1}
            color="#fff"
            >
                  <Icon name="home" size={20} color="#fff"/>
         </InputComponent>
          </View>

          <View style={{flexDirection:'row' , alignItems:"center"}}>
            <Icon name="camera" size={20} color="#fff"/>
            <Text style={styles.bottonText}>Attach front and back images of addrees</Text>

           </View>
           <View style={{flexDirection:'row' , alignItems:"center"}}>
            <ButtonComponent  ButtonHeight={50} ButtonWidth={widthScale(140)} borderRadius={20} marginHorizontal={10} backgroundColor="#d908a0" marginVertical={20}>
                    <Text  style={styles.buttonText}>
                        Select Images
                    </Text>
                </ButtonComponent>
                <ButtonComponent  ButtonHeight={50} ButtonWidth={widthScale(140)} borderRadius={20} marginHorizontal={10} backgroundColor="#d908a0" marginVertical={20}>
                    <Text  style={styles.buttonText}>
                        Upload
                    </Text>
                </ButtonComponent>
           </View>

           <View style={{ alignItems:"center" , width:widthScale(330)}}>
            <Text style={styles.bottonText}>*Attach Images of current utility bill or bank statement not older than 3 months. The doucment should be in the 
            applicants name.</Text>

           </View>




           {/* TourGuide Guide form  ends  here*/}



         {/* SignUp button and Bottom text  starts here*/}

    
            <ButtonComponent
              onPress={()=>{navigation.navigate("TourCompanyOrGuideDetails")}}
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
      </ScrollView>  
</ImageBackground>

   </View> 
 </View>
 
);
}



export default SignupTourGuide;