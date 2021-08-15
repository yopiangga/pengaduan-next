import Navbar from "components/all/Navbar";
import RedirectLogin from "components/all/RedirectLogin";
import Sidebar from "components/all/Sidebar";
import Main from "components/my-profile/Main";
import { useAppContext } from "components/states/GlobalStates";
import { useEffect } from "react";

function MyProfile() {
    const { url, setUrl, isLogin, setIsLogin, detailUser, setDetailUser, menuActive, setMenuActive } = useAppContext();

    useEffect(() => {
        setMenuActive('My Profile');
        document.title = "My Profile - EnvCare"
    }, [])

        return (
            <div className="page w-full bg-light">
                <Sidebar menu="my-profile" />
                <div className="content w-full mobile:pl-0 bg-light min-h-screen">
                    <Navbar />
                    {
                        (isLogin == 0 || isLogin == undefined) ? 
                        <RedirectLogin />
                        :
                        <Main />
                    }
                </div>
            </div>
        )
}

export default MyProfile;