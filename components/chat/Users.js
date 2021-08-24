import { Component, useEffect, useState } from "react";
import { FiInfo, FiSearch } from "react-icons/fi";
import { BiCheckDouble } from "react-icons/bi"
import Image from 'next/image';
import example from 'public/assets/images/example.jpg'
import $ from 'jquery';
import { useAppContext } from "components/states/GlobalStates";
import firebase from 'firebase'
import { FadeTransform, Fade, Stagger } from 'react-animation-components'

function Users(props) {
    const { url, setUrl, img, setImg, isLogin, setIsLogin, detailUser, setDetailUser } = useAppContext();

    const [chats, setChats] = useState();
    const [lastMsg, setLastMsg] = useState([]);
    const [filteredData, setFilteredData] = useState(chats);

    useEffect(() => {
        if (detailUser.idUser != undefined) {
            const db = firebase.database().ref('chats');
            if (props.role == 1)
                db.orderByChild('idAdmin').equalTo(detailUser.idUser).on('value', getChats, errorChats);
            else
                db.orderByChild('idUser').equalTo(detailUser.idUser).on('value', getChats, errorChats);
        }
    }, [detailUser])

    function getChats(items) {
        var dataChats = [];
        for (var item in items.val()) {
            if (items.val()[item].idAdmin == detailUser.idUser || items.val()[item].idUser == detailUser.idUser)
                dataChats.push(items.val()[item]);
        }
        getLastMessage(dataChats)
        setChats(dataChats)
        setFilteredData(dataChats)
    }


    function errorChats(items) {

    }

    function getLastMessage(dataChats) {
        var dataMessage = [];

        dataChats.map(function (el, idx) {
            var last;
            for (var itemLast in el.message) {
                last = el.message[itemLast];
            }
            dataMessage.push(last)
        })
        setLastMsg(dataMessage)
    }

    function handleSelectContact(el, lastMsg) {
        if (lastMsg.from != detailUser.roleUser)
            firebase.database().ref(`chats/${parseInt(el.key)}/message/${lastMsg.time.toString()}/status`).set(2)

        props.onClick(el)
        $('.contact').addClass('mobile:hidden').removeClass('mobile:flex');
    }

    function StatusLast(props) {
        if (detailUser.roleUser == 1) {
            if (props.lastMsg.from == 1) {
                if (props.lastMsg.status == 1) {
                    return (<BiCheckDouble className="text-dark" />)
                } else if (props.lastMsg.status == 2) {
                    return (<BiCheckDouble className="text-darkGreen" />)
                }
            } else if (props.lastMsg.from == 2) {
                if (props.lastMsg.status == 1) {
                    return (<FiInfo className="text-darkGreen" />)
                } else if (props.lastMsg.status == 2) {
                    return ("")
                }
            }
        } else if (detailUser.roleUser == 2) {
            if (props.lastMsg.from == 1) {
                if (props.lastMsg.status == 1) {
                    return (<FiInfo className="text-darkGreen" />)
                } else if (props.lastMsg.status == 2) {
                    return ("")
                }
            } else if (props.lastMsg.from == 2) {
                if (props.lastMsg.status == 1) {
                    return (<BiCheckDouble className="text-dark" />)
                } else if (props.lastMsg.status == 2) {
                    return (<BiCheckDouble className="text-darkGreen" />)
                }
            }
        }
    }

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];

        result = chats.filter((data) => {
            return data.title.search(value) != -1;
        })
        setFilteredData(result);
    }

    return (
        <div className="contact laptop:w-1/3 mobile:w-full h-full relative laptop:flex mobile:flex flex-col items-center">
            <div className="search laptop:w-4/5 mobile:w-full h-12 relative flex justify-center items-center rounded-xl bg-white">
                <input onChange={(event) => handleSearch(event)} type="text" name="" id="" className="w-full outline-none px-3" placeholder="Search" />
                <FiSearch className="absolute right-3 text-gray-400 text-lg" />
            </div>
            <Stagger in>
                <div className="users w-full absolute top-16 bottom-0 right-0 overflow-scroll flex flex-col items-center">

                    {
                        filteredData && filteredData.map(function (el, idx) {
                            return (
                                <Fade in key={idx} className="w-full flex justify-center">
                                    <div onClick={() => handleSelectContact(el, lastMsg[idx])} className="user laptop:w-4/5 mobile:w-full h-16 mb-3 bg-white rounded-lg py-1 px-2 flex items-center relative cursor-pointer laptop:hover:w-11/12 laptop:hover:h-20 duration-300 shadow-sm hover:shadow-2xl">
                                        <div className="image rounded-full h-12 w-12 mr-3 overflow-hidden bg-light">
                                            {
                                                el.image == '' || el.image == undefined ?
                                                    <Image src={img.user} height="100" width="100" alt="user" />
                                                    :
                                                    <Image src={el.image} height="100" width="100" alt="user" />
                                            }
                                        </div>
                                        <div className="text mr-3 w-3/4">
                                            <h4 className="font-bold text-sm h-6 overflow-hidden">{el.title}</h4>
                                            <p className="text-xs h-4 overflow-hidden">{
                                                lastMsg == undefined || lastMsg == null || lastMsg == '' ?
                                                    ""
                                                    :
                                                    lastMsg[idx].text
                                            }</p>
                                        </div>
                                        <div className="icon text-xl w-12 flex flex-col items-end absolute right-2">
                                            <h6 className="text-xs text-gray-400 mb-1"></h6>
                                            {
                                                lastMsg == undefined || lastMsg == '' ?
                                                    ""
                                                    :
                                                    <StatusLast lastMsg={lastMsg[idx]} />
                                            }

                                        </div>
                                    </div>
                                </Fade>

                            )
                        })
                    }

                </div>
            </Stagger>
        </div>
    )
}

export default Users;