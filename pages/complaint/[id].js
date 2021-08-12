import { Loading } from "components/all/Loading";
import Navbar from "components/all/Navbar";
import Sidebar from "components/all/Sidebar";
import Main from "components/complaint/Main";
import { useAppContext } from "components/states/GlobalStates";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Complaint() {
    const { url, setUrl, isLogin, setIsLogin, detailUser, setDetailUser, menuActive, setMenuActive } = useAppContext();

    const router = useRouter();
    const { id } = router.query

    useEffect(() => {
        setMenuActive('Dashboard');
    }, [])

        return (
            <div className="page w-full bg-light">
                <Sidebar />
                <div className="content w-full mobile:pl-0 bg-light ">
                    <Navbar />
                    <Main id={id} />
                </div>
            </div>
        )
}

export default Complaint;