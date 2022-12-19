import { useState, useMemo, useEffect } from "react";

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
        ? filteredItems.map((item) => <div key={item.id}>{item.title} </div>)
        : ""}
    </div>
  );
}

export default Results;
