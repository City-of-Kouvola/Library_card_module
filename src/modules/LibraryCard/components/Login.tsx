import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Linking,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  AccessibilityInfo,
} from 'react-native';
import {styles} from './styles';
import {locales} from '../../../config/locales';

interface IProps {
  saveDetails: (authCardNumber: string, authHolderName: string) => void;
}

export const Login = ({saveDetails}: IProps) => {
  const [inputCardNumber, setInputCardNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const passwordInput = useRef<TextInput>(null);

  const authenticate = async () => {
    try {
      if (!inputCardNumber || !password) {
        AccessibilityInfo.announceForAccessibility(locales.missingInputs.fi);
        setErrorMessage(locales.missingInputs.fi);
        return;
      }
      setIsLoading(true);

      const response = await fetch(
        'https://kyyti.koha-suomi.fi/api/v1/auth/session',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
          },
          body: `cardnumber=${inputCardNumber}&password=${password}`,
        },
      );

      if (response.status !== 201) {
        setIsLoading(false);
        AccessibilityInfo.announceForAccessibility(locales.invalidCredentials.fi);
        setErrorMessage(locales.invalidCredentials.fi);
        setInputCardNumber('');
        setPassword('');
        return;
      }
      const responseJSON = await response.json();
      const holderName = `${responseJSON.firstname} ${responseJSON.surname}`;
      saveDetails(inputCardNumber, holderName);
      AccessibilityInfo.announceForAccessibility(locales.userLoggedIn.fi);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log('Error: ', e);
    }
  };

  const openLink = async () => {
    const url = 'https://' + locales.libraryLink.fi;
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) await Linking.openURL(url);
  };

  return (
    <ScrollView
      style={styles.loginContainer}
      contentContainerStyle={{flexGrow: 1}}
      bounces={false}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        enabled
        behavior={Platform.OS === 'ios' ? 'position' : 'padding'}>
        <View style={styles.headerContainer}>
          <Image
            resizeMode="contain"
            accessibilityLabel={locales.libraryLogo}
            accessibilityRole={'image'}
            style={styles.loginHeaderImage}
            source={require('../../../assets/img/yleisten-kirjastojen-tunnus-fi.png')}
          />
        </View>
        <Text style={styles.loginDescription} accessibilityRole={'text'}>
          {locales.loginDescription.fi}
        </Text>
        <Text
          accessible
          accessibilityLabel={`${locales.openLinkTo} ${locales.libraryLink.fi}`}
          accessibilityRole={'text'}
          style={styles.loginLibraryLink}
          onPress={openLink}>
          {locales.libraryLink.fi}
        </Text>
        {!isLoading ? (
          <View style={styles.loginForm}>
            <Text style={styles.loginTitle} accessibilityRole={'text'}>{locales.loginTitle.fi}</Text>
            <Text
              style={styles.errorMessage}
               accessibilityLabel={errorMessage}
               accessibilityRole={'text'}
               >{errorMessage}</Text>
            <TextInput
              accessible
              accessibilityLabel={locales.insertCardNumber}
              maxLength={20}
              style={errorMessage ? styles.errorInput : styles.input}
              onChangeText={inputCardNumber =>
                setInputCardNumber(inputCardNumber)
              }
              placeholder={locales.cardNumber.fi}
              placeholderTextColor="#8b9cb5"
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => {
                passwordInput.current?.focus();
              }}
            />
            <TextInput
              accessible
              accessibilityLabel={locales.givePassword}
              maxLength={50}
              style={errorMessage ? styles.errorInput : styles.input}
              onChangeText={password => setPassword(password)}
              placeholder={locales.password.fi}
              placeholderTextColor="#8b9cb5"
              secureTextEntry
              autoCapitalize="none"
              ref={passwordInput}
              onSubmitEditing={authenticate}
            />
            <TouchableOpacity
              accessible
              accessibilityLabel={locales.pressToLogin}
              style={styles.loginButton}
              accessibilityRole={'button'}
              onPress={authenticate}
              activeOpacity={0.6}>
              <Text accessible style={styles.buttonText}>
                {locales.loginButton.fi}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <ActivityIndicator size="large" color="#000" accessibilityLabel={locales.waitingResponse}/>
        )}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
