/* eslint-disable prettier/prettier */

import {create} from 'zustand';
export interface CounterState {
  count: number;
  incrementBy: (value: number) => void;
}

export const useStoreCounter = create<CounterState>()(set => ({
  count: 1,
  incrementBy: () => set(state => ({count: state.count + 1})),
}));
