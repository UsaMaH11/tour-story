import * as React from 'react';
import HomeStackNav from "../Navigation/HomeStackNavigator"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '../components/Icon';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{activeTintColor:'#d908a0'}}>
      <Tab.Screen name="Explore" component={HomeStackNav} 
      options={{
          tabBarIcon:({size, color})=>
            (
              <Icon name="compass-outline" color={color} size={size}/>
          )
      }}
      />
      <Tab.Screen name="Favpurites" component={HomeStackNav} 
        
        options={{
            
            tabBarIcon:({size, color})=>
              (
                <Icon name="heart-outline" color={color} size={size}/>
            ),
            
        }}
      />
      <Tab.Screen name="History" component={HomeStackNav} 
       options={{
        tabBarIcon:({size, color})=>
          (
            <Icon name="history" color={color} size={size}/>
        )
    }}
      />
      <Tab.Screen name="Contact Us" component={HomeStackNav} 
       options={{
        
        tabBarIcon:({size, color})=>
          (
            <Icon MaterialIconName="contact-support" color={color} size={size}/>
        ),
        
      
    }}
      />
    </Tab.Navigator>
  );
}


export default MyTabs