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
      {results.length1 > 0 && <div>{results.length} results</div>}
      <label htmlFor="">
        Buscador: <input type="text" onChange={handleChange} value={query} />
      </label>
      <Results
        items={items}
        onItemSelected={() => {}}
        query={query.toLowerCase()}
        onResultsCalculated={handleResults}
      />
    </div>
  );
}
export default SearchBar;
