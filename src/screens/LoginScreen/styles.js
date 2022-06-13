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
         justifyContent:'center',
         alignItems:'center'
    },
    textConatiner:{
         alignItems:'center',
    
    },
    logoContainer:{
        justifyContent:'center',
        marginHorizontal:20,
        paddingTop:25,
        flexDirection:'row',
    
    
    },
    logoImage:{
        height:heightScale(40) ,
         width:widthScale(40),
          marginHorizontal:widthScale(20)
    },
    bottonTextContainer:{
        backgroundColor:"#2081b5",
        flexDirection:'row',
        height:heightScale(70),
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    bottonText:{
        color:'#fff',
        fontSize:18
    },
    bottonTextSignUp:{
         color:'#fff',
        fontSize:18
    }
    
    });

    export default styles