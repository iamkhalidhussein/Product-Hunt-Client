import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2 } from "lucide-react";
import PropTypes from 'prop-types';
import useAddUserDialog from "../../hooks/useAddUserDialog";

export const UserEditDialog = ({ user, onSave, onCancel, loading }) => {
    const { 
      handleChange, 
      handleCheckboxChange, 
      handleSubmit,
      editedUser 
    } = useAddUserDialog(user, onSave);
    
    return (
        <Dialog open={true} onOpenChange={onCancel}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add User</DialogTitle>
          </DialogHeader>
          <DialogForm 
            editedUser={editedUser}
            handleChange={handleChange}
            handleCheckboxChange={handleCheckboxChange}
            handleSubmit={handleSubmit}
            loading={loading}
            onCancel={onCancel}
          />
        </DialogContent>
      </Dialog>
    );
};

const DialogForm = ({
    handleSubmit, 
    handleChange, 
    editedUser, 
    handleCheckboxChange,
    onCancel, 
    loading
  }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 py-4">
        <FormInput 
          label="Name" 
          editedUser={editedUser} 
          handleChange={handleChange}
          inputdata="name"
        />
        <FormInput 
          label="Email" 
          editedUser={editedUser} 
          handleChange={handleChange}
          inputdata="email"
        />
        <FormInputRoles
          editedUser={editedUser}
          handleCheckboxChange={handleCheckboxChange}
        />
      </div>
      <DialogFooter>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={loading}>
          {loading 
            ? <Loader2 className="animate-spin"/> 
            : 'Save changes'}
        </Button>
      </DialogFooter>
    </form>
  )
};

const FormInput = ({ editedUser, handleChange, label, inputdata }) => {
  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <Label className="text-right">
        {label}
      </Label>
      <Input
        id={inputdata}
        name={inputdata}
        type={inputdata}
        value={editedUser.inputdata}
        onChange={handleChange}
        className="col-span-3"
      />
    </div>
  )
};

const FormInputRoles = ({ editedUser, handleCheckboxChange }) => {
  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <Label className="text-right">Roles</Label>
      <div className="col-span-3 space-y-2">
        <InputCheckbox
          id="isAdmin"
          label="Admin"
          editedUser={editedUser}
          handleCheckboxChange={handleCheckboxChange}
        />
        <InputCheckbox
          id="isModerator"
          label="Moderator"
          editedUser={editedUser}
          handleCheckboxChange={handleCheckboxChange}
        />
      </div>
    </div>
  )
};

FormInputRoles.propTypes = {
  editedUser: PropTypes.object, 
  handleCheckboxChange: PropTypes.func
};

const InputCheckbox = ({ editedUser, handleCheckboxChange, id, label }) => {
  return(
    <div className="flex items-center space-x-2">
      <Checkbox
        id={id}
        checked={editedUser.id}
        onCheckedChange={(checked) => handleCheckboxChange(id, checked)}
      />
      <Label htmlFor={id}>{label}</Label>
    </div>
  )
}

InputCheckbox.propTypes = {
  editedUser: PropTypes.object, 
  handleCheckboxChange: PropTypes.func, 
  id: PropTypes.string, 
  label: PropTypes.string
};

UserEditDialog.propTypes = {
  user: PropTypes.string,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  loading: PropTypes.bool
};

FormInput.propTypes = {
  editedUser: PropTypes.object,
  handleChange: PropTypes.func,
  label: PropTypes.string,
  inputdata: PropTypes.string
};

DialogForm.propTypes = {
  handleSubmit: PropTypes.func, 
  handleChange: PropTypes.func, 
  editedUser: PropTypes.object, 
  handleCheckboxChange: PropTypes.func,
  onCancel: PropTypes.func, 
  loading: PropTypes.bool
};