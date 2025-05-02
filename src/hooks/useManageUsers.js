import Swal from 'sweetalert2';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useManageUsers = () => {
    const axiosSecure = useAxiosSecure();

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleToggleAdmin = (user) => {
        axiosSecure.patch(`/users/admin/role/${user?.email}`)
        .then(async (res) => {
            // console.log(res.data);
            if(res.data.success) {
                await refetch();
                Swal.fire({
                    icon: "success",
                    title: `${user.name} is an Admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    const handleToggleModerator = (user) => {
        axiosSecure.patch(`/users/moderator/role/${user?.email}`)
        .then(async (res) => {
            console.log(res);
            if(res.data.success) {
                await refetch();
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

    return { 
        handleToggleAdmin, 
        handleDeleteUser, 
        handleToggleModerator, 
        users, 
        refetch
    };
};

export default useManageUsers;