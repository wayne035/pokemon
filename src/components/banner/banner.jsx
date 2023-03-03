import sty from './style.module.css'

export default function Banner(){
    return (
        <div className={sty.banner}>
            <video autoPlay muted loop>
                <source src="/video/banner.mp4" type="video/mp4"/>
            </video>
            <div className={sty.cover}/>
            <img className={sty.bannerImgDM} src="/img/大木.webp" alt="大木"/>
            <img className={sty.bannerImgSS} src="/img/小霞.webp" alt="小霞"/>
            <img className={sty.bannerImgSD} src="/img/小智.webp" alt="小智"/>
        </div>
    )
}