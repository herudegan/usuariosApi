import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import '../CSS/css.css'

export default function Cadastro() {
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cpf, setCpf] = useState('')

  async function Cadastro(e) {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8000/Usuario/', {
        nome: nome,
        endereco: endereco,
        telefone: telefone,
        cpf: cpf,
      })
      alert('Cadastrado')
      navigate('/lista')
    } catch (error) {
      alert(error.request.response)
    }
  }
  
  return (
    <div className='containerC'>
      <h1 className='titleC'>Cadastrar</h1>

      <form onSubmit={Cadastro}>
        <font>Nome:</font><br/>
        <input className='input' type="text" name="nome" required onChange={(e) => setNome(e.target.value)}/><br/>
        <font>Endereço:</font><br/>
        <input className='input' type="text" name="endereco" required onChange={(e) => setEndereco(e.target.value)}/><br/>
        <font>Telefone:</font><br/>
        <input className='input' type="text" name="telefone" required onChange={(e) => setTelefone(e.target.value)}/><br/>
        <font>CPF:</font><br/>
        <input className='input' type="text" name="cpf" required onChange={(e) => setCpf(e.target.value)}/><br/>
        
        <input className='button' type="submit" value="Cadastrar"/>
      </form>
    </div>
  )
}
