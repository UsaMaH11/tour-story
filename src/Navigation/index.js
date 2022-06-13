
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import LoginStackNavigator from "./LoginStackNavigator"

function AppNavigation() {
  return (
    <NavigationContainer>
      <LoginStackNavigator/>
    </NavigationContainer>
  );
}

export default AppNavigation