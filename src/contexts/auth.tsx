import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';


import api from '../services/api';

interface User {
  id: string;
  name?: string | null;
  lastName?: string | null;
  email: string;
  password: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  loadingAuth: boolean;
  signIn(email: string, password: string ): void;
  signUp(name: string, lastName: string, email: string, password: string ): void;
  signOut(): void;

}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);



  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@Happy:user');
      const storagedToken = await AsyncStorage.getItem('@Happy:token');
      
      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
        setLoading(false)
      }
    setLoading(false)
    }
    loadStorageData()
  },[]);


  // const { navigate } = useNavigation();
  const signUp = async (name: string, lastName: string, email: string, password: string) => {


    
    setLoadingAuth(true)
    api.post('users',{
      name,
      lastName,
      email,
      password
    }).then(()=>{
      alert('Cadastro realizado com sucesso')
    }).catch((error: string) => {
      alert('Erro no cadastro');
      setLoadingAuth(false)
    })
    setLoadingAuth(false)
    // navigate('SignIn');
      // const response = await api.post('/login', {email, password})
      // const{ user, token } = response.data
      // setUser(user)

      
      // api.defaults.headers.Authorization = `Baerer ${token}`;
      
      // await AsyncStorage.setItem('@Happy:user', JSON.stringify(user));
      // await AsyncStorage.setItem('@Happy:token', token);
  }
  const signIn = async (email: string, password: string) => {
    setLoadingAuth(true)
    try {
      const response = await api.post('/login', {email, password})
      const{ user, token } = response.data
      setUser(user)
      
      api.defaults.headers.Authorization = `Baerer ${token}`;
      
      await AsyncStorage.setItem('@Happy:user', JSON.stringify(user));
      await AsyncStorage.setItem('@Happy:token', token);
      setLoadingAuth(false)

      alert('Login realizado com sucesso!')
    } catch (error) {
      alert('Login deu ruim!')
      setLoadingAuth(false)

    }
  }

  function signOut() {
    AsyncStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, signIn, loading, signOut, signUp, loadingAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export {AuthProvider, useAuth};
