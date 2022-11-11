import "../AllList.css";
import React from "react";
import { useUserContext } from "../UserContext";

const Clothing = () => {
  // const {db} = useContext(UserContext);
  // console.log(db.ListClothing)

  // روش اول
  const { ListClothing } = useUserContext();
  // console.log(ListClothing);

  return (
    <div className="clothContainer">
      {ListClothing.map((info) => {
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

export default Clothing;
