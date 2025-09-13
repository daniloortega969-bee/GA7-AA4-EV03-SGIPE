import React from "react"

export default function Proveedores() {
  const proveedores = [
    { id: 1, nombre: "Tech Supplies S.A.S", telefono: "3214567890" },
    { id: 2, nombre: "Distribuidora ABC", telefono: "3109876543" },
  ]

  return (
    <section className="card">
      <h2>Proveedores</h2>
      <ul>
        {proveedores.map(p => (
          <li key={p.id}>
            {p.nombre} — {p.telefono}
          </li>
        ))}
      </ul>
    </section>
  )
}
