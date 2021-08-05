import { Loading } from "components/all/Loading";
import Navbar from "components/all/Navbar";
import Sidebar from "components/all/Sidebar";
import Main from "components/complaint/Main";
import { useRouter } from "next/router";
import { Component, useEffect } from "react";

function Complaint() {

    const router = useRouter();
    const { id } = router.query

        return (
            <div className="page px-4 pt-4 w-full bg-light">
                <Sidebar />
                <div className="content w-full pb-10 tablet:pl-16 mobile:pl-0 bg-light">
                    <Navbar />
                    <Main id={id} />
                </div>
            </div>
        )
}

export default Complaint;