
import { Loading } from "components/all/Loading";
import { Component, useEffect } from "react";
import logo2 from 'public/assets/images/logo2.png'
import Image from 'next/image';
import Link from 'next/link'
import ilustration1 from 'public/assets/images/ilustration-1.png'
import { tsParticles } from "tsparticles";
import Particles from 'react-particles-js';

class Main extends Component {
    constructor(props){
        super(props);
    }
    render(){

        const options = {
            particles: {
                number: {
                    value: 60,
                    density: {
                        enable: true,
                        value_area: 500
                    }
                }, 
            }
        }

        return (
            <div className="page w-full relative h-screen bg-darkGreen flex justify-between">
                <section className="bg-main absolute z-0 w-full h-screen flex items-center">
                    <Particles width={'100%'} height={'100%'} params={options} style={{width: '100%', height: '100%'}} />
                </section>
                <div className="content w-96 pl-20 relative">
                    <div className="logo h-20 w-14 px-1 pt-2 my-5">
                        <Image src={logo2} alt="logo-light" />
                    </div>
                    <div className="welcome">
                        <h1 className="text-white text-3xl font-medium mb-2">Welcome back!</h1>
                        <p className="text-white ">Report any environmental problems you have here.</p>
                    </div>

                    <div className="image absolute left-24 bottom-0" style={{width: "450px"}}>
                        <Image src={ilustration1} alt="login" />
                    </div>
                </div>

                <div className="form bg-white w-3/5 h-full rounded-tl-3xl rounded-bl-3xl flex flex-col items-center">
                    <div className="header w-full h-28">
                        <h4></h4>
                    </div>
                    <div className="content w-3/5 h-full">
                        <h3 className="text-2xl font-medium mb-10">Create Account</h3>

                        <div className="auth-google w-full h-12 mb-5 border border-gray-200 rounded-lg flex justify-center items-center cursor-pointer hover:border-darkGreen">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" width="20" height="20" alt="google" />
                            <h4 className="font-medium ml-3">Authentication with Google Account</h4>
                        </div>

                        <h3 className="text-lg font-medium text-center mb-7 text-gray-400">-- OR --</h3>

                        <form className="">
                            <div className="form-group mb-7">
                                <input type="text" className="h-10 border-b w-full px-3 py-2 outline-none" placeholder="Full Name" />
                            </div>
                            <div className="form-group mb-7">
                                <input type="email" className="h-10 border-b w-full px-3 py-2 outline-none" placeholder="Email Address" />
                            </div>
                            <div className="form-group mb-7">
                                <input type="password" className="h-10 border-b w-full px-3 py-2 outline-none" placeholder="Password" />
                            </div>
                            <div className="form-group mb-7">
                                <button className="w-full h-12 bg-darkGreen rounded-lg font-medium text-white">Create Account</button>
                            </div>
                            <div className="form-group mb-7">
                                <Link href="/login"><a>Already have an account? <span className="text-darkGreen hover:underline">Log In</span></a></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;