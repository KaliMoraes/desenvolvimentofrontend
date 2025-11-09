import React, { useEffect, useState } from 'react'

const empty = {
  titulo: '',
  temporadas: '',
  lancamento: '',
  diretor: '',
  produtora: '',
  categoria: '',
  dataAssistiu: ''
}

export default function SerieForm({ onAdd, editing, onEdit }){
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})

  useEffect(()=>{
    if(editing) setForm(editing)
    else setForm(empty)
  },[editing])

  function validate(){
    const e = {}
    if(!form.titulo) e.titulo = 'Título é obrigatório.'
    if(!form.temporadas || Number(form.temporadas) <= 0) e.temporadas = 'Número de temporadas deve ser maior que zero.'
    if(!form.lancamento) e.lancamento = 'Data de lançamento da temporada é obrigatória.'
    if(!form.diretor) e.diretor = 'Diretor é obrigatório.'
    if(!form.produtora) e.produtora = 'Produtora é obrigatória.'
    if(!form.categoria) e.categoria = 'Categoria é obrigatória.'
    if(!form.dataAssistiu) e.dataAssistiu = 'Data em que assistiu é obrigatória.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e){
    e.preventDefault()
    if(!validate()) return
    if(editing && onEdit){
      onEdit({...form, temporadas: Number(form.temporadas)})
    } else if(onAdd){
      onAdd({...form, temporadas: Number(form.temporadas)})
    }
    setForm(empty)
    setErrors({})
  }

  function handleChange(e){
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }

  return (
    <form onSubmit={handleSubmit} id="cadastro" aria-label="form-cadastro">
      <label>Título
        <input name="titulo" value={form.titulo} onChange={handleChange} type="text" aria-required="true" />
        {errors.titulo && <small style={{color:'red'}}>{errors.titulo}</small>}
      </label>
      <label>Número de Temporadas
        <input name="temporadas" value={form.temporadas} onChange={handleChange} type="number" aria-required="true" />
        {errors.temporadas && <small style={{color:'red'}}>{errors.temporadas}</small>}
      </label>
      <label>Data de Lançamento da Temporada
        <input name="lancamento" value={form.lancamento} onChange={handleChange} type="date" aria-required="true" />
        {errors.lancamento && <small style={{color:'red'}}>{errors.lancamento}</small>}
      </label>
      <label>Diretor
        <input name="diretor" value={form.diretor} onChange={handleChange} type="text" aria-required="true" />
        {errors.diretor && <small style={{color:'red'}}>{errors.diretor}</small>}
      </label>
      <label>Produtora
        <input name="produtora" value={form.produtora} onChange={handleChange} type="text" aria-required="true" />
        {errors.produtora && <small style={{color:'red'}}>{errors.produtora}</small>}
      </label>
      <label>Categoria
        <input name="categoria" value={form.categoria} onChange={handleChange} type="text" aria-required="true" />
        {errors.categoria && <small style={{color:'red'}}>{errors.categoria}</small>}
      </label>
      <label>Data em que assistiu
        <input name="dataAssistiu" value={form.dataAssistiu} onChange={handleChange} type="date" aria-required="true" />
        {errors.dataAssistiu && <small style={{color:'red'}}>{errors.dataAssistiu}</small>}
      </label>
      <div style={{marginTop:12}}>
        <button type="submit">{editing ? 'Salvar alteração' : 'Adicionar série'}</button>
        <button type="button" onClick={()=>{ setForm(empty); setErrors({}) }} style={{marginLeft:8}}>Limpar</button>
      </div>
    </form>
  )
}
