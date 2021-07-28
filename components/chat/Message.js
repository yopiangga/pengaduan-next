import { Component, useEffect } from "react";
import { FiCheck, FiSearch, FiSend, FiX } from "react-icons/fi";
import Image from 'next/image';
import example from 'public/assets/images/example.jpg'
import $ from 'jquery';

class Message extends Component {
    constructor(props) {
        super(props);
    }

    handleContact(){
        $('.message').addClass('mobile:hidden');
        $('.contact').removeClass('hidden').addClass('flex');
    }

    render() {

        return (
            <div className="message laptop:w-2/3 mobile:w-full h-full relative laptop:flex mobile:hidden flex-col">
                <div className="user laptop:w-11/12 mobile:w-full h-16 mb-3 bg-white rounded-lg py-1 px-2 flex items-center relative">
                    <div className="image rounded-full h-12 w-12 mr-3 overflow-hidden bg-light">
                        <Image src={example} height="100" width="100" alt="user" />
                    </div>
                    <div className="text mr-3">
                        <h4 className="font-bold text-sm">Alfian Prisma Y</h4>
                        <p className="text-xs">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div onClick={this.handleContact} className="icon text-xl w-12 flex flex-col items-end absolute right-2">
                            <FiX className="text-dark" />
                        </div>
                </div>

                <div className="users laptop:w-11/12 mobile:w-full bg-white absolute top-20 bottom-4 flex flex-col items-center rounded-lg">

                    <div className="absolute top-4 bottom-20 left-3 right-3 overflow-scroll">

                        <div className="item-group mb-3 flex flex-col items-start">
                            <div className="item bg-light max-w-2xl h-auto py-3 px-3 mb-2 rounded-t-lg rounded-br-lg">
                                <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil hic error tempore mollitia consequatur earum aliquid veniam perspiciatis possimus illo, atque exercitationem eligendi rerum explicabo omnis non itaque reiciendis ducimus.</p>
                            </div>
                            <h5 className="text-sm text-gray-400">13.20</h5>
                        </div>

                        <div className="item-group mb-3 flex flex-col items-end">
                            <div className="item bg-darkGreen max-w-2xl h-auto py-3 px-3 mb-2 rounded-t-lg rounded-bl-lg">
                                <p className="text-right text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia voluptatem sapiente earum corrupti corporis ea?</p>
                            </div>
                            <h5 className="text-sm text-gray-400">13.20</h5>
                        </div>

                        <div className="item-group mb-3 flex flex-col items-start">
                            <div className="item bg-light max-w-2xl h-auto py-3 px-3 mb-2 rounded-t-lg rounded-br-lg">
                                <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto cumque quam. Possimus quia modi rem eius expedita magnam ex.</p>
                            </div>
                            <h5 className="text-sm text-gray-400">13.20</h5>
                        </div>

                        <div className="item-group mb-3 flex flex-col items-end">
                            <div className="item bg-darkGreen max-w-2xl h-auto py-3 px-3 mb-2 rounded-t-lg rounded-bl-lg">
                                <p className="text-right text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, sunt?</p>
                            </div>
                            <h5 className="text-sm text-gray-400">13.20</h5>
                        </div>

                    </div>

                    <div className="h-16 bg-white shadow-lg border-4 flex items-center border-gray-50 absolute bottom-4 left-3 right-3 rounded-xl">
                        <input type="text" name="" id="" className="w-full outline-none px-3" placeholder="Your message ..." />
                        <div className="w-10 h-10 rounded-full bg-darkGreen absolute right-3 flex justify-center items-center text-white text-lg">
                            <FiSend />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Message;