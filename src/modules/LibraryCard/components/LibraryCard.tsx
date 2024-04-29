import React, { useEffect, useState } from 'react';
import {
  Alert,
  AccessibilityInfo,
  Platform,
  useWindowDimensions
} from 'react-native';
import {locales} from '../../../config/locales';
import { getBrightnessLevel, setBrightnessLevel } from "@adrianso/react-native-device-brightness";
import LibraryCardPortrait from './portrait/LibraryCardPortrait';
import LibraryCardLandscape from './landscape/LibraryCardLandscape';

interface IProps {
  cardNumber: string;
  holderName?: string;
  logout: () => void;
  isFocused?: boolean;
}

export const LibraryCard = ({cardNumber, holderName, logout, isFocused}: IProps) => {

  const [isTimeout, setIsTimeout] = useState(true)

  const {width} = useWindowDimensions();

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
  
  return (width > 350) ? (
    <LibraryCardPortrait
      {...{cardNumber, confirmLogout, isTimeout, holderName}}
    />
  ) : (
    <LibraryCardLandscape
      {...{cardNumber, confirmLogout, isTimeout, holderName}}
    />
  );
};
