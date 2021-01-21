import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileCreate from '../pages/ProfileCreate';

const AppStack = createStackNavigator();

const AppRoutes: React.FC =() => (
  <AppStack.Navigator>
    <AppStack.Screen name = "ProfileCreate" component={ProfileCreate} options={{headerShown: false}} />
  </AppStack.Navigator>
);

export default AppRoutes;