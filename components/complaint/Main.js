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
import ModalReportComplaint from 'components/all/ModalReportComplaint';
import ShareMediaSocial from 'components/all/ShareMediaSocial';

function Main(props) {

    const { url, setUrl, img, setImg, isLogin, setIsLogin, detailUser, setDetailUser } = useAppContext();
    const [complaint, setComplaint] = useState({ title: "", description: "", taggar: [], image: "", latitude: "", longitude: "", author: "", key: "", shared: "" });
    const [supports, setSupports] = useState([{}]);
    const [modalInformation, setModalInformation] = useState({ title: "", description: "", status: "", isOpen: false })
    const [shareMediaSocial, setShareMediaSocial] = useState({ title: "", description: "", link: "", status: "", isOpen: false })
    const [support, setSupport] = useState();
    const [opini, setOpini] = useState("");
    const [allOpini, setAllOpini] = useState()
    const [user, setUser] = useState([{}]);
    const [reportComplaint, setReportComplaint] = useState(false);
    const [startChat, setStartChat] = useState();

    const router = useRouter();

    useEffect(() => {
        if (props.id != undefined && detailUser.idUser != '') {
            startFunction();
        }
    }, [props.id, detailUser.idUser])

    function startFunction() {
        getComplaint();
        getSupports();
        getAllOpini();
        if (detailUser.idUser)
            getSupport();
        const dbChats = firebase.database().ref('chats');
        dbChats.orderByChild('key').equalTo(parseInt(props.id)).on('value', getChats, errorChats);
    }

    function getUser(id) {
        const v_user = firebase.firestore().collection("users").where("idUser", "==", id.toString());

        v_user.get().then((res) => {
            res.forEach((doc) => {
                setUser({
                    fullname: doc.data().fullname,
                    image: doc.data().picture,
                    email: doc.data().email
                })
            });
        });
    }

    function getChats(items) {
        if (items.val() == undefined || items.val() == null || items.val() == '')
            setStartChat(true)
        else
            setStartChat(false)
    }


    function errorChats(items) {

    }

    const getComplaint = () => {
        axios.get(`https://pengaduan-e0f12-default-rtdb.firebaseio.com/complaint/${props.id}.json`).then(function (res) {
            setComplaint(res.data);
            getUser(res.data.authorId);
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
        const v_allOpini = firebase.firestore().collection("opini").where("idComplaint", "==", parseInt(props.id));
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
        firebase.database().ref(`complaint/${parseInt(complaint.key)}/support`).set(complaint.support + 1)

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
            getAllOpini()
        }
    }

    const handleReport = () => {
        setReportComplaint(true)
    }

    const handleChat = () => {
        const date = new Date();
        const time = date.getTime();
        firebase.database().ref(`chats/${complaint.key}`).set({
            key: complaint.key,
            idAdmin: detailUser.idUser,
            idUser: complaint.authorId,
            title: complaint.title,
            image: complaint.image,
            message: {
                [time]: {
                    time: time,
                    text: 'Hallo Author!',
                    status: 1,
                    from: 1
                }
            },

        }).catch();

        router.push('/chat');
    }

    const handleContinueChat = () => {
        const date = new Date();
        const time = date.getTime();
        firebase.database().ref(`chats/${complaint.key}/message/${time}`).push({
            from: parseInt(1),
            status: 1,
            text: 'Hai Author!',
            time: time
        }).catch();
        router.push('/chat');
    }

    const handleReject = () => {
        firebase.database().ref(`complaint/${parseInt(complaint.key)}/status`).set(5)
        startFunction()
    }

    const handleAccept = () => {
        firebase.database().ref(`complaint/${parseInt(complaint.key)}/status`).set(2)
        startFunction()
    }

    const handleComplete = () => {
        firebase.database().ref(`complaint/${parseInt(complaint.key)}/status`).set(3)
        startFunction()
    }

    const handleDone = () => {
        firebase.database().ref(`complaint/${parseInt(complaint.key)}/status`).set(4)
        startFunction()
    }

    const handleShare = () => {
        setShareMediaSocial({
            title: "Share to Media Social",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, voluptate.",
            isOpen: true,
            link: `${url.baseUrl}complaint/${props.id}`
        })
    }

    const handleDelete = () => {
        let complaintRef = firebase.database().ref('complaint/' + complaint.key);
        let chatRef = firebase.database().ref('chats/' + complaint.key);
        complaintRef.remove();
        chatRef.remove()
        router.push('/');
    }

    // console.log(allOpini)

    return (
        <div className="pt-0">
            <ModalReportComplaint
                id={complaint.key}
                isOpen={reportComplaint}
                onClick={() => setReportComplaint(false)}
                onReport={(title, description, status) => setModalInformation({ title: title, description: description, status: status, isOpen: true })}
            />
            <ModalInformation
                title={modalInformation.title}
                description={modalInformation.description}
                status={modalInformation.status}
                isOpen={modalInformation.isOpen}
                onClick={() => setModalInformation({ title: "", description: "", status: "", isOpen: false })}
            />
            <ShareMediaSocial
                title={shareMediaSocial.title}
                description={shareMediaSocial.description}
                isOpen={shareMediaSocial.isOpen}
                link={shareMediaSocial.link}
                onClick={() => setShareMediaSocial({ title: "", description: "", link: "", status: "", isOpen: false })}
            />
            <div className="content flex laptop:flex-row mobile:flex-col w-full pt-24 tablet:pl-20 mobile:px-4">
                <div className="left laptop:w-3/4 mobile:w-full laptop:pr-5">
                    {
                        complaint.image == null || complaint.image == '' ?
                            ""
                            :
                            <div className="image w-full h-96 mb-5 bg-white relative overflow-hidden">
                                <Image src={complaint.image} passHref={true} layout="fill" objectFit="cover" alt="image complaint" />
                            </div>
                    }

                    <div className="author mb-5 flex flex-wrap">
                        <h4 className="text-sm mr-5 flex items-center"><FiUser className="font-medium mr-2" />
                            {
                                user == '' || user == undefined || user == null ?
                                    "Anonimous"
                                    :
                                    user.fullname
                            }
                        </h4>

                        <div className="like flex items-center mr-5 text-sm">
                            <FiShare2 className="mr-2" />
                            <h5>{complaint.shared}</h5>
                        </div>
                        <div className="like flex items-center mr-5 text-sm">
                            <FiMessageCircle className="mr-2" />
                            <h5>{
                                allOpini == '' || allOpini == undefined || allOpini == null ?
                                    0
                                    :
                                    allOpini.length
                            }</h5>
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

                    <div className="title mb-3">
                        <h1 className="font-medium text-2xl">{complaint.title}</h1>
                    </div>

                    <div className="status mb-5 flex justify-start">
                        {
                            complaint.status == 1 ?
                                <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-sm text-white bg-dark">
                                    <h4 className="text-white font-medium">OPEN</h4>
                                </div>
                                :
                                ""
                        }
                        {
                            complaint.status == 2 ?
                                <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-sm text-white bg-yellow">
                                    <h4 className="text-white font-medium">IN PROGRESS</h4>
                                </div>
                                :
                                ""
                        }
                        {
                            complaint.status == 3 ?
                                <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-sm text-white bg-darkBlue">
                                    <h4 className="text-white font-medium">COMPLETE</h4>
                                </div>
                                :
                                ""
                        }
                        {
                            complaint.status == 4 ?
                                <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-sm text-white bg-darkGreen">
                                    <h4 className="text-white font-medium">DONE</h4>
                                </div>
                                :
                                ""
                        }
                        {
                            complaint.status == 5 ?
                                <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-sm text-white bg-red-600">
                                    <h4 className="text-white font-medium">DECLINED</h4>
                                </div>
                                :
                                ""
                        }
                    </div>

                    <div className="row mb-5 mobile:flex laptop:hidden">
                        <div className="col w-full">
                            <div className="form-group flex">
                                <button onClick={handleShare} className="py-2 w-1/2 mr-3 bg-transparent rounded-full text-darkGreen border border-darkGreen font-medium">Share</button>
                                {
                                    support == undefined && detailUser.roleUser == 2 ?
                                        <button onClick={handleSupport} className="py-2 w-full mr-3 bg-darkGreen rounded-full text-white font-medium">Support Complaint</button>
                                        :
                                        ""
                                }
                                {
                                    support != undefined && detailUser.roleUser == 2 ?
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

                    <div className="description mb-5 light-layer-1 active">
                        <h4 className="font-medium text-lg mb-3">Detail Location</h4>
                        <div className="light-layer-2 active p-3">
                            <p className="mb-3">{complaint.address}</p>
                        </div>
                    </div>

                    {
                        complaint.latitude == '' || complaint.longitude == '' ?
                            ""
                            :
                            <div className="maps mb-10 w-full h-96 overflow-hidden relative">
                                <GoogelMaps latitude={complaint.latitude} longitude={complaint.longitude} />
                            </div>
                    }

                    <div className="comment">
                        <h2 className="font-medium text-xl mb-8">Reason for support</h2>

                        <div className="light-layer-1 active mb-5">
                            <div className="light-layer-2 active p-3">
                                {
                                    allOpini == undefined || allOpini.length == 0 ?
                                        <div className="text-center">
                                            <p>No comments support yet</p>
                                        </div>
                                        :
                                        ""
                                }
                                {
                                    allOpini && allOpini.map(function (el, idx) {
                                        return (
                                            <div key={idx} className="item flex mb-5">
                                                <div className="image rounded-full h-9 w-9 mr-3 flex items-center overflow-hidden relative">
                                                    {
                                                        el.picture == '' || el.picture == undefined ?
                                                            <Image src={img.user} layout="fill" alt="user" />
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
                                                        <textarea onChange={handleOpini} value={opini} type="text" name="comment-support" rows="3" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg bg-transparent font-medium" placeholder="Description your support . . . "></textarea>
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
                                <div className="light-layer-1 active mb-5">
                                    <div className="light-layer-2 active p-3">
                                        <div className="text-center">
                                            <p>You must support the complaint to be able to submit a support opinion</p>
                                        </div>
                                    </div>
                                </div>
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
                    {
                        detailUser && detailUser.roleUser == 2 ?
                            <div className="support-user light-layer-1 active rounded-lg fixed w-72">
                                <div className="light-layer-2 active rounded-lg p-4 w-full">
                                    <div className="mb-5">
                                        <h3 className="mb-2 font-medium text-xl text-center">Form Support</h3>
                                        <p className="text-center text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, sit?</p>
                                    </div>
                                    <div className="row flex mb-5">
                                        <div className="col w-full">
                                            <div className="form-group flex">
                                                {
                                                    support == undefined ?
                                                        <button onClick={handleSupport} className="py-2 w-full mr-3 bg-darkGreen rounded-full text-white font-medium">Support Complaint</button>
                                                        :
                                                        <button className="py-2 w-full mr-3 bg-transparent rounded-full text-darkGreen font-medium">Success Support</button>
                                                }

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row flex mb-5">
                                        <div className="col w-full">
                                            {isLogin == 1 ?
                                                <div className="form-group flex">
                                                    <button onClick={handleShare} className="py-2 w-1/2 mr-3 bg-transparent rounded-full text-darkGreen border border-darkGreen font-medium">Share</button>
                                                    <button onClick={handleReport} className="py-2 w-1/2  font-medium">Report</button>
                                                </div>
                                                :
                                                <div className="form-group flex">
                                                    <button onClick={handleShare} className="py-2 w-full mr-3 bg-transparent rounded-full text-darkGreen border border-darkGreen font-medium">Share</button>
                                                </div>
                                            }

                                        </div>
                                    </div>
                                </div>

                            </div>
                            :
                            ""
                    }

                    {
                        detailUser && detailUser.roleUser == 2 && complaint.status == 3 && complaint.authorId == detailUser.idUser ?
                            <div className="done-complaint light-layer-1 active rounded-lg fixed w-72 top-96">
                                <div className="light-layer-2 active rounded-lg p-4 w-full">
                                    <div className="mb-5">
                                        <h3 className="mb-2 font-medium text-xl text-center">Done Complaint</h3>
                                        <p className="text-center text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, sit?</p>
                                    </div>
                                    <div className="row flex mb-5">
                                        <div className="col w-full">
                                            <div className="form-group flex">
                                                <button onClick={handleDone} className="py-2 w-full bg-darkGreen rounded-full text-white border border-darkGreen font-medium">Done</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            :
                            ""
                    }

                    {
                        detailUser && detailUser.roleUser == 1 && complaint.status == 1 ?
                            <div className="admin-chat light-layer-1 active rounded-lg fixed w-72">
                                <div className="light-layer-2 active rounded-lg p-4 w-full">
                                    <div className="mb-5">
                                        <h3 className="mb-2 font-medium text-xl text-center">Follow Up</h3>
                                        <p className="text-center text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, sit?</p>
                                    </div>
                                    <div className="row flex mb-5">
                                        <div className="col w-full">
                                            <div className="form-group flex">
                                                <button onClick={handleReject} className="py-2 w-1/2 mr-3 bg-transparent rounded-full text-darkGreen border border-darkGreen font-medium">Reject</button>
                                                <button onClick={handleAccept} className="py-2 w-1/2 mr-3 bg-darkGreen rounded-full text-white font-medium">Accept</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            :
                            ""
                    }

                    {
                        detailUser && detailUser.roleUser == 1 && complaint.status == 2 ?
                            <div className="admin-chat light-layer-1 active rounded-lg fixed w-72">
                                <div className="light-layer-2 active rounded-lg p-4 w-full">
                                    <div className="mb-5">
                                        <h3 className="mb-2 font-medium text-xl text-center">Complete Complaint</h3>
                                        <p className="text-center text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, sit?</p>
                                    </div>
                                    <div className="row flex mb-5">
                                        <div className="col w-full">
                                            <div className="form-group flex">
                                                <button onClick={handleComplete} className="py-2 w-full mx-auto bg-darkGreen rounded-full text-white font-medium">Complete</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            :
                            ""
                    }

                    {
                        detailUser && detailUser.roleUser == 1 ?
                            <div className={complaint.status == 4 ? "admin-chat light-layer-1 active rounded-lg fixed w-72" : "admin-chat light-layer-1 active rounded-lg fixed w-72 top-80"}>
                                <div className="light-layer-2 active rounded-lg p-4 w-full">
                                    <div className="mb-5">
                                        <h3 className="mb-2 font-medium text-xl text-center">Chat Author</h3>
                                        <p className="text-center text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, sit?</p>
                                    </div>
                                    <div className="row flex mb-5">
                                        <div className="col w-full">
                                            <div className="form-group flex">
                                                {
                                                    startChat == true ?
                                                        <button onClick={handleChat} className="py-2 w-full mr-3 bg-darkGreen rounded-full text-white font-medium">Start Message</button>
                                                        :
                                                        <button onClick={handleContinueChat} className="py-2 w-full mr-3 bg-darkGreen rounded-full text-white font-medium">Continue Message</button>
                                                }
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            :
                            ""
                    }
                    {
                        detailUser && detailUser.roleUser == 1 ?
                            <div className="admin-chat light-layer-1 active rounded-lg fixed w-72 bottom-10">
                                <div className="light-layer-2 active rounded-lg p-4 w-full">

                                    <div className="row flex">
                                        <div className="col w-full">
                                            <div className="form-group flex">
                                                <button onClick={handleDelete} className="py-2 w-full mr-3 bg-orange rounded-full text-white font-medium">Delete Complaint</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            :
                            ""
                    }
                </div>
            </div>

        </div>
    )

}


export default Main;
