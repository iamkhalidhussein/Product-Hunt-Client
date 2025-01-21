import {useQuery} from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure.js';
import Swal from 'sweetalert2';
import { FaUser } from 'react-icons/fa6';
import { MdAddModerator } from "react-icons/md";



const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data;
        }
    });

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then((res) => {
            // console.log(res.data);
            if(res.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    icon: "success",
                    title: `${user.name} is an Admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    const handleMakeModerator = (user) => {
        axiosSecure.patch(`/users/moderator/${user._id}`)
        .then((res) => {
            // console.log(res.data);
            if(res.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    icon: "success",
                    title: `${user.name} is an Moderator Now`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    const handleDeleteUser = (user) => {
        // console.log(user)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                .then((result) => {
                    if(result.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: `${user.name} has been deleted.`,
                            icon: "success"
                        });
                    }
                })
                }
            });
    }
    return ( 
        <div className='mt-12'>
            <h3 className='text-[#1B2530] text-[36px] font-semibold'>Manage users: {users.length}</h3>

            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
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
                            <button onClick={() => handleMakeModerator(user)} className='ml-3'><MdAddModerator className='text-xl'/></button>
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