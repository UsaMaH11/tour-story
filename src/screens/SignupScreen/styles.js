import { StyleSheet} from "react-native"

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
    bottonTextContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    bottonText:{
        color:'#fff',
        fontSize:18,
        textAlign:'center'
    },
    bottonTextSignUp:{
         color:'yellow',
        fontSize:18
    },
    inputsContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center', 
    },
    headerText:{
        backgroundColor:'#fff',
        width:"100%",
        height:heightScale(150),
        justifyContent:'center',
        alignItems:'center',
        borderBottomEndRadius:70,
        borderBottomStartRadius:70,
        marginBottom:40,
        textAlign:'center'
    },
    headerTextStyle:{
        color:'#116784',
        fontSize:20,
        fontWeight:"800"
    },
    headerTextStyle2:{
        color:'#116784',
        fontSize:18,
        textAlign:'center'
    },
    headerTextdes:{
        fontSize:14,
        color:'grey',
        width:widthScale(330),
        textAlign:'center'

    },
    profileImagesContainer:{
        width:widthScale(375),
        flexDirection:'row',
        borderTopEndRadius:70,
        
        height:heightScale(150),
        justifyContent:'flex-end'
    },
    profileImage:{
         width:widthScale(375/2),
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:'#d908a0',
         borderTopStartRadius:90,
    },
    TourImages:{
        width:widthScale(375/2),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'grey',
        borderTopEndRadius:90,
   },
   ImageText:{
       color:'#fff',
       alignItems:'center',
       textAlign:'center'
   }

    
});

    export default styles;