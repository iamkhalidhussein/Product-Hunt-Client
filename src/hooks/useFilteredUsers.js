import useManageUsers from './useManageUsers';

const useFilteredUsers = (searchQuery) => {
    const { users } = useManageUsers();

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return { filteredUsers };
};

export default useFilteredUsers;