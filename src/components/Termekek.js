import React, { useContext } from "react";
import Termek from "./Termek";
import { ApiContext } from "../contexts/ApiContext";

            // API output:
            // {
            //     id:1,
            //     title:'...',
            //     price:'...',
            //     category:'...',
            //     description:'...',
            //     image:'...'
            // }

function Termekek() {
    const {tLista} = useContext(ApiContext)
  return (
    <div className="row">
      {tLista.map((termek) => {
        return <Termek termek = {termek} key = {termek.id}/>
      })}
    </div>
  );
}

export default Termekek;
