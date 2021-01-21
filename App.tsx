import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
// import AppStack from './src/routes/AppStack';
import { AuthProvider } from './src/contexts/auth';

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular, 
    Archivo_700Bold,
    Poppins_400Regular, 
    Poppins_600SemiBold
  })
  if(!fontsLoaded){
    return <AppLoading />;
  }else{
    return (
      <>
        <NavigationContainer>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </NavigationContainer>
        {/* <AppStack/> */}
        <StatusBar style="light" />
      </>
    );
  }
}

