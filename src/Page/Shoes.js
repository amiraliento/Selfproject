import "../AllList.css";
import React from "react";
import { useUserContext } from "../UserContext";

const Shoes = () => {
 
  const { ListShoes } = useUserContext();

  return (
    <div className="clothContainer">
      {ListShoes.map((info) => {
        return (
          <div className="clothCart">
           <img className="imgstyle" src={info.img} />
            <h1>{info.name}</h1>
            <span>{info.sale}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Shoes;