import { Link } from "react-router-dom"
export function Card ({name,image,diet,id,createDb}){
    console.log(id)
    return (
        <div>
            <Link to={`/recipes/${id}`}>
                <h3>{name}</h3>
            </Link>
            <img src={image? image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOTHndRaG7KlBkrF7Pjzsd0K7Hj3zoiIkuXQ&usqp=CAU"} width="200px" height="150px" alt=""/>
            <p>{!createDb? diet.map( el => el) : diet.map( el => el.name)}</p>
        </div>
    )
} 