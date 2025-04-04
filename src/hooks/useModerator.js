import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useModerator = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: isModerator} = useQuery({
        queryKey: [user?.email, 'isModerator'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/moderator/${user?.email || user.providerData[0]?.email}`)
            return res.data?.moderator;
        }
    });
    return [isModerator]
};

export default useModerator;