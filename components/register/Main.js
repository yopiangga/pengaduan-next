
import { Loading } from "components/all/Loading";
import { Component, useEffect } from "react";
import logo from 'public/assets/images/logo.png'
import Image from 'next/image';
import Link from 'next/link'
import ilustration1 from 'public/assets/images/ilustration-1.png'
import { tsParticles } from "tsparticles";
import Particles from 'react-particles-js';
import googleImage from 'public/assets/images/google.png'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleRegisterEmail = this.handleRegisterEmail.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleRegisterEmail(event){
        event.preventDefault();
        
        if(this.state.email == '' || this.state.password == '' || this.state.fullname == ''){

        } else {
            Router.push('/');
        }
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
            <div className="page w-full relative bg-darkGreen flex justify-between ">
                <div className="left flex justify-center laptop:w-1/2 mobile:w-full bg-white mobile:py-10">
                    <div className="content w-3/4 h-full">

                        <div className="logo h-20 w-14 px-1 pt-2 laptop:my-5">
                            <Image src={logo} alt="logo-light" />
                        </div>
                        <h3 className="text-2xl font-medium mb-3">Create Account</h3>
                        <p className="mb-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, eius.</p>

                        <div className="auth-google w-full h-12 mb-5 border border-gray-200 rounded-lg flex justify-center items-center cursor-pointer hover:border-darkGreen">
                            <Image src={googleImage} width="20" height="20" alt="google" />
                            <h4 className="font-medium ml-3">Sign Up with Google</h4>
                        </div>

                        <h3 className="text-lg font-medium text-center mb-5 text-gray-400">-- OR --</h3>

                        <form onSubmit={this.handleRegisterEmail}>
                            <div className="form-group mb-7">
                                <input type="text" name="fullname" className="h-10 border-b w-full px-3 py-2 outline-none" placeholder="Full Name" />
                            </div>
                            <div className="form-group mb-7">
                                <input type="email" name="email" className="h-10 border-b w-full px-3 py-2 outline-none" placeholder="Email Address" />
                            </div>
                            <div className="form-group mb-7">
                                <input type="password" name="password" className="h-10 border-b w-full px-3 py-2 outline-none" placeholder="Password" />
                            </div>
                            <div className="form-group mb-5">
                                <button className="w-full h-12 bg-darkGreen rounded-lg font-medium text-white">Create Account</button>
                            </div>
                            <div className="form-group mb-7">
                                <h4>Already have an account ? <Link href="/login"><a className="text-darkGreen hover:underline">Log In</a></Link></h4>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="right w-1/2 laptop:flex mobile:hidden justify-center relative">
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