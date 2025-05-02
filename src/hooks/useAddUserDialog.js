import { useState } from "react";

const useAddUserDialog = (user, onSave) => {
    const [editedUser, setEditedUser] = useState({ ...user });
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setEditedUser({ ...editedUser, [name]: value })
    };
    
    const handleCheckboxChange = (field, checked) => {
        setEditedUser({ ...editedUser, [field]: checked })
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
          ...editedUser,
          isAdmin: String(editedUser.isAdmin),
          isModerator: String(editedUser.isModerator)
        }
        onSave(newUser);
    };

    return { 
        handleChange, 
        handleCheckboxChange, 
        handleSubmit, 
        editedUser 
    };
};

export default useAddUserDialog;