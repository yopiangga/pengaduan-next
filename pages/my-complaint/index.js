import { Loading } from "components/all/Loading";
import Navbar from "components/all/Navbar";
import Sidebar from "components/all/Sidebar";
import Main from "components/my-complaint/Main";
import { useAppContext } from "components/states/GlobalStates";
import { useEffect } from "react";

function MyComplaint() {
    const { url, setUrl, isLogin, setIsLogin, detailUser, setDetailUser, menuActive, setMenuActive } = useAppContext();
    
    useEffect(() => {
        setMenuActive('My Complaint');
    }, [])
        return (
            <div className="page w-full bg-light">
                <Sidebar/>
                <div className="content w-full mobile:pl-0 bg-light min-h-screen">
                    <Navbar />
                    <Main />
                </div>
            </div>
        )
}

export default MyComplaint;