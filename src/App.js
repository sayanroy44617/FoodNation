
import './App.css';
import './key_and_id';
import Axios from 'axios';
import React,{ useState } from "react";
import Recipecards from './Recipecards';

function App() {
  const APP_ID= 'a410c615';
  const APP_KEY='3d8c44651888e6bd1bd8481109bc1524';
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
 
  async function getrec() {
    var result = await Axios.get(url); //await is used for the the function to wait for the data to load. and to 
    //make it wait we need to make the function async
    setrecipes(result.data.hits)
    console.log(result.data);
  }

  const submit=(e)=>{
    e.preventDefault();
    getrec();
  }

  return (
 <>
    <div className="app">
      <h1>FooDie Nation 🍺</h1>
      <form action="" className="app_searchfor" onSubmit={submit}>
        <input type="text" className='search' placeholder="enter ingredient" value={query} onChange={(e) => setquery(e.target.value)} />
        <input type="submit" className='submit' value='Search' />      
      </form>

    
      <div className="map-rec">
         { recipes.map(recipe=>{
            return <Recipecards recipe={recipe} />;
          })}      
      </div>

    </div>

  </>
  );
}

export default App;
