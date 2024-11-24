import { useState, useEffect } from 'react'
import './style.css'
import api from '../../services/api.js'

function App() {
  const [users, setUsers] = useState([])

  async function getUsers(){
    const usersFromApi = await api.get('/users')

    setUsers(usersFromApi.data)
    console.log(usersFromApi.data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='container'>

      <form action="submit">
        <h1>Cadastro de usuários</h1>
        <input type="text" placeholder='Nome' name='name'/>
        <input type="number" placeholder='Idade'name='age'/>
        <input type="email" placeholder='Email' name='email '/>
        <button type='button'>Cadastrar</button>
      </form>

      {users.map((users) => (
        <div key={users.id} className='cards'>
         <div>
            <p>Nome: <span>{users.name}</span></p>
           <p>Idade: <span>{users.age}</span></p>
           <p>Email: <span>{users.email}</span></p>
          </div>
         <button>X</button>
        </div>
      ))}
    </div>
  )
}

export default App
