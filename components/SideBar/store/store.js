import create from 'zustand';

const useStore = create((set) => ({
    visibleSideBar: false,
    setVisibleSideBar: (visible) => set(() => ({ visibleSideBar: visible })),
}));

export default useStore;