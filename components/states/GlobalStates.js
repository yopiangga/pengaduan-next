import React, { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import Firebase from 'shared/Firebase'
import firebase from 'firebase'
const AppContext = createContext();

export function AppWrapper({ children }) {
  const [url, setUrl] = useState({ api: "https://", baseUrl: "https://", myUrl: "https://" });
  const [detailUser, setDetailUser] = useState({ idUser: "", fullname: "", email: "", address: "", roleUser: "", typeLogin: "", picture: "", work: "" });
  const [isLogin, setIsLogin] = useState(1);

  useState(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // console.log(user)
        setIsLogin(1);
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

  // console.log(detailUser)

  const state = {
    url, setUrl, isLogin, setIsLogin, detailUser, setDetailUser
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