import Navbar from "components/all/Navbar";
import Sidebar from "components/all/Sidebar";
import Message from "components/chat/Message";
import Users from "components/chat/Users";
import { useEffect, useState } from "react";
import firebase from 'firebase'
import { useAppContext } from "components/states/GlobalStates";
import RedirectLogin from "components/all/RedirectLogin";
import { MessageEmpty } from "components/chat/MessageEmpty";

function Chat() {
    const { url, setUrl, isLogin, setIsLogin, detailUser, setDetailUser, menuActive, setMenuActive } = useAppContext();
    const [chatComplaint, setChatComplaint] = useState()
    const [user, setUser] = useState();
    const [chatOpen, setChatOpen] = useState(0);

    useEffect(() => {
        setMenuActive('Chat');
    }, [])

    const handleClick = (dataChat) => {
        setChatComplaint(dataChat);
        var v_user
        if (detailUser.roleUser == 1)
            v_user = firebase.firestore().collection("users").where("idUser", "==", dataChat.idUser.toString());
        else
            v_user = firebase.firestore().collection("users").where("idUser", "==", dataChat.idAdmin.toString());

        v_user.get().then((res) => {
            res.forEach((doc) => {
                setUser({
                    fullname: doc.data().fullname,
                    image: doc.data().picture,
                    email: doc.data().email
                })
            });
            setChatOpen(1);
        });
    }

    return (
        <div className="page px-4 pt-4 w-full h-screen bg-light">
            <Sidebar />
            <div className="content w-full tablet:pl-16 mobile:pl-0 bg-light ">
                <Navbar />
                {
                    (isLogin == 0 || isLogin == undefined) ?
                        <div className="w-full">
                            <RedirectLogin />
                        </div>
                        :
                        <div className="w-full h-screen pt-20">
                            {
                                detailUser && detailUser.roleUser == 1 ?
                                    <div className="flex w-full h-full">
                                        <Users role="1" onClick={(chatComplaint) => handleClick(chatComplaint)} />
                                        {
                                            chatOpen == 1 ?
                                                <Message idComplaint={chatComplaint.key} user={user} onClick={() => setChatOpen(false)} role='1' />
                                                :
                                                <MessageEmpty />
                                        }
                                    </div>
                                    :
                                    <div className="flex w-full h-full">
                                        <Users role="2" onClick={(chatComplaint) => handleClick(chatComplaint)} />
                                        {
                                            chatOpen == 1 ?
                                                <Message idComplaint={chatComplaint.key} user={user} onClick={() => setChatOpen(false)} role='2' />
                                                :
                                                <MessageEmpty />
                                        }
                                    </div>
                            }
                        </div>
                }

            </div>
        </div>
    )
}

export default Chat;