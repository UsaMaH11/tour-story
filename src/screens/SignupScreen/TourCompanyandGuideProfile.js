import React,{useState , useRef} from 'react';
import {View, Text , ImageBackground , ScrollView } from 'react-native';
import ButtonComponent from '../../components/buttonComponent';
import {Picker} from '@react-native-picker/picker';
import { CheckBox } from 'react-native-elements'

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
import Language from '../../components/SignupScreenComponents/Language';

const SignupTourist = ({navigation}) => {

  const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [dropDownValue, setDropDownValue]  = useState()
   
return (
  
<View style={styles.container}>
    
<View style={styles.dataContainer}>
 
<ImageBackground source={require('../../../assets/blue.jpg')} style={ styles.backimagecontianer}>
<ScrollView showsVerticalScrollIndicator={false}>  
      <View style={{justifyContent:'center', alignItems:'center' , marginVertical:20}}>
      <View style={{  
        backgroundColor:'#fff',
        width:"100%",
        height:heightScale(300),
        justifyContent:'center',
        alignItems:'center',
        borderBottomEndRadius:70,
        borderBottomStartRadius:70,
        marginBottom:60}}>
        <View style={{ paddingVertical:40 , justifyContent:'center', alignItems:'center' , marginTop:20}}> 
         <Text style={styles.headerTextStyle}> Create Profile </Text>
         <Text  style={styles.headerTextStyle2} > (Tour Guide and Tour Company)</Text>
         <Text style={[styles.headerTextdes, {marginBottom:40}]}>Build your profile to let people know your expertise.Add details about yhe tours you are providing along with 
         prices.
         </Text>
         </View>   
         <View style={styles.profileImagesContainer}>
             <View style={styles.profileImage}>
               <ButtonComponent> 
              <Icon name="camera" size={50} color="#fff"/>
              </ButtonComponent> 
              <Text style={styles.ImageText}>Select a profile picture.you can upload a logo if you are a company.</Text> 
              </View>
              <View style={styles.TourImages}>
                  <ButtonComponent>
              <Icon name="camera" size={50} color="#fff"/>
              </ButtonComponent>
              <Text style={styles.ImageText}>Add pictures of your tours
              places you have taken people to.add upto 5 pictures.</Text> 
              </View>
         </View>
     </View>  
           {/* Company Profile details  starts here*/}
           <View>
           
              <InputComponent inputHeight={60} inputWidth={330} borderBottomWidth={1} borderBottomColor="#fff">
               
              </InputComponent>  

              <InputComponent inputHeight={270} inputWidth={330} borderBottomWidth={1} borderBottomColor="#fff">
                   <Language/>
              </InputComponent>  

            <InputComponent inputHeight={60} inputWidth={330} borderBottomWidth={1} borderBottomColor="#fff">
            <View style={{justifyContent:'space-between', flexDirection:'row', alignItems:"center"}}>
            <Text style={{color:'#fff'}}>Ticket to the site included?</Text>
                 <CheckBox 
                checked={toggleCheckBox}
                onPress={() => setToggleCheckBox(!toggleCheckBox)}
              /> 
              <Text style={{color:'#fff'}}>Yes</Text>
              <CheckBox 
                checked={toggleCheckBox}
                onPress={() => setToggleCheckBox(!toggleCheckBox)}
              /> 
              <Text style={{color:'#fff'}}>No</Text>
              
               </View>     
              </InputComponent>  
           </View>
               
         
           
          


           {/* Company Profile details  ends  here*/}



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
      </ScrollView>  
</ImageBackground>

   </View> 
 </View>
 
);
}



export default SignupTourist;