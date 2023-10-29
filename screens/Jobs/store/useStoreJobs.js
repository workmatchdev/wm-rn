import { create } from 'zustand';
const store = (set) => ({
    jobs: [],
    setJobs: (jobs) => set((state) => ({ ...state, jobs })),
    deleteJob: (id) => set((state) => {
        return ({ ...state, jobs: state.jobs.filter(job => job._id !== id) }) 
    }),
    updateJob: (newJob) => set((state) => {
        return ({ ...state, jobs: state.jobs.map(job => {
            if(job._id === newJob._id ) return newJob
            return job
        }) }) 
    }),
})
export default create(store);