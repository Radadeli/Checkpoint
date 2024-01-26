import { useState } from "react";

export function List() {
  const [tarea, setTarea] = useState("");
  const [listaTarea, setListaTarea] = useState([]);
  const [mostrar, setMostrar] = useState(false);

  function handleInputTarea(event) {
    setTarea(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setListaTarea([...listaTarea, tarea]);
  }

  function handleMostrar() {
    setMostrar(!mostrar);
  }
  return (
    <div>
      <input onChange={handleInputTarea} value={tarea} type="text" />
      <button onClick={handleSubmit} value={listaTarea}>
        Submit
      </button>
      <button onClick={handleMostrar}>{mostrar ? "Ocultar" : "Mostrar"}</button>
      <ul>
        {mostrar &&
          listaTarea.map((tarea, index) => <li key={index}>{tarea}</li>)}
      </ul>
    </div>
  );
}
