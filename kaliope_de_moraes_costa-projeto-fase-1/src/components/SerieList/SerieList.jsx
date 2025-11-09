import React from 'react'

export default function SerieList({ series = [], onDelete, onEditClick }){
  if(!series.length) return <div className="empty">Nenhuma série cadastrada.</div>
  return (
    <div id="listagem" aria-live="polite">
      {series.map(s => (
        <div key={s.id} className="serie-item">
          <div>
            <strong>{s.titulo}</strong><br/>
            <small>{s.categoria} • {s.temporadas} temporadas • Lanç.: {s.lancamento} • Assistiu em: {s.dataAssistiu}</small><br/>
            <small>Diretor: {s.diretor} • Produtora: {s.produtora}</small>
          </div>
          <div className="actions">
            <button onClick={()=> onEditClick && onEditClick(s.id)}>Editar</button>
            <button onClick={()=> onDelete && onDelete(s.id)}>Excluir</button>
          </div>
        </div>
      ))}
    </div>
  )
}
