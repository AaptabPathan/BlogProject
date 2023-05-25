import React,{createContext, useState} from 'react'

export const DataContext = createContext(null);
function ContextProvider({children}) {
  const [account, setAccount] = useState({name: "", username: ""});
  return (
    <DataContext.Provider value={{
      account,
      setAccount
    }}>
       {children}
    </DataContext.Provider>
  )
}

export default ContextProvider