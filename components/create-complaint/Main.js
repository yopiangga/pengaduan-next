const { Component } = require("react");
import Image from 'next/image';
import example from 'public/assets/images/example.jpg'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class Main extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="pt-0 flex justify-center">
                <div className="content flex flex-col w-full">
                    {/* <div className="profile-image flex items-center mb-10">

                        <iframe name="RoutePlanner" width="100%" height="100%" src="https://www.google.com/maps?z=5&amp;f=d&amp;output=embed&amp;ll=52.355518,-1.174320" />
                    </div> */}
                    <h1 className="text-3xl font-medium mb-5">Create Complaint</h1>
                    <div className="form-complaint">
                        <form className="grid grid-cols-2">
                            <div className="left">
                                <h3 className="font-bold text-xl mb-5">General</h3>
                                
                                <div className="row flex w-11/12 mb-5">
                                    <div className="col w-full">
                                        <div className="form-group flex flex-col">
                                            <label className="font-medium text-sm mb-3">Title</label>
                                            <input type="text" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" placeholder="Type in the title of the complaint" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row flex w-11/12 mb-5">
                                    <div className="col w-full">
                                        <div className="form-group flex flex-col">
                                            <label className="font-medium text-sm mb-3">Description</label>
                                            <textarea type="text" rows="5" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" placeholder="Description your complaint . . . "></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row flex w-11/12 mb-5">
                                    <div className="col w-full">
                                        <div className="form-group flex flex-col">
                                            <label className="font-medium text-sm mb-3">Taggar</label>
                                            <input type="text" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" placeholder="Pollution, Waste, Garbage" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row flex w-11/12 mb-5">
                                    <div className="col w-full">
                                        <div className="form-group flex flex-col">
                                            <label className="font-medium text-sm mb-3">Image</label>
                                            <input type="file" className="text-lg outline-none py-2 pr-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row flex w-11/12 mb-5">
                                    <div className="col w-full">
                                        <div className="form-group flex">
                                            <button className="py-2 px-6 mr-3 bg-darkGreen rounded-full text-white font-medium">Post Complaint</button>
                                            <button className="py-2 px-6 mr-3  font-medium">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right">
                                <h3 className="font-bold text-xl mb-5">Location</h3>
                                <div className="row flex w-11/12 mb-5">
                                    <div className="col w-full">
                                        <div className="form-group flex flex-col">
                                            <label className="font-medium text-sm mb-3">Link Google Maps</label>
                                            <input type="email" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" placeholder="https://www.google.co.id/maps/place/ . . ." />
                                        </div>
                                    </div>
                                </div>
                                <div className="row flex w-11/12 mb-5">
                                    <div className="col w-full">
                                        <div className="form-group flex items-center">
                                            <label className="font-medium text-sm mr-3">or get your current location ?</label>
                                            <button className="py-1 px-3 mr-3 text-sm bg-darkGreen rounded-full text-white font-medium">Get Location</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row flex w-11/12 mb-5">
                                    <div className="col w-full">
                                        <div className="form-group flex items-center">
                                        <iframe name="RoutePlanner" width="100%" height="100%" src="https://www.google.com/maps?z=12&amp&f=d&amp&output=embed&amp&ll=52.355518,-1.174320" />
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;