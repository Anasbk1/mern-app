import React, { createContext, useState } from "react";
const MyContext = createContext();
const MyProvider = ({children}) => {
const[userName,setUserName] = useState('');
const [barberName,setBarberName] = useState ('');
  return (
    <MyContext.Provider
     value={{ userName,setUserName,barberName,setBarberName }}
     >
      {children}
    </MyContext.Provider>
  );
8
};

export { MyProvider, MyContext };