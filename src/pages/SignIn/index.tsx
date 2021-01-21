import React, { useState, FormEvent } from 'react';
import { View, Image, ImageBackground, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import IntroImg from '../../assets/images/Intro.png';
import OnbordBgImage from '../../assets/images/Background.png';

import styles from './styles';
import api from '../../services/api';
import { useAuth } from '../../contexts/auth';

function SignIn (){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useAuth();

  function handleSign(){
    signIn(email, password);
  }

  const { navigate } = useNavigation();
  function handleGo() {
    navigate('Landing');
  }

  function handleNavigateToRegister(){
    navigate('SignUp')
  }
  function handleNavigateToForgot(){
    navigate('ForgotPassword')
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
      <ImageBackground 
        resizeMode="center" 
        source={OnbordBgImage} 
        style={styles.content}
      >
      <Image source={IntroImg} style={styles.banner} />
      </ImageBackground>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formTitle}>
          <Text style={styles.title}>Fazer Login</Text>
          <Text onPress={handleNavigateToRegister} style={styles.register}>
            Criar uma conta
          </Text>
        </View>
        <View>
          <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          value= {email}
          onChangeText={ (text) => setEmail(text)}
          />
          <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCapitalize="none"
          value= {password}
          onChangeText={setPassword}
          secureTextEntry={true}
          />
          <Text onPress={handleNavigateToForgot} style={styles.forgot}>
            Esqueci minha senha
          </Text>
          <TouchableOpacity onPress={handleSign} style={[styles.button, styles.buttonSecondary]}>
            <Text style={[styles.buttonText, styles.buttonTextSecondary]}>Entrar</Text>
          </TouchableOpacity>


        </View>
      </View>
    </View>
  )
}
export default SignIn;