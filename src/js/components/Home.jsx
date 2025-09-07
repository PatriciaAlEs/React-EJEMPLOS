import React from "react";
import { ListaDeLaCompra } from "./ListaDeLaCompra.jsx";



//create your first component
const Home = () => {
	return (
		<div className="text-center">
			{/* <h2>Aquí irá nuestro componente</h2> */}
			<ListaDeLaCompra />
		</div>
	);
};

export default Home;