import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
let store = (set) => ({
    user: null,
    setUser: (user) => set((state) => ({ ...state, user })),
    token: null,
    setToken: (token) => set((state) => ({ ...state, token })),
    membership: null,
    setMembership: (membership) => set((state) => ({ ...state, membership })),
    isActiveMembership: false,
    setIsActiveMembership: (isActiveMembership) => set((state) => ({ ...state, isActiveMembership })),
    isFreeMembership: false,
    setIsFreeMembership: (isFreeMembership) => set((state) => ({ ...state, isFreeMembership })),

})
store = persist(store, { name: 'loginStore', getStorage: () => AsyncStorage })
export default create(store);