/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/z6Z4hBBT7g3
 */

'use client'
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Link from "next/link"
// import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { db } from "@/app/fconfig"
import {collection, addDoc, setDoc, doc, updateDoc, arrayUnion } from 'firebase/firestore'
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { signOut, useSession } from "next-auth/react";


const registeredClasses = [
    {
        className: "Event 1",
        classType: "Dance Workshop",
        classTime: "9:00 AM - 10:00 AM",
        location: "Room 484",
        day: "Friday",
    },
    {
        className: "Event 2",
        classType: "Lunch Break",
        classTime: "9:00 AM - 11:00 AM",
        location: "Room 484",
        day: "Friday"
    },
    {
        className: "Event 3",
        classType: "Coffee Side Chat",
        classTime: "9:00 AM - 11:00 AM",
        location: "Room 484",
        day: "Friday"
    },
]

const announcements = [
    {
        name: "Regular Meeting",
        information: "All hospitality items can be found in room 243, right next to the enterance",
        category: "Food",
        additional: "Side note: make sure that you have your pass on"
    },
    {
        name: "Regular Meeting",
        information: "All hospitality items can be found in room 243, right next to the enterance",
        category: "Food",
        additional: "Side note: make sure that you have your pass on"
    },
    {
        name: "Regular Meeting",
        information: "Don't forget to bring your laptops for the workshop",
        category: "Workshop",
        additional: "Side note: the workshop will start at 10:00 AM"
    },
    {
        name: "Regular Meeting",
        information: "The networking event has been rescheduled to 2:00 PM",
        category: "Networking",
        additional: "Side note: dress code is business casual"
    },
]


export default function dashboard() {
  const [email, setEmail] = useState<string>('');
  const [modalError, setModalError] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(true);
  const [alreadyRegistered, setIsRegistered] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);
  const [showInstructorModal, setShowInstructorModal] = useState(false);
  const [instructorModal, setShowInstructor] = useState(false);

  return (
      <div className="w-3/4 justify-center items-center mx-auto">
          <div className="flex justify-between">
            <div className=" p-4 rounded-lg w-1 mr-4">
              {/* <h3 className="text-lg font-semibold text-gray-700 mb-3">Reschedule Event</h3> */}
                      
                    </div>
                    
                    </div>
                    <div className="mt-4"  style={{color: "#342822"}}>
                    <Card className="w-full" style={{background: "#342822"}} >
                      <CardHeader>
                      <CardTitle>Welcome to DDCON!</CardTitle>
                      <CardDescription>You can see your schedule below. Make sure to register if have not yet!</CardDescription>

                      <div className="flex">
                        <iframe
                        width="500"
                        height="315"
                        src="https://www.youtube.com/embed/cCuqLaqsvik"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{padding: 30}}
                        ></iframe>
                        <iframe
                        width="500"
                        height="315"
                        src="https://www.youtube.com/embed/RbGS2KbK5R0"
                        
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{padding: 30}}
                        ></iframe>
                      </div>
                      </CardHeader>
            </Card>
          </div>
          <div className="mt-4 bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Your Registered Events</h3>
            <div className="grid grid-cols-2 gap-4">
            {registeredClasses.map((item, index) => (
                <>
                    <div className="flex items-center space-x-4">
                        <Badge variant="secondary">{index}</Badge>
                        <div>
                            <div className="text-md font-semibold text-gray-800">{item.className}</div>
                            <div className="text-sm text-gray-500">{item.classTime}</div>
                        </div>
                    </div>
                    <div className="text-sm text-gray-500">{item.classType} - {item.day}</div>
                </>
            ))}
            </div>
          </div> 
          <div className="mt-4 bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Below are some announcements from the directors:</h3>
            <div className="grid grid-cols-1 gap-4">
                
                {announcements.map((item) =>
                    <>
                        <div className="flex items-center space-x-4">
                            <Badge variant="secondary">{item.category}</Badge>
                            <div>
                                <div className="text-md font-semibold text-gray-800">{item.information}</div>
                                <div className="text-sm text-gray-500">{item.additional}</div>
                            </div>
                        </div>
                        <div className="text-sm text-gray-500"></div>
                    </>
                )
                }
            </div>
          </div> 
        </div>
  )
}
