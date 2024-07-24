/* eslint-disable prettier/prettier */
import {create} from 'zustand';

export interface ProfileState {
  name: string;
  email: string;
  changeProfile: (name: string, email: string) => void;
}

export const useProfileStore = create<ProfileState>()((set, get) => ({
  name: 'John Doe',
  email: 'johndoe@gmail.com',
  changeProfile: (name: string, email: string) => {
    console.log(get());
    set({name, email});
  },
}));
