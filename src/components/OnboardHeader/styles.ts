import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f0f0f7'
  },
  teacherList:{
    marginTop: -40,
  },
  topBar:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    flex:1,
    alignSelf: 'center',
    padding:80,
  },
  banner:{
    width: 120,
    height: 120,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  number:{
    fontSize: 40,
    lineHeight:44,
    color: '#6a6180',
    opacity: 0.16,
    marginLeft: 40,
    marginTop: 80
  },
  description:{
    width: 206,
    fontSize: 24,
    lineHeight:34,
    color: '#6a6180',
    marginLeft: 40,
    marginTop: 40

  },
  goicon:{
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 60
  }
})
export default styles;