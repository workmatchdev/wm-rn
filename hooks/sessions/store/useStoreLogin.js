import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
let store = (set) => ({
    user: null,
    setUser: (user) => set((state) => ({ ...state, user })),
    token: null,
    setToken: (token) => set((state) => ({ ...state, token })),
})
store = persist(store, { name: 'loginStore', getStorage: () => AsyncStorage })
export default create(store);