const { Component } = require("react");
import Image from 'next/image';
import logo from 'public/assets/images/logo.png'
import { FiEdit, FiHome, FiLogOut, FiMessageCircle, FiUser } from 'react-icons/fi'
import Link from 'next/link'

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="h-screen w-14 pb-8 pr-2 fixed">
                <div className="content-nav bg-white h-full w-full rounded-lg shadow-3xl flex flex-col justify-between">
                    <div className="logo w-full h-20 px-1 pt-2">
                        <Image src={logo} alt="logo" />
                    </div>
                    <div className="menu">
                        <ul>
                            <Link href="/">
                                <div className="w-full cursor-pointer h-12 bg-darkGreen bg-opacity-10 text-darkGreen flex justify-center items-center text-xl">
                                    <FiHome />
                                </div>
                            </Link>
                            <Link href="/">
                                <div className="w-full cursor-pointer h-12 bg-white flex justify-center items-center text-xl hover:bg-darkGreen hover:bg-opacity-10 hover:text-darkGreen">
                                    <FiEdit />
                                </div>
                            </Link>
                            <Link href="/chat">
                                <div className="w-full cursor-pointer h-12 bg-white flex justify-center items-center text-xl hover:bg-darkGreen hover:bg-opacity-10 hover:text-darkGreen">
                                    <FiMessageCircle />
                                </div>
                            </Link>
                            <Link href="/chat">
                                <div className="w-full cursor-pointer h-12 bg-white flex justify-center items-center text-xl hover:bg-darkGreen hover:bg-opacity-10 hover:text-darkGreen">
                                    <FiUser />
                                </div>
                            </Link>
                        </ul>
                    </div>
                    <div className="logout h-20">
                        <Link href="/chat">
                            <div className="w-full cursor-pointer h-12 bg-white flex justify-center items-center text-xl">
                                <FiLogOut />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;