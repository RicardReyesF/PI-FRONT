export const CardDetail = ({img,name,summary,score,steps,typeDish,diet,creatDb}) => {
    console.log(diet);
    return (
        <div>
            <h1>{name}</h1>
            <img src={img? img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOTHndRaG7KlBkrF7Pjzsd0K7Hj3zoiIkuXQ&usqp=CAU"} alt="" />
            <h4>Nivel saludable {score}</h4>
            <h4>Tipo de dieta </h4>
                <ul>
                    {
                        creatDb ? diet.map(d => (
                            <li>{d.name}</li>
                            )
                        ) 
                        :
                        diet.map(d =>(
                            <li>{d}</li>
                        ))
                    }
                </ul>
            <h4>Resumen</h4>
            <p>{summary}</p>
            <h4>Paso a Paso</h4>
            <ol>
            {/* {
                steps[0]? steps[0].map(step =>
                    (
                    <li>
                        <p>
                        {
                        step.step
                        }
                        </p>
                    </li>
                    )
                ) : "No hay ningun paso para esta receta" */

            }
            </ol>
            <h4>Tipo de Plato </h4>
                <ul>
                    {
                        typeDish? typeDish.map(type => (
                            <li>{type}</li>
                        ))
                        : "No hay tipo de plato"
                    }
                </ul>
        </div>
    )
}