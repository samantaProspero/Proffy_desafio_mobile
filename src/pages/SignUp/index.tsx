import React, { useState } from 'react';
import { View, Image, ImageBackground, Text, TextInput, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { BorderlessButton, RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import IntroImg from '../../assets/images/Intro.png';
import OnbordBgImage from '../../assets/images/Background.png';

import backIcon from '../../assets/images/icons/back.png'
import Landing from '../Landing';
import SignIn from '../SignIn';
// import SignUpEmail from '../SignUpEmail';
import styles from './styles';
import api from '../../services/api';
import { useAuth } from '../../contexts/auth';


function SignUp (){
  
  const { signUp, loadingAuth } = useAuth();

  const [name, setName] = useState('');
  const [lastName, SetLastName] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  async function handleSign(){
    signUp(name, lastName, email, password)
    navigate('SuccessRegister')
  }



  const { navigate } = useNavigation();
  function handleGoBack() {
    navigate('SignIn');
  }
  // function handleGoNext(){
  //   navigate('SignIn')
  // }

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == 'ios' ? "padding" : "height"}
    // style={styles.container}
    >
    <ScrollView style={{width: "100%"}}>
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
          value= {lastName}
          onChangeText={text => SetLastName(text)}
          />
          <TextInput
          style={styles.input}
          placeholder="Email"
          value= {email}
          autoCapitalize="none"
          onChangeText={text => SetEmail(text)}
          />
          <TextInput
          style={styles.input}
          placeholder="************"
          autoCapitalize="none"
          value= {password}
          onChangeText={text => SetPassword(text)}
          secureTextEntry={true}
          />

          <RectButton onPress={handleSign} style={[styles.button, styles.buttonSecondary]}>
            {
              loadingAuth ? (
                <ActivityIndicator size={20} color="FFF" />
              ):(
                <Text style={[styles.buttonText, styles.buttonTextSecondary]}>Próximo</Text>
              )
            }
          </RectButton>
        </View>
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}
export default SignUp;