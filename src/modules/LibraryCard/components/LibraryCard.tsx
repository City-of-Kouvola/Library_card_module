import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
} from 'react-native';
import Barcode from 'react-native-barcode-builder';
import {locales} from '../../../config/locales';
import {styles} from './styles';

interface IProps {
  cardNumber: string;
  holderName?: string;
  logout: () => void;
}

export const LibraryCard = ({cardNumber, holderName, logout}: IProps) => {
  const confirmLogout = () => {
    Alert.alert(locales.confirmLogout.fi, '', [
      {
        text: locales.cancel.fi,
        style: 'cancel',
      },
      {text: locales.confirm.fi, onPress: () => logout()},
    ]);
  };

  return (
    <View style={styles.libraryCardContainer}>
      <View style={styles.rotatedContainer}>
        <View style={styles.libraryCard} accessible={true} accessibilityLabel={'Kirjaston Viivakoodi'}>
          <Text style={styles.holderName}>{holderName}</Text>
          <Barcode
            text={cardNumber}
            width={2.2}
            height={90}
            value={cardNumber}
            format={'CODE39'}
          />
        </View>
        <Text style={styles.libraryCardDescription}>
          {locales.libraryCardDescription.fi}
        </Text>

        <TouchableOpacity
          accessible
          accessibilityLabel={'Paina kirjautuaksesi ulos'}
          style={styles.logoutButton}
          onPress={confirmLogout}
          activeOpacity={0.6}>
          <Text accessible style={styles.buttonText}>
            {locales.logoutButton.fi}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.libraryCardImage}
          resizeMode={'contain'}
          source={require('../../../assets/img/villirilli.png')}
        />
      </View>
    </View>
  );
};
