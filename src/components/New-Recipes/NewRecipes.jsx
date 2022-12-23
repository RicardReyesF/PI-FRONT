import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets } from "../../redux/actions";
export const NewRecipes = () => {

    const diets = useSelector(state => state.diets);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDiets())
    },[dispatch])

    const [recipes, setRecipes] = useState({
        name:"",
        resumen:"",
        score:"",

    })

    return (
        <div>
            <h1>Nueva Receta</h1>
            <form >
                <label htmlFor="name">Nombre</label>
                <br />
                <input 
                    type="text"
                    name="name"
                    placeholder="Nombre de la receta"
                />
                <br />
                <label htmlFor="score">Puntuacion</label>
                <br />
                <input 
                    type="number"
                    name="score"
                    placeholder="0"
                    defaultValue="0"
                    min="0"
                    max="100"
                />
                <br />
                <label>Tipos de Dieta</label>
                <br />
                <div>
                    {
                        diets.map(diet => {
                            return(
                                <label>
                                    <input type="checkbox" name="diets" value={diet.id}/>
                                    {diet.name}
                                    <br />
                                </label>
                            )
                        })
                    }
                </div>
                <br />
                <label htmlFor="summary">Paso a Paso</label>
                <br />
                <textarea name="stepByStep" cols="30" rows="10"></textarea>
                <br />
                <label htmlFor="summary">Resumen</label>
                <br />
                <textarea name="resumen" cols="30" rows="10"></textarea>
                <br />
                <div>
                    <button>Crear</button>
                </div>
            </form>
        </div>
    )
}