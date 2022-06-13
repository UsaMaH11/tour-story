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
        textAlign:'center',
        alignSelf:"flex-start",
        
    },
    note:{
        width:widthScale(300),  
    },
    singleText:{
        paddingVertical:20,
        fontSize:18,
        color:'#fff'
    },
    noteContainer:{
        width:widthScale(300),
        borderColor:'#fff',
        borderWidth:1,
        borderRadius:5
    },
    noteText:{
        paddingVertical:10,
        fontSize:14,
        color:'#fff' ,
        paddingHorizontal:4
         
    }

    
});

    export default styles;