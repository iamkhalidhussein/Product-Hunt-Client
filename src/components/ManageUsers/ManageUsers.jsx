import {useQuery} from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

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
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
                }
            });
    }
    return (
        <div>
            <h3>Manage users: {users.length}</h3>

            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
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
                        <button>
                            Role
                        </button>
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