import { Loading } from "components/all/Loading";
import Navbar from "components/all/Navbar";
import Sidebar from "components/all/Sidebar";
import Main from "components/dashboard/Main";
import { Component, useEffect } from "react";

class Dashboard extends Component {
    constructor(props){
        super(props);
    }
    render(){

        return (
            <div className="page px-4 pt-4 w-full h-screen bg-light">
                <Sidebar />
                <div className="content w-full pb-10 pl-16 bg-light ">
                    <Navbar />
                    <Main />
                </div>
            </div>
        )
    }
}

export default Dashboard;