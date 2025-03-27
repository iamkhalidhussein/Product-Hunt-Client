import { useEffect, useState } from 'react';
import { useInfiniteScroll } from './useInfiniteScroll';
import useFetchLatestResources from './useFetchLatestResources';

const useLatestResources = () => {
    const [latestResources, setLatestResources] = useState([]);
    const limit = 10;
    const [page, setPage] = useState(1);

    const { 
        data,
        refetchLatestResources, 
        isLatestResourcesLoading, 
        isError 
    } = useFetchLatestResources(page, limit);
    
    const { lastItemRef } = useInfiniteScroll(
        refetchLatestResources, 
        isLatestResourcesLoading, 
        data?.pagination?.hasNextPage, 
        setPage
    );
    
    useEffect(() => {
        if(data?.data) {
            setLatestResources((prevLatestResources) => [...prevLatestResources, ...data.data]);
        }
    }, [data]);

    return { 
        data, 
        latestResources, 
        isLatestResourcesLoading, 
        lastItemRef, 
        isError, 
        refetchLatestResources 
    };
};

export default useLatestResources;