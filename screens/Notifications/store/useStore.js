import { create } from 'zustand';
let store = (set) => ({
    notifications: [], 
    setNotifications: (notifications) => set((state) => ({ ...state, notifications })),

})
export default create(store);