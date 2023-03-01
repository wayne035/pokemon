import sty from './style.module.css'

export default function search(){
    let search = ()=>{

    }

    return (
        <div className={sty.searchwrap}>
            <input className={sty.select} 
                   type='text'
                   placeholder="請輸入神奇寶貝名稱...."
            />
            <button className={sty.btn} onClick={search}>查詢</button>
        </div>
    )
}