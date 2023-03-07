import sty from './style.module.css'

const type ={ // type[0] , 16進位[1] , rgb[2]
    grass:['草','#42a131','66,161,49'],
    poison:['毒','#9043c9','144,67,201'],
    fire:['火','#e4252f','228,37,47'],
    water:['水','#2e81ec','46,129,236'],
    bug:['蟲','#91a127','145,161,39'],
    flying:['飛行','#83baed','131,186,237'],
    normal:['一般','#9fa19f','159,161,159'],
    ground:['地面','#915229','144,80,38'],
    fighting:['格鬥','#fd7f1f','253,127,31'],
    psychic:['超能力','#ed407a','237,67,124'],
    rock:['岩石','#afa983','175,169,131'],
    ghost:['幽靈','#6f416f','111,65,111'],
    ice:['冰','#47d9fd','71,217,253'],
    dragon:['龍','#5162de','81,98,222'],
    electric:['電','#f9bf27','249,191,39'],
    fairy:['妖精','#ee71ed','238,113,237'],
    dark:['惡','#50413f','80,65,63'],
    steel:['鋼','#62a1b7','98,161,183'],
}

export default function Card({pokemon}){
    return (
        <section className={sty.section}>
          <div className={sty.cardwrap}>
          {   
            pokemon.map( ({id, sprites, types ,name}) =>{
                return(
                    <div key={id} 
                         className={sty.card} 
                         style={{background:`rgba(${type[types[0].type.name][2]},.35)`}}
                    >   
                        <h2 className={sty.number}>NO.{String(id).padStart(4,'0')}</h2>
                        <img className={sty.img} src={sprites.front_default} alt='pokemon'/>
                        <h2 className={sty.name}>
                            {name}
                        </h2>
                        <p className={sty.type}>屬性 : {
                            (types.length === 2) ? 
                                <span>
                                    <strong style={{background:type[types[0].type.name][1]}}>
                                        {type[types[0].type.name][0]}
                                    </strong> 、
                                    <strong style={{background:type[types[1].type.name][1]}}>
                                        {type[types[1].type.name][0]}
                                    </strong>
                                </span>
                              : <strong style={{background:type[types[0].type.name][1]}}>
                                    {type[types[0].type.name][0]}
                                </strong>
                        }</p>
                    </div>
                )
            })
          }
          </div>
        </section>
    )
}