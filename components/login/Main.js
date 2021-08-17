
import { Loading } from "components/all/Loading";
import { Component, useEffect, useState } from "react";
import logo from 'public/assets/images/logo.png'
import Image from 'next/image';
import Link from 'next/link'
import ilustration1 from 'public/assets/images/ilustration-1.png'
import { tsParticles } from "tsparticles";
import Particles from 'react-particles-js';
import googleImage from 'public/assets/images/google.png'
import $ from 'jquery'
import { useAppContext } from "components/states/GlobalStates";
import Router, { useRouter } from "next/router";
import firebase from 'firebase'
import ModalInformation from "components/all/ModalInformation";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Main() {

    const { url, setUrl, isLogin, setIsLogin, detailUser, setDetailUser } = useAppContext();
    const [userLogin, setUserLogin] = useState({ email: "", password: "" });
    const [modalInformation, setModalInformation] = useState({ title: "", description: "", status: "", isOpen: false })
    const [showPass, setShowPass] = useState(true);

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
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value
        })
    }

    const handleLoginEmail = (event) => {
        event.preventDefault();
        $('.bg-loading').removeClass('hidden').addClass('flex');
        if (userLogin.email == null | userLogin.password == null) {

        } else {
            firebase.auth().signInWithEmailAndPassword(userLogin.email, userLogin.password)
                .then((res) => {
                    console.log(res)
                    handleDataUser(res.user);
                    $('.bg-loading').removeClass('flex').addClass('hidden');
                })
                .catch((error) => {
                    $('.bg-loading').removeClass('flex').addClass('hidden');
                    setModalInformation({
                        title: "Login Failed",
                        description: error.message,
                        status: false,
                        isOpen: true,
                    })
                    console.log(error)
                });
        }
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

    const handleAuthGoogle = () => {
        const auth = firebase.auth();
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then((res) => {
                // console.log(res)
                if (res.additionalUserInfo.isNewUser == true) {
                    createData(res.user);
                } else {
                    handleDataUser(res.user)
                }

            }).catch((error) => {
                console.log(error)
            });
    }

    const createData = (data) => {
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

    return (
        <div className="page w-full relative bg-darkGreen flex justify-between">
            <ModalInformation
                title={modalInformation.title}
                description={modalInformation.description}
                status={modalInformation.status}
                isOpen={modalInformation.isOpen}
                onClick={() => setModalInformation({ title: "", description: "", status: "", isOpen: false })}
            />
            <div className="left flex justify-center laptop:w-1/2 mobile:w-full bg-white mobile:py-10">
                <div className="content w-3/4 h-full">

                    <div className="logo h-20 w-14 px-1 pt-2 laptop:my-5">
                        <Image src={logo} alt="logo-light" />
                    </div>
                    <h3 className="text-2xl font-medium mb-3">Login</h3>

                    <p className="mb-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, eius.</p>

                    <div onClick={() => handleAuthGoogle()} className="auth-google w-full h-12 mb-5 border border-gray-200 rounded-lg flex justify-center items-center cursor-pointer hover:border-darkGreen">
                        <Image src={googleImage} width="20" height="20" alt="google" />
                        <h4 className="font-medium ml-3">Log In with Google</h4>
                    </div>

                    <h3 className="text-lg font-medium text-center mb-5 text-gray-400">-- OR --</h3>

                    <form onSubmit={handleLoginEmail}>

                        <div className="form-group mb-7">
                            <input type="email" name="email" className="h-10 border-b w-full px-3 py-2 outline-none" placeholder="Email Address" value={userLogin.email} onChange={handleChange} />
                        </div>
                        <div className="form-group mb-7 relative">
                            <input type={showPass ? "text" : "password"} name="password" className="h-10 border-b w-full px-3 py-2 outline-none" placeholder="Password" value={userLogin.password} onChange={handleChange} />
                            {
                                !showPass ? 
                                <FiEye onClick={() => setShowPass(true)} className="absolute top-3 right-2 cursor-pointer text-lg" />
                                :
                                <FiEyeOff onClick={() => setShowPass(false)} className="absolute top-3 right-2 cursor-pointer text-lg" />
                            }
                        </div>
                        <div className="form-group mb-5">
                            <button type="submit" className="w-full h-12 bg-darkGreen rounded-lg font-medium text-white">Login</button>
                        </div>
                        <div className="form-group mb-7">
                            <h4>Do not have an account yet? <Link href="/register"><a className="text-darkGreen hover:underline">Sign Up</a></Link></h4>
                        </div>
                    </form>
                </div>
            </div>
            <div className="right w-1/2 laptop:flex justify-center relative mobile:hidden">
                <section className="bg-main absolute z-0 w-full h-screen flex items-center">
                    <Particles width={'100%'} height={'100%'} params={options} style={{ width: '100%', height: '100%' }} />
                </section>
                <div className="content w-3/4 flex flex-col items-center justify-center">
                    <div className="image mb-2" style={{ width: "450px" }}>
                        <Image src={ilustration1} alt="login" />
                    </div>
                    <h4 className="text-center text-lg text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, facilis?</h4>
                </div>
            </div>
        </div>
    )
}

export default Main;