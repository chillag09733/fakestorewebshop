import { createContext, useEffect, useState } from "react";
import { MyAxios } from "./MyAxios";
//import axios from "axios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
  //program állapotát a terméklista írja le asszinkron módon a végpontról töltünk fel
  const [tLista, setTLista] = useState([]);

  //aszinkron hívás axiosszal
  function getAdat(vegpont) {
   // axios
   MyAxios
      .get(vegpont)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setTLista(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  function postAdat(vegpont, adat) {
    // axios
    MyAxios
      .get(vegpont, adat)
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  useEffect(() => {
    //aszinkron hívások esetén, hívás csak egyszer történjen meg
    //csak akkor módosul újra a hívás, ha változás történik
    //getAdat("https://fakestoreapi.com/products");
    getAdat("/products");
  }, []);

  return (
    <ApiContext.Provider value={{ tLista, postAdat }}>{children}</ApiContext.Provider>
  );
};
