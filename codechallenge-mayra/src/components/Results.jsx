import { useState, useMemo, useEffect } from "react";
import MarkedItem from "./MarkedItem";

function Results({ items, query, onItemSelected, onResultsCalculated }) {
  const [results, setResults] = useState([]);
  const filteredItems = useMemo(() => findMatch(items, query), [items, query]);

  useEffect(() => {
    onResultsCalculated(results);
  }, [results]);

  function findMatch(items, query) {
    const res = items.filter((i) => {
      //console.log(i);
      return i.title.toLowerCase().indexOf(query) >= 0 && query.length > 0;
    });

    setResults(res);
    return res;
  }

  return (
    <div>
      {query !== ""
        ? filteredItems.map((item) => (
            <MarkedItem key={item.id} item={item} onClick={onItemSelected} />
          ))
        : ""}
    </div>
  );
}

export default Results;
