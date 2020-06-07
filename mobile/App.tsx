import React from 'react';
import {AppLoading} from 'expo';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {Ubuntu_700Bold} from '@expo-google-fonts/ubuntu';
import {Roboto_400Regular, Roboto_500Medium, useFonts } from '@expo-google-fonts/roboto';

import Routes from './src/routes';
// import Home from './src/pages/Home';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading></AppLoading>;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent></StatusBar>
      <Routes></Routes>
    </>
  );
}
