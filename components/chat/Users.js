import { Component, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BiCheckDouble } from "react-icons/bi"
import Image from 'next/image';
import example from 'public/assets/images/example.jpg'
import $ from 'jquery';
import { useAppContext } from "components/states/GlobalStates";
import firebase from 'firebase'

function Users() {
    const { url, setUrl, isLogin, setIsLogin, detailUser, setDetailUser } = useAppContext();

    const [chats, setChats] = useState([{}]);
    const [complaints, setComplaints] = useState([{title: "", image: "default", taggar: [] }]);

    useEffect(() => {
        const db = firebase.database().ref();
        db.child("chats").on('value', getChats, errorChats);
        db.child("complaint").on('value', getComplaints, errorComplaints);
    }, [])


    function getChats(items) {
        var dataChats = [];
        for (var item in items.val()) {
            if (items.val()[item].emailUser == detailUser.email)
                dataChats.push(items.val()[item]);
        }
        setChats(dataChats)
    }

    function errorChats(items) {

    }

    function getComplaints(items){
            setComplaints(items)
    }

    function errorComplaints(items){
        
    }

    function handleSelectContact() {
        $('.message').removeClass('mobile:hidden');
        $('.contact').addClass('hidden').removeClass('flex');
    }

    return (
        <div className="contact laptop:w-1/3 mobile:w-full h-full relative flex flex-col items-center">
            <div className="search laptop:w-4/5 mobile:w-full h-12 relative flex justify-center items-center rounded-xl bg-white">
                <input type="text" name="" id="" className="w-full outline-none px-3" placeholder="Search" />
                <FiSearch className="absolute right-3 text-gray-400 text-lg" />
            </div>
            <div className="users w-full absolute top-16 bottom-0 right-0 overflow-scroll flex flex-col items-center">

                {
                    chats && chats.map(function (el, idx) {
                        return (
                            <div key={idx} onClick={() => handleSelectContact(el.key)} className="user laptop:w-4/5 mobile:w-full h-16 mb-3 bg-white rounded-lg py-1 px-2 flex items-center relative cursor-pointer laptop:hover:w-11/12 laptop:hover:h-20 duration-300 shadow-sm hover:shadow-2xl">
                                <div className="image rounded-full h-12 w-12 mr-3 overflow-hidden bg-light">
                                    {/* {
                                        complaints[el.idComplaint].image == 'default' ? 
                                        <Image src={example} height="100" width="100" alt="user" />
                                        :
                                        <Image src={complaints[el.idComplaint].image} height="100" width="100" alt="user" />
                                    } */}
                                </div>
                                <div className="text mr-3">
                                    {/* <h4 className="font-bold text-sm">{complaints[el.idComplaint].title}</h4> */}
                                    <p className="text-xs">{el.text}</p>
                                </div>
                                <div className="icon text-xl w-12 flex flex-col items-end absolute right-2">
                                    <h6 className="text-xs text-gray-400 mb-1"></h6>
                                    <BiCheckDouble className="text-darkGreen" />
                                </div>
                            </div>

                        )
                    })
                }


            </div>
        </div>
    )
}

export default Users;