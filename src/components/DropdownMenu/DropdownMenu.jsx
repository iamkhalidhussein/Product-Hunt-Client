import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const DropdownMenuNavbar = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut();
        navigate('/');
    };

    return (
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
            <AvatarImage src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="@shadcn" />
            <AvatarFallback>User</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Resource-fyi</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link to="/dashboard"><DropdownMenuItem>Dashboard</DropdownMenuItem></Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    );
};

export default DropdownMenuNavbar;