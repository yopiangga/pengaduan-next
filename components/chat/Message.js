import { Component, useEffect, useState } from "react";
import { FiCheck, FiSearch, FiSend, FiX } from "react-icons/fi";
import Image from 'next/image';
import example from 'public/assets/images/example.jpg'
import $ from 'jquery';
import firebase from 'firebase'
import { useAppContext } from "components/states/GlobalStates";
import Link from "next/link";

function Message(props) {
    const { url, setUrl, img, setImg, isLogin, setIsLogin, detailUser, setDetailUser } = useAppContext();
    const [textChat, setTextChat] = useState('')
    const [chatComplaint, setChatComplaint] = useState();
    const [chats, setChats] = useState();
    const scrollTop = 1000000000;

    useEffect(() => {
        if (props != undefined) {
            const dbChatComplaint = firebase.database().ref();
            dbChatComplaint.child(`chats/${props.idComplaint}`).on('value', getChatComplaint, errorChatComplaint);
        }
        $('.column-chat').animate({ scrollTop: scrollTop }, 1000)
    }, [props.idComplaint])

    function handleContact() {
        $('.contact').removeClass('mobile:hidden').addClass('mobile:flex');
        props.onClick()
    }

    const getChatComplaint = (items) => {
        setChatComplaint(items.val());

        var dataChats = [];
        for (var item in items.val().message) {
            dataChats.push(items.val().message[item]);
        }
        setChats(dataChats)
    }

    const errorChatComplaint = () => {
        console.log("get error")
    }

    const handleChangeChat = (event) => {
        setTextChat(event.target.value)
    }

    const handleSend = (event) => {
        event.preventDefault();
        const date = new Date();
        const time = date.getTime();
        firebase.database().ref(`chats/${chatComplaint.key}/message/${time}`).set({
            from: parseInt(props.role),
            status: 1,
            text: textChat,
            time: time
        }).catch();
        setTextChat('')
        $('.column-chat').animate({ scrollTop: scrollTop }, 1000)
    }

    return (
        <div className="message laptop:w-2/3 mobile:w-full h-full relative laptop:flex mobile:flex flex-col">
            <div className="user laptop:w-11/12 mobile:w-full h-16 mb-3 bg-white rounded-lg py-1 px-2 flex items-center relative">
                {
                    chatComplaint != undefined ?
                        <div className="image rounded-full h-12 w-12 mr-3 overflow-hidden bg-light">
                            {
                                chatComplaint.image == '' || chatComplaint.image == 'default' || chatComplaint.image == undefined ?
                                    <Image src={img.image} height="100" width="100" alt="user" />
                                    :
                                    <Image src={chatComplaint.image} height="100" width="100" alt="user" />
                            }
                        </div>
                        :
                        ""
                }
                <div className="text mr-3">
                    {
                        chatComplaint != undefined ?
                            <Link href={`/complaint/${chatComplaint.key}`}><a className="font-bold text-sm hover:underline">{chatComplaint && chatComplaint.title != undefined ? chatComplaint.title : ""}</a></Link>
                            :
                            ""
                    }
                    <p className="text-xs">{props && props.user.fullname != undefined ? props.user.fullname : ""}</p>
                </div>

                <div onClick={handleContact} className="icon text-xl w-12 flex flex-col items-end absolute right-2">
                    <FiX className="text-dark" />
                </div>
            </div>

            <div className="users laptop:w-11/12 mobile:w-full bg-white absolute top-20 bottom-4 flex flex-col items-center rounded-lg">

                <div className="column-chat absolute top-4 bottom-20 left-3 right-3 overflow-scroll">
                    {
                        props && props.role == 1 && chats && chats.map(function (el, idx) {
                            if (el.from == 2)
                                return (
                                    <div className="item-group mb-3 flex flex-col items-start">
                                        <div className="item bg-light max-w-2xl h-auto py-3 px-3 mb-2 rounded-t-lg rounded-br-lg">
                                            <p className="text-left">{el.text}</p>
                                        </div>
                                        <h5 className="text-sm text-gray-400">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: 'numeric' }).format(new Date(el.time))}</h5>
                                    </div>
                                )
                            else
                                return (
                                    <div className="item-group mb-3 flex flex-col items-end">
                                        <div className="item bg-darkGreen max-w-2xl h-auto py-3 px-3 mb-2 rounded-t-lg rounded-bl-lg">
                                            <p className="text-left text-white">{el.text}</p>
                                        </div>
                                        <h5 className="text-sm text-gray-400">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: 'numeric' }).format(new Date(el.time))}</h5>
                                    </div>
                                )
                        })
                    }

                    {
                        props && props.role == 2 && chats && chats.map(function (el, idx) {
                            if (el.from == 1)
                                return (
                                    <div className="item-group mb-3 flex flex-col items-start">
                                        <div className="item bg-light max-w-2xl h-auto py-3 px-3 mb-2 rounded-t-lg rounded-br-lg">
                                            <p className="text-left">{el.text}</p>
                                        </div>
                                        <h5 className="text-sm text-gray-400">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: 'numeric' }).format(new Date(el.time))}</h5>
                                    </div>
                                )
                            else
                                return (
                                    <div className="item-group mb-3 flex flex-col items-end">
                                        <div className="item bg-darkGreen max-w-2xl h-auto py-3 px-3 mb-2 rounded-t-lg rounded-bl-lg">
                                            <p className="text-left text-white">{el.text}</p>
                                        </div>
                                        <h5 className="text-sm text-gray-400">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: 'numeric' }).format(new Date(el.time))}</h5>
                                    </div>
                                )
                        })
                    }


                </div>

                <form onSubmit={handleSend} className="h-16 bg-white shadow-lg border-4 flex items-center border-gray-50 absolute bottom-4 left-3 right-3 rounded-xl">
                    <input onChange={handleChangeChat} value={textChat} type="text" name="textChat" className="w-full outline-none px-3" placeholder="Your message ..." />
                    <button type="submit" className="w-10 h-10 rounded-full bg-darkGreen absolute right-3 flex justify-center items-center text-white text-lg">
                        <FiSend />
                    </button>
                </form>
            </div>
        </div>
    )

}

export default Message;