const { Component } = require("react");
const { FaRegBell } = require("react-icons/fa");
import Image from 'next/image';
import example from 'public/assets/images/example.jpg'
import { FiChevronDown, FiHeart, FiLogOut, FiMenu, FiMessageCircle, FiThumbsUp, FiX } from 'react-icons/fi';
import $ from 'jquery'
import Link from 'next/link'

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    handleShowSidebar() {
        $('.sidebar').toggleClass('mobile:h-0').toggleClass('mobile:h-screen')
        $('.navbar').toggleClass('mobile:left-4').toggleClass('mobile:left-20')
        $('.navbar .menu-icon').toggleClass('hidden')
        $('.navbar .close-icon').toggleClass('hidden')
    }

    handleShowNotification() {
        $('.navbar .notification').toggleClass('hidden')
    }

    handleShowProfile() {
        $('.navbar .profile').toggleClass('hidden')
    }

    render() {
        return (
            <div className="navbar duration-300 h-16 tablet:left-20 mobile:left-4 right-4 fixed z-50 shadow-sm">
                <div className="content-nav bg-white h-full w-full rounded-lg flex tablet:justify-between mobile:justify-between">
                    <div className="name-page h-full tablet:flex items-center mobile:hidden">
                        <h3 className="text-xl font-medium ml-3">Dashboard</h3>
                    </div>
                    <div onClick={this.handleShowSidebar} className="name-page h-full tablet:hidden items-center mobile:flex">
                        <FiMenu className="menu-icon text-xl font-medium ml-3" />
                        <FiX className="close-icon hidden text-xl font-medium ml-3" />
                    </div>
                    <div className="add-action flex">
                        <div className="w-16 h-16 mr-3 relative cursor-pointer bg-white flex justify-center items-center group">
                            <FaRegBell onClick={this.handleShowNotification} className="text-2xl group-hover:text-darkGreen" />
                            <div className="circle absolute w-5 h-5 bg-darkGreen rounded-full top-3 right-3 flex justify-center items-center">
                                <h6 className="text-white text-xs font-medium text-center">5</h6>
                            </div>

                            <div className="notification py-3 w-80 hidden rounded-b-lg rounded-tr-lg top-16 mobile:-right-24 absolute bg-white shadow-lg">
                                <ul>
                                    <li className="flex items-center mb-1 py-1 px-3 cursor-pointer hover:bg-gray-50">
                                        <div className="circle rounded-full w-10 h-10 mr-3 bg-orange bg-opacity-20 flex justify-center items-center text-xl text-orange">
                                            <FiHeart />
                                        </div>
                                        <div className="text">
                                            <h4 className="text-sm"><span className="font-medium">Alfian Prisma Y</span> liked your post</h4>
                                            <h6 className="text-xs">10.34</h6>
                                        </div>
                                    </li>
                                    <li className="flex items-center mb-1 py-1 px-3 cursor-pointer hover:bg-gray-50">
                                        <div className="circle rounded-full w-10 h-10 mr-3 bg-yellow bg-opacity-20 flex justify-center items-center text-xl text-yellow">
                                            <FiMessageCircle />
                                        </div>
                                        <div className="text">
                                            <h4 className="text-sm"><span className="font-medium">Alfian Prisma Y</span> comments on post</h4>
                                            <h6 className="text-xs">10.34</h6>
                                        </div>
                                    </li>
                                    <li className="flex items-center mb-1 py-1 px-3 cursor-pointer hover:bg-gray-50">
                                        <div className="circle rounded-full w-10 h-10 mr-3 bg-darkGreen bg-opacity-20 flex justify-center items-center text-xl text-darkGreen">
                                            <FiThumbsUp />
                                        </div>
                                        <div className="text">
                                            <h4 className="text-sm"><span className="font-medium">Alfian Prisma Y</span> support your post</h4>
                                            <h6 className="text-xs">10.34</h6>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="h-16 mr-3 cursor-pointer bg-white flex items-center relative">
                            <div onClick={this.handleShowProfile} className="image rounded-full h-10 w-10 mr-3 overflow-hidden bg-light">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div onClick={this.handleShowProfile} className="text mr-3 tablet:block mobile:hidden">
                                <h4 className="font-medium text-sm">Alfian Prisma Y</h4>
                                <p className="text-xs">Front End</p>
                            </div>
                            <div onClick={this.handleShowProfile} className="icon text-xl">
                                <FiChevronDown />
                            </div>

                            <div className="profile py-1 mobile:w-32 rounded-b-lg hidden rounded-tr-lg top-16 right-0 absolute bg-white shadow-lg">
                                <ul>
                                    <Link href="/login">
                                        <a className="flex items-center mb-1 py-1 px-3 cursor-pointer hover:bg-gray-50">
                                            <div className="circle rounded-full w-10 h-10 mr-3 bg-opacity-20 flex justify-center items-center text-xl">
                                                <FiLogOut />
                                            </div>
                                            <div className="text">
                                                <h4 className="text-sm">Log Out</h4>
                                            </div>
                                        </a>
                                    </Link>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;