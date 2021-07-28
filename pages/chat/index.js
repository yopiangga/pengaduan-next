import Navbar from "components/all/Navbar";
import Sidebar from "components/all/Sidebar";
import Message from "components/chat/Message";
import Users from "components/chat/Users";
import { Component, useEffect } from "react";

class Chat extends Component {
    constructor(props){
        super(props);

        this.setState({
            display: 1
        })
    }
    render(){
        
        return (
            <div className="page px-4 pt-4 w-full h-screen bg-light">
                <Sidebar menu="chat" />
                <div className="content w-full tablet:pl-16 mobile:pl-0 bg-light ">
                    <Navbar menu="chat"/>
                    <div className="w-full h-screen pt-20">
                        <div className="flex w-full h-full">
                            <Users />
                            <Message />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat;