import useSWR from "swr";
import fetcher from "@/lib/fetcher";
const useCurrentUser=()=>{
    const {data ,error,isLoading,mutate}=useSWR('/app/api/currrent',fetcher);

    return{
        data,
        error,
        isLoading,
        mutate
    }
};
export default useCurrentUser;