
import { FiAlertCircle, FiCheckCircle, FiCopy, FiFacebook } from 'react-icons/fi';
import { SiGmail, SiTwitter, SiWhatsapp } from 'react-icons/si'
import { FadeTransform, Fade, Stagger } from 'react-animation-components'

export default function ShareMediaSocial(props) {

    const handleClose = () => {
        props.onClick()
    }

    const handleCopy = (dataUrl) => {
        var tempInput = document.createElement("input");
        tempInput.value = dataUrl;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    }

    return (
        props.isOpen == true ?
        <div className="modal-information bg-dark bg-opacity-20 fixed w-full h-screen z-50 flex justify-center items-center">
            <FadeTransform in={props.isOpen} duration={200} transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <div className="form laptop:w-96 mobile:w-11/12 bg-white rounded-3xl py-5 px-5 relative">
                <h2 className="font-bold text-center text-xl text-yellow-400 mb-5">{props.title}</h2>
                <p className="text-center mb-5">{props.description}</p>
                <form className="form-biodata">
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="form-group flex justify-around items-center">
                                <a href={`http://www.facebook.com/sharer.php?u=${props.link}`} className="circle text-white text-xl w-10 h-10 flex justify-center items-center bg-blue-400 rounded-full">
                                    <FiFacebook />
                                </a>
                                <a href={`https://twitter.com/share?url=${props.link}&text=Support%20Complaint%20Environment&hashtags=envcare`} className="circle text-white text-xl w-10 h-10 flex justify-center items-center bg-blue-300 rounded-full">
                                    <SiTwitter />
                                </a>
                                <a href={`mailto:?Subject=Support Complaint on EnvCare&Body=Support%20this%20complaint%20on%20EnvCare%20Thank%20You!%20 ${props.link}`} className="circle text-white text-xl w-10 h-10 flex justify-center items-center bg-red-500 rounded-full">
                                    <SiGmail />
                                </a>
                                <a href={`https://api.whatsapp.com/send?text=Support Complaint on ${props.link}`} data-action="shre/whatsapp/share" className="circle text-white text-xl w-10 h-10 flex justify-center items-center bg-green-400 rounded-full">
                                    <SiWhatsapp />
                                </a>
                                <div onClick={() => handleCopy(props.link)} className="cursor-pointer circle text-white text-xl w-10 h-10 flex justify-center items-center bg-gray-400 rounded-full">
                                    <FiCopy />
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-12">
                            <input type="text" value={props.link} className="w-full outline-none border border-gray-300 px-3 py-2 rounded-md" readOnly />
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
