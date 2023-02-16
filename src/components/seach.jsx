export default function seach(){

    let seach = ()=>{

    }

    return (
        <div>
            <input type='seach' onChange={e=>e.target.value}/>
            <button onClick={seach}>查詢</button>
        </div>
    )
}