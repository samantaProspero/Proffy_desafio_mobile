import React from 'react';

import { useNavigation } from '@react-navigation/native';
import Success from '../../components/Success';


function SuccessRegister(){
  const {navigate} = useNavigation();
  function handleNavigateBack(){
    navigate('Onboarding')
  }
  return (
      <Success
      title = 'Cadastro Concluído!'
      description='Agora você faz parte da plataforma Proffy.'
      textButton = 'Fazer Login'
      />
  )
}
export default SuccessRegister;