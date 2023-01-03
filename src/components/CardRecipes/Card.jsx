import { Link } from "react-router-dom";
import style from "../CardRecipes/Card.module.css"
export function Card ({name,image,diet,id,createDb}){
    
    return (
        <Link to={`/recipes/${id}`} style={{ textDecoration: "none" }}>
        <div className={style.divCard}>
            <div className={style.divItemCard}>
                <img  className={style.imgCard} src={image? image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOTHndRaG7KlBkrF7Pjzsd0K7Hj3zoiIkuXQ&usqp=CAU"}  alt="Avatar"  />
                <div >
                    <h3 className={style.words}>{name}</h3>
                <br />
                <h4 className={style.wordsH4}>Tipo de dietas: </h4>
                <p className={style.wordsP}>{!createDb? diet.map( el => `${el}, `) : diet.map( el => `${el.name}`)}</p>
                </div>
            </div>
        </div>
        </Link>
    )
} 