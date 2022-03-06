import React from 'react';
import './recipecards.css';
const Recipecards = ({recipe}) => {
  return (
  <div onClick={()=>{
      window.open(recipe["recipe"]["url"]);
  }}>
      <img className="rec_img" src={recipe["recipe"]["image"]}/>
      <p className="rec_name">{recipe["recipe"]["label"]}</p>
  </div>)
};

export default Recipecards;
