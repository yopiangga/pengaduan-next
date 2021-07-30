import React, { useEffect, useState } from 'react';

import { createContext, useContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [url, setUrl] = useState({ api: "https://", baseUrl: "https://", myUrl: "https://" });
//   const [detailUser, setDetailUser] = useState({ firstname: "", lastname: "", fullname: "", email: "", telp: "", school: "", graduate: "" });
  const [isLogin, setIsLogin] = useState(1);

  useState(() => {
      
  }, [])

  const state = {
    url, setUrl, isLogin, setIsLogin
  }

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}