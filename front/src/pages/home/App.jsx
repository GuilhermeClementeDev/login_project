import { useState, useSyncExternalStore } from 'react'
import './style.css'

function App() {
  const users = [
    {
      id: '1',
      name: 'rodolfo',
      age: 33,
      email: 'teste@gmail.com'
    }
  ]

  return (
    <div className='container'>

      <form action="submit">
        <h1>Cadastro de usuários</h1>
        <input type="text" placeholder='Nome' name='name'/>
        <input type="number" placeholder='Idade'name='age'/>
        <input type="email" placeholder='Email' name='email '/>
        <button type='button'>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className='cards'>
         <div>
            <p>Nome: <span>{user.name}/</span></p>
           <p>Idade: <span>{user.age}</span></p>
           <p>Email: <span>{user.email}</span></p>
          </div>
         <button>X</button>
        </div>
      ))}
    </div>
  )
}

export default App
