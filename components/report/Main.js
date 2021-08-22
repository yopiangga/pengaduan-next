import { useAppContext } from "components/states/GlobalStates";
import { useEffect, useState } from "react";
import { FiChevronDown, FiTrash } from "react-icons/fi";
import firebase from 'firebase'
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from 'next/router';
import ModalInformation from "components/all/ModalInformation";
import { FadeTransform, Fade, Stagger } from 'react-animation-components'

function Main() {
    const { url, setUrl, img, setImg, isLogin, setIsLogin, detailUser, setDetailUser, complaints, setComplaints, allReport, setAllReport, allUser, setAllUser } = useAppContext();

    const [dataComplaints, setDataComplaints] = useState();
    const [dataReports, setDataReports] = useState();
    const [dataUsers, setDataUsers] = useState();
    const router = useRouter();
    const [modalInformation, setModalInformation] = useState({ title: "", description: "", status: "", isOpen: false })

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

    const getAllReport = () => {
        const v_allReport = firebase.firestore().collection("report");
        var arr_allReport = [];

        v_allReport.get().then((res) => {
            res.forEach((doc) => {
                arr_allReport.push({
                    id: doc.data().key,
                    idUser: doc.data().idUser,
                    idComplaint: doc.data().idComplaint,
                    text: doc.data().text,
                })
            });
            setAllReport(arr_allReport)
        });
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

    const handleDelete = (id) => {
        firebase.firestore().collection("report").doc(id.toString()).delete()
            .then(function () {
                setModalInformation({
                    title: "Delete Success",
                    description: "This report has been deleted.",
                    status: true,
                    isOpen: true,
                })
                getAllReport();
            }).catch(function (error) {
                setModalInformation({
                    title: "Delete Failed",
                    description: "This report failed delete.",
                    status: false,
                    isOpen: true,
                })
            });
    }

    function Reports() {
        if (dataUsers == undefined || dataReports == undefined || dataComplaints == undefined) {
            return (
                <div></div>
            )
        } else {
            return (
                allReport.map(function (el, idx) {
                    return (
                        <Fade in key={idx} className="card laptop:w-11/12 mobile:w-full rounded-lg bg-white shadow-xl mb-6">
                            <div className="flex p-3 relative overflow-hidden group">
                                <div className="profile w-1/5">
                                    <div className="image relative rounded-full overflow-hidden w-10 h-10">
                                        {
                                            dataUsers != undefined ?
                                                <Image src={img.user} height="100" width="100" />
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

                                <div onClick={() => handleDelete(el.id)} className="trash cursor-pointer absolute -top-3 -right-3 w-10 h-10 pl-2 pb-2 rounded-full flex justify-start items-end text-white group-hover:bg-orange">
                                    <FiTrash />
                                </div>
                            </div>
                        </Fade>
                    )
                })
            )
        }
    }

    return (
        <div className="pt-0 ">
            <ModalInformation
                title={modalInformation.title}
                description={modalInformation.description}
                status={modalInformation.status}
                isOpen={modalInformation.isOpen}
                onClick={() => setModalInformation({ title: "", description: "", status: "", isOpen: false })}
            />

            <div className="content pt-24 tablet:pl-20 mobile:px-4">

                <div className="header mb-16">
                    <h1 className="text-3xl font-medium tablet:mb-0 mobile:mb-5">Report Users</h1>
                </div>

                <Stagger in className="content-body grid laptop:grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1 mini:grid-cols-1">
                        <Reports />
                </Stagger>

            </div>

        </div>
    )
}

export default Main;