import {StyleSheet, Dimensions, Platform} from 'react-native';

const HeaderFont =
  Platform.OS === 'ios' ? 'GT Pressura Mono LC' : 'GT-Pressura-Mono-LC-Bold';
const textFont = 'Roboto';

export const styles = StyleSheet.create({
  headerContainer: {marginTop: '2%', alignSelf: 'center'},
  loginHeaderImage: {maxWidth: '70%'},
  loginDescription: {
    width: '90%',
    alignSelf: 'center',
    fontFamily: textFont,
    textAlign: 'center',
    padding: 20,
    paddingTop: 0,
    fontSize: 18,
  },
  loginLibraryLink: {
    fontFamily: textFont,
    alignSelf: 'center',
    color: 'blue',
    marginBottom: 10,
  },
  loginContainer: {
    flex: 1,
  },
  loginForm: {
    alignItems: 'center',
    margin: 0,
  },
  loginTitle: {
    fontFamily: HeaderFont,
    fontSize: 28,
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
      },
    }),
  },
  errorMessage: {
    color: '#EB0000',
    backgroundColor: 'white',
    fontSize: 16,
    padding: 12,
    fontWeight: 'bold',
  },
  input: {
    width: 250,
    fontSize: 24,
    height: 58,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  errorInput: {
    width: 250,
    fontSize: 24,
    height: 58,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'red',
    color: 'black',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  loginButton: {
    width: 250,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#212121',
  },
  logoutContainer: {
    justifyContent: "center", 
    alignItems: "center", 
    flex: 1
  },
  logoutButton: {
    height: 50,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#212121',
  },
  buttonText: {
    fontFamily: textFont,
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
  },
  libraryCardContainer: {
    height: '100%',
    flex: 1
  },
  libraryCard: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  libraryCardDescription: {
    fontFamily: textFont,
    fontSize: 21,
    padding: 15,
  },
  imageContainer: {
    justifyContent: "center", 
    alignItems: "center", 
    flex: 1
  },
  libraryCardImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    transform: [{rotate: '90deg'}],
  },
  holderName: {
    textAlign: 'center',
    fontSize: 18,
  },
});
