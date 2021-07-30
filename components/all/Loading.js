
import Image from 'next/image'
import img from 'public/assets/images/loading.svg';

export function Loading() {
    console.log(img)
    return (
        <div className="bg-loading fixed w-full h-full z-50 bg-black bg-opacity-10 flex justify-center items-center">
            <Image className="img-loading" width="200" height="200" src={img} alt="Loading"/>
        </div>
    )
}
