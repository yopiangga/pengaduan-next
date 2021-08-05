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
            <div className="page px-4 pt-4 w-full bg-light">
                <Loading />
                <Sidebar menu="dashboard" />
                <div className="content w-full min-h-screen pb-10 tablet:pl-16 mobile:pl-0 bg-light ">
                    <Navbar />
                    <Main />
                </div>
            </div>
        )
    }
}

export default Dashboard;