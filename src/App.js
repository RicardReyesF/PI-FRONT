import './App.css';
import { Routes, Route} from 'react-router-dom';
import { Home } from './components/Home/Home.jsx';
import{ Recipes } from './components/Recipes/Recipes.jsx';
import { NewRecipes } from './components/New-Recipes/NewRecipes.jsx';
import { DetailRecipes } from './components/Detail-Recipes/DetailRecipes.jsx';
function App() {

  return (
    <div>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/recipes' element={<Recipes />}></Route>
      <Route path='/new-recipes' element={<NewRecipes />}></Route>
      <Route path='/recipes/:id' element={<DetailRecipes />}></Route>
      '
    </Routes>
    </div>
  );
}

export default App;
