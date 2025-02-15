import React, { useState } from 'react'
import { addUser } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'




const Create = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
     
  const users = useSelector((state) => state.users);

     const dispatch = useDispatch();
     const navigate = useNavigate()

     const handlerSubmit = (event) => {
      event.preventDefault();
      dispatch(addUser({id: users[users.length -1].id + 1, name, email}))
      navigate('/')
     }


  return (
    <div className='d-flex w-100 vh-50 justify-content-center align-item-center p-5'>
      <div className='w-50 Rounded border bg-secondary text-white border border-warning rounded p-5'>
        <h3>Add New User</h3>
        <form onSubmit={handlerSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' className='form-control' placeholder='Enter a Name'  onChange={e => setName(e.target.value)}/>
          </div>
            
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" name='email' className='form-control' placeholder='Enter a Email' onChange={e => setEmail(e.target.value)}/>
          </div><br />

           <button className='btn btn-success '>Submit</button>
        </form>
      </div>
       
      <style>
         {`h3{
            font-family: 'Times New Roman', Times, serif;  }
            `}
       </style>

    </div>
    
  )
}

export default Create