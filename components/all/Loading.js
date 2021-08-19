
import { useAppContext } from 'components/states/GlobalStates';
import Image from 'next/image'

export function Loading() {
    const { url, setUrl, img, setImg, isLogin, setIsLogin, detailUser, setDetailUser, menuActive, setMenuActive } = useAppContext();

    return (
        <div className="bg-loading fixed w-full h-full z-50 bg-black bg-opacity-10 hidden justify-center items-center">
            <Image className="img-loading" width="200" height="200" src={img.loading} alt="Loading"/>
        </div>
    )
}
