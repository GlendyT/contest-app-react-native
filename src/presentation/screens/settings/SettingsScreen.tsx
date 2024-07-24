/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config/app-theme';
import {useCounterStore} from '../../store/counter-store';
import {useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const incrementBy = useCounterStore(state => state.incrementBy);
  const count = useCounterStore(state => state.count);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Contador: ${count}`,
    });
  }, [count]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {count}</Text>

      <Pressable
        onPress={() => incrementBy(+1)}
        style={styles.primaryButton}>
        <Text style={styles.title}>+1</Text>
      </Pressable>

      <Pressable
        onPress={() => incrementBy(-1)}
        style={styles.primaryButton}>
        <Text style={styles.title}>-1</Text>
      </Pressable>
    </View>
  );
};
