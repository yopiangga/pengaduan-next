const { Component } = require("react");
import Image from 'next/image';
import logo from 'public/assets/images/logo.png'
import { FiEdit, FiFileText, FiHome, FiLogOut, FiMessageCircle, FiMessageSquare, FiUser } from 'react-icons/fi'
import Link from 'next/link'
import Router from 'next/router';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {

        return (
            <div className="sidebar tablet:h-screen mobile:h-0 overflow-hidden duration-300 w-14 pb-8 pr-2 fixed z-40 block">
                <div className="content-nav bg-white h-full w-full rounded-lg shadow-inner flex flex-col justify-between">
                    <div className="logo w-full h-20 px-1 pt-2">
                        <Image src={logo} alt="logo" onClick={() => Router.push('/')} />
                    </div>
                    <div className="menu">
                        <ul>
                            <Link href="/">
                                <a className={(this.props.menu == 'dashboard') ? "w-full cursor-pointer h-12 bg-darkGreen bg-opacity-10 text-darkGreen flex justify-center items-center text-xl" : "w-full cursor-pointer h-12 bg-white flex justify-center items-center text-xl hover:bg-darkGreen hover:bg-opacity-10 hover:text-darkGreen"}>
                                    <FiHome />
                                </a>
                            </Link>
                            <Link href="/create-complaint">
                                <a className={(this.props.menu == 'create-complaint') ? "w-full cursor-pointer h-12 bg-darkGreen bg-opacity-10 text-darkGreen flex justify-center items-center text-xl" : "w-full cursor-pointer h-12 bg-white flex justify-center items-center text-xl hover:bg-darkGreen hover:bg-opacity-10 hover:text-darkGreen"}>
                                    <FiEdit />
                                </a>
                            </Link>
                            <Link href="/my-complaint">
                                <a className={(this.props.menu == 'my-complaint') ? "w-full cursor-pointer h-12 bg-darkGreen bg-opacity-10 text-darkGreen flex justify-center items-center text-xl" : "w-full cursor-pointer h-12 bg-white flex justify-center items-center text-xl hover:bg-darkGreen hover:bg-opacity-10 hover:text-darkGreen"}>
                                    <FiFileText />
                                </a>
                            </Link>
                            <Link href="/chat">
                                <a className={(this.props.menu == 'chat') ? "w-full cursor-pointer h-12 bg-darkGreen bg-opacity-10 text-darkGreen flex justify-center items-center text-xl" : "w-full cursor-pointer h-12 bg-white flex justify-center items-center text-xl hover:bg-darkGreen hover:bg-opacity-10 hover:text-darkGreen"}>
                                    <FiMessageSquare />
                                </a>
                            </Link>
                            <Link href="/my-profile">
                                <a className={(this.props.menu == 'my-profile') ? "w-full cursor-pointer h-12 bg-darkGreen bg-opacity-10 text-darkGreen flex justify-center items-center text-xl" : "w-full cursor-pointer h-12 bg-white flex justify-center items-center text-xl hover:bg-darkGreen hover:bg-opacity-10 hover:text-darkGreen"}>
                                    <FiUser />
                                </a>
                            </Link>
                        </ul>
                    </div>
                    <div className="logout h-20">
                        <Link href="/login">
                            <a className="w-full cursor-pointer h-12 bg-white flex justify-center items-center text-xl">
                                <FiLogOut />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;