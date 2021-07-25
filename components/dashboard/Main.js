const { Component } = require("react");
import Image from 'next/image';
import example from 'public/assets/images/example.jpg'
import { FiCalendar, FiLink, FiMoreHorizontal, FiShare } from 'react-icons/fi';
import { RiLayoutGridLine, RiLayoutMasonryLine } from 'react-icons/ri'

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pt-20">
                <div className="header flex justify-between mb-5">
                    <h1 className="text-3xl font-medium">New Complaint</h1>
                    <div className="filter flex">
                        <div className="box w-10 h-10 bg-white rounded-md flex justify-center items-center text-2xl">
                            <RiLayoutGridLine />
                        </div>
                        <div className="box w-10 h-10 ml-3 bg-white rounded-md flex justify-center items-center text-2xl text-darkGreen">
                            <RiLayoutMasonryLine />
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-4">
                    <div className="open w-11/12">
                        <h3 className="font-medium text-lg mb-5">Open</h3>

                        <div className="card w-full p-3 bg-white rounded-lg mb-4">
                            <div className="header flex mb-1">
                                <div className="title">
                                    <h4 className="font-medium text-md">Pencemaran Lingkungan di daerah Pegunungan</h4>
                                </div>
                                <div className="icon ml-1 text-xl">
                                    <FiMoreHorizontal />
                                </div>
                            </div>
                            <div className="description mb-3">
                                <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo odit ipsum rerum ratione consequatur minima!</p>
                            </div>
                            <div className="taggar mb-3 flex">
                                <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-lightGreen bg-lightGreen">
                                    <h4>Pencemaran</h4>
                                </div>
                                <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-yellow bg-yellow">
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
                                        <FiCalendar />
                                        <h4 className="ml-1">25 July 21</h4>
                                    </div>
                                    <div className="font-medium ml-2 flex items-center">
                                        <FiLink />
                                        <h4 className="font-medium ml-1">500</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card w-full p-3 bg-white rounded-lg mb-4">
                            <div className="header flex mb-1">
                                <div className="title">
                                    <h4 className="font-medium text-md">Pencemaran Lingkungan di daerah Pegunungan</h4>
                                </div>
                                <div className="icon ml-1 text-xl">
                                    <FiMoreHorizontal />
                                </div>
                            </div>
                            <div className="description mb-3">
                                <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo odit ipsum rerum ratione consequatur minima!</p>
                            </div>
                            <div className="taggar mb-3 flex">
                                <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-lightGreen bg-lightGreen">
                                    <h4>Pencemaran</h4>
                                </div>
                                <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-yellow bg-yellow">
                                    <h4>Tanah Longsor</h4>
                                </div>
                            </div>
                            <div className="image rounded-md w-full overflow-hidden mb-3">
                                <Image src={example} sizes={100} alt="complaint" />
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
                                        <FiCalendar />
                                        <h4 className="ml-1">25 July 21</h4>
                                    </div>
                                    <div className="font-medium ml-2 flex items-center">
                                        <FiLink />
                                        <h4 className="font-medium ml-1">500</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="open w-11/12">
                        <h3 className="font-medium text-lg mb-5">In Progress</h3>
                        
                        <div className="card w-full p-3 bg-white rounded-lg mb-4">
                            <div className="header flex mb-1">
                                <div className="title">
                                    <h4 className="font-medium text-md">Pencemaran Lingkungan di daerah Pegunungan</h4>
                                </div>
                                <div className="icon ml-1 text-xl">
                                    <FiMoreHorizontal />
                                </div>
                            </div>
                            <div className="description mb-3">
                                <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo odit ipsum rerum ratione consequatur minima!</p>
                            </div>
                            <div className="taggar mb-3 flex">
                                <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-lightGreen bg-lightGreen">
                                    <h4>Pencemaran</h4>
                                </div>
                                <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-yellow bg-yellow">
                                    <h4>Tanah Longsor</h4>
                                </div>
                            </div>
                            <div className="image rounded-md w-full overflow-hidden mb-3">
                                <Image src={example} sizes={100} alt="complaint" />
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
                                        <FiCalendar />
                                        <h4 className="ml-1">25 July 21</h4>
                                    </div>
                                    <div className="font-medium ml-2 flex items-center">
                                        <FiLink />
                                        <h4 className="font-medium ml-1">500</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card w-full p-3 bg-white rounded-lg mb-4">
                            <div className="header flex mb-1">
                                <div className="title">
                                    <h4 className="font-medium text-md">Pencemaran Lingkungan di daerah Pegunungan</h4>
                                </div>
                                <div className="icon ml-1 text-xl">
                                    <FiMoreHorizontal />
                                </div>
                            </div>
                            <div className="description mb-3">
                                <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo odit ipsum rerum ratione consequatur minima!</p>
                            </div>
                            <div className="taggar mb-3 flex">
                                <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-lightGreen bg-lightGreen">
                                    <h4>Pencemaran</h4>
                                </div>
                                <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-yellow bg-yellow">
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
                                        <FiCalendar />
                                        <h4 className="ml-1">25 July 21</h4>
                                    </div>
                                    <div className="font-medium ml-2 flex items-center">
                                        <FiLink />
                                        <h4 className="font-medium ml-1">500</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="complete w-11/12">
                        <h3 className="font-medium text-lg mb-5">Complete</h3>

                        <div className="card w-full p-3 bg-white rounded-lg mb-4">
                            <div className="header flex mb-1">
                                <div className="title">
                                    <h4 className="font-medium text-md">Pencemaran Lingkungan di daerah Pegunungan</h4>
                                </div>
                                <div className="icon ml-1 text-xl">
                                    <FiMoreHorizontal />
                                </div>
                            </div>
                            <div className="description mb-3">
                                <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo odit ipsum rerum ratione consequatur minima!</p>
                            </div>
                            <div className="taggar mb-3 flex">
                                <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-lightGreen bg-lightGreen">
                                    <h4>Pencemaran</h4>
                                </div>
                                <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-yellow bg-yellow">
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
                                        <FiCalendar />
                                        <h4 className="ml-1">25 July 21</h4>
                                    </div>
                                    <div className="font-medium ml-2 flex items-center">
                                        <FiLink />
                                        <h4 className="font-medium ml-1">500</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card w-full p-3 bg-white rounded-lg mb-4">
                            <div className="header flex mb-1">
                                <div className="title">
                                    <h4 className="font-medium text-md">Pencemaran Lingkungan di daerah Pegunungan</h4>
                                </div>
                                <div className="icon ml-1 text-xl">
                                    <FiMoreHorizontal />
                                </div>
                            </div>
                            <div className="description mb-3">
                                <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo odit ipsum rerum ratione consequatur minima!</p>
                            </div>
                            <div className="taggar mb-3 flex">
                                <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-lightGreen bg-lightGreen">
                                    <h4>Pencemaran</h4>
                                </div>
                                <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-yellow bg-yellow">
                                    <h4>Tanah Longsor</h4>
                                </div>
                            </div>
                            <div className="image rounded-md w-full overflow-hidden mb-3">
                                <Image src={example} sizes={100} alt="complaint" />
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
                                        <FiCalendar />
                                        <h4 className="ml-1">25 July 21</h4>
                                    </div>
                                    <div className="font-medium ml-2 flex items-center">
                                        <FiLink />
                                        <h4 className="font-medium ml-1">500</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="done w-11/12">
                        <h3 className="font-medium text-lg mb-5">Done</h3>

                        <div className="card w-full p-3 bg-white rounded-lg mb-4">
                            <div className="header flex mb-1">
                                <div className="title">
                                    <h4 className="font-medium text-md">Pencemaran Lingkungan di daerah Pegunungan</h4>
                                </div>
                                <div className="icon ml-1 text-xl">
                                    <FiMoreHorizontal />
                                </div>
                            </div>
                            <div className="description mb-3">
                                <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo odit ipsum rerum ratione consequatur minima!</p>
                            </div>
                            <div className="taggar mb-3 flex">
                                <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-lightGreen bg-lightGreen">
                                    <h4>Pencemaran</h4>
                                </div>
                                <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-yellow bg-yellow">
                                    <h4>Tanah Longsor</h4>
                                </div>
                            </div>
                            <div className="image rounded-md w-full overflow-hidden mb-3">
                                <Image src={example} sizes={100} alt="complaint" />
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
                                        <FiCalendar />
                                        <h4 className="ml-1">25 July 21</h4>
                                    </div>
                                    <div className="font-medium ml-2 flex items-center">
                                        <FiLink />
                                        <h4 className="font-medium ml-1">500</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card w-full p-3 bg-white rounded-lg mb-4">
                            <div className="header flex mb-1">
                                <div className="title">
                                    <h4 className="font-medium text-md">Pencemaran Lingkungan di daerah Pegunungan</h4>
                                </div>
                                <div className="icon ml-1 text-xl">
                                    <FiMoreHorizontal />
                                </div>
                            </div>
                            <div className="description mb-3">
                                <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo odit ipsum rerum ratione consequatur minima!</p>
                            </div>
                            <div className="taggar mb-3 flex">
                                <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-lightGreen bg-lightGreen">
                                    <h4>Pencemaran</h4>
                                </div>
                                <div className="badge px-3 py-1 mr-2 rounded-md font-medium text-xs bg-opacity-20 text-yellow bg-yellow">
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
                                        <FiCalendar />
                                        <h4 className="ml-1">25 July 21</h4>
                                    </div>
                                    <div className="font-medium ml-2 flex items-center">
                                        <FiLink />
                                        <h4 className="font-medium ml-1">500</h4>
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