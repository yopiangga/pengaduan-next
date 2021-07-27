const { Component } = require("react");
import Image from 'next/image';
import example from 'public/assets/images/example.jpg'
import { FiCalendar, FiHeart, FiMessageCircle, FiThumbsUp, FiUser } from 'react-icons/fi';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pt-20">
                <div className="content flex w-full">
                    <div className="left w-3/4 pr-5">
                        <div className="image w-full mb-5 bg-white">
                            <Image src={example} alt="image complaint" />
                        </div>

                        <div className="author mb-5 flex">
                            <h4 className="text-sm mr-5 flex items-center"><FiUser className="font-medium mr-2" /> Alfian Prisma Y</h4>

                            <div className="like flex items-center mr-5 text-sm">
                                <FiHeart className="mr-2" />
                                <h5>10</h5>
                            </div>
                            <div className="like flex items-center mr-5 text-sm">
                                <FiMessageCircle className="mr-2" />
                                <h5>7</h5>
                            </div>
                            <div className="like flex items-center mr-5 text-sm">
                                <FiThumbsUp className="mr-2" />
                                <h5>15</h5>
                            </div>

                            <h4 className="text-sm mr-5 flex items-center"><FiCalendar className="mr-2" /> 11 July 2021</h4>
                        </div>

                        <div className="title mb-5">
                            <h1 className="font-medium text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quae!</h1>
                        </div>

                        <div className="description mb-5">
                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae deserunt maiores debitis veritatis quis exercitationem nisi, iste a dolorem omnis!</p>
                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellendus odit nemo ipsam dolorum qui.</p>
                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eligendi, quis tempora sunt totam nemo ea facilis, consequatur temporibus libero mollitia veniam dolore illum eaque.</p>
                        </div>

                        <div className="tags flex mb-5">
                            <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-lightGreen bg-lightGreen cursor-pointer">
                                <h4>Pencemaran</h4>
                            </div>
                            <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-yellow bg-yellow cursor-pointer">
                                <h4>Tanah Longsor</h4>
                            </div>
                        </div>

                        <div className="maps mb-10 w-full h-96">
                            <iframe name="RoutePlanner" width="100%" height="100%" src="https://www.google.com/maps?z=12&amp&f=d&amp&output=embed&amp&ll=52.355518,-1.174320" />
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

                    <div className="right w-1/4 flex justify-center">
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
}

export default Main;