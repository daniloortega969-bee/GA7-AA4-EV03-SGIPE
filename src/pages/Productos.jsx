import React from "react"

export default function Productos() {
  const productos = [
    { id: 1, nombre: "Laptop Lenovo", stock: 12, precio: "$2.500.000" },
    { id: 2, nombre: "Mouse inalámbrico", stock: 35, precio: "$60.000" },
    { id: 3, nombre: "Teclado mecánico", stock: 20, precio: "$180.000" },
  ]

  return (
    <section className="card">
      <h2>Productos</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #666", textAlign: "left", padding: "8px" }}>ID</th>
            <th style={{ borderBottom: "1px solid #666", textAlign: "left", padding: "8px" }}>Nombre</th>
            <th style={{ borderBottom: "1px solid #666", textAlign: "left", padding: "8px" }}>Stock</th>
            <th style={{ borderBottom: "1px solid #666", textAlign: "left", padding: "8px" }}>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(p => (
            <tr key={p.id}>
              <td style={{ padding: "8px" }}>{p.id}</td>
              <td style={{ padding: "8px" }}>{p.nombre}</td>
              <td style={{ padding: "8px" }}>{p.stock}</td>
              <td style={{ padding: "8px" }}>{p.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
