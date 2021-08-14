import { Loading } from "components/all/Loading";
import Navbar from "components/all/Navbar";
import RedirectLogin from "components/all/RedirectLogin";
import Sidebar from "components/all/Sidebar";
import Main from "components/report/Main";
import { useAppContext } from "components/states/GlobalStates";
import { useEffect } from "react";

function Report() {
    const { url, setUrl, isLogin, setIsLogin, detailUser, setDetailUser, menuActive, setMenuActive } = useAppContext();

    useEffect(() => {
        setMenuActive('Report');
    }, [])

    return (
        <div className="page w-full bg-light">
            <Loading />
            <Sidebar />
            <div className="content w-full mobile:pl-0 bg-light min-h-screen">
                <Navbar />
                {
                    (isLogin == 0 || isLogin == undefined || detailUser.roleUser != 1) ?
                        <RedirectLogin />
                        :
                        <Main />
                }
            </div>
        </div>
    )
}

export default Report;