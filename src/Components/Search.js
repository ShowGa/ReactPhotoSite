import React from "react";

const Search = ({ search, setInput, input }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input
        className="input"
        type="text"
        placeholder="Things you interest"
        onChange={inputHandler}
      />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
