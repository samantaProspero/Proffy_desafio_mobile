import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f0f0f7'
  },
  topBar:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    flex:1,
    backgroundColor: '#8257e5',
    alignSelf: 'center',
    padding:60,
  },
  banner:{
    width: 160,
    height: 80,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 85,
    marginBottom: 84,
  },
  formContainer:{
    // backgroundColor: '#ED4C2FF',
    // flex:1
  },
  formTitle:{
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 25,
    marginBottom: 30,
  },
  title:{
    fontSize: 24,
    fontFamily:'Poppins_600SemiBold',
    lineHeight: 34,
    color: '#32264D',
    marginLeft: 32,
    marginTop: 35

  },
  register:{
    fontFamily:'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 24,
    color: '#8257E5',
    textAlign: 'right',
    marginRight: 10,

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
  forgot:{
    fontFamily:'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 24,
    color: '#9C98A6',
    textAlign: 'right',
    marginRight: 32,
    marginTop: 30,

  },
  button:{
    marginVertical: 20,
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