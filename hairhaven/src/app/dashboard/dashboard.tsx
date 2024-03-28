/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/mxtVVRfzkBH
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function dashboard() {
  return (
    <div className="bg-[#f4f7fa] min-h-screen">
      <div className="flex h-full">
        <aside className="w-64 bg-white p-5">
          <div className="flex items-center space-x-2 mb-5">
            <Avatar>
              <AvatarImage alt="Barber" src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>BS</AvatarFallback>
            </Avatar>
            <span className="font-semibold">Barber Shop</span>
          </div>
          <nav className="flex flex-col space-y-1">
            <Button className="justify-start rounded-md bg-purple-600 text-white">Dashboard</Button>
            <Button className="justify-start rounded-md">Profile</Button>
            <Button className="justify-start rounded-md">Customers</Button>
            <Button className="justify-start rounded-md">Calendar</Button>
            <Button className="justify-start rounded-md">Settings</Button>
          </nav>
        </aside>
        <main className="flex-1 p-5">
          <div className="flex justify-between mb-5">
            <h1 className="text-xl font-semibold">Konstantin Shelby</h1>
            <Button variant="outline">Share to Facebook</Button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar>
                    <AvatarImage alt="Customer" src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>CS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold">Konstantin Shelby</div>
                    <Badge variant="secondary">verified</Badge>
                  </div>
                  <MoreVerticalIcon className="text-gray-400" />
                </div>
                <div className="text-sm">
                  <p>
                    Account verification: <span className="font-medium">verified</span>
                  </p>
                  <p>
                    Referral program: <span className="font-medium">active</span>
                  </p>
                  <p>
                    Account ID: <span className="font-medium">73579</span>
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Scheduled Visits</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar className="rounded-md border border-gray-200 mb-4 dark:border-gray-800" mode="single" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Upcoming Visits</h3>
                    <ul>
                      <li className="mb-2">April 15, 2023 - Style Update</li>
                      <li className="mb-2">May 20, 2023 - Regular Maintenance</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Past Visits</h3>
                    <ul>
                      <li className="mb-2">March 10, 2023 - Complete Makeover</li>
                      <li className="mb-2">January 5, 2023 - New Year Refresh</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Hair Visualizations</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  alt="Haircut"
                  className="mb-4"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <p className="text-sm">Recommended style: Modern Pompadour</p>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Style Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Prefers shorter sides with more volume on top. Likes to experiment with new trends.
                </p>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Comments</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea placeholder="Add notes about the customer's preferences or concerns." />
              </CardContent>
            </Card>
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Customer Details</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Comments</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>April 15, 2023</TableCell>
                      <TableCell>Style Update</TableCell>
                      <TableCell>Looking for a fresh look for spring.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>March 10, 2023</TableCell>
                      <TableCell>Complete Makeover</TableCell>
                      <TableCell>Wanted a bold change, very satisfied.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}


function MoreVerticalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  )
}