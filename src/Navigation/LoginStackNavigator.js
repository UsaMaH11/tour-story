
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../screens/LoginScreen"
import SignUpOptionsScreen from "../screens/SignupScreen/SignupOptions"
import TouristSignupScreen from "../screens/SignupScreen/SignupTourist"
import TourGuideSignupScreen from "../screens/SignupScreen/SignupTourGuide"
import TourCompanySignupScreen from "../screens/SignupScreen/TourCompanySignup"
import TourCompanyOrGuideDetailsScreen from "../screens/SignupScreen/TourCompanyandGuideProfile"
import DrawerNavigator from "./DrawerNavigator"
const Stack = createStackNavigator();

function StackNavigator() {
  return (
  
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeStack" component={DrawerNavigator}   />
        <Stack.Screen name="SignUpOptions" component={SignUpOptionsScreen} />
        <Stack.Screen name="TouristSignup" component={TouristSignupScreen} />
        <Stack.Screen name="TourGuideSignup" component={TourGuideSignupScreen} />
        <Stack.Screen name="TourCompanySignup" component={TourCompanySignupScreen} />
        <Stack.Screen name="TourCompanyOrGuideDetails" component={TourCompanyOrGuideDetailsScreen} />
        
      </Stack.Navigator>
    
  );
}

export default StackNavigator