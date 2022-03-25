import { createContext, useState } from "react";

export const LoginContext=createContext(null);

const ContextProvider=({children})=>{
     const [account,setAccountvalue]=useState("");

     return (
         <LoginContext.Provider 
         value={{account,setAccountvalue}}
         >
             {children}
         </LoginContext.Provider>
     )
}

export default ContextProvider;