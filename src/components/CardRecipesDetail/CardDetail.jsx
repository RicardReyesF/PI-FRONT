import { Link } from "react-router-dom";
import style from "../CardRecipesDetail/CardDetail.module.css"

export const CardDetail = ({img,name,summary,score,steps,typeDish,diet,creatDb}) => {
    
    return (
        <div>

            <div className={style.divButton}>
                <Link to="/recipes">
                    <button className={style.button}>←</button>
                </Link>
            </div>
            <div className={style.divAll}>
                <div className={style.divImg}>
                    <img src={img? img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOTHndRaG7KlBkrF7Pjzsd0K7Hj3zoiIkuXQ&usqp=CAU"} alt="" />
                </div>
                <div className={style.divTitle}>
                    <h3 className={style.titleH3}>{name}</h3>
                        <h3 className={style.h4}>Nivel saludable  </h3> <p className={style.p}> ⭐ {score} ⭐</p>
                    <h3 className={style.titleH3}>Tipo de dieta </h3>
                    <ul className={style.ul}>
                        {
                            creatDb ? diet.map(d => (
                                <li className={style.li}  key={d.name}>{d.name}</li>
                                )
                            ) 
                            :
                            diet?.map(d =>(
                                <li className={style.li} key={d}>{d}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <br />
            <div className={style.divSummary}>
                <h3 className={style.titleH3}>Mas Informacion</h3>
            </div>
            <div className={style.divContainer} >
                <h3 className={style.titleH3}>Resumen</h3>       
                        <p className={style.p}>{summary}</p>
            </div>
            <div aria-labelledby="item-2" className={style.divContainer} >
            <h3 className={style.titleH3}>Paso a Paso</h3>
            <ol className={style.p}>
            {
                !creatDb? steps[0]?.map(step =>
                    (
                    <li key={step.step}>
                        <p className={style.p}>
                        {
                        step.step
                        }
                        </p>
                    </li>
                    )
                ) : <li ><p className={style.p}>{steps}</p></li> 

            }
            </ol>
            <h3 className={style.titleH3}>Tipo de Plato </h3>
                <ul className={style.ul}>
                    {
                        typeDish? typeDish.map(type => (
                            <li className={style.li} key={type}>{type}</li>
                        ))
                        : "No hay tipo de plato"
                    }
                </ul>            
            </div>
            {/* <h4>Resumen</h4>
            <p>{summary}</p>
            <h4>Paso a Paso</h4>
            <ol>
            {
                !creatDb? steps[0]?.map(step =>
                    (
                    <li key={step.step}>
                        <p>
                        {
                        step.step
                        }
                        </p>
                    </li>
                    )
                ) : <li ><p>{steps}</p></li> 

            }
            </ol>
            <h4>Tipo de Plato </h4>
                <ul>
                    {
                        typeDish? typeDish.map(type => (
                            <li key={type}>{type}</li>
                        ))
                        : "No hay tipo de plato"
                    }
                </ul> */}
        </div>
    )
}