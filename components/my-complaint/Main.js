const { Component, useState } = require("react");
import Image from 'next/image';
import example from 'public/assets/images/example.jpg'
import { FiAlertCircle, FiCalendar, FiChevronDown, FiHeart, FiLink, FiMoreHorizontal, FiShare, FiShare2 } from 'react-icons/fi';
import { RiLayoutGridLine, RiLayoutMasonryLine } from 'react-icons/ri'
import $ from 'jquery';
import { useRouter } from 'next/router';

function Main() {

    const [style, setStyle] = useState(1);
    const [filter, setFilter] = useState(1);
    const router = useRouter();

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

    return (
        <div className="pt-20">
            <div className="header flex tablet:flex-row mobile:flex-col justify-between mb-5">
                <h1 className="text-3xl font-medium tablet:mb-0 mobile:mb-5">My Complaint</h1>
                <div className="filter flex relative justify-end">
                    <div onClick={handleFilter} className="box cursor-pointer h-10 px-3 bg-white rounded-md flex justify-center items-center">
                        <h4 className="font-medium text-sm mr-1">Filter</h4>
                        <FiChevronDown className="text-xl" />
                    </div>
                    <div className="filter-dropdown py-3 rounded-b-lg hidden rounded-tr-lg top-12 absolute z-10 bg-white shadow-lg">
                        <ul>
                            <li onClick={() => handleStyle(1, 1)} className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"> All Complaint</li>
                            <li onClick={() => handleStyle(1, 2)} className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"> Open</li>
                            <li onClick={() => handleStyle(1, 3)} className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"> In Progress</li>
                            <li onClick={() => handleStyle(1, 4)} className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"> Completed</li>
                            <li onClick={() => handleStyle(1, 5)} className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"> Done</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div onClick={handleClose} className="grid desktop:grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 style-1">
                <div className="card tabelt:w-11/12 mobile:w-full p-3 box-border bg-white rounded-lg mb-4">
                    <div className="header flex mb-1 relative">
                        <div className="title">
                            <h4 className="font-medium text-md cursor-pointer hover:underline">Pencemaran Lingkungan di daerah Pegunungan</h4>
                        </div>
                        <div className="icon text-xl w-8 h-6 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-100 ">
                            <FiMoreHorizontal />
                        </div>
                        <div className="laptop:laptop:-right-14 py-3 mobile:right-0 mobile:right-0 hidden rounded-b-lg rounded-tr-lg top-6 absolute bg-white shadow-lg">
                            <ul>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiHeart className="mr-3" /> Favorit</li>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiLink className="mr-3" /> Copy Link</li>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiAlertCircle className="mr-3" /> Report Complaint</li>
                            </ul>
                        </div>

                    </div>
                    <div className="description mb-3">
                        <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo odit ipsum rerum ratione consequatur minima!</p>
                    </div>
                    <div className="taggar mb-3 flex">
                        <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-lightGreen bg-lightGreen cursor-pointer">
                            <h4>Pencemaran</h4>
                        </div>
                        <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-yellow bg-yellow cursor-pointer">
                            <h4>Tanah Longsor</h4>
                        </div>
                    </div>
                    <div className="card-footer flex flex-wrap justify-between items-center">
                        <div className="support flex relative h-6 w-24">
                            <div className="circle absolute z-20 left-0 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-10 left-5 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-0 left-10 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-0 left-16 rounded-full w-6 h-6 overflow-hidden font-medium flex justify-center items-center">
                                <h4> +5</h4>
                            </div>
                        </div>
                        <div className="action flex items-center">
                            <div className="time text-sm flex items-center">
                                <FiCalendar className="text-darkGreen" />
                                <h4 className="ml-1">25 July 21</h4>
                            </div>
                            <div className="text-sm ml-2 flex items-center">
                                <FiShare2 className="text-darkGreen" />
                                <h4 className="ml-1">500</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card tabelt:w-11/12 mobile:w-full p-3 box-border bg-white rounded-lg mb-4">
                    <div className="header flex mb-1 relative">
                        <div className="title">
                            <h4 className="font-medium text-md cursor-pointer hover:underline">Pencemaran Lingkungan di daerah Pegunungan</h4>
                        </div>
                        <div className="icon text-xl w-8 h-6 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-100 ">
                            <FiMoreHorizontal />
                        </div>
                        <div className="laptop:-right-14 py-3 mobile:right-0 hidden rounded-b-lg rounded-tr-lg top-6 absolute bg-white shadow-lg">
                            <ul>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiHeart className="mr-3" /> Favorit</li>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiLink className="mr-3" /> Copy Link</li>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiAlertCircle className="mr-3" /> Report Complaint</li>
                            </ul>
                        </div>

                    </div>
                    <div className="description mb-3">
                        <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo odit ipsum rerum ratione consequatur minima!</p>
                    </div>
                    <div className="taggar mb-3 flex">
                        <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-lightGreen bg-lightGreen cursor-pointer">
                            <h4>Pencemaran</h4>
                        </div>
                        <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-yellow bg-yellow cursor-pointer">
                            <h4>Tanah Longsor</h4>
                        </div>
                    </div>
                    <div className="card-footer flex flex-wrap justify-between items-center">
                        <div className="support flex relative h-6 w-24">
                            <div className="circle absolute z-20 left-0 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-10 left-5 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-0 left-10 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-0 left-16 rounded-full w-6 h-6 overflow-hidden font-medium flex justify-center items-center">
                                <h4> +5</h4>
                            </div>
                        </div>
                        <div className="action flex items-center">
                            <div className="time text-sm flex items-center">
                                <FiCalendar className="text-darkGreen" />
                                <h4 className="ml-1">25 July 21</h4>
                            </div>
                            <div className="text-sm ml-2 flex items-center">
                                <FiShare2 className="text-darkGreen" />
                                <h4 className="ml-1">500</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card tabelt:w-11/12 mobile:w-full p-3 box-border bg-white rounded-lg mb-4">
                    <div className="header flex mb-1 relative">
                        <div className="title">
                            <h4 className="font-medium text-md cursor-pointer hover:underline">Pencemaran Lingkungan di daerah Pegunungan</h4>
                        </div>
                        <div className="icon text-xl w-8 h-6 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-100 ">
                            <FiMoreHorizontal />
                        </div>
                        <div className="laptop:-right-14 py-3 mobile:right-0 hidden rounded-b-lg rounded-tr-lg top-6 absolute bg-white shadow-lg">
                            <ul>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiHeart className="mr-3" /> Favorit</li>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiLink className="mr-3" /> Copy Link</li>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiAlertCircle className="mr-3" /> Report Complaint</li>
                            </ul>
                        </div>

                    </div>
                    <div className="description mb-3">
                        <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo odit ipsum rerum ratione consequatur minima!</p>
                    </div>
                    <div className="taggar mb-3 flex">
                        <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-lightGreen bg-lightGreen cursor-pointer">
                            <h4>Pencemaran</h4>
                        </div>
                        <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-yellow bg-yellow cursor-pointer">
                            <h4>Tanah Longsor</h4>
                        </div>
                    </div>
                    <div className="card-footer flex flex-wrap justify-between items-center">
                        <div className="support flex relative h-6 w-24">
                            <div className="circle absolute z-20 left-0 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-10 left-5 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-0 left-10 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-0 left-16 rounded-full w-6 h-6 overflow-hidden font-medium flex justify-center items-center">
                                <h4> +5</h4>
                            </div>
                        </div>
                        <div className="action flex items-center">
                            <div className="time text-sm flex items-center">
                                <FiCalendar className="text-darkGreen" />
                                <h4 className="ml-1">25 July 21</h4>
                            </div>
                            <div className="text-sm ml-2 flex items-center">
                                <FiShare2 className="text-darkGreen" />
                                <h4 className="ml-1">500</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card tabelt:w-11/12 mobile:w-full p-3 box-border bg-white rounded-lg mb-4">
                    <div className="header flex mb-1 relative">
                        <div className="title">
                            <h4 className="font-medium text-md cursor-pointer hover:underline">Pencemaran Lingkungan di daerah Pegunungan</h4>
                        </div>
                        <div className="icon text-xl w-8 h-6 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-100 ">
                            <FiMoreHorizontal />
                        </div>
                        <div className="laptop:-right-14 py-3 mobile:right-0 hidden rounded-b-lg rounded-tr-lg top-6 absolute bg-white shadow-lg">
                            <ul>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiHeart className="mr-3" /> Favorit</li>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiLink className="mr-3" /> Copy Link</li>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiAlertCircle className="mr-3" /> Report Complaint</li>
                            </ul>
                        </div>

                    </div>
                    <div className="description mb-3">
                        <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo odit ipsum rerum ratione consequatur minima!</p>
                    </div>
                    <div className="taggar mb-3 flex">
                        <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-lightGreen bg-lightGreen cursor-pointer">
                            <h4>Pencemaran</h4>
                        </div>
                        <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-yellow bg-yellow cursor-pointer">
                            <h4>Tanah Longsor</h4>
                        </div>
                    </div>
                    <div className="card-footer flex flex-wrap justify-between items-center">
                        <div className="support flex relative h-6 w-24">
                            <div className="circle absolute z-20 left-0 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-10 left-5 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-0 left-10 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-0 left-16 rounded-full w-6 h-6 overflow-hidden font-medium flex justify-center items-center">
                                <h4> +5</h4>
                            </div>
                        </div>
                        <div className="action flex items-center">
                            <div className="time text-sm flex items-center">
                                <FiCalendar className="text-darkGreen" />
                                <h4 className="ml-1">25 July 21</h4>
                            </div>
                            <div className="text-sm ml-2 flex items-center">
                                <FiShare2 className="text-darkGreen" />
                                <h4 className="ml-1">500</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card tabelt:w-11/12 mobile:w-full p-3 box-border bg-white rounded-lg mb-4">
                    <div className="header flex mb-1 relative">
                        <div className="title">
                            <h4 className="font-medium text-md cursor-pointer hover:underline">Pencemaran Lingkungan di daerah Pegunungan</h4>
                        </div>
                        <div className="icon text-xl w-8 h-6 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-100 ">
                            <FiMoreHorizontal />
                        </div>
                        <div className="laptop:-right-14 py-3 mobile:right-0 hidden rounded-b-lg rounded-tr-lg top-6 absolute bg-white shadow-lg">
                            <ul>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiHeart className="mr-3" /> Favorit</li>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiLink className="mr-3" /> Copy Link</li>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiAlertCircle className="mr-3" /> Report Complaint</li>
                            </ul>
                        </div>

                    </div>
                    <div className="description mb-3">
                        <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo odit ipsum rerum ratione consequatur minima!</p>
                    </div>
                    <div className="taggar mb-3 flex">
                        <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-lightGreen bg-lightGreen cursor-pointer">
                            <h4>Pencemaran</h4>
                        </div>
                        <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-yellow bg-yellow cursor-pointer">
                            <h4>Tanah Longsor</h4>
                        </div>
                    </div>
                    <div className="card-footer flex flex-wrap justify-between items-center">
                        <div className="support flex relative h-6 w-24">
                            <div className="circle absolute z-20 left-0 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-10 left-5 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-0 left-10 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-0 left-16 rounded-full w-6 h-6 overflow-hidden font-medium flex justify-center items-center">
                                <h4> +5</h4>
                            </div>
                        </div>
                        <div className="action flex items-center">
                            <div className="time text-sm flex items-center">
                                <FiCalendar className="text-darkGreen" />
                                <h4 className="ml-1">25 July 21</h4>
                            </div>
                            <div className="text-sm ml-2 flex items-center">
                                <FiShare2 className="text-darkGreen" />
                                <h4 className="ml-1">500</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card tabelt:w-11/12 mobile:w-full p-3 box-border bg-white rounded-lg mb-4">
                    <div className="header flex mb-1 relative">
                        <div className="title">
                            <h4 className="font-medium text-md cursor-pointer hover:underline">Pencemaran Lingkungan di daerah Pegunungan</h4>
                        </div>
                        <div className="icon text-xl w-8 h-6 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-100 ">
                            <FiMoreHorizontal />
                        </div>
                        <div className="laptop:-right-14 py-3 mobile:right-0 hidden rounded-b-lg rounded-tr-lg top-6 absolute bg-white shadow-lg">
                            <ul>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiHeart className="mr-3" /> Favorit</li>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiLink className="mr-3" /> Copy Link</li>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiAlertCircle className="mr-3" /> Report Complaint</li>
                            </ul>
                        </div>

                    </div>
                    <div className="description mb-3">
                        <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo odit ipsum rerum ratione consequatur minima!</p>
                    </div>
                    <div className="taggar mb-3 flex">
                        <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-lightGreen bg-lightGreen cursor-pointer">
                            <h4>Pencemaran</h4>
                        </div>
                        <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-yellow bg-yellow cursor-pointer">
                            <h4>Tanah Longsor</h4>
                        </div>
                    </div>
                    <div className="card-footer flex flex-wrap justify-between items-center">
                        <div className="support flex relative h-6 w-24">
                            <div className="circle absolute z-20 left-0 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-10 left-5 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-0 left-10 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-0 left-16 rounded-full w-6 h-6 overflow-hidden font-medium flex justify-center items-center">
                                <h4> +5</h4>
                            </div>
                        </div>
                        <div className="action flex items-center">
                            <div className="time text-sm flex items-center">
                                <FiCalendar className="text-darkGreen" />
                                <h4 className="ml-1">25 July 21</h4>
                            </div>
                            <div className="text-sm ml-2 flex items-center">
                                <FiShare2 className="text-darkGreen" />
                                <h4 className="ml-1">500</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card tabelt:w-11/12 mobile:w-full p-3 box-border bg-white rounded-lg mb-4">
                    <div className="header flex mb-1 relative">
                        <div className="title">
                            <h4 className="font-medium text-md cursor-pointer hover:underline">Pencemaran Lingkungan di daerah Pegunungan</h4>
                        </div>
                        <div className="icon text-xl w-8 h-6 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-100 ">
                            <FiMoreHorizontal />
                        </div>
                        <div className="laptop:-right-14 py-3 mobile:right-0 hidden rounded-b-lg rounded-tr-lg top-6 absolute bg-white shadow-lg">
                            <ul>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiHeart className="mr-3" /> Favorit</li>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiLink className="mr-3" /> Copy Link</li>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiAlertCircle className="mr-3" /> Report Complaint</li>
                            </ul>
                        </div>

                    </div>
                    <div className="description mb-3">
                        <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo odit ipsum rerum ratione consequatur minima!</p>
                    </div>
                    <div className="taggar mb-3 flex">
                        <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-lightGreen bg-lightGreen cursor-pointer">
                            <h4>Pencemaran</h4>
                        </div>
                        <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-yellow bg-yellow cursor-pointer">
                            <h4>Tanah Longsor</h4>
                        </div>
                    </div>
                    <div className="card-footer flex flex-wrap justify-between items-center">
                        <div className="support flex relative h-6 w-24">
                            <div className="circle absolute z-20 left-0 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-10 left-5 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-0 left-10 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-0 left-16 rounded-full w-6 h-6 overflow-hidden font-medium flex justify-center items-center">
                                <h4> +5</h4>
                            </div>
                        </div>
                        <div className="action flex items-center">
                            <div className="time text-sm flex items-center">
                                <FiCalendar className="text-darkGreen" />
                                <h4 className="ml-1">25 July 21</h4>
                            </div>
                            <div className="text-sm ml-2 flex items-center">
                                <FiShare2 className="text-darkGreen" />
                                <h4 className="ml-1">500</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card tabelt:w-11/12 mobile:w-full p-3 box-border bg-white rounded-lg mb-4">
                    <div className="header flex mb-1 relative">
                        <div className="title">
                            <h4 className="font-medium text-md cursor-pointer hover:underline">Pencemaran Lingkungan di daerah Pegunungan</h4>
                        </div>
                        <div className="icon text-xl w-8 h-6 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-100 ">
                            <FiMoreHorizontal />
                        </div>
                        <div className="laptop:-right-14 py-3 mobile:right-0 hidden rounded-b-lg rounded-tr-lg top-6 absolute bg-white shadow-lg">
                            <ul>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiHeart className="mr-3" /> Favorit</li>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiLink className="mr-3" /> Copy Link</li>
                                <li className="flex items-center mb-0 py-1 px-3 cursor-pointer hover:bg-gray-50"><FiAlertCircle className="mr-3" /> Report Complaint</li>
                            </ul>
                        </div>

                    </div>
                    <div className="description mb-3">
                        <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo odit ipsum rerum ratione consequatur minima!</p>
                    </div>
                    <div className="taggar mb-3 flex">
                        <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-lightGreen bg-lightGreen cursor-pointer">
                            <h4>Pencemaran</h4>
                        </div>
                        <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-yellow bg-yellow cursor-pointer">
                            <h4>Tanah Longsor</h4>
                        </div>
                    </div>
                    <div className="card-footer flex flex-wrap justify-between items-center">
                        <div className="support flex relative h-6 w-24">
                            <div className="circle absolute z-20 left-0 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-10 left-5 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-0 left-10 rounded-full w-6 h-6 overflow-hidden border border-white">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="circle absolute z-0 left-16 rounded-full w-6 h-6 overflow-hidden font-medium flex justify-center items-center">
                                <h4> +5</h4>
                            </div>
                        </div>
                        <div className="action flex items-center">
                            <div className="time text-sm flex items-center">
                                <FiCalendar className="text-darkGreen" />
                                <h4 className="ml-1">25 July 21</h4>
                            </div>
                            <div className="text-sm ml-2 flex items-center">
                                <FiShare2 className="text-darkGreen" />
                                <h4 className="ml-1">500</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Main;