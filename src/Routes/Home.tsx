import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Main from "../pages/Home/Main";
import Settings from "../pages/Settings";

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      backBehavior="firstRoute"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Settings2" component={Settings} />
    </Tab.Navigator>
  );
}
