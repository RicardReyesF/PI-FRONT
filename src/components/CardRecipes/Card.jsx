export function Card ({name, image,diet}){
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} width="200px" height="150px" alt=""/>
            <p>{diet.map( el => el)}</p>
        </div>
    )
} 