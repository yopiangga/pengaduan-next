const { Component, useEffect, useState } = require("react");
import { useAppContext } from 'components/states/GlobalStates';
import Image from 'next/image';
import example from 'public/assets/images/example.jpg'
import { FiCalendar, FiHeart, FiLogIn, FiMessageCircle, FiSend, FiShare2, FiThumbsUp, FiUser, FiUsers } from 'react-icons/fi';
import axios from 'axios';
import GoogelMaps from 'components/all/GoogleMaps.js';
import { useRouter } from 'next/router';
import ModalInformation from 'components/all/ModalInformation';
import firebase from 'firebase';

function Main(props) {

    const { url, setUrl, isLogin, setIsLogin, detailUser, setDetailUser } = useAppContext();
    const [complaint, setComplaint] = useState({ title: "", description: "", taggar: [], image: "", latitude: "", longitude: "", author: "", key: "", shared: "" });
    const [supports, setSupports] = useState([{}]);
    const [modalInformation, setModalInformation] = useState({ title: "", description: "", status: "", isOpen: false })
    const [support, setSupport] = useState();
    const [opini, setOpini] = useState("");
    const [allOpini, setAllOpini] = useState([{}])
    const [user, setUser] = useState([{}])

    const router = useRouter();

    useEffect(() => {
        if (props.id != null) {
            getComplaint();
            getSupports();
            getAllOpini();
            if (detailUser.idUser)
                getSupport();
        }
    }, [detailUser])

    const getComplaint = () => {
        axios.get(`https://pengaduan-e0f12-default-rtdb.firebaseio.com/complaint/${props.id}.json`).then(function (res) {
            setComplaint(res.data);
            // console.log(res.data)
        }).catch(function (err) {
            console.log(err)
        })
    }

    const getSupport = () => {
        const supports = firebase.firestore().collection("supports").where("idComplaint", "==", parseInt(props.id)).where("idUser", "==", detailUser.idUser.toString());
        supports.get().then((res) => {
            res.forEach((doc) => {
                setSupport(doc.data())
            });
        });
    }

    const getSupports = () => {
        const supports = firebase.firestore().collection("supports");
        var arr_supports = [];

    }


    const getAllOpini = () => {
        const v_allOpini = firebase.firestore().collection("opini");
        var arr_allOpini = [];
        v_allOpini.get().then((res) => {
            res.forEach((doc) => {
                arr_allOpini.push({
                    id: doc.data().key,
                    idUser: doc.data().idUser,
                    idComplaint: doc.data().idComplaint,
                    text: doc.data().text,
                    fullname: doc.data().fullname,
                    picture: doc.data().picture
                })
            });
            setAllOpini(arr_allOpini)
        });
    }

    const handleLogin = () => {
        router.push('/login')
    }

    const handleSupport = () => {
        const date = new Date();
        const time = date.getTime();
        firebase.firestore().collection("supports").doc(time.toString()).set({
            key: time,
            idUser: detailUser.idUser,
            idComplaint: complaint.key,
        })
            .then(() => {
                setModalInformation({
                    title: "Support Success",
                    description: "Your support complaint success added, wait for follow up complaint.",
                    status: true,
                    isOpen: true,
                })
            })
            .catch((error) => {
                setModalInformation({
                    title: "Support Failed",
                    description: "Your support complaint failed added, try for next time.",
                    status: false,
                    isOpen: true,
                })
                console.error("Error writing document: ", error);
            });
    }

    const handleOpini = (event) => {
        setOpini(event.target.value);
    }

    const handleReasonSupport = (event) => {
        event.preventDefault();

        if (opini == '') {

        } else {
            const date = new Date();
            const time = date.getTime();
            firebase.firestore().collection("opini").doc(time.toString()).set({
                key: time,
                idUser: detailUser.idUser,
                idComplaint: complaint.key,
                text: opini,
                fullname: detailUser.fullname,
                picture: detailUser.picture
            })
                .then(() => {
                    setModalInformation({
                        title: "Add Opini Success",
                        description: "Your opini support complaint success added.",
                        status: true,
                        isOpen: true,
                    })
                    setOpini("")
                })
                .catch((error) => {
                    setModalInformation({
                        title: "Add Opini Failed",
                        description: "Your opini support complaint failed added, try for next time.",
                        status: false,
                        isOpen: true,
                    })
                    console.error("Error writing document: ", error);
                });
        }
    }

    return (
        <div className="pt-0">
            <ModalInformation
                title={modalInformation.title}
                description={modalInformation.description}
                status={modalInformation.status}
                isOpen={modalInformation.isOpen}
                onClick={() => setModalInformation({ title: "", description: "", status: "", isOpen: false })}
            />
            <div className="content flex laptop:flex-row mobile:flex-col w-full pt-24 tablet:pl-20 mobile:px-4">
                <div className="left laptop:w-3/4 mobile:w-full laptop:pr-5">
                    {
                        complaint.image == null || complaint.image == '' ?
                            ""
                            :
                            // ""
                            <div className="image w-full mb-5 bg-white">
                                <Image src={`/${complaint.image}`} passHref={true} width="100" height="100" alt="image complaint" />
                            </div>
                    }

                    <div className="author mb-5 flex">
                        <h4 className="text-sm mr-5 flex items-center"><FiUser className="font-medium mr-2" /> </h4>

                        <div className="like flex items-center mr-5 text-sm">
                            <FiShare2 className="mr-2" />
                            <h5>{complaint.shared}</h5>
                        </div>
                        <div className="like flex items-center mr-5 text-sm">
                            <FiMessageCircle className="mr-2" />
                            <h5>7</h5>
                        </div>
                        <div className="like flex items-center mr-5 text-sm">
                            <FiUsers className="mr-2" />
                            <h5>
                                {
                                    supports == 0 || supports == undefined || supports == null ? 0 : supports.length
                                }
                            </h5>
                        </div>

                        <h4 className="text-sm mr-5 flex items-center"><FiCalendar className="mr-2" /> {
                            complaint.key == null || complaint.key == '' ?
                                ""
                                :
                                new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(complaint.key))
                        }</h4>
                    </div>

                    <div className="title mb-5">
                        <h1 className="font-medium text-2xl">{complaint.title}</h1>
                    </div>

                    <div className="row mb-5 mobile:flex laptop:hidden">
                        <div className="col w-full">
                            <div className="form-group flex">
                                <button className="py-2 w-1/2 mr-3 bg-transparent rounded-full text-darkGreen border border-darkGreen font-medium">Share</button>
                                {
                                    support && support.key == null && isLogin == 1 ?
                                        <button onClick={handleSupport} className="py-2 w-full mr-3 bg-darkGreen rounded-full text-white font-medium">Support Complaint</button>
                                        :
                                        ""
                                }
                                {
                                    support && support.key != null && isLogin == 1 ?
                                        <button className="py-2 w-full mr-3 bg-transparent rounded-full text-darkGreen font-medium">Success Support</button>
                                        :
                                        ""
                                }
                                {
                                    isLogin == 0 ?
                                        <button onClick={handleLogin} className="py-2 w-full mr-3 bg-darkGreen rounded-full text-white font-medium">Login</button>
                                        :
                                        ""
                                }
                            </div>
                        </div>
                    </div>

                    <div className="description mb-5 light-layer-1 active">
                        <div className="light-layer-2 active p-3">
                            <p className="mb-3">{complaint.description}</p>
                        </div>
                    </div>

                    <div className="tags flex mb-5">
                        {
                            complaint.taggar.map(function (tag, idTag) {
                                return (
                                    <div key={idTag} className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-lightGreen bg-lightGreen cursor-pointer">
                                        <h4>{tag}</h4>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="maps mb-10 w-full h-96 overflow-hidden relative">
                        {
                            complaint.latitude == '' || complaint.longitude == '' ?
                                ""
                                :
                                <GoogelMaps latitude={complaint.latitude} longitude={complaint.longitude} />
                        }
                    </div>

                    <div className="comment">
                        <h2 className="font-medium text-xl mb-8">Reason for support</h2>

                        <div className="light-layer-1 active mb-5">
                            <div className="light-layer-2 active p-3">
                                {
                                    allOpini && allOpini.map(function (el, idx) {
                                        return (
                                            <div key={idx} className="item flex mb-5">
                                                <div className="image rounded-full h-9 w-9 mr-3 flex items-center overflow-hidden relative">
                                                    {
                                                        el.picture == '' || el.picture == undefined ?
                                                            <Image src={example} layout="fill" alt="user" />
                                                            :
                                                            <Image src={el.picture} layout="fill" alt="user" />
                                                    }
                                                </div>
                                                <div className="text w-11/12">
                                                    <div className="header flex mb-1">
                                                        <h4 className="font-bold text-sm mr-3">{el.fullname}</h4>
                                                        <h6 className="text-sm">
                                                            {
                                                                el.id == '' || el.id == undefined ?
                                                                ""
                                                                :
                                                                new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(parseInt(el.id)))
                                                            }
                                                        </h6>
                                                    </div>
                                                    <div className="comment-text mb-3">
                                                        <p>{el.text}</p>
                                                    </div>
                                                    {/* <div className="action flex items-center mb-3">
                                                        <div className="like flex items-center mr-5 text-sm">
                                                            <FiHeart className="mr-2" />
                                                            <h5>10</h5>
                                                        </div>
                                
                                                    </div> */}  
                                                    <hr />
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>



                        <h3 className="font-medium text-lg mb-8">Add your opinion</h3>
                        {
                            support && support.key != null && isLogin == 1 ?
                                <div className="item flex mb-5">

                                    <form onSubmit={handleReasonSupport} className="w-full">
                                        <div className="row flex laptop:w-full mobile:w-full mb-5 light-layer-1 active">
                                            <div className="light-layer-2 active flex w-full">
                                                <div className="col w-full ">
                                                    <div className="form-group flex flex-col">
                                                        <textarea onChange={handleOpini} type="text" name="comment-support" rows="3" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg bg-transparent font-medium" placeholder="Description your support . . . ">{opini}</textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row flex laptop:w-full mobile:w-full mb-5 ">
                                            <div className="col w-full">
                                                <button type="submit" className="w-44 h-10 rounded-full bg-darkGreen flex justify-center items-center text-white text-lg">
                                                    <FiSend />
                                                    <h4 className="font-medium ml-3">Post opinion</h4>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                :
                                ""
                        }

                        {
                            support && support.key == null || isLogin == 0 ?
                                <button onClick={handleLogin} className="w-44 h-10 rounded-full bg-darkGreen flex justify-center items-center text-white text-lg">
                                    <FiLogIn />
                                    <h4 className="font-medium ml-3">Login</h4>
                                </button>
                                :
                                ""
                        }

                    </div>
                </div>

                <div className="right laptop:w-1/4 mobile:w-full laptop:flex mobile:hidden justify-center">
                    <div className="light-layer-1 active rounded-lg fixed w-72">
                        <div className="light-layer-2 active rounded-lg p-4 w-full">
                            <div className="mb-5">
                                <h3 className="mb-2 font-medium text-xl text-center">Form Support</h3>
                                <p className="text-center text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, sit?</p>
                            </div>
                            <div className="row flex mb-5">
                                <div className="col w-full">
                                    <div className="form-group flex">
                                        {isLogin == 1 ?
                                            <button onClick={handleSupport} className="py-2 w-full mr-3 bg-darkGreen rounded-full text-white font-medium">Support Complaint</button>
                                            :
                                            <button onClick={handleLogin} className="py-2 w-full mr-3 bg-darkGreen rounded-full text-white font-medium">Login</button>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="row flex mb-5">
                                <div className="col w-full">
                                    {isLogin == 1 ?
                                        <div className="form-group flex">
                                            <button className="py-2 w-1/2 mr-3 bg-transparent rounded-full text-darkGreen border border-darkGreen font-medium">Share</button>
                                            <button className="py-2 w-1/2  font-medium">Report</button>
                                        </div>
                                        :
                                        <div className="form-group flex">
                                            <button className="py-2 w-full mr-3 bg-transparent rounded-full text-darkGreen border border-darkGreen font-medium">Share</button>
                                        </div>
                                    }

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )

}


export default Main;
