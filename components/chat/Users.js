import { Component, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import {BiCheckDouble} from "react-icons/bi"
import Image from 'next/image';
import example from 'public/assets/images/example.jpg'

class Users extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="w-1/3 h-full relative flex flex-col items-center">
                <div className="search w-4/5 h-12 relative flex justify-center items-center rounded-xl bg-white">
                    <input type="text" name="" id="" className="w-full outline-none px-3" placeholder="Search" />
                    <FiSearch className="absolute right-3 text-gray-400 text-lg" />
                </div>
                <div className="users w-full absolute top-16 bottom-0 right-0 overflow-scroll flex flex-col items-center">

                    <div className="user w-4/5 h-16 mb-3 bg-white rounded-lg py-1 px-2 flex items-center relative cursor-pointer hover:w-11/12 hover:h-20 duration-300 shadow-sm hover:shadow-2xl">
                        <div className="image rounded-full h-12 w-12 mr-3 overflow-hidden bg-light">
                            <Image src={example} height="100" width="100" alt="user" />
                        </div>
                        <div className="text mr-3">
                            <h4 className="font-bold text-sm">Alfian Prisma Y</h4>
                            <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="icon text-xl w-12 flex flex-col items-end absolute right-2">
                            <h6 className="text-xs text-gray-400 mb-1">06.30</h6>
                            <BiCheckDouble className="text-darkGreen" />
                        </div>
                    </div>

                    <div className="user w-4/5 h-16 mb-3 bg-white rounded-lg py-1 px-2 flex items-center relative cursor-pointer hover:w-11/12 hover:h-20 duration-300 shadow-sm hover:shadow-2xl">
                        <div className="image rounded-full h-12 w-12 mr-3 overflow-hidden bg-light">
                            <Image src={example} height="100" width="100" alt="user" />
                        </div>
                        <div className="text mr-3">
                            <h4 className="font-bold text-sm">Alfian Prisma Y</h4>
                            <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="icon text-xl w-12 flex flex-col items-end absolute right-2">
                            <h6 className="text-xs text-gray-400 mb-1">06.30</h6>
                            <BiCheckDouble className="text-darkGreen" />
                        </div>
                    </div>
                    <div className="user w-4/5 h-16 mb-3 bg-white rounded-lg py-1 px-2 flex items-center relative cursor-pointer hover:w-11/12 hover:h-20 duration-300 shadow-sm hover:shadow-2xl">
                        <div className="image rounded-full h-12 w-12 mr-3 overflow-hidden bg-light">
                            <Image src={example} height="100" width="100" alt="user" />
                        </div>
                        <div className="text mr-3">
                            <h4 className="font-bold text-sm">Alfian Prisma Y</h4>
                            <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="icon text-xl w-12 flex flex-col items-end absolute right-2">
                            <h6 className="text-xs text-gray-400 mb-1">06.30</h6>
                            <BiCheckDouble className="text-darkGreen" />
                        </div>
                    </div>
                    <div className="user w-4/5 h-16 mb-3 bg-white rounded-lg py-1 px-2 flex items-center relative cursor-pointer hover:w-11/12 hover:h-20 duration-300 shadow-sm hover:shadow-2xl">
                        <div className="image rounded-full h-12 w-12 mr-3 overflow-hidden bg-light">
                            <Image src={example} height="100" width="100" alt="user" />
                        </div>
                        <div className="text mr-3">
                            <h4 className="font-bold text-sm">Alfian Prisma Y</h4>
                            <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="icon text-xl w-12 flex flex-col items-end absolute right-2">
                            <h6 className="text-xs text-gray-400 mb-1">06.30</h6>
                            <BiCheckDouble className="text-darkGreen" />
                        </div>
                    </div>
                    <div className="user w-4/5 h-16 mb-3 bg-white rounded-lg py-1 px-2 flex items-center relative cursor-pointer hover:w-11/12 hover:h-20 duration-300 shadow-sm hover:shadow-2xl">
                        <div className="image rounded-full h-12 w-12 mr-3 overflow-hidden bg-light">
                            <Image src={example} height="100" width="100" alt="user" />
                        </div>
                        <div className="text mr-3">
                            <h4 className="font-bold text-sm">Alfian Prisma Y</h4>
                            <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="icon text-xl w-12 flex flex-col items-end absolute right-2">
                            <h6 className="text-xs text-gray-400 mb-1">06.30</h6>
                            <BiCheckDouble className="text-darkGreen" />
                        </div>
                    </div>
                    <div className="user w-4/5 h-16 mb-3 bg-white rounded-lg py-1 px-2 flex items-center relative cursor-pointer hover:w-11/12 hover:h-20 duration-300 shadow-sm hover:shadow-2xl">
                        <div className="image rounded-full h-12 w-12 mr-3 overflow-hidden bg-light">
                            <Image src={example} height="100" width="100" alt="user" />
                        </div>
                        <div className="text mr-3">
                            <h4 className="font-bold text-sm">Alfian Prisma Y</h4>
                            <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="icon text-xl w-12 flex flex-col items-end absolute right-2">
                            <h6 className="text-xs text-gray-400 mb-1">06.30</h6>
                            <BiCheckDouble className="text-darkGreen" />
                        </div>
                    </div>
                    <div className="user w-4/5 h-16 mb-3 bg-white rounded-lg py-1 px-2 flex items-center relative cursor-pointer hover:w-11/12 hover:h-20 duration-300 shadow-sm hover:shadow-2xl">
                        <div className="image rounded-full h-12 w-12 mr-3 overflow-hidden bg-light">
                            <Image src={example} height="100" width="100" alt="user" />
                        </div>
                        <div className="text mr-3">
                            <h4 className="font-bold text-sm">Alfian Prisma Y</h4>
                            <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="icon text-xl w-12 flex flex-col items-end absolute right-2">
                            <h6 className="text-xs text-gray-400 mb-1">06.30</h6>
                            <BiCheckDouble className="text-darkGreen" />
                        </div>
                    </div>

                    <div className="user w-4/5 h-16 mb-3 bg-white rounded-lg py-1 px-2 flex items-center relative cursor-pointer hover:w-11/12 hover:h-20 duration-300 shadow-sm hover:shadow-2xl">
                        <div className="image rounded-full h-12 w-12 mr-3 overflow-hidden bg-light">
                            <Image src={example} height="100" width="100" alt="user" />
                        </div>
                        <div className="text mr-3">
                            <h4 className="font-bold text-sm">Alfian Prisma Y</h4>
                            <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="icon text-xl w-12 flex flex-col items-end absolute right-2">
                            <h6 className="text-xs text-gray-400 mb-1">06.30</h6>
                            <BiCheckDouble className="text-darkGreen" />
                        </div>
                    </div>
                    <div className="user w-4/5 h-16 mb-3 bg-white rounded-lg py-1 px-2 flex items-center relative cursor-pointer hover:w-11/12 hover:h-20 duration-300 shadow-sm hover:shadow-2xl">
                        <div className="image rounded-full h-12 w-12 mr-3 overflow-hidden bg-light">
                            <Image src={example} height="100" width="100" alt="user" />
                        </div>
                        <div className="text mr-3">
                            <h4 className="font-bold text-sm">Alfian Prisma Y</h4>
                            <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="icon text-xl w-12 flex flex-col items-end absolute right-2">
                            <h6 className="text-xs text-gray-400 mb-1">06.30</h6>
                            <BiCheckDouble className="text-darkGreen" />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Users;