import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const ProductCardSkeleton = () => {
    return (
        <div className="flex justify-center">
        <Card className="w-[400px] rounded-lg shadow-sm">
            
            <CardHeader className="p-5">
            <Skeleton className="w-full h-56 rounded-md" />
            </CardHeader>

            <CardContent className="px-6">
            <div className="flex justify-between items-center">
                <Skeleton className="h-6 w-3/4 rounded-md" />
                <Skeleton className="h-6 w-6 rounded-md" />
            </div>
            </CardContent>

            <CardContent className="px-7">
            <div className="space-y-2">
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-5/6 rounded-md" />
                <Skeleton className="h-4 w-4/5 rounded-md" />
                <Skeleton className="h-4 w-3/4 rounded-md" />
            </div>
            </CardContent>

            <hr className="border-t border-gray-200" />

            <CardFooter className="flex justify-between py-5 px-5">
            <Skeleton className="h-10 w-32 rounded-md" />
            <Skeleton className="h-10 w-24 rounded-md" />
            </CardFooter>
        </Card>
        </div>
    );
};