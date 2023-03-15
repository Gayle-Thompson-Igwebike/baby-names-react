import React, { useState, useEffect } from "react";
import babyNames from "./babyNames.json";
import "./App.css";

function App() {
  const [allBabyNames, setAllBabyNames] = useState([]);
  const [searchedNames, setSearchedNames] = useState([]);

  useEffect(() => {
    setAllBabyNames(babyNames);

  }, []);

  const handleSearch = event => {
    setSearchedNames(event.target.value);
  };

  const filteredBabyNames = allBabyNames.filter((baby) => {
    return (
      baby.name.toLowerCase().includes(searchedNames)
    
    );
  });
  
  return (
    <header>
      <h1> BABY NAME-PICKER APP</h1>

      <div className="img-container">
        <img
          src="https://www.pngitem.com/pimgs/m/234-2341738_stork-png-transparent-background-transparent-background-stork-cartoon.png"
          alt="stork and baby"
        ></img>
      </div>
      <div className="search">
        <p>Find baby names of your choice...</p>
        <input
          value={searchedNames}
          className="search-bar"
          maxLength={20}
          type="text"
          placeholder="Pick or enter a name"
          onChange={handleSearch}
        ></input>
        <button type="button" id="btn" onClick={handleSearch}>Search Names</button>
      </div>
      <div className="cards-display">
        {filteredBabyNames
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((baby) => (
            <div className={`name-cards color-${baby.sex}`}>{baby.name}</div>
          ))}
      </div>
    </header>
  );
}

export default App;
