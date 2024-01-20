import React, { useState } from "react";
import RecepeApi from "../CustomHook/RecepeAPi";
import { useDispatch } from "react-redux";
import { ShowRecepe } from "../Features/RecpeSlice";
import { NavLink } from "react-router-dom";

function Infopage() {

  const [value,setValue] = useState("")
  const recepe = RecepeApi(value)
  const [data, setData] = useState([]);
  const [searched,setSearched] = useState(false)

   const dispatch = useDispatch()
 

  const search = (e) => {
    e.preventDefault()
   setData(recepe)
   setSearched(true)
  };

  return (
    <div className="infopage">
      <div className="searchbar">
        <form onSubmit={search}>
          <input placeholder="enter recepe name here.."
            value={value}
            spellCheck="false"
            onChange={(e) => setValue(e.target.value)}
          />
          <span className="material-symbols-outlined" onClick={search}>
            search
          </span>
        </form>
      </div>
    {
      data===null?(
      <h1 className="nulldata">Data not found...</h1>
      ):(
      <>
       {
        searched?(
          <div className="Repcepes ">
          {data.map((res) => (
            <NavLink to="/Recepe" key={res.idMeal}>
              <div className="Recepe" key={res.idMeal} onClick={() => {
             dispatch(ShowRecepe({id:res.dMeal,name:res.strMeal,categ:res.strCategory,state:res.strArea,instr:res.strInstructions,img:res.strMealThumb,src:res.strYoutube }))
            }}>
              <img src={res.strMealThumb} alt="" />
            </div>
            </NavLink>
          ))}
        </div>
        ):(
          <>
         
         <img className="cookie" src="https://www.freeiconspng.com/thumbs/cookie/download-biscuit-cookie-monster-clipart-24.png" alt="" />
         
          </>
        )
       }
      </>
      )
    }
    </div>
  );
}

export default Infopage;
