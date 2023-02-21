import sty from './style.module.css'

export default function Nav(){
    return (
        <ul className={sty.menu}>
            <li ><a href="">商品</a></li>
            <li ><a href="">電影</a></li>
            <li ><a href="">遊戲</a></li>
            <li ><a href="">活動</a></li>
            <li ><a href="">關於我們</a></li>
        </ul>
    )
}