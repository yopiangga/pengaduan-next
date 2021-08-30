
import { Loading } from "components/all/Loading";
import { Component, useEffect, useState } from "react";
import logo from 'public/assets/images/logo.png'
import Image from 'next/image';
import Link from 'next/link'
import ilustration1 from 'public/assets/images/ilustration-1.png'
import { tsParticles } from "tsparticles";
import Particles from 'react-particles-js';
import googleImage from 'public/assets/images/google.png'
import firebase from 'firebase'
import $ from 'jquery'
import { useRouter } from "next/router";
import { useAppContext } from "components/states/GlobalStates";

function Main() {

    const { url, setUrl, img, setImg, isLogin, setIsLogin, detailUser, setDetailUser } = useAppContext();
    const [userRegis, setUserRegis] = useState({ idUser: "", fullname: "", email: "", address: "", roleUser: "", typeLogin: "", picture: "" })

    const router = useRouter();

    const options = {
        particles: {
            number: {
                value: 70,
                density: {
                    enable: true,
                    value_area: 400
                }
            },
        }
    }

    const handleChange = (event) => {
        setUserRegis({
            ...userRegis,
            [event.target.name]: event.target.value
        })
    }

    const handleRegisterEmail = (event) => {
        event.preventDefault();
        $('.bg-loading').removeClass('hidden').addClass('flex');
        if (userRegis.fullname == null || userRegis.email == null | userRegis.password == null) {

        } else {
            firebase.auth().createUserWithEmailAndPassword(userRegis.email, userRegis.password)
                .then((res) => {
                    createData(res.user, userRegis.fullname)
                    $('.bg-loading').removeClass('flex').addClass('hidden');
                })
                .catch((error) => {
                    console.log(error)
                    $('.bg-loading').removeClass('flex').addClass('hidden');
                });
        }
    }

    const createData = (data, fullname) => {
        firebase.firestore().collection("users").doc(data.uid.toString()).set({
            fullname: fullname,
            email: data.email,
            address: "",
            roleUser: "2",
            typeLogin: "2",
            picture: "default",
            idUser: data.uid.toString()
        })
            .then(() => {
                setDetailUser({
                    idUser: data.uid,
                    fullname: fullname,
                    email: data.email,
                    address: "",
                    roleUser: "2",
                    typeLogin: "2",
                    picture: "",
                    work: ""
                })
                setIsLogin(1)
                router.push('/')
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });

    }

    const handleAuthGoogle = () => {
        const auth = firebase.auth();
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then((res) => {
                if (res.additionalUserInfo.isNewUser == true) {
                    createDataGoogle(res.user);
                } else {
                    handleDataUser(res.user)
                }

            }).catch((error) => {
                console.log(error)
            });
    }

    const createDataGoogle = (data) => {
        firebase.firestore().collection("users").doc(data.uid.toString()).set({
            fullname: data.displayName,
            email: data.email,
            address: "",
            roleUser: "2",
            typeLogin: "1",
            picture: data.photoURL,
            idUser: data.uid.toString()
        })
            .then(() => {
                setDetailUser({
                    idUser: data.uid,
                    fullname: fullname,
                    email: data.email,
                    address: "",
                    roleUser: "2",
                    typeLogin: "1",
                    picture: data.photoURL,
                    work: ""
                })
                setIsLogin(1)
                router.push('/')
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });

    }

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
                router.push('/')
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }

    return (
        <div className="page w-full relative bg-darkGreen flex justify-between ">
            <div className="left flex justify-center laptop:w-1/2 mobile:w-full bg-white mobile:py-10">
                <div className="content w-3/4 h-full">

                    <div className="logo h-20 w-14 px-1 pt-2 laptop:my-5">
                        <Image src={img.logo} width={100} height={100} alt="logo-light" />
                    </div>
                    <h3 className="text-2xl font-medium mb-3">Create Account</h3>
                    <p className="mb-10">You need to register your email to be able to enter the application</p>

                    <div onClick={() => handleAuthGoogle()} className="auth-google w-full h-12 mb-5 border border-gray-200 rounded-lg flex justify-center items-center cursor-pointer hover:border-darkGreen">
                        <Image src={googleImage} width="20" height="20" alt="google" />
                        <h4 className="font-medium ml-3">Sign Up with Google</h4>
                    </div>

                    <h3 className="text-lg font-medium text-center mb-5 text-gray-400">-- OR --</h3>

                    <form onSubmit={handleRegisterEmail}>
                        <div className="form-group mb-7">
                            <input type="text" name="fullname" className="h-10 border-b w-full px-3 py-2 outline-none" placeholder="Full Name" value={userRegis.fullname} onChange={handleChange} />
                        </div>
                        <div className="form-group mb-7">
                            <input type="email" name="email" className="h-10 border-b w-full px-3 py-2 outline-none" placeholder="Email Address" value={userRegis.email} onChange={handleChange} />
                        </div>
                        <div className="form-group mb-7">
                            <input type="password" name="password" className="h-10 border-b w-full px-3 py-2 outline-none" placeholder="Password" value={userRegis.password} onChange={handleChange} />
                        </div>
                        <div className="form-group mb-5">
                            <button type="submit" className="w-full h-12 bg-darkGreen rounded-lg font-medium text-white">Create Account</button>
                        </div>
                        <div className="form-group mb-7">
                            <h4>Already have an account ? <Link href="/login"><a className="text-darkGreen hover:underline">Log In</a></Link></h4>
                        </div>
                    </form>
                </div>
            </div>
            <div className="right w-1/2 laptop:flex mobile:hidden justify-center relative">
                <section className="bg-main absolute z-0 w-full h-screen flex items-center">
                    <Particles width={'100%'} height={'100%'} params={options} style={{ width: '100%', height: '100%' }} />
                </section>
                <div className="content w-3/4 flex flex-col items-center justify-center">
                    <div className="image mb-2" style={{ width: "450px" }}>
                        <Image src={ilustration1} alt="login" />
                    </div>
                    <h4 className="text-center text-lg text-white">An integrated environmental problem complaint application to help people voice their opinions regarding environmental pollution around them.</h4>
                </div>
            </div>
        </div>
    )
}

export default Main;