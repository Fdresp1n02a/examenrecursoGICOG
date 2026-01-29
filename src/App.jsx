import {useState } from "react";
import datos from "./data/todo/todo.json";
import CrearActividad from "./CrearActividad/CrearActividad";
import DetalleActividad from "./DetalleActividad/DetalleActividad";
import "./App.css";

function App() {
    const [actividades, SetActividades] = useState(datos);

    const AgregarActividad = (titulo) => {
      const nueva = {
        id: Date.now(),
        titulo,
        completado: false
      };
      SetActividades([...actividades, nueva]);

      };
    const cambiarEstado = (id) =>
    const actualizadas = actividades.map((act) =>
        act.id === id
          ? { ...act, completado: !act.completado }
          : act
);
SetActividades(actualizadas);
};
return (
    <div className="app">
        <hi>To-Do List</hi>
        <CrearActividad AgregarActividad={AgregarActividad} />
        <DetalleActividad
        actividades={actividades}
        cambiarEstado={cambiarEstado}
        />
        </div>
    );


export default App;
    

