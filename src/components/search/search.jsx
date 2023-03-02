import React,{useState} from 'react';
import sty from './style.module.css'

export default function Search(){
    const [text,setText] = useState('')
    let search = ()=>{
        console.log(text)
        setText('')
    }

    return (
        <div className={sty.searchwrap}>
            <input className={sty.select} 
                   type='text'
                   placeholder="請輸入神奇寶貝名稱...."
                   value={text}
                   onChange={(e)=>{setText(e.target.value.trim())}}
            />
            <button className={sty.btn} onClick={search}>
                <img className={sty.img} src="/img/select.webp" alt="img"/>
            </button>
        </div>
    )
}