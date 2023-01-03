import { Link } from "react-router-dom"
import style from "../Nav/nav.module.css"
export function Nav (){
    return(
        <Link to="/" style={{ textDecoration: "none" }}>
                    <h1 className={style.title}>Recetas</h1>
        </Link>
    )
}