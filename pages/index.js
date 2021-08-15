import { Loading } from "components/all/Loading";
import Navbar from "components/all/Navbar";
import Sidebar from "components/all/Sidebar";
import Main from "components/dashboard/Main";
import { useAppContext } from "components/states/GlobalStates";
import { useEffect } from "react";

function Dashboard() {
    const { url, setUrl, isLogin, setIsLogin, detailUser, setDetailUser, menuActive, setMenuActive } = useAppContext();

    useEffect(() => {
        setMenuActive('Dashboard');
        document.title = "Dashboard - EnvCare"
    }, [])

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

export default Dashboard;