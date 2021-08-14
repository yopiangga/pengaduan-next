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

  const [complaints, setComplaints] = useState();
  const [allReport, setAllReport] = useState();
  const [allUser, setAllUser] = useState();

  const getComplaints = (items) => {
    let dataComplaints = [];
    for (let item in items.val()) {
        dataComplaints.push(items.val()[item]);
    }
    setComplaints(dataComplaints)
  }

  const errorComplaints = () => {

  }

  const getDataReport = () => {
    const v_allReport = firebase.firestore().collection("report");
    var arr_allReport = [];

    v_allReport.get().then((res) => {
      res.forEach((doc) => {
        arr_allReport.push({
          id: doc.data().key,
          idUser: doc.data().idUser,
          idComplaint: doc.data().idComplaint,
          text: doc.data().text,
        })
      });
      setAllReport(arr_allReport)
    });
  }

  const getDataUsers = () => {
    const v_all_user = firebase.firestore().collection("users");
    var arr_all_user = [];

    v_all_user.get().then((res) => {
      res.forEach((doc) => {
        arr_all_user.push({
          idUser: doc.data().idUser,
          fullname: doc.data().fullname,
          picture: doc.data().picture
        })
      });
      setAllUser(arr_all_user)
    });
  }

  useState(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        handleDataUser(user);
      } else {
        setIsLogin(0)
      }
    });

    const dbComplaints = firebase.database().ref();
    dbComplaints.child("complaint").on('value', getComplaints, errorComplaints);
    getDataReport();
    getDataUsers();

  }, [])

  const handleDataUser = (data) => {
    var docRef = firebase.firestore().collection("users").doc(data.uid);

    docRef.get().then((doc) => {
      if (doc.exists) {
        setIsLogin(1);
        setDetailUser({
          idUser: data.uid,
          fullname: doc.data().fullname,
          nickname: doc.data().nickname,
          job: doc.data().job,
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
    url, setUrl, isLogin, setIsLogin, detailUser, setDetailUser, menuActive, setMenuActive, complaints, setComplaints, allReport, setAllReport, allUser, setAllUser
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