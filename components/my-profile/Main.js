const { Component } = require("react");
import Image from 'next/image';
import example from 'public/assets/images/example.jpg'

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pt-0 flex justify-center">
                <div className="content flex flex-col w-full">
                    <div className="profile-image flex items-center mb-10">
                        <div className="circle-bg mr-5 bg-white w-36 h-36 flex justify-center items-center rounded-full shadow-xl">
                            <div className="image w-32 h-32 rounded-full overflow-hidden shadow-md">
                                <Image src={example} width="200" height="200" alt="profile" />
                            </div>
                        </div>

                        <div className="action">
                            <button className="py-2 px-6 mr-3 bg-darkGreen rounded-full text-white font-medium">Change</button>
                            <button className="py-2 px-6 rounded-full font-medium">Remove</button>
                        </div>
                    </div>
                    <div className="form-profile">
                        <form className="grid grid-cols-2">
                            <div className="left">
                                <h3 className="font-bold text-xl mb-5">General</h3>
                                <div className="row flex mb-5 w-11/12 justify-between">
                                    <div className="col w-full pr-2">
                                        <div className="form-group flex flex-col">
                                            <label className="font-medium text-sm mb-3">Full Name</label>
                                            <input type="text" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" placeholder="John Doe" value="Alfian Prisma Yopiangga" />
                                        </div>
                                    </div>
                                    <div className="col w-full pl-2">
                                        <div className="form-group flex flex-col">
                                            <label className="font-medium text-sm mb-3">Nick Name</label>
                                            <input type="text" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" placeholder="John" value="Yopiangga" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row flex w-11/12 mb-5">
                                    <div className="col w-full">
                                        <div className="form-group flex flex-col">
                                            <label className="font-medium text-sm mb-3">Profession</label>
                                            <input type="text" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" placeholder="Programmer" value="Programmer" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row flex w-11/12 mb-7">
                                    <div className="col w-full">
                                        <div className="form-group flex flex-col">
                                            <label className="font-medium text-sm mb-3">Address</label>
                                            <textarea type="text" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" value="Kediri Regency, East Java, Indonesia" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row flex w-11/12 mb-5">
                                    <div className="col w-full">
                                        <div className="form-group flex">
                                            <button className="py-2 px-6 mr-3 bg-darkGreen rounded-full text-white font-medium">Update Profile</button>
                                            <button className="py-2 px-6 mr-3  font-medium">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right">
                                <h3 className="font-bold text-xl mb-5">Security</h3>
                                <div className="row flex w-11/12 mb-5">
                                    <div className="col w-full">
                                        <div className="form-group flex flex-col">
                                            <label className="font-medium text-sm mb-3">Email Address</label>
                                            <input type="email" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" value="email@email.com" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row flex mb-5 w-11/12 justify-between">
                                    <div className="col w-full pr-2">
                                        <div className="form-group flex flex-col">
                                            <label className="font-medium text-sm mb-3">New Password</label>
                                            <input type="password" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" placeholder="******" />
                                        </div>
                                    </div>
                                    <div className="col w-full pl-2">
                                        <div className="form-group flex flex-col">
                                            <label className="font-medium text-sm mb-3">Repeat Password</label>
                                            <input type="password" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" placeholder="******" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row flex w-11/12 mb-5">
                                    <div className="col w-full">
                                        <div className="form-group flex">
                                            <button className="py-2 px-6 mr-3 bg-darkGreen rounded-full text-white font-medium">Change Password</button>
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