import Navbar from "components/all/Navbar";
import Sidebar from "components/all/Sidebar";
import Main from "components/my-profile/Main";
import { Component, useEffect } from "react";

class MyProfile extends Component {
    constructor(props){
        super(props);
    }

    render(){
        
        return (
            <div className="page px-4 pt-4 w-full bg-light">
                <Sidebar />
                <div className="content w-full pl-16 bg-light ">
                    <Navbar />
                    <div className="w-full pt-20">
                        <Main />
                    </div>
                </div>
            </div>
        )
    }
}

export default MyProfile;