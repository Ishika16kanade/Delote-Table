// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';
// import { updateUser } from './UserReducer'

// function Update() {

//     const { id } = useParams();
//     const users = useSelector((state) => state.users);
//     const existingUser = users.filter(f => f.id == id);
//     const { name, email } = existingUser[0];
//     const [uname, setName] = useState(name)
//     const [uemail, setEmail] = useState(email)
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleUpdate = (event) => {
//         event.preventDefault();
//         dispatch(updateUser({
//             id: id,
//             name: uname,
//             email: uemail
//         }))
//         navigate('/')
//     }


//     return (
//         <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
//             <div className='w-50 border bg-secondary text-white p-5'>
//                 <h3>Update User</h3>
//                 <form onSubmit={handleUpdate}>
//                     <div>
//                         <label htmlFor='name'>Name</label>
//                         <input type="text" name='name' className='Form-Control' placeholder='enter name' value={uname}
//                             onChange={e => setName(e.target.value)} />
//                     </div>
//                     <div>
//                         <label htmlFor='email'>Email</label>
//                         <input type="email" name='email' className='Form-Control' placeholder='enter email' value={uemail}
//                             onChange={e => setEmail(e.target.value)} />
//                     </div><br />
//                     <button className='btn btn-info'>Update</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Update



















import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser } from './UserReducer';

function Update() {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.find((user) => user.id === id);

    const [uname, setName] = useState(existingUser ? existingUser.name : '');
    const [uemail, setEmail] = useState(existingUser ? existingUser.email : '');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        if (uname && uemail) {
            dispatch(updateUser({
                id: id,
                name: uname,
                email: uemail,
            }));
            navigate('/create');
        } else {
            alert("Please fill out all fields.");
        }
    };

    // if (!existingUser) {
    //     return <div>User not found</div>;
    // }

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h3>Update User</h3>
                <form onSubmit={handleUpdate}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter name"
                            value={uname}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={uemail}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-info">Update</button>
                </form>
            </div>
        </div>
    );
}

export default Update;
