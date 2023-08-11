import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import '../CSS/css.css'
export var ide
export var nomee
export var enderecoe
export var telefonee
export var cpfe

export default function Lista() {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])

  async function getAllUsers() {
    try{
        const response = axios.get("http://localhost:8000/Usuario/")
        setUsers((await response).data)
    }
    catch(error){
        console.log('Erro: '+error)
    }
  }

  async function Deletar(id) {
    try{
        const response = await axios.delete(`http://localhost:8000/Usuario/${id}`)
        getAllUsers()
    }
    catch(error){
        console.log('Error: '+error)
    }
  }

  function Alterar(id, nome, endereco, telefone, cpf) {
    ide = id
    nomee = nome
    enderecoe = endereco
    telefonee = telefone
    cpfe = cpf
    navigate('/alterar')
  }

  useEffect(() => {
    getAllUsers()
  }, [])
  
  return (
    <>
      {users.map((x) => {
        return(
            <>
                <div className='container' key={x.id}>
                    <div>
                        <h3 className='nome'>{x.nome}</h3><br/>
                        <table>
                          <tr className='tr'>
                            <td style={{paddingLeft: '3vw'}}>
                              Endereço:
                            </td>
                            <td>
                              {x.endereco}
                            </td>
                          </tr>
                          <tr className='tr'>
                            <td style={{paddingLeft: '3vw'}}>
                              Telefone:
                            </td>
                            <td>
                              {x.telefone}
                            </td>
                          </tr>
                          <tr className='tr'>
                            <td style={{paddingLeft: '3vw'}}>
                              CPF:
                            </td>
                            <td>
                              {x.cpf}
                            </td>
                          </tr>
                        </table>
                        <button style={{marginTop: '6vh'}} className='button' onClick={() => {Alterar(x.id, x.nome, x.endereco, x.telefone, x.cpf)}}>Alterar</button>
                        <button style={{marginLeft: '1vw'}} className='button' onClick={() => { 
                          if(window.confirm('Tem certeza de que deseja excluir os dados desse funcionário?')){
                            Deletar(x.id)
                          }}}>Deletar</button>
                    </div>
                </div>
            </>
        )
      })}
    </>
  )
}
