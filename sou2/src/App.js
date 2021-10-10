import React,{useEffect, useState} from "react";
import Recipe from "./recipe";
import './App.css';

const App =() => {

const APP_ID = '026362f2';
const APP_KEY = '14a6a20e683843ea5baeccff64585a12';

const [recipes, setRecipes] = useState([]);

const [counter, setCounter] =useState(0);
const[search, setSearch] = useState('');

useEffect( () => {
  getRecipes();
}, []);

const getRecipes = async () => {
  const response = await fetch('https://api.edamam.com/search?q=chiken&app_id=${APP_ID}&app_key=${APP_KEY}')
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);

  
};

const updateSearch = e => {
  setSearch(e.target.value);
  console.log(data.hits);
}
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" value={search} onChange{} />
        <button
         className="search-button" type="submit">Search</button>
        
      </form>
      {recipes.map(recipe =>(
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
