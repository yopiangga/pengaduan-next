import { Loading } from "components/all/Loading";
import Main from "components/login/Main";
import { Component, useEffect } from "react";

class Login extends Component {
    constructor(props){
        super(props);
    }
    
    render(){

        return (
            <div>
                <Loading />
                <Main />
            </div>
        )
    }
}

export default Login;