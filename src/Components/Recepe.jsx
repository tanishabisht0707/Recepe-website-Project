import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Recepe() {
  const Recepes = useSelector((state) => state.items);
  const recepes = Recepes[Recepes.length - 1];
  console.log(recepes);
  return (
    <div className="RepcepesPage  ">
      <div className="RecepePageIMg">
        <img src={recepes.img} alt="" />
      </div>
      <div className="content2">
        <h1>{recepes.name} <span>{recepes.state}</span></h1>
        <p>{recepes.instr}</p>
        <Link to={recepes.scr} target="black">Watch Video</Link>
      </div>
    </div>
  );
}

export default Recepe;
