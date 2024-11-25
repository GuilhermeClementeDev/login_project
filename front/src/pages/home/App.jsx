import { useState, useEffect, useRef } from 'react'
import './style.css'
import api from '../../services/api.js'

function App() {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function createUsers(){
    await api.post('./users', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })

    getUsers()
  }

  async function getUsers(){
    const usersFromApi = await api.get('/users')
    setUsers(usersFromApi.data)
  }

  async function deleteUser(id){
    await api.delete(`/users/${id}`)
    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='container'>

      <form action="submit">
        <h1>Cadastro de usuários</h1>
        <input type="text" placeholder='Nome' name='name' ref={inputName} required/>
        <input type="number" placeholder='Idade'name='age' ref={inputAge} required/>
        <input type="email" placeholder='Email' name='email' ref={inputEmail} required/>
        <button type='button' onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map((users) => (
        <div key={users.id} className='cards'>
         <div>
            <p>Nome: <span>{users.name}</span></p>
           <p>Idade: <span>{users.age}</span></p>
           <p>Email: <span>{users.email}</span></p>
          </div>
         <button onClick={() => deleteUser(users.id)}>X</button>
        </div>
      ))}
    </div>
  )
}

export default App
