import axios from "axios";
import * as React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PirateForm = () => {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [treasure, setTreasure] = useState(0);
    const incrementCount = () => {
        // Update state with incremented value
        setTreasure(treasure + 1);
      };
      const decrementCount = () => {
        // Update state with incremented value
        setTreasure(treasure - 1);
      };
    const [phrase, setPhrase] = useState("");
    const [position, setPosition] = useState("");
    const [leg, setLeg] = useState(true);
    const [patch, setPatch] = useState(true);
    const [hand, setHand] = useState(true);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/pirate", { name, url, treasure, phrase, position, leg, patch, hand })
            .then((response) => {
                console.log(response);
                navigate("/pirates");
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    };
    return (
        <div className="container">
            <h1>Add Pirate</h1>
            <div className="row">
                <div className="col-4">
                    <Link to="/pirates">Crew Board</Link>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Pirate Name</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            {errors.name ? <p>{errors.name.message}</p> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="url">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setUrl(e.target.value)}
                                value={url}
                            />
                            {errors.name ? <p>{errors.url.message}</p> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="treasure"># of Treasure Chester</label>
                            
                            <button onClick={incrementCount}>+</button>
                            <button onClick={decrementCount}>-</button>
                            {treasure}       
                        </div>
                        <div className="form-group">
                            <label htmlFor="phrase">Pirate Catch Phrase</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setPhrase(e.target.value)}
                                value={phrase}
                            />
                            {errors.name ? <p>{errors.phrase.message}</p> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="position">Crew Position</label>

                            <select value={position} onChange={(e) => setPosition(e.target.value)}>
                                <option value="Captain">Captain</option>
                                <option value="First Mate">First Mate</option>
                                <option value="Quarter Master">Quarter Master</option>
                                <option value="Boatswain">Boatswain</option>
                                <option value="Powder Monkey">Powder Monkey</option>
                            </select>
                            {errors.name ? <p>{errors.position.message}</p> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="leg">Peg Leg</label>
                            <input
                                type="checkbox"
                                defaultChecked={leg}
                                onChange={e => setLeg(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="patch">Eye Patch</label>
                            <input
                                type="checkbox"
                                defaultChecked={patch}
                                onChange={e => setPatch(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="hand">Hook Hand</label>
                            <input
                                type="checkbox"
                                defaultChecked={hand}
                                onChange={e => setHand(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-primary" type="submit">
                            Add Pirate
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PirateForm;