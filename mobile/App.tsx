import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Task } from './src/components/Task';
import { colors } from './src/helpers/colors';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background}/>
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
