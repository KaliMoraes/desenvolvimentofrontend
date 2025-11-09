import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(){
  return (
    <nav className="nav" role="navigation" aria-label="principal">
      <strong>Series Journal</strong>
      <div style={{flex:1}} />
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/app">Cadastro / Listagem</Link>
    </nav>
  )
}
