import { StyleSheet } from "react-native"
import {
    heightScale,
    widthScale
  }
  from 'globalStyle';

const styles = StyleSheet.create({
maincontainer:{
    flex:1
},
container:{
width:widthScale(330)
},
headerText:{
    width:widthScale(330),
    paddingVertical:10,
    marginHorizontal:20

}

})


export default styles