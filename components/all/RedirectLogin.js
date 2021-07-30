import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import redirectLogin from 'public/assets/images/redirect-login.png'

export default function RedirectLogin(){
    const router = useRouter();
    return(
        <div className="pt-0 flex flex-col h-screen justify-center items-center">
            <div className="image w-72 h-72 mb-0">
                <Image src={redirectLogin} alt="redirect login" />
            </div>

            <h3 className="font-medium text-xl mb-5">You need to login to access this page</h3>
            <button onClick={()=> router.push('/login')} className="py-2 px-10 mr-3 bg-darkGreen rounded-full text-white font-medium">Log In</button>
        </div>
    )
}