
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/ExploreScreen"
import CustomHeader from '../components/CustomHeader/Header';
const Stack = createStackNavigator();

function StackNavigator() {
  return (
  
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen}  />
     
        
      </Stack.Navigator>
    
  );
}

export default StackNavigator