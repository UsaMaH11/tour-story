import React from 'react';
import {View, Text , StyleSheet, ImageBackground , Image} from 'react-native';
import InputComponent from '../../components/inputComponent';

import {
    font,
    color,
    heightScale,
    widthScale,
    widthScaleSub,
    square,
    width,
    height,
  }
  from 'globalStyle';
import ButtonComponent from '../../components/buttonComponent';
import styles from './styles'

const LoginScreen = ({navigation}) => {

return (
    <>
<View style={styles.container}>
    <View style={styles.dataContainer}>
     <ImageBackground source={require('../../../assets/blue.jpg')} style={ styles.backimagecontianer}>
         <View style={{ justifyContent:'center',  width:widthScale(330) , height:heightScale(150)}}>
             {/* <Text style={{fontSize:30, color:'#fff' , marginBottom:40 , fontWeight:'bold' , textAlign:'center'}}>Pakistan</Text> */}
          </View> 
      
      
         <View style={{ alignItems:'center'}}>
          <View style={{paddingVertical:heightScale(10)}}>
           <InputComponent placeholder="email" inputHeight={50}
            inputWidth={widthScale(330)} 
            marginHorizontal={30}
            backgroundColor="#fff"
            borderRadius={20}/>
           </View>

           <View style={{paddingVertical:heightScale(10), justifyContent:'center', alignItems:"center"}}>
           <InputComponent placeholder="password" inputHeight={50}
            inputWidth={widthScale(330)} 
            marginHorizontal={30}
            backgroundColor="#fff"
            borderRadius={20}/>
           </View>
           </View>


           <View style={{paddingTop:heightScale(40), alignItems:'center'}}>
               <ButtonComponent ButtonHeight={50} ButtonWidth={widthScale(330)} borderRadius={20} marginHorizontal={20} backgroundColor="#d908a0"
               onPress={()=>{navigation.navigate('HomeStack')}}>
                      <Text style={{alignSelf:'center' , color:'#fff' , fontSize:16}}>
                            Log In
                        </Text>
                 </ButtonComponent>
           </View>
           <View style={[styles.textConatiner , {paddingTop:heightScale(10)}]}>
                <Text style={{color:'#fff' , fontSize:18 , marginTop:heightScale(10)}}>  or </Text>
                   <Text style={{color:'#fff' ,  fontSize:18 , marginTop:heightScale(10)}}> Connect with social  Account</Text>
           </View>

           <View style={styles.logoContainer}>
           <ButtonComponent ButtonHeight={50} ButtonWidth={widthScale(60)}>
                    <Image source={require("../../../assets/fb.png")} style={styles.logoImage}/>
           </ButtonComponent>
           <ButtonComponent ButtonHeight={50} ButtonWidth={widthScale(60)}>
                    <Image source={require("../../../assets/twitter.png")} style={styles.logoImage}/>
           </ButtonComponent>
           <ButtonComponent ButtonHeight={50} ButtonWidth={widthScale(60)}>       
                    <Image source={require("../../../assets/google.png")} style={styles.logoImage}/>
           </ButtonComponent>
           </View>
           
          
     </ImageBackground> 
     
     </View>
     
 </View>
 <View style={styles.bottonTextContainer}>
              <Text style={styles.bottonText}>Donot have an Account?</Text> 
            <ButtonComponent onPress={()=>{navigation.navigate('SignUpOptions')}}><Text style={styles.bottonTextSignUp}>Sign Up</Text></ButtonComponent>  
          </View>
 </>
);
}



export default LoginScreen;