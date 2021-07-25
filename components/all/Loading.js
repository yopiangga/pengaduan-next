
import Image from 'next/image'
// import img from '../../public/assets/images/image-loading.svg';

export function Loading() {
    return (
        <div className="bg-loading fixed w-full h-full z-50 bg-black bg-opacity-50 hidden justify-center items-center">
            {/* <Image className="img-loading" src={img} alt="Loading"/> */}
        </div>
    )
}
