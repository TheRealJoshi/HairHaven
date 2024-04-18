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

export function dashboard() {
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