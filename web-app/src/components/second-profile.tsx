/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/KvgjY3MYmjV
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Button } from "@/components/ui/button"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"


import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function secondProfile() {
  return (
        <main className="flex-1 p-6 text-white">
          <header className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-black">Konstantin Shelby</h1>
            {/* <Button className="text-[#ffd700] border-[#ffd700]" variant="outline">
              Sign Out
            </Button> */}
          </header>
          <section className="mt-6 flex gap-6">
            <Card className="flex flex-col w-1/3 bg-[#1a1a1a] p-4 rounded-md">
              <h2 className="text-xl font-semibold mb-4 text-white">Details</h2>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage alt="Profile picture" src="/placeholder.svg?height=100&width=100" />
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium text-white">Konstantin Shelby</span>
                    <Badge className="bg-[#ffd700]" variant="secondary">
                      verified
                    </Badge>
                  </div>
                </div>
                <div className="text-sm space-y-1">
                  <p className="text-white">Account verification: verified</p>
                  <p className="text-white">Referral program: active</p>
                  <p className="text-white">Account ID: 73579</p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-3 text-white">Recent Hair Visualizations</h3>
                <img
                  alt="Haircut"
                  className="mb-4"
                  height="200"
                  src="/rec1.png" // Update the src attribute with the correct file path or URL
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <p className="text-sm">Recommended style: Layered Taper Fade, Blended</p>
                <p className="text-sm text-black">. </p>
                <img
                  alt="Haircut"
                  className="mb-4"
                  height="200"
                  src="/rec2.png" // Update the src attribute with the correct file path or URL
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                
                <p className="text-sm">Recommended style: Modern Textured Crop with Fade, Longer Curls</p>
              <CardHeader>
                <CardTitle>Customer Hair Inputs</CardTitle>
                <p> </p>
                <p className="text-sm">
                  Indentified Hair Type: Wavy
                </p>
                <img
                  alt="Haircut"
                  className="mb-4"
                  height="200"
                  src="/back.png" // Update the src attribute with the correct file path or URL
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                {/* <p className="text-sm">Recommended style: Layered Taper Fade</p> */}
                <img
                  alt="Haircut"
                  className="mb-4"
                  height="200"
                  src="/sidep.png" // Update the src attribute with the correct file path or URL
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                {/* <p className="text-sm">Recommended style: Modern Pompadour</p> */}
              </CardHeader>
              </div>
            </Card>
            <div className="flex flex-col w-2/3 space-y-6">
              <Card className="bg-[#1a1a1a] p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-white">Scheduled Visits</h2>
                <Calendar className="border rounded-md border-gray-700" />
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Upcoming Visits</h3>
                    <ul className="text-sm space-y-1">
                      <li>April 15, 2023 - Style Update</li>
                      <li>May 20, 2023 - Regular Maintenance</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Past Visits</h3>
                    <ul className="text-sm space-y-1">
                      <li>March 10, 2023 - Complete Makeover</li>
                      <li>January 5, 2023 - New Year Refresh</li>
                    </ul>
                  </div>
                </div>
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
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Comments</CardTitle>
                <p> </p>
                <p className="text-sm">
                  Prefers shorter sides with more volume on top. Likes to experiment with new trends.
                </p>
              </CardHeader>
              <CardContent>
                <Textarea placeholder="Add notes about the customer's preferences or concerns." />
                <div className="mt-4 flex justify-end" >
                  <Button className="bg-[#ffd700] text-black">Save Comments</Button>
                </div>
              </CardContent>
            </Card>
              <div className="bg-[#1a1a1a] p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-4 text-white">Need help analyzing user preferences?</h2>
                <p className="text-sm mb-4 text-white">Identified Hair Type: Wavy</p>
                <Textarea
                  className="bg-[#333333] border border-gray-200 border-gray-700 rounded-md text-sm p-2 dark:border-gray-800"
                  placeholder="Enter text for hair recommendations"
                />
                <div className="mt-4 flex justify-end" >
                  <Button className="bg-[#ffd700] text-black">Get Recommendations</Button>
                </div>
              </div>
            </div>
          </section>
        </main>
  )
}

function ScissorsIcon(props: any) {
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
      <circle cx="6" cy="6" r="3" />
      <path d="M8.12 8.12 12 12" />
      <path d="M20 4 8.12 15.88" />
      <circle cx="6" cy="18" r="3" />
      <path d="M14.8 14.8 20 20" />
    </svg>
  )
}