/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/ZJLQaKHrdW3
 */
'use client'
import { AvatarImage, AvatarFallback, Avatar } from "@/app/dashboard/ui/avatar"
import { Button } from "@/app/dashboard/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/app/dashboard/ui/card"
import { Badge } from "@/app/dashboard/ui/badge"
import { signOut, useSession } from "next-auth/react";

export default function events() {
  return (
    <div key="1" className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-start">
        <div className="flex">
          <Avatar>
            <AvatarImage alt="Schedule.cc Logo" src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <h1 className="text-xl font-semibold text-gray-700">DDCON</h1>
            <p className="text-sm text-gray-500">AI powered simple and efficient event booking platform</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <SignalIcon className="text-gray-400" />
          <SettingsIcon className="text-gray-400" />
          <UserIcon className="text-gray-400" />
        </div>
      </div>
      <div className="flex mt-6">
        <div className="w-1/4 pr-4">
          <div className="flex items-center mb-6">
            <LayoutDashboardIcon className="text-indigo-600" />
            <span className="ml-2 text-sm font-medium text-indigo-600">Dashboard</span>
          </div>
          <div className="flex items-center mb-6">
            <CalendarIcon className="text-gray-400" />
            <span className="ml-2 text-sm font-medium text-gray-600">Appointments</span>
          </div>
          <div className="flex items-center mb-6">
            <CalendarIcon className="text-gray-400" />
            <span className="ml-2 text-sm font-medium text-gray-600">Events</span>
          </div>
          <div className="flex items-center mb-6">
            <ContactIcon className="text-gray-400" />
            <span className="ml-2 text-sm font-medium text-gray-600">Contacts</span>
          </div>
          <div className="flex items-center mb-6" onClick = {() => signOut()}>
            <LinkIcon className="text-gray-400" />
            <span className="ml-2 text-sm font-medium text-gray-600">Connect</span>
          </div>
          <div className="mt-10">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Productivity</h2>
            <div className="flex items-center mt-2 mb-4">
              <FileTypeIcon className="text-gray-400" />
              <span className="ml-2 text-sm font-medium text-gray-600">Extensions & Plugins</span>
            </div>
            <div className="flex items-center mb-4">
              <MenuIcon className="text-gray-400" />
              <span className="ml-2 text-sm font-medium text-gray-600">Manage Apps</span>
            </div>
            <div className="flex items-center mb-4">
              <ComputerIcon className="text-gray-400" />
              <span className="ml-2 text-sm font-medium text-gray-600">Desktop App</span>
            </div>
            <div className="flex items-center">
              <HeartIcon className="text-gray-400" />
              <span className="ml-2 text-sm font-medium text-gray-600">Spread the Love</span>
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <div className="flex justify-between">
            <div className="bg-indigo-100 p-4 rounded-lg w-1/2 mr-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Reschedule Event</h3>
              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-1">
                  <div className="text-xs text-gray-500 mb-1">16</div>
                  <div className="text-xs text-gray-500 mb-1">Mon, Mar 2022</div>
                  <div className="text-xs text-gray-500 mb-1">09:00 AM</div>
                  <div className="text-xs text-gray-500 mb-1">09:30 AM</div>
                  <div className="text-xs text-gray-500">10:00 AM</div>
                </div>
                <div className="col-span-1">
                  <div className="text-xs text-gray-500 mb-1">17</div>
                  <div className="text-xs text-gray-500 mb-1">Tue, Mar 2022</div>
                  <div className="text-xs text-gray-500 mb-1">09:00 AM</div>
                  <div className="text-xs text-gray-500 mb-1">09:30 AM</div>
                  <div className="text-xs text-gray-500">10:00 AM</div>
                </div>
                <div className="col-span-1">
                  <div className="text-xs text-gray-500 mb-1">18</div>
                  <div className="text-xs text-gray-500 mb-1">Wed, Mar 2022</div>
                  <div className="text-xs text-gray-500 mb-1">09:00 AM</div>
                  <div className="text-xs text-gray-500 mb-1">09:30 AM</div>
                  <div className="text-xs text-gray-500">10:00 AM</div>
                </div>
                <div className="col-span-1">
                  <div className="text-xs text-gray-500 mb-1">19</div>
                  <div className="text-xs text-gray-500 mb-1">Thu, Mar 2022</div>
                  <div className="text-xs text-gray-500 mb-1">09:00 AM</div>
                  <div className="text-xs text-gray-500 mb-1">09:30 AM</div>
                  <div className="text-xs text-gray-500">10:00 AM</div>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  <ArrowLeftIcon className="text-gray-400" />
                  <ArrowRightIcon className="text-gray-400 ml-2" />
                </div>
              </div>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg w-1/2">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Cancel Event</h3>
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-600">Event</div>
                <div className="text-lg font-semibold text-gray-800">Centrifuge</div>
              </div>
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-600">Date</div>
                <div className="text-lg font-semibold text-gray-800">09 Mar, 2022</div>
              </div>
              <Button className="bg-red-500 text-white">Cancel Event</Button>
            </div>
          </div>
          <div className="mt-4">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Add Event</CardTitle>
                <CardDescription>You can now schedule a link through AI also.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary">+</Button>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">9</div>
                    <div className="text-xs text-gray-500 mb-1">Mon, Mar 2022</div>
                    <div className="text-xs text-gray-500 mb-1">09:00 AM</div>
                  </div>
                  <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">9</div>
                    <div className="text-xs text-gray-500 mb-1">Mon, Mar 2022</div>
                    <div className="text-xs text-gray-500 mb-1">09:30 AM</div>
                  </div>
                  <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">10</div>
                    <div className="text-xs text-gray-500 mb-1">Mon, Mar 2022</div>
                    <div className="text-xs text-gray-500 mb-1">10:00 AM</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-4 bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Events</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-4">
                <Badge variant="secondary">R</Badge>
                <div>
                  <div className="text-md font-semibold text-gray-800">Regular Meeting</div>
                  <div className="text-sm text-gray-500">Los Angeles</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">One-to-One In Person</div>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary">T</Badge>
                <div>
                  <div className="text-md font-semibold text-gray-800">Team Call</div>
                  <div className="text-sm text-gray-500">New York</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">500Conference Conference</div>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary">C</Badge>
                <div>
                  <div className="text-md font-semibold text-gray-800">Client Meeting</div>
                  <div className="text-sm text-gray-500">Houston</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">Team In Person</div>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary">A</Badge>
                <div>
                  <div className="text-md font-semibold text-gray-800">Appointment</div>
                  <div className="text-sm text-gray-500">Seattle</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">One-to-One Telephonic</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function SignalIcon(props) {
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
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  )
}


function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function LayoutDashboardIcon(props) {
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
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  )
}


function CalendarIcon(props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function ContactIcon(props) {
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
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  )
}


function LinkIcon(props) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}


function FileTypeIcon(props) {
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 13v-1h6v1" />
      <path d="M11 18h2" />
      <path d="M12 12v6" />
    </svg>
  )
}


function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function ComputerIcon(props) {
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
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  )
}


function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function ArrowLeftIcon(props) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
