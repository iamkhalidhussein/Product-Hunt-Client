import useManageUsers from '../../hooks/useManageUsers.js';
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Search, Trash2, Shield, ShieldAlert, UserX, UserCheck } from "lucide-react";
import { UserEditDialog } from "./UserEditDialog"
import useAddNewUser from '../../hooks/useAddNewUser.js';
import useFilteredUsers from '../../hooks/useFilteredUsers.js';
import PropTypes from 'prop-types';

const ManageUsers = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [editingUser, setEditingUser] = useState(false);
    const [newUserAdding, setNewUserAdding] = useState(false);
    const { 
        handleDeleteUser, 
        handleToggleAdmin,
        handleToggleModerator, 
        refetch 
    } = useManageUsers();

    const { filteredUsers } = useFilteredUsers(searchQuery);
    const handleSaveUser = useAddNewUser(setNewUserAdding, refetch); 
    
    const handleEditUser = () => {
        setEditingUser(true);
    }
    

    return ( 
        <div className='mt-12'>
            <UsersHeader
                handleEditUser={handleEditUser}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            <div className="rounded-md border">
                <Table>
                <UserTableHeader/>
                <TableBody>
                    {filteredUsers.length === 0 ? (
                        <UserNotFound/>
                    ) : (
                    filteredUsers.map((user) => (
                        <TableRow key={user._id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCellAdmin user={user}/>
                        <TableCellModerator user={user}/>
                        <TableCell className="text-right">
                            <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                    <span className="sr-only">Open menu</span>
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <ActionDropdownContent
                                handleDeleteUser={handleDeleteUser}
                                handleToggleAdmin={handleToggleAdmin}
                                handleToggleModerator={handleToggleModerator}
                                user={user}
                            />
                            </DropdownMenu>
                        </TableCell>
                        </TableRow>
                    ))
                    )}
                </TableBody>
                </Table>
            </div>

            {editingUser && (
                <UserEditDialog 
                    user={editingUser} 
                    loading={newUserAdding} 
                    onSave={handleSaveUser} 
                    onCancel={() => setEditingUser(null)} 
                />
            )}

        </div>
    );
};

export default ManageUsers;

const UsersHeader = ({ searchQuery, setSearchQuery, handleEditUser }) => {
    return(
        <div className="flex items-center justify-between mb-5">
            <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
                type="search"
                placeholder="Search users..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            </div>
            <Button onClick={() => handleEditUser()}>Add User</Button>
        </div>
    )
};

const UserNotFound = () => {
    return (
        <TableRow>
            <TableCell colSpan={5} className="text-center h-24 text-muted-foreground">
            No users found.
            </TableCell>
        </TableRow>
    )
};

const UserTableHeader = () => {
    return (
        <TableHeader>
            <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Admin</TableHead>
            <TableHead>Moderator</TableHead>
            <TableHead className="text-right">Actions</TableHead>
            </TableRow>
        </TableHeader>
    )
};

const ActionDropdownContent = ({ 
    handleToggleAdmin, 
    user, 
    handleToggleModerator, 
    handleDeleteUser 
}) => {
    return (
        <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleToggleAdmin(user)}>
            {user.isAdmin === 'true' ? (
                <>
                <ShieldAlert className="mr-2 h-4 w-4" />
                Remove admin
                </>
            ) : (
                <>
                <Shield className="mr-2 h-4 w-4" />
                Make admin
                </>
            )}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleToggleModerator(user)}>
            {user.isModerator === 'true' ? (
                <>
                <UserX className="mr-2 h-4 w-4" />
                Remove moderator
                </>
            ) : (
                <>
                <UserCheck className="mr-2 h-4 w-4" />
                Make moderator
                </>
            )}
            </DropdownMenuItem>
            <DropdownMenuSeparator/>
            <DropdownMenuItem
                className="text-red-600 focus:text-red-600"
                onClick={() => handleDeleteUser(user)}
            >
            <Trash2 className="mr-2 h-4 w-4" />
                Delete user
            </DropdownMenuItem>
        </DropdownMenuContent>
    )
};

const TableCellModerator = ({ user }) => {
    return (
        <TableCell>
            {user.isModerator === 'true' ? (
            <Badge variant="default" className="bg-blue-500 hover:bg-blue-600">
                Moderator
            </Badge>
            ) : (
            <Badge variant="outline">No</Badge>
            )}
        </TableCell>
    )
};

const TableCellAdmin = ({ user }) => {
    return (
        <TableCell>
            {user.isAdmin === 'true' ? (
            <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                Admin
            </Badge>
            ) : (
            <Badge variant="outline">No</Badge>
            )}
        </TableCell>
    )
};

TableCellAdmin.propTypes = {
    user: PropTypes.object,
};

TableCellModerator.propTypes = {
    user: PropTypes.object,
};

ActionDropdownContent.propTypes = {
    handleToggleAdmin: PropTypes.func, 
    user: PropTypes.object, 
    handleToggleModerator: PropTypes.func, 
    handleDeleteUser: PropTypes.func
};

UsersHeader.propTypes = {
    searchQuery: PropTypes.string, 
    setSearchQuery: PropTypes.func, 
    handleEditUser: PropTypes.func
};