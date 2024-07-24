/* eslint-disable prettier/prettier */
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config/app-theme';
import {useStoreCounter} from '../../store/counter-store';

export const SettingsScreen = () => {
  const incrementBy = useStoreCounter(state => state.incrementBy);
  const count = useStoreCounter(state => state.count);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: XXX</Text>

      <Pressable
        onPress={() => incrementBy(count)}
        style={styles.primaryButton}>
        <Text style={styles.title}>+1</Text>
      </Pressable>

      <Pressable style={styles.primaryButton}>
        <Text style={styles.title}>-1</Text>
      </Pressable>
    </View>
  );
};
