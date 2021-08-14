import { useAppContext } from "components/states/GlobalStates";
import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import firebase from 'firebase'
import example from 'public/assets/images/example.jpg'
import Image from 'next/image'
import Link from "next/link";

function Main() {
    const { url, setUrl, isLogin, setIsLogin, detailUser, setDetailUser, complaints, setComplaints, allReport, setAllReport, allUser, setAllUser } = useAppContext();

    const [dataComplaints, setDataComplaints] = useState();
    const [dataReports, setDataReports] = useState();
    const [dataUsers, setDataUsers] = useState();

    useEffect(() => {
        if (complaints != undefined && allReport != undefined && allUser != undefined) {
            getDataCompalints();
            getDataReports();
            getDataUsers();
        }
    }, [complaints, allReport, allUser])

    const getDataCompalints = () => {
        let data = [];

        complaints.map(function (el, idx) {
            data[el.key] = el;
        })
        setDataComplaints(data);
    }

    const getDataReports = () => {
        setDataReports(allReport)
    }

    const getDataUsers = () => {
        let data = [];

        allUser.map(function (el, idx) {
            data[el.idUser] = el;
        })
        setDataUsers(data);
    }

    function Reports() {
        if (dataUsers == undefined || dataReports == undefined || dataComplaints == undefined) {
            return(
                <div>hai</div>
            )
        } else {
            return (
                allReport.map(function (el, idx) {
                    return(
                        <div key={idx} className="card w-11/12 rounded-lg bg-white shadow-xl mb-6">
                            <div className="flex p-3">
                                <div className="profile w-1/5">
                                    <div className="image relative rounded-full overflow-hidden w-10 h-10">
                                        {
                                            dataUsers != undefined ?
                                                <Image src={example} height="100" width="100" />
                                                :
                                                <Image src={dataUsers[el.idUser.toString()].picture} height="100" width="100" />
                                        }
                                    </div>
                                </div>
                                <div className="text w-4/5">
                                    <Link href={`complaint/${el.idComplaint}`}><a><h4 className="font-medium h-6 overflow-hidden hover:underline cursor-pointer">{dataComplaints[el.idComplaint].title}</h4></a></Link>
                                    <h5 className="text-sm h-5 overflow-hidden font-medium">By : {dataUsers[el.idUser].fullname}</h5>
                                    <p>{el.text}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }
    }

    return (
        <div className="pt-0 ">

            <div className="content pt-24 tablet:pl-20 mobile:px-4">

                <div className="header mb-16">
                    <h1 className="text-3xl font-medium tablet:mb-0 mobile:mb-5">Report Users</h1>
                </div>

                <div className="content-body grid laptop:grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1 mini:grid-cols-1">
                    <Reports />
                </div>

            </div>

        </div>
    )
}

export default Main;