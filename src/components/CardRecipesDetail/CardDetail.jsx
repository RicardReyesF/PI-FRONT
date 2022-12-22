export const CardDetail = ({img,name,summary,score,steps,typeDish,diet}) => {
    
    const step = steps.map(s => s[0].step)
    console.log(step);
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt="" />
            <h4>Nivel saludable {score}</h4>
            <h4>Tipo de dieta </h4>
                <ul>
                    {
                        diet.map( d => (
                            <li>{d}</li>
                        ))
                    }
                </ul>
            <h4>Resumen</h4>
            <p>{summary}</p>
            <h4>Paso a Paso</h4>
            <ol>
            {
                steps.map(step => 
                    (
                    <li>
                        <p>
                        {
                        step[0].step
                        }
                        </p>
                    </li>    
                                        )
                )
                
            }
            </ol>
            <h4>Tipo de Plato </h4>
                <ul>
                    {
                        typeDish.map(type => (
                            <li>{type}</li>
                        ))
                    }
                </ul>
        </div>
    )
} 