import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
const useBillboards=()=>{
const { data, error, isLoading }=useSWR('/app/api/random',fetcher,{
    revalidateIfStale:false,
    revalidateOnFocus:false,
    revalidateOnReconnect:false,
});
return{
    data,
    error,
    isLoading
}
}
export default useBillboards;