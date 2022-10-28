import React from "react";
import ListaTareas from "./listaTareas.jsx";


//create your first component
const Home = () => {
	return (
		<div className="aplicacionTareas">
			<div className="tareasListaPrincipal">
			      <h1 className="tituloPrincipal">Lista de tareas</h1>
				  <ListaTareas />
			</div>
		</div>
	);
};

export default Home;
