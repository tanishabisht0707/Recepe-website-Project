import { Link } from "react-router-dom";
import UseAnime from "../CustomHook/UseAnime";
import { useEffect, useState } from "react";
import { ShowRecepe } from "../Features/RecpeSlice";
import { useDispatch } from "react-redux";

function Cards() {
  const[meal,setMeal] = useState([])
   useEffect(()=>{
  
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=choco`)
    .then((res) => res.json())
    .then((res) => setMeal(res.meals));
   },[]);

   const dispatch = useDispatch()


  const recepe = meal.slice(3,8);
  return (
    <>
      <div className="cards">
        {
          recepe.map((res)=>(
            <Link to="/Recepe" key={res.idMeal} onClick={()=>{
              dispatch(ShowRecepe({id:res.dMeal,name:res.strMeal,categ:res.strCategory,state:res.strArea,instr:res.strInstructions,img:res.strMealThumb,src:res.strYoutube }))
            }}>
          <div className="card">
            <img
              src={res.strMealThumb}
              alt=""
            />
          </div>
        </Link>
          ))
        }
      </div>
    </>
  );
}
export default Cards;
