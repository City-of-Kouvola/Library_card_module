import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {marginTop: '15%', alignSelf: 'center'},
  largeHeaderText: {
    fontFamily: 'Times New Roman',
    fontSize: 45,
    textTransform: 'uppercase',
  },
  smallHeaderText: {
    fontFamily: 'Arial',
    fontSize: 32,
    paddingLeft: 50,
    letterSpacing: 2,
  },
  loginDescription: {fontFamily: 'Arial', padding: 20, fontSize: 16},
  loginLibraryLink: {
    alignSelf: 'center',
    color: 'blue',
    marginBottom: 10,
  },
  loginContainer: {
    flex: 1,
  },
  loginForm: {
    alignItems: 'center',
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  loginImage: {
    position: 'absolute',
    top: '15%',
    left: '5%',

    zIndex: -1,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  loginButton: {
    width: 250,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#212121',
  },
  loginText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
  },
  logoutButton: {
    width: 250,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#212121',
    position: 'absolute',
    bottom: 10,
  },
  logoutText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
  },
  libraryCardContainer: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  rotatedContainer: {
    transform: [{rotate: '90deg'}],
    height: Dimensions.get('window').width * 0.9,
    width: Dimensions.get('window').height * 0.9,
    justifyContent: 'center',
    borderWidth: 5,
    borderRadius: 40,
  },
  libraryCard: {
    marginBottom: '20%',
  },
  holderName: {
    textAlign: 'center',
    fontSize: 18,
  },
});
