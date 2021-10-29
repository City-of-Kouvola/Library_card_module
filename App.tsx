import React from 'react';
import {View} from 'react-native';
import {LibraryCardModule} from './src/modules/LibraryCard';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff', marginTop: '5%'}}>
      <LibraryCardModule />
    </View>
  );
};

export default App;
