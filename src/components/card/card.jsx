import sty from './style.module.css'

export default function Card({pokemon}){

    const types ={  //16進位[1] , rgb[2]
        草:['#42a131','66,161,49'],
        毒:['#9043c9','144,67,201'],
        火:['#e4252f','228,37,47'],
        水:['#2e81ec','46,129,236'],
        蟲:['#91a127','145,161,39'],
        飛行:['#83baed','131,186,237'],
        一般:['#9fa19f','159,161,159'],
        地面:['#915229','144,80,38'],
        格鬥:['#fd7f1f','253,127,31'],
        超能力:['#ed407a','237,67,124'],
        岩石:['#afa983','175,169,131'],
        幽靈:['#6f416f','111,65,111'],
        冰:['#47d9fd','71,217,253'],
        龍:['#5162de','81,98,222'],
        電:['#f9bf27','249,191,39'],
        妖精:['#ee71ed','238,113,237'],
        惡:['#50413f','80,65,63'],
        鋼:['#62a1b7','98,161,183'],
    }

    function CardBG(type){
        return `rgba(${types[type[0]][1]},.35)`
    }

    function TypeJudge(type){
        return (type.length === 2) ? 
        <span>
            <div style={{background:types[type[0]][0]}}>
                {type[0]}
            </div> 、
            <div style={{background:types[type[1]][0]}}>
                {type[1]}
            </div>
        </span>
        :<div style={{background:types[type[0]][0]}}>
            {type[0]}
        </div>
    }

    function PadStart(id){
        return String(id).padStart(4,'0')
    }
//=============================================================================
    return (
        <section className={sty.section}>
          <div className={sty.cardwrap}>
          {   
            pokemon.map(({id, type ,name ,url}) =>{
                return(
                    <div key={id} 
                         className={sty.card} 
                         style={{background:CardBG(type)}}
                    >   
                        <p className={sty.number}>
                            NO.{PadStart(id)}
                        </p>
                        <img className={sty.img} src={url} alt='pokemon'/>
                        <p className={sty.name}>
                            {name}
                        </p>
                        <div className={sty.type}>
                            屬性 : {TypeJudge(type)}
                        </div>
                    </div>
                )
            })
          }
          </div>
        </section>
    )
}