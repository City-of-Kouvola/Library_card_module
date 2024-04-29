import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  AccessibilityInfo,
  Platform
} from 'react-native';
import Barcode from 'react-native-barcode-builder';
import {locales} from '../../../config/locales';
import {styles} from './styles';
import { getBrightnessLevel, setBrightnessLevel } from "@adrianso/react-native-device-brightness";

interface IProps {
  cardNumber: string;
  holderName?: string;
  logout: () => void;
  isFocused?: boolean;
}

export const LibraryCard = ({cardNumber, holderName, logout, isFocused}: IProps) => {

  const [isTimeout, setIsTimeout] = useState(true)

  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(locales.userLoggedIn.fi);
    setTimeout(() => {
      setIsTimeout(false)
    }, 5000);
  }, [])  

  useEffect(() => {

    if (!isFocused) {
      return;
    }

    if (Platform.OS === "android") {

      getBrightnessLevel().then(brightness => {

        /* 
          Android devices have two types of brightnesses: "system brightness" and "app brightness". 
          Only the "app brightness" can be changed from the react-native-device-brightness package.
          Since "system brightness" can override the app brightness, 
          the "app brightness" must be set to a different value every time it is changed in order for it to work.
        */
  
        const newBrightness = (brightness !== 1) ? 1 : 0.99;
        setBrightnessLevel(newBrightness);
  
      }) 

    } else {
        
        /* 
          For some reason, the `setBrightnessLevel` does not always update the brightness correctly 
          on iOS the same way it works on android, so using a "dirty hack" for fixing this.
          This is probably caused by some kind of error between React Native and the native iOS module.
        */

        setBrightnessLevel(1).then(() => {
          setBrightnessLevel(0.99)
        })

    };

  }, [isFocused]);

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
    <View 
      style={styles.libraryCardContainer}
      importantForAccessibility={isTimeout ? "no-hide-descendants" : "yes"}
    >             
          <View style={styles.libraryCard}>
            <Text style={styles.holderName}>{holderName}</Text>
            <View accessibilityLabel={locales.libraryBarCode.fi} accessibilityRole={'image'}>
              <Barcode
                text={cardNumber}
                width={1.65}
                height={90}
                value={cardNumber}
                format={'CODE39'}
              />
            </View>
            <Text style={styles.libraryCardDescription} accessible accessibilityRole={'text'}>
              {locales.libraryCardDescription.fi}
            </Text>
          </View>
          <View style={styles.imageContainer}>
              <Image
                style={styles.libraryCardImage} 
                accessibilityRole={'image'}
                resizeMode={'contain'}
                source={require('../../../assets/img/villirilli.png')}
              />
          </View>
          <View style={styles.logoutContainer}>
              <TouchableOpacity
                accessible
                accessibilityLabel={locales.pressLogout.fi}
                style={styles.logoutButton}
                accessibilityRole={'button'}
                onPress={confirmLogout}
                activeOpacity={0.6}>
                <Text accessible={false} style={styles.buttonText}>
                  {locales.logoutButton.fi}
                </Text>
              </TouchableOpacity>
          </View>
    </View>
  );
};
