import { useAppContext } from 'components/states/GlobalStates';
import Image from 'next/image';
import example from 'public/assets/images/example.jpg'
import { useEffect, useState } from 'react';
import firebase from 'firebase';
import ModalInformation from 'components/all/ModalInformation';

function Main() {
    const { url, setUrl, img, setImg, isLogin, setIsLogin, detailUser, setDetailUser } = useAppContext();
    const [modalInformation, setModalInformation] = useState({ title: "", description: "", status: "", isOpen: false })

    const [user, setUser] = useState({})
    const [password, setPassword] = useState({})
    const [file, setFile] = useState(null);

    useEffect(() => {
        setUser(detailUser)
    }, [detailUser])

    const getUser = () => {
        var docRef = firebase.firestore().collection("users").doc(detailUser.idUser.toString());
        // console.log(detailUser.idUser)
        docRef.get().then((doc) => {
          if (doc.exists) {
            setIsLogin(1);
            setDetailUser({
              idUser: detailUser.idUser,
              fullname: doc.data().fullname,
              nickname: doc.data().nickname,
              job: doc.data().job,
              email: detailUser.email,
              address: doc.data().address,
              roleUser: doc.data().roleUser,
              typeLogin: doc.data().typeLogin,
              picture: doc.data().picture,
              work: doc.data().work
            })
          } else {
            console.log("No such document!");
          }
        }).catch((error) => {
          console.log("Error getting document:", error);
        });
      }

    const handleChangeProfile = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleUpdateProfile = (event) => {
        event.preventDefault();
        firebase.firestore().collection("users").doc(detailUser.idUser.toString()).update({
            fullname: user.fullname,
            nickname: user.nickname,
            job: user.job,
            address: user.address,
        })
            .then((res) => {
                setModalInformation({
                    title: "Update Success",
                    description: "Your profile success changed.",
                    status: true,
                    isOpen: true,
                })
                getUser();
            })
            .catch((error) => {
                setModalInformation({
                    title: "Update Failed",
                    description: "Your profile failed change.",
                    status: false,
                    isOpen: true,
                })
                console.error("Error writing document: ", error);
            });
    }

    const handleChangePassword = (event) => {
        setPassword({
            ...password,
            [event.target.name]: event.target.value
        })
    }

    const handleUpdatePassword = (event) => {
        event.preventDefault();

        if (password.password1 != password.password2) {
            setModalInformation({
                title: "Change Password Failed",
                description: "Your password do not match!",
                status: false,
                isOpen: true,
            })
        } else {
            const db_pass = firebase.auth().currentUser;

            db_pass.updatePassword(password.password1).then(() => {
                setModalInformation({
                    title: "Change Password Success",
                    description: "Your password success changed.",
                    status: true,
                    isOpen: true,
                })
            }).catch((error) => {
                setModalInformation({
                    title: "Change Password Failed",
                    description: error.message,
                    status: false,
                    isOpen: true,
                })
                console.log(error)
            });
        }
    }

    const handleChangePicture = (e) => {
        handlePushPicture(e.target.files[0]);
    }

    const handlePushPicture = (dataFile) => {
        const date = new Date();
        const time = date.getTime();
        const ref = firebase.storage().ref(`/users/${time}_${detailUser.idUser}_${dataFile.name}`);
        const uploadTask = ref.put(dataFile);
        uploadTask.on("state_changed", console.log, console.error, () => {
            ref
                .getDownloadURL()
                .then((url) => {
                    setFile(null);
                    handleUpdatePicture(time, url);
                });
        });
    }

    const handleUpdatePicture = (time, urlPicture) => {
        firebase.firestore().collection("users").doc(detailUser.idUser.toString()).update({
            picture: urlPicture,
        })
            .then((res) => {
                setModalInformation({
                    title: "Change Success",
                    description: "Your photo profile success changed.",
                    status: true,
                    isOpen: true,
                })
                getUser();
            })
            .catch((error) => {
                setModalInformation({
                    title: "Change Failed",
                    description: "Your photo profile failed change.",
                    status: false,
                    isOpen: true,
                })
                console.error("Error writing document: ", error);
            });
    }

    const handleResetPicture = () => {
        firebase.firestore().collection("users").doc(detailUser.idUser.toString()).update({
            picture: 'default',
        })
            .then((res) => {
                setModalInformation({
                    title: "Reset Success",
                    description: "Your photo profile success reset.",
                    status: true,
                    isOpen: true,
                })
                getUser();
            })
            .catch((error) => {
                setModalInformation({
                    title: "Reset Failed",
                    description: "Your photo profile failed reset.",
                    status: false,
                    isOpen: true,
                })
                console.error("Error writing document: ", error);
            });
    }

    return (
        <div className="pt-0">
            <ModalInformation
                title={modalInformation.title}
                description={modalInformation.description}
                status={modalInformation.status}
                isOpen={modalInformation.isOpen}
                onClick={() => setModalInformation({ title: "", description: "", status: "", isOpen: false })}
            />
            <div className="content pt-24 tablet:pl-20 mobile:px-4 w-full">
                <div className="profile-image flex laptop:flex-row mobile:flex-col items-center mb-10">
                    <div className="circle-bg mr-5 laptop:mb-0 mobile:mb-7 bg-white w-36 h-36 flex justify-center items-center rounded-full shadow-xl">
                        <div className="image w-32 h-32 rounded-full overflow-hidden shadow-md">
                            {user.picture == 'default' || user.picture == '' || user.picture == undefined ?
                                <Image src={img.user} width="200" height="200" alt="profile" />
                                :
                                <Image src={user.picture} width="200" height="200" alt="profile" />
                            }
                        </div>
                    </div>

                    <div className="action flex">
                        <div className="relative w-32 h-12">
                            <div className="bg-darkGreen text-white font-bold w-full h-full rounded-full flex flex-col justify-center items-center absolute z-0">
                                <span className="laptop:w-full text-center">Change</span>
                            </div>
                            <input className="cursor-pointer w-full h-full opacity-0 pin-r pin-t absolute z-10" type="file" id="avatar" name="avatar" onChange={handleChangePicture} accept="image/png, image/jpeg" />
                        </div>
                        {/* <button className="py-2 px-6 mr-3 bg-darkGreen rounded-full text-white font-medium">Change</button> */}
                        <button onClick={handleResetPicture} className="py-2 px-6 rounded-full font-medium">Remove</button>
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
                                        <input type="text" onChange={handleChangeProfile} name="fullname" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" placeholder="John Doe" value={user.fullname} />
                                    </div>
                                </div>
                                <div className="col w-full laptop:pl-2 mobile:pl-0">
                                    <div className="form-group flex flex-col">
                                        <label className="font-medium text-sm mb-3">Nick Name</label>
                                        <input type="text" onChange={handleChangeProfile} name="nickname" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" placeholder="John" value={user.nickname} />
                                    </div>
                                </div>
                            </div>
                            <div className="row flex laptop:w-11/12 mobile:w-full mb-5">
                                <div className="col w-full">
                                    <div className="form-group flex flex-col">
                                        <label className="font-medium text-sm mb-3">Profession</label>
                                        <input type="text" onChange={handleChangeProfile} name="job" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" placeholder="Programmer" value={user.job} />
                                    </div>
                                </div>
                            </div>
                            <div className="row flex laptop:w-11/12 mobile:w-full mb-7">
                                <div className="col w-full">
                                    <div className="form-group flex flex-col">
                                        <label className="font-medium text-sm mb-3">Address</label>
                                        <textarea type="text" onChange={handleChangeProfile} name="address" className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" value={user.address} />
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
                                        <input type="email" value={user.email} className="text-lg outline-none py-2 px-3 rounded-b-lg rounded-tr-lg focus:shadow-2xl font-medium" />
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