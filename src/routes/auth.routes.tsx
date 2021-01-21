import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';
import Splash from '../pages/Splash';
import Onboarding from '../pages/Onboarding';
import Onboarding2 from '../pages/Onboarding2';
import SuccessRegister from '../pages/SuccessRegister';
import SuccessRescuePassword from '../pages/SuccessRescuePassword';
import SuccessSavedForm from '../pages/SuccessSavedForm';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';


const AuthStack = createStackNavigator();

const AuthRoutes: React.FC =() => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Landing" component={Landing} options={{headerShown: false}} />
    <AuthStack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
    <AuthStack.Screen 
    name="SignUp" 
    component={SignUp} 
    options ={{ headerShown: false}}/>
    <AuthStack.Screen name="SuccessRegister" component={SuccessRegister} options={{headerShown: false}} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false}} />
    <AuthStack.Screen name="GiveClasses" component={GiveClasses} options={{headerShown: false}} />
    <AuthStack.Screen name="Study" component={StudyTabs} options={{headerShown: false}} />
    <AuthStack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
    <AuthStack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}} />
    <AuthStack.Screen name="Onboarding2" component={Onboarding2} options={{headerShown: false}} />
    <AuthStack.Screen name="SuccessRescuePassword" component={SuccessRescuePassword} options={{headerShown: false}} />
    <AuthStack.Screen name="SuccessSavedForm" component={SuccessSavedForm} options={{headerShown: false}} />

  </AuthStack.Navigator>
);

export default AuthRoutes;