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
            <div className="page w-full bg-light">
                <Loading />
                <Sidebar menu="dashboard" />
                <div className="content w-full mobile:pl-0 bg-light min-h-screen">
                    <Navbar />
                    <Main />
                </div>
            </div>
        )
    }
}

export default Dashboard;