import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  //console.log(el);
  let { title_long, rating, id, small_cover_image } = el;
  return (
    <tr>
      <td>
        <div>
          <img src={small_cover_image} alt="coverSmall" />
        </div>
      </td>
      <td>{title_long}</td>
      <td>{rating}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
