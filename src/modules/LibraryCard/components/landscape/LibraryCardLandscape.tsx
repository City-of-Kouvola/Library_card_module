import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { locales } from "../../../../config/locales";
import Barcode from "react-native-barcode-builder";


interface ILandscapeProps {
  cardNumber: string;
  confirmLogout: () => void;
  holderName?: string;
  isTimeout: boolean;
}

const LibraryCardLandscape = ({cardNumber, confirmLogout, holderName, isTimeout}: ILandscapeProps) => {
  return (
    <View
      style={styles.libraryCardContainer}
      importantForAccessibility={isTimeout ? "no-hide-descendants" : "yes"}>    
      <View style={styles.rotatedContainer}>
        <View style={styles.libraryCard}>
          <Text accessible={true} style={styles.holderName}>{holderName}</Text>
          <View accessible={true} accessibilityLabel={locales.libraryBarCode.fi} accessibilityRole={'image'}>
            <Barcode
              text={cardNumber}
              width={2.2}
              height={90}
              value={cardNumber}
              format={'CODE39'}
            />
          </View>
        </View>
        <Text style={styles.libraryCardDescription} accessible accessibilityRole={'text'}>
          {locales.libraryCardDescription.fi}
        </Text>
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
      <View style={styles.imageContainer}>
        <Image
          style={styles.libraryCardImage}
          accessibilityRole={'image'}
          resizeMode={'contain'}
          source={require('../../../../assets/img/villirilli.png')}
        />
      </View>
    </View>
  )
}

export default LibraryCardLandscape;