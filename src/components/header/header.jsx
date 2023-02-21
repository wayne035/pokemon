import Nav from '../nav/nav';
import sty from './style.module.css'

export default function Header(){
    return (
        <header className={sty.header}>
            <img className={sty.img} src="/img/logo.webp" alt="logo" />
            <Nav/>
        </header>
    )
}