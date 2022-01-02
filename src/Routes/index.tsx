import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import Home from './Home';
import Settings from '../pages/Settings';
import CreateType from '../pages/Create/Type';
import CreateSelectCategory from '../pages/Create/Category';
import EditHabitHows from '../pages/Create/EditHabitHows';
import EditHabit from '../pages/Edit/Habit';
import EditTask from '../pages/Edit/Task';
import EditChecklist from '../pages/Edit/Task';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateType" component={CreateType} />
        <Stack.Screen name="CreateSelectCategory" component={CreateSelectCategory} />
        <Stack.Screen name="CreateEditHabitHows" component={EditHabitHows} />
        <Stack.Screen name="CreateEdithabits" component={EditHabit} />
        <Stack.Screen name="CreateEditTask" component={EditTask} />
        <Stack.Screen name="CreateEditChecklist" component={EditChecklist} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
