import React, { useState } from 'react';
import { View, Image, ImageBackground, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import IntroImg from '../../assets/images/Intro.png';
import OnbordBgImage from '../../assets/images/Background.png';

import backIcon from '../../assets/images/icons/back.png'
import Landing from '../Landing';
import SignIn from '../SignIn';
import SignUpEmail from '../SignUpEmail';
import styles from './styles';
import api from '../../services/api';
// import { useAuth } from '../../contexts/auth';


function SignUpName (){
  // const history = useHistory();

  const [name, setName] = useState('');
  const [lastname, SetLastName] = useState('');

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
  function handleGoBack() {
    navigate('SignIn');
  }
  function handleGoNext(){
    navigate('SignUpEmail')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Text style={styles.title}>Crie sua conta gratuita</Text>
        <Text style={styles.description}>
          Basta preencher os dados e você estará conosco.
        </Text>
      </View>
      <View>
        <Text style={styles.formTitle}>01. Quem é você?</Text>
        <View>
          <TextInput
          style={styles.input}
          placeholder="Nome"
          value= {name}
          onChangeText={text => setName(text)}
          />
          <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          value= {lastname}
          onChangeText={text => SetLastName(text)}
          />
          <RectButton onPress={handleGoNext} style={[styles.button, styles.buttonSecondary]}>
            <Text style={[styles.buttonText, styles.buttonTextSecondary]}>Próximo</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}
export default SignUpName;