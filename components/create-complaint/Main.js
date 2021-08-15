const { Component, useState } = require("react");
import { useAppContext } from 'components/states/GlobalStates';
import Image from 'next/image';
import example from 'public/assets/images/example.jpg'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import firebase from 'firebase'
import $ from 'jquery'
import { useRouter } from 'next/router';
import GoogleMaps from 'components/all/GoogleMaps';
import ModalInformationRedirect from 'components/all/ModalInformationRedirect';

function Main() {
    const { url, setUrl, isLogin, setIsLogin, detailUser, setDetailUser } = useAppContext();
    const [complaint, setComplaint] = useState({
        title: "", description: "", taggar: "", image: "", latitude: "", longitude: ""
    })
    const [file, setFile] = useState(null);
    const router = useRouter();

    const [modalInformationRedirect, setModalInformationRedirect] = useState({title: "", description: "", status: "", isOpen: false})

    const handleImageAsFile = (e) => {
        setFile(e.target.files[0]);
    }

    const handleChange = (event) => {
        setComplaint({
            ...complaint,
            [event.target.name]: event.target.value
        })
    }

    const geoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            setComplaint({
                ...complaint,
                latitude: -6.175372,
                longitude: 106.827194
            })
        }
    }

    const showPosition = (position) => {
        setComplaint({
            ...complaint,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }

    const handleChangeTaggar = (event) => {
        const taggar = event.target.value.toLowerCase();
        let myArr = []
        myArr = taggar.split(', ');
        // console.log(myArr)

        setComplaint({
            ...complaint,
            taggar: myArr
        })
    }

    const handleValidation = (event) => {
        event.preventDefault();
        if(complaint.title == "" || complaint.description == "" || complaint.taggar == "" || complaint.latitude == "" || complaint.longitude == ""){
            setModalInformationRedirect({
                title: "Complaint Failed",
                description: "Your complaint failed created, fill in all the data you.",
                status: false,
                isOpen: true,
                url: ""
            })
        } else {
            Push();
        }
    }
    
    const Push = () => {
        $('.bg-loading').removeClass('hidden').addClass('flex');
        if(file != null){
            const date = new Date();
            const time = date.getTime();
            const ref = firebase.storage().ref(`/complaint/${time}_${detailUser.idUser}_${file.name}`);
            const uploadTask = ref.put(file);
            uploadTask.on("state_changed", console.log, console.error, () => {
                ref
                    .getDownloadURL()
                    .then((url) => {
                        setFile(null);
                        pushData(time, url);
                    });
            });
        } else {
            const date = new Date();
            const time = date.getTime();
            pushData(time, '');
           
        }
        $('.bg-loading').removeClass('flex').addClass('hidden');
    }

    const pushData = (time, url) => {
        firebase.database().ref(`complaint/${time}`).set({
            title: complaint.title,
            description: complaint.description,
            taggar: complaint.taggar,
            image: url,
            latitude: complaint.latitude,
            longitude: complaint.longitude,
            support: 0,
            shared: 0,
            authorId: detailUser.idUser,
            author: detailUser.fullname,
            key: time,
            status: 1
        }).catch(alert);

        setComplaint({
            title: "", description: "", taggar: "", image: "", latitude: "", longitude: ""
        })

        $('.bg-loading').removeClass('flex').addClass('hidden');
        
        setModalInformationRedirect({
            title: "Complaint Created",
            description: "Your complaint success created, waiting for accept for admin.",
            status: true,
            isOpen: true,
            url: ""
        })
    }

    return (
        <div className="flex justify-center">
            <ModalInformationRedirect 
            title={modalInformationRedirect.title} 
            description={modalInformationRedirect.description} 
            status={modalInformationRedirect.status}
            isOpen={modalInformationRedirect.isOpen}
            url={modalInformationRedirect.url}
            onClick={() => setModalInformationRedirect({title: "", description: "", status: "", isOpen: false})}
            />
            <div className="content flex flex-col w-full pt-24 tablet:pl-20 mobile:pl-0">
                <h1 className="text-3xl font-medium mb-5">Create Complaint</h1>
                <div className="form-complaint">
                    <form onSubmit={handleValidation} >
                        <div className="form grid laptop:grid-cols-2 mobile:grid-cols-1 mb-5">
                            <div className="left">
                                <h3 className="font-bold text-xl mb-5">General</h3>

                                <div className="row flex laptop:w-11/12 mobile:w-full mb-5">
                                    <div className="col w-full">
                                        <div className="form-group flex flex-col">
                                            <label className="font-medium text-sm mb-3">Title</label>
                                            <input type="text" name="title" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" placeholder="Type in the title of the complaint" onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row flex laptop:w-11/12 mobile:w-full mb-5">
                                    <div className="col w-full">
                                        <div className="form-group flex flex-col">
                                            <label className="font-medium text-sm mb-3">Description</label>
                                            <textarea type="text" name="description" rows="5" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" placeholder="Description your complaint . . . " onChange={handleChange}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row flex laptop:w-11/12 mobile:w-full mb-5">
                                    <div className="col w-full">
                                        <div className="form-group flex flex-col">
                                            <label className="font-medium text-sm mb-3">Taggar</label>
                                            <input type="text" name="taggar" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" placeholder="Pollution, Waste, Garbage" onChange={handleChangeTaggar} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row flex laptop:w-11/12 mobile:w-full mb-5">
                                    <div className="col w-full">
                                        <div className="form-group flex flex-col">
                                            <label className="font-medium text-sm mb-3">Image</label>
                                            <input type="file" onChange={handleImageAsFile} className="text-lg outline-none py-2 pr-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="right">
                                <h3 className="font-bold text-xl mb-5">Location</h3>
                                <div className="row flex laptop:flex-row mobile:flex-col mb-5 laptop:w-11/12 mobile:w-full justify-between">
                                    <div className="col w-full laptop:pr-2 mobile:pr-0">
                                        <div className="form-group flex flex-col">
                                            <label className="font-medium text-sm mb-3">Latitude</label>
                                            <input type="text" name="latitude" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" placeholder="" value={complaint.latitude} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col w-full laptop:pl-2 mobile:pl-0">
                                        <div className="form-group flex flex-col">
                                            <label className="font-medium text-sm mb-3">Longitude</label>
                                            <input type="text" name="longitude" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" placeholder="" value={complaint.longitude} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row flex laptop:w-11/12 mobile:w-full mb-5">
                                    <div className="col w-full">
                                        <div className="form-group flex items-center">
                                            <label className="font-medium text-sm mr-3">or get your current location ?</label>
                                            <button type="button" onClick={geoLocation} className="py-1 px-3 mr-3 text-sm bg-darkGreen rounded-full text-white font-medium">Get Location</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row flex laptop:w-11/12 mobile:w-full mb-5">
                                    <div className="col w-full">
                                        <div className="form-group flex h-96 w-full relative">
                                            {
                                                complaint.latitude == '' || complaint.longitude == '' ?
                                                ""
                                                :
                                                <GoogleMaps latitude={complaint.latitude} longitude={complaint.longitude} />
                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="row flex laptop:w-11/12 mobile:w-full mb-10">
                            <div className="col w-full">
                                <div className="form-group flex">
                                    <button type="submit" className="py-2 px-6 mr-3 bg-darkGreen rounded-full text-white font-medium">Post Complaint</button>
                                    <button className="py-2 px-6 mr-3  font-medium">Cancel</button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Main;