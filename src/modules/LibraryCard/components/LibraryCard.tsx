import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Barcode from 'react-native-barcode-builder';
import {locales} from '../../../config/locales';
import {styles} from './styles';

interface IProps {
  cardNumber: string;
  holderName?: string;
  logout: () => void;
}

export const LibraryCard = ({cardNumber, holderName, logout}: IProps) => {
  return (
    <View style={styles.libraryCard}>
      {cardNumber !== '' ? (
        <View style={{flex: 1}}>
          <Text style={styles.holderName}>{holderName}</Text>
          <Barcode
            text={cardNumber}
            width={3}
            height={100}
            value={cardNumber}
            format={'CODE39'}
          />
        </View>
      ) : (
        <></>
      )}
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text>{locales.logoutButton.fi}</Text>
      </TouchableOpacity>
    </View>
  );
};
