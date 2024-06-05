import {useQuery} from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();

    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });
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
                    <th>Job</th>
                    <th>Favorite Color</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user, idx) => <tr key={user._id}>
                    <th>{idx+1}</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                    </tr>)
                }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ManageUsers;