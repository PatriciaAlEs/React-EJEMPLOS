import React from "react"


export const ListaDeLaCompra = () => {



    return (
        <>

            <div className="container p-3 tex-center">
                <h2 className="mb-3">🛒 Mi lista de la compra</h2>
                <form>
                    <div className="d-flex gap-2 mb-3 input-group" >
                        <input
                            type="text"
                            placeholder="Producto"
                        />
                        <button type="submit" className="btn btn-success">Agregar</button>
                    </div>
                </form>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between">
                        <span> ❌ </span>
                        <span> ✏️ </span>
                    </li>
                </ul>
            </div>

        </>
    )
}
