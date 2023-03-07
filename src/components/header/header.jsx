import Nav from '../nav/nav';
import sty from './style.module.css'

export default function Header(){
    return (
        <header className={sty.header}>
            <a href='https://wayne035.github.io/pokemon/'  className={sty.a}>
                <img className={sty.img} src="./img/logo.webp" alt="logo" />
            </a>
            <Nav/>
        </header>
    )
}