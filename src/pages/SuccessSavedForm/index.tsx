import React from 'react';

import { useNavigation } from '@react-navigation/native';
import Success from '../../components/Success';


function SuccessSavedForm(){
  const {navigate} = useNavigation();
  function handleNavigateBack(){
    navigate('Onboarding')
  }
  return (
      <Success
      title = 'Cadastro salvo!'
      description='Tudo certo, seu cadastro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp.'
      textButton = 'Fazer Login'
      />
  )
}
export default SuccessSavedForm;