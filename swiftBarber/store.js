import { create } from 'zustand'

export const dataStore= create((set)=>({
    userId : null,
    barberId: null,
    appointementDate:"",
    userMail:"",
    setUserId : (state)=>set({userId:state}),
    setBarberId : (state)=>set({barberId:state}),
    setAppointementDate : (state)=>set({date:state}),
    setUserMail : (state)=>set({userMail:state}),
}))