import React, { useState } from 'react';
import { View, Image, ImageBackground, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import IntroImg from '../../assets/images/Intro.png';
import OnbordBgImage from '../../assets/images/Background.png';

import styles from './styles';
import api from '../../services/api';
// import { useAuth } from '../../contexts/auth';


function SignIn (){
  // const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // async function handleSign(event: FormEvent){
  //   try {
  //     event.preventDefault();

  //     const response = await api.post('/login', {email, password})
  //     const{ user, token } = response.data

  //     signIn(user, token)
  //     alert('Login realizado com sucesso!')
  //     history.push('/classes')
  
  //   } catch (error) {
  //     alert('Login deu ruim!')
  //     history.push('/')

  //   }
  // }



  const { navigate } = useNavigation();
  function handleGo() {
    navigate('Landing');
  }

  function handleNavigateToRegister(){
    navigate('SignUpName')
  }
  function handleNavigateToForgot(){
    navigate('ForgotPassword')
  }
  function handleSubmit(){
    navigate('ProfileCreate')
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
          value= {email}
          onChangeText={setEmail}
          />
          <TextInput
          style={styles.input}
          placeholder="Senha"
          value= {password}
          onChangeText={setPassword}
          />
          <Text onPress={handleNavigateToForgot} style={styles.forgot}>
            Esqueci minha senha
          </Text>
          <RectButton onPress={handleSubmit} style={[styles.button, styles.buttonSecondary]}>
            <Text style={[styles.buttonText, styles.buttonTextSecondary]}>Entrar</Text>
          </RectButton>


        </View>
      </View>
    </View>
  )
}
export default SignIn;