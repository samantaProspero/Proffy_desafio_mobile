import React, { useState } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import ExitIcon from '../../assets/images/icons/Sair.png';
import { useAuth } from '../../contexts/auth';


import styles from './styles'

function ProfileCreate (){
  const { signOut } = useAuth();
  const [favorites, setFavorites] = useState([])

  function loadFavorites (){
    AsyncStorage.getItem('favorites').then(response => {
      if(response){
        const favoritedTeachers = JSON.parse(response)
        setFavorites(favoritedTeachers);
      }
    })
  }
  useFocusEffect(()=>{
    loadFavorites();
  })
  function handleSignout(){
    signOut()
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={handleSignout} style={styles.signOutButton}>
        <Image source={ExitIcon} />
      </RectButton>
      <PageHeader title="Que incrível que você quer dar aulas."/>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => {
          return (
            <TeacherItem 
              key={teacher.id}
              teacher={teacher}
              favorited={true}
            />
          )
        })}

      </ScrollView>

    </View>
  )
}
export default ProfileCreate;