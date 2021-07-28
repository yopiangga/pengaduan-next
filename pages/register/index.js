import Main from "components/register/Main";
import { Component, useEffect } from "react";

class Register extends Component {
    constructor(props){
        super(props);
    }
    render(){
        document.title = "Register - Complaint"

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
                <Main />
            </div>
        )
    }
}

export default Register;