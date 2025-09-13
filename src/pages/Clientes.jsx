import React from "react"

export default function Clientes() {
  const clientes = [
    { id: 1, nombre: "Juan Pérez", email: "juanperez@mail.com" },
    { id: 2, nombre: "Ana Gómez", email: "anagomez@mail.com" },
  ]

  return (
    <section className="card">
      <h2>Clientes</h2>
      <ul>
        {clientes.map(c => (
          <li key={c.id}>
            {c.nombre} — {c.email}
          </li>
        ))}
      </ul>
    </section>
  )
}

