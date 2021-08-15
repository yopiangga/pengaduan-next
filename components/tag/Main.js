const { Component, useState, useEffect } = require("react");
import Image from 'next/image';
import example from 'public/assets/images/example.jpg'
import { FiAlertCircle, FiCalendar, FiChevronDown, FiHeart, FiLink, FiMoreHorizontal, FiShare, FiShare2, FiUsers } from 'react-icons/fi';
import { RiContactsBookUploadLine, RiLayoutGridLine, RiLayoutMasonryLine } from 'react-icons/ri'
import $ from 'jquery';
import { useRouter } from 'next/router';
import firebase from 'firebase'
import axios from 'axios'
import { useAppContext } from 'components/states/GlobalStates';
import ModalReportComplaint from 'components/all/ModalReportComplaint';

function Main(props) {
    const { url, setUrl, isLogin, setIsLogin, detailUser, setDetailUser } = useAppContext();

    const [style, setStyle] = useState(1);
    const [filter, setFilter] = useState(0);
    const [complaints, setComplaints] = useState();
    const router = useRouter();
    const [complaint, setComplaint] = useState({ id: "" });
    const [reportComplaint, setReportComplaint] = useState(false);

    useEffect(() => {
        const dbComplaints = firebase.database().ref();
        dbComplaints.child("complaint").on('value', getComplaints, errorComplaints);
    }, [])

    function getComplaints(items) {
        var dataComplaints = [];
        for (var item in items.val()) {
            if (items.val()[item].taggar[0] == props.id || items.val()[item].taggar[1] == props.id || items.val()[item].taggar[2] == props.id)
                dataComplaints.push(items.val()[item]);
        }
        setComplaints(dataComplaints)
    }

    function errorComplaints(items) {

    }

    const handleStyle = (s, f) => {
        setStyle(s);
        setFilter(f);
        $('.filter-dropdown').addClass('hidden').removeClass('block')
    }

    const handleFilter = () => {
        $('.filter-dropdown').toggleClass('hidden').toggleClass('block')
    }

    const handleMoreAction = (id) => {
        $(`#more-action-${id}`).toggleClass('hidden').toggleClass('block')
    }

    const handleClose = () => {
        $('.filter-dropdown').addClass('hidden').removeClass('block')
    }

    const handleTag = (event) => {
        router.push(`/tag/${event}`);
    }

    const handleComplaint = (event) => {
        router.push(`/complaint/${event}`);
    }

    const handleCopy = (dataUrl) => {
        var tempInput = document.createElement("input");
        tempInput.value = dataUrl;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    }

    const handleReport = (id) => {
        handleClose();
        handleMoreAction(id);
        setComplaint({ id: id });
        setReportComplaint(true)
    }

    return (
        <div className="pt-0 ">
            <ModalReportComplaint
                id={complaint.key}
                isOpen={reportComplaint}
                onClick={() => setReportComplaint(false)}
                onReport={(title, description, status) => setModalInformation({ title: title, description: description, status: status, isOpen: true })}
            />
            <div className="content pt-24 tablet:pl-20 mobile:px-4">
                <div className="header flex tablet:flex-row mobile:flex-col justify-between mb-5 ">
                    <h1 className="text-3xl font-medium tablet:mb-0 mobile:mb-5"> Tag : {
                        props != undefined ?
                            props.id
                            :
                            ""
                    }</h1>
                    <div className="filter flex relative justify-end">
                        <div className="light-layer-1 rounded-lg">
                            <div onClick={handleFilter} className="light-layer-2 box cursor-pointer h-10 px-3 rounded-md flex justify-center items-center">
                                <h4 className="font-medium text-xs mr-1">Filter</h4>
                                <FiChevronDown className="text-xl" />
                            </div>
                        </div>
                        <div className="filter-dropdown py-3 rounded-b-lg w-36 hidden rounded-tl-lg top-12 absolute z-10 bg-white shadow-lg">
                            <ul>
                                <li onClick={() => handleStyle(1, 0)} className="flex items-center justify-end mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"> All Complaint</li>
                                <li onClick={() => handleStyle(1, 1)} className="flex items-center justify-end mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"> Open</li>
                                <li onClick={() => handleStyle(1, 2)} className="flex items-center justify-end mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"> In Progress</li>
                                <li onClick={() => handleStyle(1, 3)} className="flex items-center justify-end mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"> Completed</li>
                                <li onClick={() => handleStyle(1, 4)} className="flex items-center justify-end mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"> Done</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div onClick={handleClose} className="grid desktop:grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 style-1">

                    {
                        complaints && complaints.map((el, idx) => {
                            if (el.status == filter || filter == 0 && el.status != 5)
                                return (
                                    <div key={idx} className="light-layer-1 active mb-4 tablet:w-11/12 rounded-lg">
                                        <div className=" light-layer-2 active card mobile:w-full p-3 box-border rounded-lg h-52">
                                            <div className="header flex mb-1 relative">
                                                <div className="title h-12 overflow-hidden w-full flex justify-between">
                                                    <h4 onClick={() => handleComplaint(el.key)} className="font-medium text-md cursor-pointer hover:underline">{el.title}</h4>
                                                </div>
                                                <div onClick={() => handleMoreAction(el.key)} className="icon text-xl w-8 h-6 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-100 ">
                                                    <FiMoreHorizontal />
                                                </div>
                                                <div id={`more-action-${el.key}`} className="laptop:-right-14 py-3 mobile:right-0 hidden rounded-b-lg rounded-tr-lg top-6 absolute bg-white shadow-lg">
                                                    {
                                                        (detailUser.idUser == null || detailUser.idUser == '') ?
                                                            <ul>
                                                                <li onClick={() => handleCopy(el.key)} className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiLink className="mr-3" /> Copy Link</li>
                                                            </ul>
                                                            :
                                                            <ul>
                                                                {/* <li onClick={() => handleSupport(el.key)} className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiHeart className="mr-3" /> Support</li> */}
                                                                <li onClick={() => handleCopy(el.key)} className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiLink className="mr-3" /> Copy Link</li>
                                                                <li onClick={() => handleReport(el.key)} className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiAlertCircle className="mr-3" /> Report Complaint</li>
                                                            </ul>

                                                    }
                                                </div>

                                            </div>
                                            <div className="description mb-3 h-14 overflow-hidden">
                                                <p className="text-sm">{el.description}</p>
                                            </div>
                                            <div className="taggar mb-3 flex">
                                                {
                                                    el.taggar.map(function (tag, idTag) {
                                                        return (
                                                            <div key={idTag} onClick={() => handleTag(tag)} className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-lightGreen bg-lightGreen cursor-pointer">
                                                                <h4>{tag}</h4>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="card-footer flex flex-wrap justify-between items-center relative bottom-0">
                                            <div className="support flex relative h-6 w-24 items-center">
                                                    {
                                                        el.status == 1 ?
                                                            <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs text-white bg-dark">
                                                                <h4 className="text-white font-medium">OPEN</h4>
                                                            </div>
                                                            :
                                                            ""
                                                    }
                                                    {
                                                        el.status == 2 ?
                                                            <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs text-white bg-yellow">
                                                                <h4 className="text-white font-medium">PROGRESS</h4>
                                                            </div>
                                                            :
                                                            ""
                                                    }
                                                    {
                                                        el.status == 3 ?
                                                            <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs text-white bg-darkBlue">
                                                                <h4 className="text-white font-medium">COMPLETE</h4>
                                                            </div>
                                                            :
                                                            ""
                                                    }
                                                    {
                                                        el.status == 4 ?
                                                            <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs text-white bg-darkGreen">
                                                                <h4 className="text-white font-medium">DONE</h4>
                                                            </div>
                                                            :
                                                            ""
                                                    }
                                                    {
                                                        el.status == 5 ?
                                                            <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs text-white bg-red-600">
                                                                <h4 className="text-white font-medium">DECLINED</h4>
                                                            </div>
                                                            :
                                                            ""
                                                    }
                                                </div>
                                                <div className="action flex items-center">
                                                    <div className="time text-sm flex items-center">
                                                        <FiCalendar className="text-darkGreen" />
                                                        <h4 className="ml-1">
                                                            {
                                                                el.key == '' || el.key == null ?
                                                                    ""
                                                                    :
                                                                    new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(el.key))
                                                            }
                                                        </h4>
                                                    </div>
                                                    <div className="text-sm ml-2 flex items-center">
                                                        <FiUsers className="text-darkGreen" />
                                                        <h4 className="ml-1">{el.support}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )

                        })
                    }

                </div>


            </div>


        </div>
    )

}

export default Main;

