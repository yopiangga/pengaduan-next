
import { Loading } from "components/all/Loading";
import { Component, useEffect } from "react";
import logo from 'public/assets/images/logo.png'
import Image from 'next/image';
import Link from 'next/link'
import ilustration1 from 'public/assets/images/ilustration-1.png'
import { tsParticles } from "tsparticles";
import Particles from 'react-particles-js';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        const options = {
            particles: {
                number: {
                    value: 70,
                    density: {
                        enable: true,
                        value_area: 400
                    }
                },
            }
        }

        return (
            <div className="page w-full relative h-screen bg-darkGreen flex justify-between">
                <div className="left flex justify-center w-1/2 bg-white">
                    <div className="content w-3/4 h-full">

                        <div className="logo h-20 w-14 px-1 pt-2 my-5">
                            <Image src={logo} alt="logo-light" />
                        </div>
                        <h3 className="text-2xl font-medium mb-3">Login</h3>
                        <p className="mb-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, eius.</p>

                        <div className="auth-google w-full h-12 mb-5 border border-gray-200 rounded-lg flex justify-center items-center cursor-pointer hover:border-darkGreen">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" width="20" height="20" alt="google" />
                            <h4 className="font-medium ml-3">Authentication with Google Account</h4>
                        </div>

                        <h3 className="text-lg font-medium text-center mb-5 text-gray-400">-- OR --</h3>

                        <form className="">
                            
                            <div className="form-group mb-7">
                                <input type="email" className="h-10 border-b w-full px-3 py-2 outline-none" placeholder="Email Address" />
                            </div>
                            <div className="form-group mb-7">
                                <input type="password" className="h-10 border-b w-full px-3 py-2 outline-none" placeholder="Password" />
                            </div>
                            <div className="form-group mb-7">
                                <button className="w-full h-12 bg-darkGreen rounded-lg font-medium text-white">Login</button>
                            </div>
                            <div className="form-group mb-7">
                                <Link href="/login"><a>Don't have an account yet? <span className="text-darkGreen hover:underline">Sign Up</span></a></Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="right w-1/2 flex justify-center relative">
                    <section className="bg-main absolute z-0 w-full h-screen flex items-center">
                        <Particles width={'100%'} height={'100%'} params={options} style={{width: '100%', height: '100%'}} />
                    </section>
                    <div className="content w-3/4 flex flex-col items-center justify-center">
                        <div className="image mb-2" style={{width: "450px"}}>
                            <Image src={ilustration1} alt="login" />
                        </div>
                        <h4 className="text-center text-lg text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, facilis?</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;