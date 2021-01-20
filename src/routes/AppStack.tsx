import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';
import Splash from '../pages/Splash';
import Onboarding from '../pages/Onboarding';
import Onboarding2 from '../pages/Onboarding2';
import SuccessRegister from '../pages/SuccessRegister';
import SuccessRescuePassword from '../pages/SuccessRescuePassword';
import SuccessSavedForm from '../pages/SuccessSavedForm';
import SignIn from '../pages/SignIn';
import SignUpName from '../pages/SignUpName';
import SignUpEmail from '../pages/SignUpEmail';
import ForgotPassword from '../pages/ForgotPassword';
import ProfileCreate from '../pages/ProfileCreate';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }} >
        <Screen name="Landing" component={Landing} />
        <Screen name="GiveClasses" component={GiveClasses} />
        <Screen name="Study" component={StudyTabs} />
        <Screen name="Splash" component={Splash} />
        <Screen name="Onboarding" component={Onboarding} />
        <Screen name="Onboarding2" component={Onboarding2} />
        <Screen name="SuccessRegister" component={SuccessRegister} />
        <Screen name="SuccessRescuePassword" component={SuccessRescuePassword} />
        <Screen name="SuccessSavedForm" component={SuccessSavedForm} />
        <Screen name="SignIn" component={SignIn} />
        <Screen name="SignUpName" component={SignUpName} />
        <Screen name="SignUpEmail" component={SignUpEmail} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
        <Screen name="ProfileCreate" component={ProfileCreate} />
      </Navigator>
    </NavigationContainer>
  )
}
export default AppStack;