
import { useRouter } from "next/router";
import { FaCheck, FaRegWindowClose } from "react-icons/fa"
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import $ from 'jquery';
import { useEffect, useState } from "react";
import { FadeTransform, Fade, Stagger } from 'react-animation-components'

export default function ModalInformationRedirect(props) {

    const [isOpen, setIsOpen] = useState();
    const router = useRouter();

    const handleClose = () => {
        props.onClick()
        if(props.status == true){
            router.push(`/${props.url}`);
        } else {

        }
    }

    return (
        props.isOpen == true ?
        <div className="modal-information-redirect bg-dark bg-opacity-20 fixed w-full h-screen z-50 flex justify-center items-center">
            <FadeTransform in={props.isOpen} duration={200} transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <div className="form laptop:w-96 mobile:w-11/12 bg-white rounded-3xl py-5 px-5 relative">
                <h2 className="font-bold text-center text-xl text-yellow-400 mb-5">{props.title}</h2>
                <p className="text-center mb-5">{props.description}</p>
                <form className="form-biodata">
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="form-group flex justify-center items-center">
                                <div className="circle text-darkGreen text-5xl">
                                    {
                                        props.status == true ? 
                                        <FiCheckCircle />
                                        :
                                        <FiAlertCircle />
                                    }
                                </div>
                            </div>    
                        </div>
                    </div>
                    
                    <div className="btn flex">
                        <button className="btn-submit py-2 mr-1 w-full rounded-md border border-darkGreen bg-white text-darkGreen" name="tutup" type="button" onClick={()=>handleClose()}>CLOSE</button>
                    </div>

                </form>
            </div>
            </FadeTransform>
        </div>
        :
        ""
    )
}
