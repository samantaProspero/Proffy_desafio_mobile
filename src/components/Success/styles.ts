import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    padding: 40
  },
  content:{
    alignSelf: 'flex-start',
    flex:1,
  },
  title:{
    fontFamily:'Archivo_700Bold',
    color: '#ffffff',
    fontSize:32,
    lineHeight: 37,
    textAlign: 'center',
    marginTop: 24,
  },
  description:{
    marginTop: 24,
    color: '#d4c2ff',
    fontSize:14,
    lineHeight: 24,
    fontFamily: 'Poppins_400Regular',
    maxWidth: 240,
    textAlign: 'center',
    alignSelf: 'center',
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
    marginTop: '50%',
    alignSelf: 'center',
  }

});
export default styles;