import React from 'react';
import {View, Text, TouchableOpacity, Alert, Image} from 'react-native';
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
        <View style={styles.libraryCard}>
          <Text style={styles.holderName}>{holderName}</Text>
          <Barcode
            text={cardNumber}
            width={3}
            height={90}
            value={cardNumber}
            format={'CODE39'}
          />
        </View>
        <Text style={styles.libraryCardDescription}>
          {locales.libraryCardDescription.fi}
        </Text>

        <TouchableOpacity style={styles.logoutButton} onPress={confirmLogout}>
          <Text style={styles.logoutText}>{locales.logoutButton.fi}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.libraryCardImage}
          resizeMode={'contain'}
          source={require('../../../assets/img/background.png')}
        />
      </View>
    </View>
  );
};
