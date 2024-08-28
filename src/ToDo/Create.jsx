import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "./UserReducer"
import { useNavigate } from 'react-router-dom';
function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }))
        navigate('/Todo')
    }
    return (
        <div className='d-flex  justify-content-center align-items-center m-4'>
            <div className=' border   p-5'>
                <h4 className="text-info">Add New User</h4>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name' className="p-1">Name</label>
                        <input type="text" name='Enter Name' className='Form-Control m-2 p-1' placeholder='enter name' onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='email' className="p-1">Email</label>
                        <input type="email" name=' Enter email' className='Form-Control m-2 p-1' placeholder='enter email' onChange={e => setEmail(e.target.value)} />
                    </div><br />
                    <button className='btn btn-info'> Submit</button>
                </form>
            </div>


        </div>
    )
}

export default Create