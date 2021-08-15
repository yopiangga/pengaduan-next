import { Loading } from "components/all/Loading";
import Main from "components/register/Main";
import { useEffect } from "react";

function Register() {

    useEffect(() => {
        document.title = "Register - EnvCare"
    }, [])

        return (
            <div>
                <Loading />
                <Main />
            </div>
        )
}

export default Register;