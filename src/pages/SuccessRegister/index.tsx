import React from 'react';

import { useNavigation } from '@react-navigation/native';
import Success from '../../components/Success';


function SuccessRegister(){
  return (
      <Success
      title = 'Cadastro Concluído!'
      description='Agora você faz parte da plataforma Proffy.'
      textButton = 'Fazer Login'
      destination= 'SignIn'
      />
  )
}
export default SuccessRegister;