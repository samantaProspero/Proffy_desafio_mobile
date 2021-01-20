import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40
  },
  content:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',

  },
  title:{
    fontFamily:'Archivo_700Bold',
    color: '#ffffff',
    fontSize:50,
    lineHeight: 60,
    maxWidth: 180
  },
  description:{
    marginTop: 24,
    color: '#d4c2ff',
    fontSize:16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    maxWidth: 240
  },
  okButton:{
    marginVertical: 40,
    backgroundColor: '#04d361',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:8
  },
  okButtonText:{
    fontFamily:'Archivo_700Bold',
    color: '#ffffff',
    fontSize:16,
  },
  banner:{
    marginTop: '90%',
    alignSelf: 'center',
  }

});
export default styles;