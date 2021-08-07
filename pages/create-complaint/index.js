import Navbar from "components/all/Navbar";
import RedirectLogin from "components/all/RedirectLogin";
import Sidebar from "components/all/Sidebar";
import Main from "components/create-complaint/Main";
import { useAppContext } from "components/states/GlobalStates";
import { Component, useEffect } from "react";
import { Loading } from 'components/all/Loading'

function CreateComplaint() {
    const { url, setUrl, isLogin, setIsLogin, detailUser, setDetailUser } = useAppContext();

    return (
        <div className="page px-4 w-full bg-light">
            <Loading />
            <Sidebar menu="create-complaint" />
            <div className="content w-full mobile:pl-0 bg-light ">
                <Navbar />
                <div className="w-full">
                    {
                        (isLogin == 0 || isLogin == undefined) ? 
                        <RedirectLogin />
                        :
                        <Main />
                    }
                </div>
            </div>
        </div>
    )
}

export default CreateComplaint;