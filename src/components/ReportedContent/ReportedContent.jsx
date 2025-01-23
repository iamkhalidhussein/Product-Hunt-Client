import { Suspense, lazy, useState } from "react";
import { Table, TableBody } from "@/components/ui/table"
import { ReportedTableHeader } from './components/TableHeader';
const ReportedTableRow = lazy(() => import("./components/TableRow"));
// import ReportedTableRow from "./components/TableRow";

const initialReportedContent = [
    {
      id: "1",
      content: "This is inappropriate content...",
      reportedBy: "user123",
      reportReason: "Offensive language",
      dateReported: "2023-06-15",
      status: "Pending",
    },
    {
      id: "2",
      content: "Spam content here...",
      reportedBy: "user456",
      reportReason: "Spam",
      dateReported: "2023-06-14",
      status: "Reviewed",
    },
    {
      id: "3",
      content: "Potentially harmful content...",
      reportedBy: "user789",
      reportReason: "Harmful content",
      dateReported: "2023-06-13",
      status: "Pending",
    },
];

const ReportedContent = () => {
    const [reportedContent, setReportedContent] = useState(initialReportedContent);

    return (
        <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-4">Reported Content</h1>
        <Table>
            <ReportedTableHeader/>
            <TableBody>
            {reportedContent.map((item) => (
                <Suspense key={item.id} fallback={<div>Loading...</div>}>
                    <ReportedTableRow key={item.id} item={item}/>
                </Suspense>
            ))}
            </TableBody>
        </Table>
    </div>
    );
};

export default ReportedContent;