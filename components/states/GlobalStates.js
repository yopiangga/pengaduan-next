import React, { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import Firebase from 'shared/Firebase'
import firebase from 'firebase'
const AppContext = createContext();

export function AppWrapper({ children }) {
  const [url, setUrl] = useState({ api: "http://localhost:3000/", baseUrl: "http://localhost:3000/", image: "http://localhost:3000" });
  // const [url, setUrl] = useState({ api: "https://petikdua.store/", baseUrl: "https://petikdua.store/", image: "https://petikdua.store" });
  const [img, setImg] = useState({
    user: "https://firebasestorage.googleapis.com/v0/b/pengaduan-e0f12.appspot.com/o/complaint%2Fuser.png?alt=media&token=21aa41c0-4047-49c4-89b0-da9e7f5bb32a",
    redirectLogin: "https://firebasestorage.googleapis.com/v0/b/pengaduan-e0f12.appspot.com/o/complaint%2Fredirect-login.png?alt=media&token=b4f158d2-f33b-4eff-80f2-65190099c8ff",
    logo: 'https://firebasestorage.googleapis.com/v0/b/pengaduan-e0f12.appspot.com/o/complaint%2Flogo.png?alt=media&token=941c1f1b-041a-4cf9-8b65-7e08251b00a2',
    loading: 'https://firebasestorage.googleapis.com/v0/b/pengaduan-e0f12.appspot.com/o/assets%2Floading.svg?alt=media&token=74158414-48bf-4948-a22f-545c75836da7',
    image: 'https://firebasestorage.googleapis.com/v0/b/pengaduan-e0f12.appspot.com/o/assets%2Fimage.png?alt=media&token=9b275ce3-182d-4b1e-b21c-4e99d8e97d0e',
    
  })
  const [detailUser, setDetailUser] = useState({ idUser: "", fullname: "", nickname: "", email: "", address: "", roleUser: "", typeLogin: "", picture: "", job: "" });
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
          job: doc.data().job
        })
      } else {
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }

  const state = {
    url, setUrl, img, setImg, isLogin, setIsLogin, detailUser, setDetailUser, menuActive, setMenuActive, complaints, setComplaints, allReport, setAllReport, allUser, setAllUser
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