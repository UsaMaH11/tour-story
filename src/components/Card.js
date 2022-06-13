import React from 'react';
import {View, StyleSheet} from 'react-native';



const CardComponent = ({cardheight, cardwidth , children}) => {
return (
<View style={styles.container}> 
    <View style={{
        backgroundColor:'#789899',
        height:cardheight,
        width: cardwidth,
        marginTop:10,
        elevation:20,
        borderRadius:20,
        shadowOffset:{
            width:10,
            height:10
        },
        shadowColor:'black'
    }}>
    {children}   
   </View>
</View>
);
}

const styles = StyleSheet.create({
container:{
   
    marginRight:10,
    
}

});

export default CardComponent;