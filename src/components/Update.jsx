import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { UpdateUser } from './UserReducer';




const Update = () => {
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id);
    const {name, email} = existingUser[0];
    const [uname, setName] = useState(name)
    const [uemail, setEmail] = useState(email)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(UpdateUser({
            id: id,
            name: uname,
            email: uemail
        }))
        navigate('/')
    }
     

  return (
    <div className='d-flex w-100 vh-50 justify-content-center align-item-center p-5'>
    <div className='w-50 Rounded border bg-secondary text-white border border-warning rounded p-5'>
      <h3>Update User</h3>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name='name' className='form-control' placeholder='Enter a Name' value={uname} onChange={e => setName(e.target.value)}/>
        </div>
          
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" name='email' className='form-control' placeholder='Enter a Email' value={uemail} onChange={e => setEmail(e.target.value)}/>
        </div><br/>

         <button className='btn btn-success '>Update</button>
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

export default Update