import axios from 'axios';

export function getAllRecipes(){
    return async function (dispatch){
        const recipes  = await axios.get(`https://recipes-by-rrf.herokuapp.com/recipes`)
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
        const recipesSearch = await axios.get(`https://recipes-by-rrf.herokuapp.com/recipes?query=${payload}`)
        return dispatch({
            type:'SEARCH_NAME',
            payload: recipesSearch.data
        })
    }
}

export function getRecipesDetail(payload){
    return async function(dispatch){
        const recipesDetail = await axios.get(`https://recipes-by-rrf.herokuapp.com/recipes/${payload}`)
        return dispatch({
            type:'GET_RECIPES_DETAIL',
            payload: recipesDetail.data
        })
    }
}

export function getDiets(){
    return async function(dispatch){
        const diets = await axios.get('https://recipes-by-rrf.herokuapp.com/diets')
        return dispatch({
            type: 'GET_DIETS',
            payload: diets.data
        })
    }
}

export function postRecipe(payload){
    return async function(dispatch){
        const post = await axios.post('https://recipes-by-rrf.herokuapp.com/recipes',payload)
        console.log(post);
        return post
    }
}
