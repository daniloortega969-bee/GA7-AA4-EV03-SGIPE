import React from "react"
import { NavLink, Routes, Route } from "react-router-dom"
import logo from "./assets/logo.svg"

import Home from "./pages/Home.jsx"
import Productos from "./pages/Productos.jsx"
import Clientes from "./pages/Clientes.jsx"
import Proveedores from "./pages/Proveedores.jsx"
import Reportes from "./pages/Reportes.jsx"

export default function App() {
  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} alt="Logo SGIPE" className="app__logo" />
        <h1>SGIPE</h1>
        <p>Sistema de Gestión de Inventario para Pequeñas Empresas</p>
      </header>

      <nav className="app__nav">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/productos">Productos</NavLink>
        <NavLink to="/clientes">Clientes</NavLink>
        <NavLink to="/proveedores">Proveedores</NavLink>
        <NavLink to="/reportes">Reportes</NavLink>
      </nav>

      <main className="app__main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/proveedores" element={<Proveedores />} />
          <Route path="/reportes" element={<Reportes />} />
        </Routes>
      </main>

      <footer className="app__footer">
        <small>© {new Date().getFullYear()} SGIPE</small>
      </footer>
    </div>
  )
}
