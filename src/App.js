import React, { useState, useEffect } from "react";
import babyNames from "./babyNames.json";
import "./App.css";

function App() {
  const [allBabyNames, setAllBabyNames] = useState([]);
  const [searchedNames, setSearchedNames] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [favouriteNames, setFavouriteNames] = useState([]);

  useEffect(() => {
    setAllBabyNames(babyNames);
  }, []);

  const handleSearch = (event) => {
    setSearchedNames(event.target.value);
  };

  const resetSearch = (event) => {
    setSearchedNames("");
  };

  const filteredBabyNames = allBabyNames.filter((baby) => {
    return baby.name.toLowerCase().includes(searchedNames);
  });

  const handleRandomName = () => {
    const randomNameIndex = Math.floor(Math.random() * allBabyNames.length);
    const randomName = allBabyNames[randomNameIndex].name;
    setSearchedNames(randomName);
  };
  // const handleAddToFavourites = (name) => {
  //   setFavouriteNames((favourites) => [...favourites, name]);
    const handleAddToFavourites = (name) => {
      if (favouriteNames.includes(name)) {
        // If the name is already a favorite, remove it
        setFavouriteNames((favourites) =>
          favourites.filter((favourite) => favourite !== name)
        );
      } else {
        // If the name is not in favorites, add it
        setFavouriteNames((favourites) => [...favourites, name]);
      }
    };

  

  return (
    <header>
      <h1> BABY NAME-PICKER</h1>

      <div className="img-container">
        <img
          src="https://www.pngitem.com/pimgs/m/234-2341738_stork-png-transparent-background-transparent-background-stork-cartoon.png"
          alt="stork and baby img"
        ></img>
      </div>
      <div className="search">
        <p>Find baby names of your choice below...</p>
        <input
          value={searchedNames}
          className="search-bar"
          maxLength={20}
          type="text"
          placeholder="Pick or enter a name"
          onChange={handleSearch}
        ></input>
      </div>
      <div className="btn1and2">
        <button type="button" id="btn" onClick={resetSearch}>
          Reset
        </button>
        <button
          className="random-name-button"
          type="button"
          id="btn"
          onClick={handleRandomName}
        >
          Generate Random Name
        </button>
      </div>

      <div className="favourite-names">
        <h2>Chosen Favourite Names:</h2>
        <ul>
          {favouriteNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>

      <div className="cards-display">
        {filteredBabyNames
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((baby) => (
            <div className={`name-cards color-${baby.sex}`}>
              {baby.name}{" "}
              <button
                id="fave-btn"
                className={
                  favouriteNames.includes(baby.name) ? "favourited" : ""
                }
                onClick={() => handleAddToFavourites(baby.name)}
              >
                {favouriteNames.includes(baby.name) ? "Remove" : "Add"}
              </button>
            </div>
          ))}
      </div>
    </header>
  );
}

export default App;
