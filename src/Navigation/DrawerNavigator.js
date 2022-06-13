import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ContactUs from "../screens/ContactUs"
import BottonTabNav from './BottomTabNaviagtor'
import { DrawerContent } from "./DrawerContent"
import Profile from "../screens/UserProfileScreen"

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent ={props=> <DrawerContent {...props}/>} drawerStyle={{height:"90%", borderBottomRightRadius:100}}>
      <Drawer.Screen name="HomeDrawer" component={BottonTabNav} />
      <Drawer.Screen name="Contact Us" component={ContactUs} />
      <Drawer.Screen name="Profile" component={Profile} />
      {/* <Drawer.Screen name="Settings" component={Profile} />
      <Drawer.Screen name="Payments" component={Payments} /> */}

    </Drawer.Navigator>
  );
}

export default MyDrawer;