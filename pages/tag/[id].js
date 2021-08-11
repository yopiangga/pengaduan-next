import { Loading } from "components/all/Loading";
import Navbar from "components/all/Navbar";
import Sidebar from "components/all/Sidebar";
import Main from "components/tag/Main";
import { useRouter } from "next/router";
import { Component, useEffect } from "react";

function Tag() {
    const router = useRouter()
    const {id} = router.query

        return (
            <div className="page w-full bg-light">
                <Sidebar />
                <div className="content w-full mobile:pl-0 bg-light min-h-screen">
                    <Navbar />
                    <Main id={id} />
                </div>
            </div>
        )
    
}

export default Tag;