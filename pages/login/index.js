import { Loading } from "components/all/Loading";
import Main from "components/login/Main";
import { Component, useEffect } from "react";

class Login extends Component {
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
            <div>
                <Loading />
                <Main />
            </div>
        )
    }
}

export default Login;