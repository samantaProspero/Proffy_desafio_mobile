import React, { useState } from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import OnboardHeader from '../../components/OnboardHeader';
import Estudar from '../../assets/images/icons/Estudar.png';
import Onboarding2 from '../Onboarding2';




import styles from '../../components/OnboardHeader/styles';

function Onboarding (){

  return (
    <View style={styles.container}>
      <OnboardHeader
        backgroundTopBar = '#8257e5'
        destinationNavigate = 'Onboarding2'
        iconTopBar={(
          <Image source={Estudar} style={styles.banner} />
        )}
      
        title = '01.'
        description = 'Encontre vários professores para ensinar você.'
      />
    </View>
  )
}
export default Onboarding;