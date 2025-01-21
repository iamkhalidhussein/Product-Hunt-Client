import { Skeleton } from '@/components/ui/skeleton';

const DefaultLazySkeleton = () => {
    return (
        <div>
            <div className="animate-pulse space-y-4">
            <Skeleton className="h-10 bg-gray-300 rounded w-3/4"/>

            <div className="space-y-3">
                <Skeleton className="h-6 bg-gray-300 rounded"/>
                <Skeleton className="h-6 bg-gray-300 rounded w-5/6"/>
                <Skeleton className="h-6 bg-gray-300 rounded w-4/6"/>
                <Skeleton className="h-6 bg-gray-300 rounded w-3/6"/>
            </div>

            <Skeleton className="h-20 bg-gray-300 rounded"/>
            </div>
        </div>
    );
};

export default DefaultLazySkeleton;