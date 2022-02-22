import {StyleSheet, Dimensions, Platform} from 'react-native';

const HeaderFont =
  Platform.OS === 'ios' ? 'GT Pressura Mono LC' : 'GT-Pressura-Mono-LC-Bold';
const textFont = 'Roboto';

export const styles = StyleSheet.create({
  headerContainer: {marginTop: '2%', alignSelf: 'center'},
  largeHeaderText: {
    fontFamily: 'Times New Roman',
    fontSize: 45,
    textTransform: 'uppercase',
  },
  smallHeaderText: {
    fontFamily: textFont,
    fontSize: 32,
    paddingLeft: 45,
    letterSpacing: 2,
  },
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
  loginImage: {
    position: 'absolute',
    top: '15%',
    left: '5%',
    zIndex: -1,
    opacity: 0.5,
  },
  errorMessage: {
    color: 'red',
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

  logoutButton: {
    width: '45%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#212121',
    position: 'absolute',
    bottom: 10,
    left: '5%',
  },
  buttonText: {
    fontFamily: textFont,
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
  },
  libraryCardContainer: {
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  rotatedContainer: {
    transform: [{rotate: '90deg'}],
    height: Dimensions.get('window').width * 0.99,
    width: Dimensions.get('window').height * 0.9,
    justifyContent: 'center',
  },
  libraryCard: {
    marginBottom: '20%',
  },
  libraryCardDescription: {
    fontFamily: textFont,
    fontSize: 21,
    width: '60%',
    position: 'absolute',
    padding: 35,
    paddingLeft: 45,
    top: '45%',
  },
  imageContainer: {
    position: 'absolute',
    ...Platform.select({
      ios: {
        left:
          Dimensions.get('window').width > 400
            ? Dimensions.get('window').height * 0.26
            : Dimensions.get('window').height * 0.24,
      },
      android: {
        left:
          Dimensions.get('window').width > 410
            ? Dimensions.get('window').height * 0.2
            : Dimensions.get('window').height * 0.25,
      },
    }),

    top: Dimensions.get('window').height * 0.55,
    height: '30%',
    width: Dimensions.get('window').width > 400 ? '35%' : '30%',
    zIndex: -1,
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
