/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MyAndroidView from './MyAndroidView';
import MyIOSView from './MyIOSView';
import RTNMyDownloader from 'rtn-my-downloader/js/NativeMyDownloader';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {Platform.OS === 'android' ? <MyAndroidView /> : <MyIOSView />}
      <TouchableOpacity
        onPress={() => {
          RTNMyDownloader?.downloadFile(
            'https://firebasestorage.googleapis.com/v0/b/spot-fb6be.appspot.com/o/sample.pdf?alt=media&token=c3c4e245-4a8b-496a-900f-08e8c2a3389b',
            'myfile',
            'pdf',
          );
        }}>
        <Text>Download file</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// yarn add ./RTNMyNotification

// node myapp/node_modules/react-native/scripts/generate-codegen-artifacts.js \
//   --path myapp/ \
//   --outputPath myapp/RTNMyNotification/generated/

export default App;
