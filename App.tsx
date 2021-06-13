import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Dashboard from './src/screens/dashboard';

export default function App() {
  return (
    <View>
      <Dashboard />
    </View>
  );
}