import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { TabNav } from './src/components/TabNav';
import { Task } from './src/components/Task';
import { colors } from './src/helpers/colors';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Task/>
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
