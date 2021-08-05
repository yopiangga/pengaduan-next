
import { useRouter } from "next/router";
import { FaCheck, FaRegWindowClose } from "react-icons/fa"
import { FiAlertCircle } from 'react-icons/fi';
import $ from 'jquery';
import { useState } from "react";
import firebase from 'firebase';
import { useAppContext } from "components/states/GlobalStates";

export default function ModalReportComplaint(props) {
    const { url, setUrl, isLogin, setIsLogin, detailUser, setDetailUser } = useAppContext();
    const [report, setReport] = useState("");

    const handleClose = () => {
        $('.modal-report-complaint').removeClass('flex').addClass('hidden');
    }

    const handleChange = (event) => {
        setReport(event.target.value)
    }

    const handleReport = (event) => {
        event.preventDefault();
        const date = new Date();
        const time = date.getTime();

        firebase.firestore().collection("reports").add({
            key: time,
            complaintId: props.id,
            idUser: detailUser.idUser,
            text: report
        })
    }

    return (
        <div className="modal-report-complaint bg-dark bg-opacity-20 fixed w-full h-screen z-50 hidden justify-center items-center">
            <div className="form laptop:w-96 mobile:w-11/12 bg-white rounded-3xl py-5 px-5 relative">
                <h2 className="font-bold text-center text-xl text-yellow-400 mb-5">Report Complaint</h2>
                <p className="text-center mb-5">You will report on this complaint</p>
                <form onSubmit={handleReport} className="form-biodata">
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="form-group flex justify-center items-center">
                                <div className="circle text-yellow-400 text-5xl">
                                    <FiAlertCircle />
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="form-group flex justify-center items-center">
                                <textarea className="border border-dark border-opacity-20 rounded-lg w-full px-2 py-1 outline-none focus:border-darkGreen" name="report" rows="2" placeholder="your report" onChange={handleChange}></textarea>
                            </div>    
                        </div>
                    </div>
                    <div className="btn flex">
                        <button className="btn-submit py-2 mr-1 w-full rounded-md border border-darkGreen bg-white text-darkGreen" name="tutup" type="button" onClick={()=>handleClose()}>CANCEL</button>
                        <button className="btn-submit py-2 ml-1 w-full rounded-md border border-darkGreen bg-darkGreen text-white" name="report" type="submit">REPORT</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
