import Image from 'next/image'
import logo from 'public/assets/images/logo.png'

export function MessageEmpty(){
    return(
        <div className="message laptop:w-2/3 h-full relative laptop:flex mobile:hidden flex-col">
            <div className="h-full w-full rounded-lg flex flex-col items-center justify-center bg-white">
                <div className="image w-24 h-24 relative overflow-hidden mb-3">
                    <Image src={logo} layout="fill" objectFit="cover" />
                </div>
                <h1 className="text-3xl font-bold mb-2">Env<span className="text-darkGreen">Care</span></h1>
                <p className="w-2/3 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi delectus sint corrupti doloribus asperiores. Veritatis!</p>
            </div>
        </div>
    )
}
