import React, { useState, useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import SerieForm from './components/SerieForm/SerieForm'
import SerieList from './components/SerieList/SerieList'
import Home from './pages/Home'
import About from './pages/About'

const initialSeries = [
  {
    id: 1,
    titulo: 'Exemplo: Stranger Things',
    temporadas: 4,
    lancamento: '2016-07-15',
    diretor: 'Irmãos Duffer',
    produtora: 'Netflix',
    categoria: 'Ficção Científica',
    dataAssistiu: '2024-10-01'
  }
]

export default function App(){
  const [series, setSeries] = useState(initialSeries)
  const [editing, setEditing] = useState(null)
  const [query, setQuery] = useState('')

  function handleAdd(newSerie){
    const id = series.length ? Math.max(...series.map(s=>s.id)) + 1 : 1
    setSeries([...series, {...newSerie, id}])
  }

  function handleDelete(id){
    setSeries(series.filter(s => s.id !== id))
  }

  function handleEdit(updated){
    setSeries(series.map(s => s.id === updated.id ? updated : s))
    setEditing(null)
  }

  function startEdit(id){
    const s = series.find(x=>x.id===id)
    setEditing(s)
  }

  const filtered = useMemo(()=> {
    const q = query.trim().toLowerCase()
    if(!q) return series
    return series.filter(s => s.titulo.toLowerCase().includes(q) || s.categoria.toLowerCase().includes(q) || s.diretor.toLowerCase().includes(q))
  }, [series, query])

  return (
    <div className="app">
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/app" element={
            <section aria-label="app">
              <h1>Series Journal — Fase 1 (Estático)</h1>
              <div style={{margin:'12px 0'}}>
                <input placeholder="Pesquisar por título, categoria ou diretor..." value={query} onChange={e=>setQuery(e.target.value)} style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ccc'}} />
              </div>
              <section className="grid">
                <div className="card">
                  <h2>Cadastro</h2>
                  <SerieForm onAdd={handleAdd} editing={editing} onEdit={handleEdit} />
                </div>
                <div className="card">
                  <h2>Listagem</h2>
                  <SerieList series={filtered} onDelete={handleDelete} onEditClick={startEdit} />
                </div>
              </section>
            </section>
          } />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}
