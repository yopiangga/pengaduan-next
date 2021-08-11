import { Loading } from "components/all/Loading";
import Navbar from "components/all/Navbar";
import Sidebar from "components/all/Sidebar";
import Main from "components/my-complaint/Main";
import { Component, useEffect } from "react";

class MyComplaint extends Component {
    constructor(props){
        super(props);
    }
    render(){

        return (
            <div className="page w-full bg-light">
                <Sidebar menu="my-complaint" />
                <div className="content w-full mobile:pl-0 bg-light min-h-screen">
                    <Navbar />
                    <Main />
                </div>
            </div>
        )
    }
}

export default MyComplaint;