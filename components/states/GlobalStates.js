import React, { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import Firebase from 'shared/Firebase'
import firebase from 'firebase'
const AppContext = createContext();

export function AppWrapper({ children }) {
  const [url, setUrl] = useState({ api: "https://", baseUrl: "https://", myUrl: "https://" });
  const [detailUser, setDetailUser] = useState({ idUser: "", fullname: "", nickname: "", email: "", address: "", roleUser: "", typeLogin: "", picture: "", work: "" });
  const [isLogin, setIsLogin] = useState(1);
  const [menuActive, setMenuActive] = useState();

  useState(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        handleDataUser(user);
      } else {
        setIsLogin(0)
      }
    });
  }, [])
  
  const handleDataUser = (data) => {
    var docRef = firebase.firestore().collection("users").doc(data.uid);
    
    docRef.get().then((doc) => {
      if (doc.exists) {
        setIsLogin(1);
        setDetailUser({
          idUser: data.uid,
          fullname: doc.data().fullname,
          email: data.email,
          address: doc.data().address,
          roleUser: doc.data().roleUser,
          typeLogin: doc.data().typeLogin,
          picture: doc.data().picture,
          work: doc.data().work
        })
      } else {
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }
  
  const state = {
    url, setUrl, isLogin, setIsLogin, detailUser, setDetailUser, menuActive, setMenuActive
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