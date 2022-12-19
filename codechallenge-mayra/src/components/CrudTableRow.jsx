import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  //console.log(el);
  let { title, price, id } = el;
  return (
    <tr>
      {/* <td>
        <div>
          <img src={thumbnail} alt="coverSmall" />
        </div>
      </td> */}
      <td>{title}</td>
      <td>{`$${price}`}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
