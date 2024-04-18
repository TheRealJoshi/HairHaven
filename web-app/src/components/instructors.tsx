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

const instructors = 
    [
        {
            name: "Nabeel Markatia",
            className: "Bhangra",
            classLevel: "Intermediate",
            classDescription: "Learn the basics of Bhangra and how to dance to the beat of the dhol. This class is for those who have some experience with Bhangra and are looking to improve their skills.",
            threshold: 65,
            registrants: []
        },
        {
            name: "John Doe",
            className: "Salsa",
            classLevel: "Beginner",
            classDescription: "Learn the basics of Salsa and get ready to hit the dance floor. This class is perfect for beginners who want to learn the fundamental steps and techniques of Salsa dancing.",
            threshold: 50,
            registrants: []
        },
        {
            name: "Jane Smith",
            className: "Hip Hop",
            classLevel: "Advanced",
            classDescription: "Take your Hip Hop skills to the next level with this advanced class. Learn intricate choreography and master the art of freestyle dancing.",
            threshold: 80,
            registrants: []
        },
        {
            name: "Sarah Johnson",
            className: "Ballet",
            classLevel: "Advanced",
            classDescription: "Refine your ballet technique and learn advanced ballet movements. This class is suitable for experienced ballet dancers looking to challenge themselves.",
            threshold: 75,
            registrants: []
        },
        {
            name: "Michael Chen",
            className: "Contemporary",
            classLevel: "Intermediate",
            classDescription: "Explore the expressive and fluid movements of contemporary dance. This class is perfect for dancers with some experience in contemporary dance.",
            threshold: 60,
            registrants: []
        },
        {
            name: "Emily Johnson",
            className: "Tap Dance",
            classLevel: "Intermediate",
            classDescription: "Learn the rhythmic and percussive movements of tap dance. This class is suitable for dancers with some experience in tap dance.",
            threshold: 70,
            registrants: []
        },
        {
            name: "Alex Rodriguez",
            className: "Latin Dance",
            classLevel: "Advanced",
            classDescription: "Explore the vibrant and energetic world of Latin dance. This class is perfect for experienced dancers looking to master various Latin dance styles.",
            threshold: 85,
            registrants: []
        }
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
            <div className="p-4 rounded-lg w-1 mr-4" >
                {/* <h3 className="text-lg font-semibold text-gray-700 mb-3">Reschedule Event</h3> */}
            </div>
        </div>
        <div className="mt-4" style={{ color: "#342822" }}>
            <Card className="w-full" style={{ background: "#342822" }}>
                <CardHeader>
                    <CardTitle>Meet our instructors!</CardTitle>
                    <CardDescription>Select your preferred time slots below. Press on the instructor icon to learn more about the class:</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="mt-4 grid grid-cols-5 gap-4 mx-auto">
                        {instructors.map((instructor) => (
                            <div className="items-center justify-center bg-gray-100 rounded-lg mx-auto" style={{background: "linear-gradient(to bottom, #9b5de5 0%, #f15bb5 100%)"}}>
                                <p> </p>
                                <img
                                    alt="Haircut"
                                    height="250"
                                    src="/pfp.jpg"
                                    style={{
                                        // aspectRatio: "100/100",
                                        objectFit: "cover",
                                        padding: 30,
                                        borderRadius: "50%",
                                    }}
                                    className="rounded-lg mx-auto"
                                    width="250"
                                    onClick={() => setShowInstructor(true)}
                                />
                                <div className="text-xl text-white-500 font-bold mx-auto"style={{
                                        padding: 10,
                                    }}>
                                    <p className="mx-auto">{instructor.name}</p>
                                </div>
                                <div className="text-xs text-white-500" style={{
                                        objectFit: "cover",
                                        padding: 10,
                                        color: "white",
                                    }}>{instructor.name} {instructor.classDescription}</div>
                                {/* <p> .</p> */}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
)
}
