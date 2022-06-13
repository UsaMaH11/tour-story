import React from 'react';
import {View, Text , StyleSheet , ImageBackground} from 'react-native';
import ButtonComponent from '../../components/buttonComponent';

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
const SignupOptions = ({navigation}) => {
return (
<View style={styles.container}>
<View style={styles.dataContainer}>
<ImageBackground source={require('../../../assets/blue.jpg')} style={ styles.backimagecontianer}>
      <View style={{justifyContent:'center', alignItems:'center'}}>
             
          <Text style={{ color:'#fff', fontSize:20, paddingVertical:20, fontWeight:'700'}}>You would like to Sign Up as?</Text>  
            <ButtonComponent 
            onPress={()=>{navigation.navigate("TouristSignup")}}
            ButtonHeight={50} ButtonWidth={widthScale(300)} borderRadius={20} marginHorizontal={20} backgroundColor="#d908a0" marginVertical={10} >
                <Text style={styles.buttonText}>
                     Tourist
                </Text>
            </ButtonComponent>
            <ButtonComponent 
            onPress={()=>{navigation.navigate("TourGuideSignup")}}
             ButtonHeight={50} ButtonWidth={widthScale(300)} borderRadius={20} marginHorizontal={20} backgroundColor="#d908a0" marginVertical={10}>
                <Text  style={styles.buttonText}>
                     Tour Guide
                </Text>
            </ButtonComponent>
            <ButtonComponent  onPress={()=>{navigation.navigate("TourCompanySignup")}}  ButtonHeight={50} ButtonWidth={widthScale(300)} borderRadius={20} marginHorizontal={20} backgroundColor="#d908a0" marginVertical={10}>
                <Text  style={styles.buttonText}>
                     Tour Company
                </Text>
            </ButtonComponent>
      </View>
</ImageBackground>
   </View> 
 </View>
);
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:'100%',
        width:'100%',
       
    },
    dataContainer:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    backimagecontianer:{
        height:"100%",
         width:"100%" , 
         justifyContent:'center'
    },
    buttonText:{
       alignSelf:'center' , 
       color:'#fff' ,
        fontSize:16
    },
});

export default SignupOptions;