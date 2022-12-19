import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
import SearchBar from "./SearchBar";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);

  let url = `https://dummyjson.com/products?limit=10&skip=${counter}`;
  let api = helpHttp();

  const sumar = () => {
    setCounter(counter + 1);
  };
  const restar = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    setLoading(true);

    api.get(url).then((res) => {
      //console.log(res);
      //const tempList = res.data.movies;
      //console.log(tempList);
      if (!res.err) {
        setDb(res.products);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }

      setLoading(false);
    });
  }, [url]);

  const createData = (data) => {
    //console.log(data);
    //data.id = Date.now();
    let { title, price } = data;
    let options = {
      body: {
        id: Date.now(),
        title,
        price,
      },
      headers: { "content-type": "application/json" },
    };

    api.post("https://dummyjson.com/products/add", options).then((res) => {
      // res.id = Date.now();
      if (!res.err) {
        setDb([...db, res]);
      } else {
        console.log("ocurio un eror");
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let { title, price } = data;
    let endpoint = `https://dummyjson.com/products/${data.id}`;
    //console.log(data.id);
    let options = {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title,
        price,
      }),
    };

    fetch(endpoint, options).then((res) => {
      // console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estas seguro de eliminar el registro con id ${id}?`
    );

    let endpoint = `https://dummyjson.com/products/${id}`;

    let options = {
      headers: { "content-type": "application/json" },
    };

    if (isDelete) {
      api.del(endpoint, options).then((res) => {
        // console.log(res);
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else return;
  };

  return (
    <>
      {db && <SearchBar items={db} />}
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />

        {loading && <Loader />}
        {error && (
          <Message
            msg={`Lo siento, ocurrió un error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}

        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
      <div>
        {counter >= 1 && <button onClick={restar}>Atras</button>}
        <button onClick={sumar}>Adelante</button>
      </div>
    </>
  );
};

export default CrudApi;
