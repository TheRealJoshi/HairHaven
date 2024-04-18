/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/mxtVVRfzkBH
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/app/dashboard/ui/avatar"
import { Button } from "@/app/dashboard/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/app/dashboard/ui/card"
import { Badge } from "@/app/dashboard/ui/badge"
import { Calendar } from "@/app/dashboard/ui/calendar"
import { Textarea } from "@/app/dashboard/ui/textarea"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/app/dashboard/ui/table"

export default function dashboard() {
  return (
    <div className="bg-[#f4f7fa] min-h-screen">
      <div className="flex h-full">
        <main className="flex-1 p-5">
          <div className="flex justify-between mb-5">
            <h1 className="text-xl font-semibold">Welcome Konstantin Shelby!</h1>
            {/* <Button variant="outline">Share to Facebook</Button> */}
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar className="rounded-md border border-gray-200 mb-4 dark:border-gray-800" mode="single" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Upcoming Visits</h3>
                    <ul>
                      <li className="mb-2">April 15, 2023 - John Doe </li>
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
              <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle>Query Customer Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Textarea placeholder="Add notes about the customer's preferences or concerns." />
                    </CardContent>
                </Card>
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
            
            
          </div>
        </main>
      </div>
    </div>
  )
}


function MoreVerticalIcon(props: any) {
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
