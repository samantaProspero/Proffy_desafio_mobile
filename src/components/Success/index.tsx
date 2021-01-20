import React from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
import giveClassesBgImage from '../../assets/images/give-classes-background.png'

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Done from '../../assets/images/icons/done.png';

interface SuccessProps{
  title:string;
  description:string;
  textButton:string;
  destination:string;
}


const Success: React.FC<SuccessProps> = ({title, description, textButton, destination}) => {
  const {navigate} = useNavigation();
  function handleNavigateBack(){
    navigate(destination)
  }
  return (
    <View style={styles.container}>
      <ImageBackground 
        resizeMode="contain" 
        source={giveClassesBgImage} 
        style={styles.content}
      >
      <Image source={Done} style={styles.banner} />        
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>


      </ImageBackground>
      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}> {textButton} </Text>
      </RectButton>
    </View>
  )
}
export default Success;