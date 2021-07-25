const { Component } = require("react");
const { FaRegBell } = require("react-icons/fa");
import Image from 'next/image';
import example from 'public/assets/images/example.jpg'
import { FiChevronDown } from 'react-icons/fi';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="h-16 w-full pr-24 fixed">
                <div className="content-nav bg-white h-full w-full rounded-lg shadow-3xl flex justify-between">
                    <div className="name-page h-full flex items-center">
                        <h3 className="text-xl font-medium ml-3">Dashboard</h3>
                    </div>
                    <div className="add-action flex">
                        <div className="w-16 h-16 mr-3 relative cursor-pointer bg-white flex justify-center items-center text-2xl hover:text-darkGreen">
                            <FaRegBell />
                            <div className="circle absolute w-5 h-5 bg-darkGreen rounded-full top-3 right-3 flex justify-center items-center">
                                <h6 className="text-white text-xs font-medium text-center">5</h6>
                            </div>
                        </div>
                        <div className="h-16 mr-3 cursor-pointer bg-white flex items-center">
                            <div className="image rounded-full h-10 w-10 mr-3 overflow-hidden bg-light">
                                <Image src={example} height="100" width="100" alt="user" />
                            </div>
                            <div className="text mr-3">
                                <h4 className="font-medium text-sm">Alfian Prisma Y</h4>
                                <p className="text-xs">Front End</p>
                            </div>
                            <div className="icon text-xl">
                                <FiChevronDown />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;