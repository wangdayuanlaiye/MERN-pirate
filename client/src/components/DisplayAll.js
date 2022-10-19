import { useEffect, useState } from "react";

import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
const DisplayAll = () => {
  const [allPirates, setAllPirates] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pirate")
      .then((response) => {
        console.log(response.data);
        setAllPirates(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const handleDeletePirate = (idFromBelow) => {
    axios
      .delete(`http://localhost:8000/api/pirate/${idFromBelow}`)
      .then((response) => {
        console.log("success deleting pirate");
        console.log(response);
        const filteredPirates = allPirates.filter((pirate) => {
          return pirate._id !== idFromBelow;
        });
        setAllPirates(filteredPirates);
      })
      .catch((err) => {
        console.log("error deleting pirate", err.response);
      });
  };
  return (
    <div className="container">
      <h1>Pirates Crew</h1>
      <div className="row">
        <div className="col-8">
          <Link to="/pirate/new">Add an Pirate</Link>
           <table className="table">
            <thead>
              {allPirates.map((pirate, index) => {
                return (
                  <tr key={pirate._id}>
                    <td>{pirate.name}</td>
                    <td>
                      <Link to={`/pirate/${pirate._id}`}>
                        <button className="btn btn-primary">View Pirate</button>
                      </Link>

                      <button
                        onClick={() => handleDeletePirate(pirate._id)}
                        className="btn btn-danger"
                      >
                        Walk the Plank
                      </button>
                    </td>
                  </tr>
                  
                );
              })}
            </thead>
            <tbody>
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DisplayAll;