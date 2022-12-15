import { useState } from "react";
import SearchBar from "./components/searchBar";

const people = [
  {
    id: "people-01",
    title: "Juan Meza",
  },
  {
    id: "people-02",
    title: "Amado Martínez",
  },
  {
    id: "people-03",
    title: "Luisa Araque",
  },
  {
    id: "people-04",
    title: "Marcela Martinez",
  },
  {
    id: "people-05",
    title: "Pedro Lopez",
  },
];

function App() {
  const [data, setData] = useState([...people]);
  return (
    <div>
      <h1>Codechallenge</h1>
      <SearchBar items={data} onItemSelected={() => {}} />
    </div>
  );
}

export default App;
