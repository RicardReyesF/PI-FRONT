import { Link } from "react-router-dom"
export function Card ({name, image,diet,id}){
    console.log(id)
    return (
        <div>
            <Link to={`/recipes/${id}`}>
                <h3>{name}</h3>
            </Link>
            <img src={image} width="200px" height="150px" alt=""/>
            <p>{diet.map( el => el)}</p>
        </div>
    )
} 