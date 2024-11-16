import React from "react";

function Termek(props) {
  return (
    <div className="col-sm-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.termek.image} className="card-img-top" alt={props.termek.title} />
        <div className="card-body">
          <h5 className="card-title">{props.termek.title}</h5>
          <p className="card-text">{props.termek.descreption}</p>
          <a href="#" className="btn btn-primary">
            Buy me!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Termek;
