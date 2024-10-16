'use client'
import {useEffect, useState} from 'react'
import { AvatarImage, AvatarFallback, Avatar } from "@/app/dashboard/ui/avatar"
import { Button } from "@/app/dashboard/ui/button"
// Import your child components
import CustomerView from './Customer'
import Dashboard from "./BarberProfile"
import Landing from "./BarberDashboard"
import CustomerSearch from './CustomerSearch'

export default function DashboardComponent() {
  const [state, setState] = useState("Dashboard");

  return (
    <div className="bg-[#f4f7fa] min-h-screen">
      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="w-64 bg-white p-5 h-screen">
          <div className="flex items-center space-x-2 mb-5">
            <Avatar>
              <AvatarImage alt="Barber" src="/HairHaven.png" />
              <AvatarFallback>HairHaven</AvatarFallback>
            </Avatar>
            <span className="font-semibold">HairHaven</span>
          </div>
          <nav className="flex flex-col space-y-1">
            <Button className="justify-start rounded-md bg-purple-600 text-white" onClick={() => setState("Dashboard")}>Dashboard</Button>
            <Button className="justify-start rounded-md" onClick={() => setState("Profile")}>Barber Profile</Button>
            <Button className="justify-start rounded-md" onClick={() => setState("Customer Search")}>Customer Search</Button>
            <Button className="justify-start rounded-md" onClick={() => setState("Customer View")}>Customer View</Button>
            <Button className="justify-start rounded-md" onClick={() => setState("Barber Search")}>Barber Search</Button>
            <Button className="justify-start rounded-md" onClick={() => setState("Settings")}>Settings</Button>
          </nav>
        </aside>

        {/* Dynamic Component Render */}
        <div className="flex-grow p-8">
          {state === "Dashboard" && <Landing />}
          {state === "Profile" && <Dashboard />}
          {state === "Customer View" && <CustomerView />}
          {state === "Customer Search" && <CustomerSearch />}
          {state === "Settings" && <div>Settings Content Here</div>}
        </div>
      </div>
    </div>
  );
}
