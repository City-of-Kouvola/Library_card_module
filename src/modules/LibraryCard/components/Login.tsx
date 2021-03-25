import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
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
    if (!inputCardNumber || !password) {
      setErrorMessage(locales.missingInputs.fi);
      return;
    }
    setIsLoading(true);
    /*     setTimeout(() => {
      saveDetails(inputCardNumber, 'Pekka Testaaja');
    }, 3000); */

    const response = await fetch(
      'https://kirjasto.kyyti.fi/api/v1/app.pl/api/v1/auth/session',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `cardnumber=${inputCardNumber}&password=${password}`,
      },
    );

    if (response.status !== 201) {
      setErrorMessage('Väärä kortin numero tai salasana');
      setIsLoading(false);
      return;
    }

    const responseJSON = await response.json();
    const holderName = `${responseJSON.firstname.split(' ')[0]} ${
      responseJSON.surname
    }`;

    console.log(responseJSON);
    saveDetails(inputCardNumber, holderName);
    setIsLoading(false);
  };

  return (
    <View style={styles.loginContainer}>
      {!isLoading ? (
        <>
          <Text style={styles.loginTitle}>{locales.loginTitle.fi}</Text>
          <Text>{errorMessage}</Text>
          <TextInput
            style={styles.input}
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
            style={styles.input}
            onChangeText={password => setPassword(password)}
            placeholder={locales.password.fi}
            placeholderTextColor="#8b9cb5"
            secureTextEntry={true}
            autoCapitalize="none"
            ref={passwordInput}
            onSubmitEditing={authenticate}
          />
          <TouchableOpacity style={styles.loginButton} onPress={authenticate}>
            <Text>{locales.loginButton.fi}</Text>
          </TouchableOpacity>
        </>
      ) : (
        <ActivityIndicator size="large" color="#000" />
      )}
    </View>
  );
};
