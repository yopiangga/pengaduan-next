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
            <div className="page px-4 pt-4 w-full bg-light">
                <Sidebar menu="my-profile" />
                <div className="content w-full tablet:pl-16 mobile:pl-0 bg-light ">
                    <Navbar />
                    <div className="w-full pt-20">
                        <Main />
                    </div>
                </div>
            </div>
        )
}

export default MyProfile;