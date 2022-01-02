import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon, { IconProps } from "../components/Icon";
import gruvbox from "../theme/colors";

import Today from "../pages/Home/Today";
import Habits from "../pages/Home/Habits";
import Tasks from "../pages/Home/Tasks";
import Checklists from "../pages/Home/Checklists";
import Box from "../components/Box";

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      backBehavior="firstRoute"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => (
          <TabBarIconSetup
            routeName={route.name}
            focused={focused}
            color={color}
          />
        ),
        tabBarStyle: {
          backgroundColor: gruvbox.primary.background,
        },
        tabBarActiveTintColor: gruvbox.normal.cyan,
        tabBarInactiveTintColor: gruvbox.primary.foreground,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Today" component={Today} />
      <Tab.Screen name="Habits" component={Habits} />
      <Tab.Screen name="Tasks" component={Tasks} />
      <Tab.Screen name="Checklists" component={Checklists} />
    </Tab.Navigator>
  );
}

interface TabBarIconSetupProps {
  routeName: string;
  focused?: boolean;
  color?: string;
}
function TabBarIconSetup({ routeName, focused, color }: TabBarIconSetupProps) {
  let iconName: IconProps["name"] = "home";

  if (routeName == "Today") iconName = "home";
  else if (routeName == "Habits") iconName = "sun";
  else if (routeName == "Tasks") iconName = "check";
  else if (routeName == "Checklist") iconName = "check-square";

  if (focused) {
    color = gruvbox.normal.cyan;
  }

  return (
    <Box backgroundColor="mainBackground" flex={1} alignItems="center">
      <Icon name={iconName} color={color} />
    </Box>
  );
}
