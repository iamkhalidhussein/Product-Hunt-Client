import {
  Calendar,
  Flag,
  MessageSquare,
  Package,
  Settings,
  ShieldAlert,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const AdminHome = () => {

    return (
      <div className="flex min-h-screen mt-14 bg-background">
      <div className="flex-1">
        <main className="p-6">
          <Tabs defaultValue="overview" className="space-y-6">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  Last 7 days
                </Button>
                <Button size="sm">Export Report</Button>
              </div>
            </div>
            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,284</div>
                    <p className="text-xs text-muted-foreground">+24 new today</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12,874</div>
                    <p className="text-xs text-muted-foreground">+342 new today</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
                    <ShieldAlert className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">23</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-rose-500">+12 urgent</span>
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Total Comments</CardTitle>
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8,642</div>
                    <p className="text-xs text-muted-foreground">+156 today</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Trending Products</CardTitle>
                    <CardDescription>Top 5 products by upvotes in the last 24 hours</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {trendingProducts.map((product) => (
                        <div key={product.id} className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center">
                            <Package className="h-6 w-6" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <p className="font-medium">{product.name}</p>
                              <div className="flex items-center gap-1">
                                <span className="text-sm font-medium">{product.upvotes}</span>
                                <span className="text-xs text-muted-foreground">upvotes</span>
                              </div>
                            </div>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <span>{product.category}</span>
                              <span className="mx-2">•</span>
                              <span>Submitted by {product.submitter}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest platform activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>{activity.user.substring(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <p className="text-sm">
                              <span className="font-medium">{activity.user}</span> {activity.action}
                            </p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                          <Badge
                            variant={
                              activity.type === "product"
                                ? "default"
                                : activity.type === "comment"
                                  ? "secondary"
                                  : "outline"
                            }
                            className="ml-auto"
                          >
                            {activity.type}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col gap-4 md:grid-cols-1 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Pending Approvals</CardTitle>
                    <CardDescription>Products waiting for review</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pendingApprovals.map((product) => (
                        <div key={product.id} className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="font-medium">{product.name}</p>
                            <p className="text-xs text-muted-foreground">Submitted {product.timeAgo}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                            <Button size="sm">Approve</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Reported Content</CardTitle>
                    <CardDescription>Content flagged by users</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {reportedContent.map((report) => (
                        <div key={report.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Badge
                              variant={
                                report.severity === "high"
                                  ? "destructive"
                                  : report.severity === "medium"
                                    ? "default"
                                    : "outline"
                              }
                            >
                              {report.severity} priority
                            </Badge>
                            <p className="text-xs text-muted-foreground">{report.timeAgo}</p>
                          </div>
                          <p className="text-sm">{report.reason}</p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="w-full">
                              Dismiss
                            </Button>
                            <Button size="sm" className="w-full">
                              Review
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Common administrative tasks</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button className="w-full justify-start" variant="outline">
                      <Package className="mr-2 h-4 w-4" />
                      Add Featured Product
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Users className="mr-2 h-4 w-4" />
                      Manage Moderators
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Send Announcement
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Flag className="mr-2 h-4 w-4" />
                      Review Flagged Content
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Settings className="mr-2 h-4 w-4" />
                      Platform Settings
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="h-[400px] flex items-center justify-center border rounded-md">
              <div className="text-center">
                <h3 className="text-lg font-medium">Analytics Dashboard</h3>
                <p className="text-muted-foreground">Detailed analytics would be displayed here</p>
              </div>
            </TabsContent>
            <TabsContent value="reports" className="h-[400px] flex items-center justify-center border rounded-md">
              <div className="text-center">
                <h3 className="text-lg font-medium">Reports Dashboard</h3>
                <p className="text-muted-foreground">Detailed reports would be displayed here</p>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
    );
};

export default AdminHome;


// Sample data
const trendingProducts = [
    { id: 1, name: "Notion AI", category: "Productivity", upvotes: 1243, submitter: "Sarah Johnson" },
    { id: 2, name: "Raycast", category: "Developer Tools", upvotes: 982, submitter: "Michael Chen" },
    { id: 3, name: "Midjourney V6", category: "AI & ML", upvotes: 876, submitter: "Alex Rodriguez" },
    { id: 4, name: "Cursor", category: "Developer Tools", upvotes: 754, submitter: "Emily Wong" },
    { id: 5, name: "Perplexity AI", category: "Search", upvotes: 621, submitter: "David Kim" },
  ]
  
  const recentActivities = [
    { user: "Sarah Johnson", action: "submitted a new product", time: "5 minutes ago", type: "product" },
    { user: "Michael Chen", action: "reported a comment as inappropriate", time: "12 minutes ago", type: "report" },
    { user: "Alex Rodriguez", action: "commented on Raycast", time: "34 minutes ago", type: "comment" },
    { user: "Emily Wong", action: "upvoted Midjourney V6", time: "1 hour ago", type: "vote" },
    { user: "David Kim", action: "submitted a new product", time: "2 hours ago", type: "product" },
  ]
  
  const pendingApprovals = [
    { id: 1, name: "CodeGPT", timeAgo: "2 hours ago" },
    { id: 2, name: "Figma AI", timeAgo: "5 hours ago" },
    { id: 3, name: "Supabase Edge Functions", timeAgo: "1 day ago" },
  ]
  
  const reportedContent = [
    { id: 1, severity: "high", reason: "Inappropriate content in comment on Raycast", timeAgo: "1 hour ago" },
    { id: 2, severity: "medium", reason: "Misleading product description for Notion AI", timeAgo: "3 hours ago" },
    { id: 3, severity: "low", reason: "Duplicate product submission", timeAgo: "5 hours ago" },
  ]