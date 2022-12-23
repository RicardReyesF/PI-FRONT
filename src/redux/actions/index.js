import axios from 'axios';

export function getAllRecipes(){
    return async function (dispatch){
        const recipes  = await axios.get(`http://localhost:3001/recipes`)
    return dispatch({
        type: 'GET_ALL_RECIPES',
        payload: recipes.data
    });
};
}

export function filterbyDiets(payload){
    return {
        type: 'FILTER_BY_DIETS',
        payload
    }
}

export function filterByDesAsc(payload){
    return {
        type: 'FILTER_BY_DESC_ASC',
        payload
    }
}

export function filterByScore(payload){
    return{
        type: 'FILTER_BY_SCORE',
        payload
    }
}

export function search(payload){
    return async function(dispatch){
        const recipesSearch = await axios.get(`http://localhost:3001/recipes?query=${payload}`)
        return dispatch({
            type:'SEARCH_NAME',
            payload: recipesSearch.data
        })
    }
}

export function getRecipesDetail(payload){
    return async function(dispatch){
        const recipesDetail = await axios.get(`http://localhost:3001/recipes/${payload}`)
        return dispatch({
            type:'GET_RECIPES_DETAIL',
            payload: recipesDetail.data
        })
    }
}

export function getDiets(){
    return async function(dispatch){
        const diets = await axios.get('http://localhost:3001/diets')
        return dispatch({
            type: 'GET_DIETS',
            payload: diets.data
        })
    }
}

export function postRecipe(payload){
    return async function(dispatch){
        const post = await axios.post('http://localhost:3001/recipes',payload)
        return dispatch({
            type: 'POST_RECIPE',
            payload
        })
    }
}
