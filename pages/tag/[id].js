import { Loading } from "components/all/Loading";
import Navbar from "components/all/Navbar";
import Sidebar from "components/all/Sidebar";
import Main from "components/tag/Main";
import { Component, useEffect } from "react";

class Tag extends Component {
    constructor(props){
        super(props);
    }
    render(){

        return (
            <div className="page px-4 pt-4 w-full h-screen bg-light">
                <Sidebar />
                <div className="content w-full pb-10 tablet:pl-16 mobile:pl-0 bg-light ">
                    <Navbar />
                    <Main />
                </div>
            </div>
        )
    }
}

export default Tag;