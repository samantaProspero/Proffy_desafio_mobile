import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f0f0f7'
  },
  topBar:{
    paddingTop: 100,
    paddingBottom: 60,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 32,
  },
  title:{
    fontFamily:'Poppins_600SemiBold',
    fontSize: 32,
    lineHeight: 42,
    color: '#32264D',
    marginTop: 35,
    maxWidth: 300,
  },
  description:{
    fontFamily:'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
    color: '#6A6180',
    maxWidth: 230,
    marginTop: 30,
  },

  formTitle:{
    fontFamily:'Poppins_600SemiBold',
    fontSize: 24,
    lineHeight: 26,
    color: '#32264D',
    marginLeft: 32,
    marginBottom: 50,
    maxWidth: 300,
    alignSelf: 'flex-start',
    },

  input:{
    width: 330,
    height:64,
    // marginHorizontal: 32,
    paddingLeft: 32,
    borderColor: '#E6E6F0',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf:'center',
  },
  button:{
    marginVertical: 50,
    backgroundColor: '#DCDCE5',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:8,
    marginHorizontal: 32,
  },
  buttonSecondary:{
    backgroundColor: '#04D361',
  },
  buttonText:{
    fontFamily:'Archivo_700Bold',
    color: '#9C98A6',
    fontSize:16,
    lineHeight: 26,
  },
  buttonTextSecondary:{
    color: '#FFFFFF',
  },
})
export default styles;