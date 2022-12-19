import { useState } from "react";
import Results from "./results";

function SearchBar({ items, onItemSelected }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
  }
  function handleResults(items) {
    setResults(items);
  }
  return (
    <div>
      {results.length > 0 && <div>{results.length} resultados</div>}
      <label htmlFor="">
        <h3>Buscador:</h3>{" "}
        <input type="text" onChange={handleChange} value={query} />
      </label>
      <Results
        items={items}
        onItemSelected={onItemSelected}
        query={query.toLowerCase()}
        onResultsCalculated={handleResults}
      />
    </div>
  );
}
export default SearchBar;
