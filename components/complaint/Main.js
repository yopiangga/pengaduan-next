const { Component, useEffect, useState } = require("react");
import { useAppContext } from 'components/states/GlobalStates';
import Image from 'next/image';
import example from 'public/assets/images/example.jpg'
import { FiCalendar, FiHeart, FiMessageCircle, FiShare2, FiThumbsUp, FiUser, FiUsers } from 'react-icons/fi';
import axios from 'axios';
import GoogelMaps from 'components/all/GoogleMaps.js';

function Main(props) {

    const { url, setUrl, isLogin, setIsLogin, detailUser, setDetailUser } = useAppContext();
    const [complaint, setComplaint] = useState({ title: "", description: "", taggar: [], image: "", latitude: "", longitude: "", author: "", key: "", shared: "" });
    const [supports, setSupports] = useState([{}]);
    const [ inBrowser, setInBrowser ] = useState(false);

    useEffect(() => {
        if (props.id != null) {
            getComplaint();
            getSupports();
            setInBrowser(1);
        }
    }, [])

    const getComplaint = () => {
        axios.get(`https://pengaduan-e0f12-default-rtdb.firebaseio.com/complaint/${props.id}.json`).then(function (res) {
            setComplaint(res.data);
            // console.log(res.data)
        }).catch(function (err) {
            console.log(err)
        })
    }

    const getSupports = () => {
        axios.get(`https://pengaduan-e0f12-default-rtdb.firebaseio.com/supports/${props.id}.json`).then(function (res) {
            if (res.data == null) {
                setSupports(0);
            } else {
                var dataSupports = [];
                for (var item in res.data) {
                    dataSupports.push(res.data[item]);
                }
                setSupports(dataSupports)
            }
        }).catch(function (err) {
            console.log(err);
        })
    }

    return (
        <div className="pt-20">
            <div className="content flex laptop:flex-row mobile:flex-col w-full">
                <div className="left laptop:w-3/4 mobile:w-full laptop:pr-5">
                    {
                        complaint.image == null || complaint.image == '' ?
                            ""
                            :
                            // ""
                            <div className="image w-full mb-5 bg-white">
                                <Image src={complaint.image} width="100" height="100" alt="image complaint" />
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
                                    supports == 0 ? 0 : supports.length
                                }
                            </h5>
                        </div>

                        <h4 className="text-sm mr-5 flex items-center"><FiCalendar className="mr-2" /> {new Date(complaint.key).getDate() + '-' + new Date(complaint.key).getMonth() + '-' + new Date(complaint.key).getFullYear()}</h4>
                    </div>

                    <div className="title mb-5">
                        <h1 className="font-medium text-2xl">{complaint.title}</h1>
                    </div>

                    <div className="row mb-5 mobile:flex laptop:hidden">
                        <div className="col w-full">
                            <div className="form-group flex">
                                <button className="py-2 w-1/2 mr-3 bg-transparent rounded-full text-darkGreen border border-darkGreen font-medium">Share</button>
                                <button className="py-2 w-full mr-3 bg-darkGreen rounded-full text-white font-medium">Support Complaint</button>
                            </div>
                        </div>
                    </div>

                    <div className="description mb-5">
                        <p className="mb-3">{complaint.description}</p>
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
                            <GoogelMaps latitude={complaint.latitude} longitude={complaint.longitude} />
                        }
                    </div>

                    <div className="comment">
                        <h2 className="font-medium text-xl mb-8">Reason for support</h2>

                        <div className="item flex mb-5">
                            <div className="image rounded-full h-10 w-10 mr-3 overflow-hidden bg-light">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="text">
                                <div className="header flex mb-1">
                                    <h4 className="font-bold text-sm mr-3">Alfian Prisma Y</h4>
                                    <h6 className="text-sm">10 July 2021</h6>
                                </div>
                                <div className="comment-text mb-3">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolores eligendi, pariatur accusantium at atque voluptates nesciunt tenetur officia modi incidunt distinctio. Ratione, esse architecto?</p>
                                </div>
                                <div className="action flex items-center mb-3">
                                    <div className="like flex items-center mr-5 text-sm">
                                        <FiHeart className="mr-2" />
                                        <h5>10</h5>
                                    </div>
                                    <div className="report">
                                        <h5>Report</h5>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="item flex mb-5">
                            <div className="image rounded-full h-10 w-10 mr-3 overflow-hidden bg-light">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="text">
                                <div className="header flex mb-1">
                                    <h4 className="font-bold text-sm mr-3">Alfian Prisma Y</h4>
                                    <h6 className="text-sm">10 July 2021</h6>
                                </div>
                                <div className="comment-text mb-3">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolores eligendi, pariatur accusantium at atque voluptates nesciunt tenetur officia modi incidunt distinctio. Ratione, esse architecto?</p>
                                </div>
                                <div className="action flex items-center mb-3">
                                    <div className="like flex items-center mr-5 text-sm">
                                        <FiHeart className="mr-2" />
                                        <h5>10</h5>
                                    </div>
                                    <div className="report">
                                        <h5>Report</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right laptop:w-1/4 mobile:w-full laptop:flex mobile:hidden justify-center">
                    <div className="bg-white rounded-lg p-4 fixed w-72">
                        <div className="mb-5">
                            <h3 className="mb-2 font-medium text-xl text-center">Form Support</h3>
                            <p className="text-center text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, sit?</p>
                        </div>
                        <div className="row flex mb-5">
                            <div className="col w-full">
                                <div className="form-group flex">
                                    <button className="py-2 w-full mr-3 bg-darkGreen rounded-full text-white font-medium">Support Complaint</button>
                                </div>
                            </div>
                        </div>
                        <div className="row flex mb-5">
                            <div className="col w-full">
                                <div className="form-group flex">
                                    <button className="py-2 w-1/2 mr-3 bg-transparent rounded-full text-darkGreen border border-darkGreen font-medium">Share</button>
                                    <button className="py-2 w-1/2  font-medium">Report</button>
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