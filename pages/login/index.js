import { Loading } from "components/all/Loading";
import Main from "components/login/Main";
import { useEffect } from "react";

function Login() {

    useEffect(() => {
        document.title = "Login - EnvCare"
    }, [])

    return (
        <div>
            <Loading />
            <Main />
        </div>
    )
}

export default Login;