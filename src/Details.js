import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

const Details = () => {
 
  const [detalis, setDetalis] = useState({});
  const { id } = useParams();
  const [modalActive, setModalActive] = useState(false);
  useEffect(() => {
    fetchDetalis()
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function fetchDetalis() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${id}`
    );
    const json = await res.json();
    setDetalis(Object.assign({}, json.pets[0]));
  }
  if (!detalis.state) {
    return <h2>There was an error with this listing. <Link to="/">Click here</Link>{" "}
      to back to the home page or wait five seconds.</h2>;
  }
 
  return (

    <div className="details">
      <Carousel images={detalis.images} />
      <div>
        <h1>{detalis.name}</h1>
        <h2>{`${detalis.animal} — ${detalis.breed} — ${detalis.city}, ${detalis.state}`}</h2>
        <ThemeContext.Consumer>
          {([theme]) => (
            <button onClick={() => setModalActive(true)} style={{ backgroundColor: theme }}>Adopt {detalis.name}</button>
          )}
          
        </ThemeContext.Consumer>
        <Modal active={modalActive} setActive={setModalActive}/>
        <p>{detalis.description}</p>
      </div>
   
    </div>
  );
}

export default Details;






