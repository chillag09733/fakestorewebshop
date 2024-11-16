import React, { useContext, useState } from "react";
import { ApiContext } from "../contexts/ApiContext";

function TermekUrlap() {
  const { postAdat } = useContext(ApiContext);
  //minden űrlapnak van egy saját state-je, ami az űrlapadatokat kezeli
  const [adat, setAdat] = useState({
    title: "Start",
    price: 100,
    category: "",
    description: "",
    image: "",
  });

  function kuldesKezeles(event) {
    //leszedem az alapértelmezett eseménykezelőt
    event.preventDefault();
    //összegyűjtjük az űrlapadatokat, összeállítunk egyo bjektumot és továbbküldjük szerver felé post-tal
    console.log("submit");
    postAdat("https://fakestoreapi.com/products", adat);
  }

  function handleChange(event) {
    //VÁLTOZÁSKEZELÉS
    //adat objektum megfelelő kulcsát frissítem event.target.value-val
    //csak setAdattal tehető meg, ezért mélymásolat
    const segedValtozo = { ...adat };
    //segedValtozo.title = event.target.value;
    //segedValtozo.title és segedValtozo[event.target.id] - kettő megegyezik
    //segedValtozo[event.target.id] - általános
    segedValtozo[event.target.id] = event.target.value;
    setAdat({ ...segedValtozo });
  }

  return (
    <div>
      <form onSubmit={kuldesKezeles}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Product:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="title help"
            value={adat.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Price:
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            min="100"
            max="1000000"
            aria-describedby="price help"
            value={adat.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Category:
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            aria-describedby="category help"
            value={adat.category}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TermekUrlap;
