import React from "react";
import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";

const Pet = (props) => {
  const { name, animal, breed, images, location, pet, id } = props;
  
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info" key={pet}>
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

  
  export default Pet;