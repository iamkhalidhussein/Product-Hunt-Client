import { useEffect, useRef } from "react";

export const useInfiniteScroll = (refetchData, isLoading, hasNextPage, setPage) => {
    const lastItemRef = useRef(null);

    console.log(lastItemRef);
    console.log('calling observer')
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if(entries[0].isIntersecting && !isLoading && hasNextPage) {
                    setPage((prevPage) => prevPage + 1);
                }
            },
            { threshold: 1.0 }
        );

        const currentRef = lastItemRef.current;

        if(currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if(currentRef) {
                observer.unobserve(currentRef);
            }
        }
    }, [refetchData, isLoading, hasNextPage, setPage]);
    
    return { lastItemRef };
}; 