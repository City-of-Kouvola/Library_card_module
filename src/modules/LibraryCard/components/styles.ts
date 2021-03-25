import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  logoutButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  libraryCard: {
    transform: [{rotate: '90deg'}],
    position: 'absolute',
    top: '35%',
    right: '-25%',
    backgroundColor: '#ffffff',
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  holderName: {
    textAlign: 'center',
    fontSize: 18,
  },
});
