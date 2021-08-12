import Navbar from "components/all/Navbar";
import Sidebar from "components/all/Sidebar";
import Main from "components/my-profile/Main";
import { useAppContext } from "components/states/GlobalStates";
import { useEffect } from "react";

function MyProfile() {
    const { url, setUrl, isLogin, setIsLogin, detailUser, setDetailUser, menuActive, setMenuActive } = useAppContext();

    useEffect(() => {
        setMenuActive('My Profile');
    }, [])

        return (
            <div className="page w-full bg-light">
                <Sidebar menu="my-profile" />
                <div className="content w-full mobile:pl-0 bg-light min-h-screen">
                    <Navbar />
                    <Main />
                </div>
            </div>
        )
}

export default MyProfile;