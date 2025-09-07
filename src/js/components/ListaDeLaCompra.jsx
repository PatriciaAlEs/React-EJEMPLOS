import React, { useEffect } from "react"
import { use } from "react"
import { useState } from "react"

export const ListaDeLaCompra = () => {

    const [producto, setProducto] = useState("")
    const [lista, setLista] = useState([])

    const agregarProducto = (e) => {
        setProducto(e.target.value)
    }

    const agregarALaLista = (e) => {
        e.preventDefault()
        if (producto.trim() === "" || producto.length > 20) {
            return alert("Por favor, introduce un producto valido")
        }
        if (lista.includes(producto)) {
            return alert("Este producto ya está en la lista")
        }
        setLista([...lista, producto])
        setProducto("")
    }

    const eliminarProducto = (index) => {
        const nuevaLista = lista.filter((_, i) => i !== index)
        setLista(nuevaLista) 
    }


    const editarProducto = (index) => {
        const nuevoProducto = prompt("Introduce el nuevo nombre del producto")
        if (nuevoProducto.trim() === "" || nuevoProducto.length > 20) {
            return alert("Por favor, introduce un producto valido")
        }
        const nuevaLista = lista.map((item, i) => i === index ? nuevoProducto : item)
        setLista(nuevaLista)
    }


    useEffect(() => {
        console.log("esta es mi lista", lista);
    })
    return (
        <>

            <div className="container p-3 tex-center">
                <h2 className="mb-3">🛒 Mi lista de la compra</h2>
                <form onSubmit={agregarALaLista}>
                    <div className="d-flex gap-2 mb-3 input-group" >
                        <input
                            type="text"
                            placeholder="Producto"
                            value={producto}
                            onChange={agregarProducto}
                        />
                        <button type="submit" className="btn btn-success">Agregar</button>
                    </div>
                </form>
                <ul className="list-group">
                    {lista.map((cadaProducto, index) => {
                        return (
                            <li className="list-group-item d-flex justify-content-between" key={index}>
                                {cadaProducto}
                                <span onClick={() => eliminarProducto(index)}> ❌ </span>
                                <span onClick={() => editarProducto(index)}> ✏️ </span>
                            </li>
                        )

                    })}
                    {lista.length === 0 ? <p>No hay productos en la lista</p> : <p> Tienes que comprar un total de: {lista.length} cosas </p>}


                </ul>
            </div>

        </>
    )
}
