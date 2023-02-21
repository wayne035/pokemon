import sty from './style.module.css'

export default function Banner(){
    return (
        <div className={sty.banner}>
            <video autoPlay muted loop>
                <source src="/video/banner.mp4" type="video/mp4"/>
            </video>
            <div className={sty.cover}/>
            <img className={sty.bannerImg} src="/img/avatar.webp" alt="img"/>
        </div>
    )
}