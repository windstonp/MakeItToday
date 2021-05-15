import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { colors } from './src/helpers/colors';
import Home from './src/pages/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background}/>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: StatusBar.currentHeight ?? 50,
  },
});
