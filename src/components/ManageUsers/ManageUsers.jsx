import { FaUser } from 'react-icons/fa6';
import { MdAddModerator } from "react-icons/md";
import useManageUsers from '../../hooks/useManageUsers.js';

const ManageUsers = () => {
    const { 
        handleDeleteUser, 
        handleMakeAdmin, 
        handleMakeModerator, 
        users 
    } = useManageUsers();

    return ( 
        <div className='mt-12'>
            <h3 className='text-[#1B2530] text-[36px] font-semibold'>Manage users: {users.length}</h3>

            <div className="overflow-x-auto">
            <table className="table">
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Admin</th>
                    <th>Moderator</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user, idx) => <tr key={user._id}>
                    <th>{idx+1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        {user.role === 'admin' ? 'True' : <><button onClick={() => handleMakeAdmin(user)}>
                            <FaUser className='text-xl'></FaUser>
                        </button></>
                        }
                    </td>
                    <td>
                        { user.moderator === true ? 'True' : 
                            <button onClick={() => handleMakeModerator(user)} className='ml-3'>
                                <MdAddModerator className='text-xl'/>
                            </button>
                        }
                    </td>
                    <td>
                        <button onClick={() => handleDeleteUser(user)}>Delete</button>
                    </td>
                    </tr>)
                }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ManageUsers;