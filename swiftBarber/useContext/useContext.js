import React, { createContext, useState } from "react";
const MyContext = createContext();
const MyProvider = ({children}) => {
const[userName,setUserName] = useState('');
  return (
    <MyContext.Provider
     value={{ userName,setUserName }}
     >
      {children}
    </MyContext.Provider>
  );
8
};

export { MyProvider, MyContext };