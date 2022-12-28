import { Link } from "react-router-dom";

export const CardDetail = ({img,name,summary,score,steps,typeDish,diet,creatDb}) => {
    
    return (
        <div>
            <Link to="/recipes">
                <button>Regresar</button>
            </Link>
            <h1>{name}</h1>
            <img src={img? img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOTHndRaG7KlBkrF7Pjzsd0K7Hj3zoiIkuXQ&usqp=CAU"} alt="" />
            <h4>Nivel saludable {score}</h4>
            <h4>Tipo de dieta </h4>
                <ul>
                    {
                        creatDb ? diet.map(d => (
                            <li key={d.name}>{d.name}</li>
                            )
                        ) 
                        :
                        diet?.map(d =>(
                            <li key={d}>{d}</li>
                        ))
                    }
                </ul>
            <h4>Resumen</h4>
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
                </ul>
        </div>
    )
}