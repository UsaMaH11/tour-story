import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
conatiner:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%'

},
profileName:{
    fontSize:22,
    fontWeight:'600',
    color:'#186fbd'
},
about:{
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center'
},
fvrtButtonText:{
    fontSize:18,
    fontWeight:'600',
    color:'#fff'
},
counts:{
    fontWeight:"600",
    fontSize:20,
    color:"grey"
},
countColor:{
    color:'#d908a0'
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
     color:'#000',
     fontSize:18,
     textAlign:'center'
 },
 bottonTextSignUp:{
      color:'#d908a0',
     fontSize:18
 },

})


export default styles