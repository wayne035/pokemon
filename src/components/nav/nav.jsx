import React,{useState} from 'react'
import sty from './style.module.css'

export default function Nav(){
    const [toggle, setToggle] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//=====================================================
    window.addEventListener('resize',()=>{
        setWindowWidth(window.innerWidth)
    })

    const display ={
        display: toggle ? 'block' : 'none' 
    }

    const flex ={
        display: 'flex'
    }

    const top = {
        transform: toggle ? 'rotate(45deg)' : 'rotate(0)',
        top: toggle ?  '20px' : '8px'
    }

    const mid = {
        display: toggle ? 'none' : 'block' 
    }

    const bot = {
        transform: toggle ? 'rotate(135deg)' : 'rotate(0)',
        top: toggle ?  '20px' : '32px'
    }
//=====================================================
    return (
        <>
            <div className={sty.hb} onClick={()=>setToggle( v => !v)}>
                <span className={sty.top} style ={top}></span>
                <span className={sty.mid} style ={mid}></span>
                <span className={sty.bot} style ={bot}></span>
            </div>

            <ul className={sty.menu} style ={ windowWidth > 640 ? flex : display }>
                <li><a href="/">商品</a></li>
                <li><a href="/">電影</a></li>
                <li><a href="/">遊戲</a></li>
                <li><a href="/">活動</a></li>
                <li><a href="/">關於我們</a></li>
            </ul>
        </>
    )
}