import { useAppContext } from 'components/states/GlobalStates';
import Image from 'next/image';
import example from 'public/assets/images/example.jpg'

function Main() {
    const { url, setUrl, isLogin, setIsLogin, detailUser, setDetailUser } = useAppContext();

    const handleChangeProfile = () => {

    }

    const handleUpdateProfile = () => {

    }

    const handleChangePassword = () => {

    }

    const handleUpdatePassword = () => {

    }

    return (
        <div className="pt-0">
            <div className="content pt-24 tablet:pl-20 mobile:px-4 w-full">
                <div className="profile-image flex laptop:flex-row mobile:flex-col items-center mb-10">
                    <div className="circle-bg mr-5 laptop:mb-0 mobile:mb-7 bg-white w-36 h-36 flex justify-center items-center rounded-full shadow-xl">
                        <div className="image w-32 h-32 rounded-full overflow-hidden shadow-md">
                            {detailUser.picture == 'default' || detailUser.picture == '' ?
                                <Image src={example} width="200" height="200" alt="profile" />
                                :
                                <Image src={detailUer.picture} width="200" height="200" alt="profile" />
                            }
                        </div>
                    </div>

                    <div className="action">
                        <button className="py-2 px-6 mr-3 bg-darkGreen rounded-full text-white font-medium">Change</button>
                        <button className="py-2 px-6 rounded-full font-medium">Remove</button>
                    </div>
                </div>
                <div className="form-profile grid laptop:grid-cols-2 mobile:grid-cols-1">
                    <div className="left mobile:mb-7 laptop:mb-0">
                        <form onSubmit={handleUpdateProfile} className="">
                            <h3 className="font-bold text-xl mb-5">General</h3>
                            <div className="row flex laptop:flex-row mobile:flex-col mb-5 laptop:w-11/12 mobile:w-full justify-between">
                                <div className="col w-full laptop:pr-2 mobile:pr-0">
                                    <div className="form-group flex flex-col mobile:mb-5">
                                        <label className="font-medium text-sm mb-3">Full Name</label>
                                        <input type="text" onChange={handleChangeProfile} name="fullname" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" placeholder="John Doe" value={detailUser.fullname} />
                                    </div>
                                </div>
                                <div className="col w-full laptop:pl-2 mobile:pl-0">
                                    <div className="form-group flex flex-col">
                                        <label className="font-medium text-sm mb-3">Nick Name</label>
                                        <input type="text" onChange={handleChangeProfile} name="nickname" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" placeholder="John" value={detailUser.nickname} />
                                    </div>
                                </div>
                            </div>
                            <div className="row flex laptop:w-11/12 mobile:w-full mb-5">
                                <div className="col w-full">
                                    <div className="form-group flex flex-col">
                                        <label className="font-medium text-sm mb-3">Profession</label>
                                        <input type="text" onChange={handleChangeProfile} name="job" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" placeholder="Programmer" value={detailUser.job} />
                                    </div>
                                </div>
                            </div>
                            <div className="row flex laptop:w-11/12 mobile:w-full mb-7">
                                <div className="col w-full">
                                    <div className="form-group flex flex-col">
                                        <label className="font-medium text-sm mb-3">Address</label>
                                        <textarea type="text" onChange={handleChangeProfile} name="address" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" value={detailUser.address} />
                                    </div>
                                </div>
                            </div>
                            <div className="row flex laptop:w-11/12 mobile:w-full laptop:mb-10 mobile:mb-5">
                                <div className="col w-full">
                                    <div className="form-group flex">
                                        <button type="submit" className="py-2 px-6 mr-3 bg-darkGreen rounded-full text-white font-medium">Update Profile</button>
                                        <button type="button" className="py-2 px-6 mr-3  font-medium">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="right">
                        <form onSubmit={handleUpdatePassword}>
                            <h3 className="font-bold text-xl mb-5">Security</h3>
                            <div className="row flex laptop:w-11/12 mobile:w-full mb-5">
                                <div className="col w-full">
                                    <div className="form-group flex flex-col">
                                        <label className="font-medium text-sm mb-3">Email Address</label>
                                        <input type="email" value={detailUser.email} className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" />
                                    </div>
                                </div>
                            </div>
                            <div className="row flex mb-5 laptop:w-11/12 mobile:w-full justify-between laptop:flex-row mobile:flex-col">
                                <div className="col w-full laptop:pr-2 mobile:pr-0">
                                    <div className="form-group flex flex-col">
                                        <label className="font-medium text-sm mb-3">New Password</label>
                                        <input type="password" onChange={handleChangePassword} name="password1" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" placeholder="******" />
                                    </div>
                                </div>
                                <div className="col w-full laptop:pl-2 mobile:pl-0">
                                    <div className="form-group flex flex-col">
                                        <label className="font-medium text-sm mb-3">Repeat Password</label>
                                        <input type="password" onChange={handleChangePassword} name="password2" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" placeholder="******" />
                                    </div>
                                </div>
                            </div>
                            <div className="row flex laptop:w-11/12 mobile:w-full mb-5">
                                <div className="col w-full">
                                    <div className="form-group flex">
                                        <button type="submit" className="py-2 px-6 mr-3 bg-darkGreen rounded-full text-white font-medium">Change Password</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main;