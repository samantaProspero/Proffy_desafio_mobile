import React, { useState } from 'react';
import { View, Image, ImageBackground, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import IntroImg from '../../assets/images/Intro.png';
import backIcon from '../../assets/images/icons/back.png'
import OnbordBgImage from '../../assets/images/Background.png';

import SuccessRescuePassword from '../SuccessRescuePassword';
import SignUpName from '../SignUpName';
import styles from './styles';
import api from '../../services/api';
// import { useAuth } from '../../contexts/auth';


function ForgotPassword (){
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



  const { navigate, goBack } = useNavigation();
  function handleGoBack() {
    goBack();
  }

  function handleSubmit(){
    navigate('SuccessRescuePassword')
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
          <BorderlessButton onPress={handleGoBack}>
            <Image source={backIcon} resizeMode="contain" />
          </BorderlessButton>
          <Text style={styles.title}>Esqueceu sua senha?</Text>
          <Text style={styles.description}>Não esquenta, </Text>
          <Text style={styles.description}>vamos dar um jeito nisso.</Text>
        </View>
        <View>
          <TextInput
          style={styles.input}
          placeholder="Email"
          value= {email}
          onChangeText={setEmail}
          />
          <RectButton onPress={handleSubmit} style={[styles.button, styles.buttonSecondary]}>
            <Text style={[styles.buttonText, styles.buttonTextSecondary]}>Entrar</Text>
          </RectButton>


        </View>
      </View>
    </View>
  )
}
export default ForgotPassword;