import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { WebView } from 'react-native-webview';

function App(): React.JSX.Element {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'http://localhost:3000' }} // 원하는 웹페이지 URL로 변경
      />
    </SafeAreaView>
  );
}

export default App;
