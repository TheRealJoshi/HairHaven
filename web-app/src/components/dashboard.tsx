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

const times = [
  {
    id: 1,
    time: "9:00 AM - 10:00 AM",
    spots: 65,
    spotsAvailable: 65,
  },
  {
    id: 2,
    time: "10:00 AM - 11:00 AM",
    spots: 65,
    spotsAvailable: 65,
  },
  {
    id: 3,
    time: "11:00 AM - 12:00 PM",
    spots: 65,
    spotsAvailable: 65,
  },
  {
    id: 4,
    time: "1:00 PM - 2:00 PM",
    spots: 65,
    spotsAvailable: 65,
  },
  {
    id: 5,
    time: "2:00 PM - 3:00 PM",
    spots: 65,
    spotsAvailable: 65,
  }
]

const instructors = [
  [
    { id: 1, name: 'Sample Instructor 1', className: "bhangra", threshold: 0, classLevel: "beginner", registrants: [
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      }
    ]},
    { id: 2, name: 'Sample Instructor 5', className: "Break Dance", threshold: 65, classLevel: "beginner", registrants: [
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      }
    ]},
    { id: 3, name: 'Sample Instructor 5', className: "break dance", threshold: 65, classLevel: "beginner", registrants: [
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      }
    ]},
    { id: 4, name: 'Sample Instructor 5', className: "break dance", threshold: 65, classLevel: "beginner", registrants: [
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      }
    ]},
    { id: 5, name: 'Sample Instructor 5', className: "break dance", threshold: 65, classLevel: "beginner", registrants: [
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      }
    ]}
  ],
  [
    { id: 1, name: 'Sample Instructor 2', className: "kathak",threshold: 0, classLevel: "beginner", registrants: [
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
    ]},
    { id: 1, name: 'Sample Instructor 5', className: "break dance", threshold: 65, classLevel: "beginner", registrants: [
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      }
    ]},
    { id: 2, name: 'Sample Instructor 5', className: "break dance", threshold: 65, classLevel: "beginner", registrants: [
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      }
    ]},
    { id: 2, name: 'Sample Instructor 5', className: "break dance", threshold: 65, classLevel: "beginner", registrants: [
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      }
    ]},
    { id: 2, name: 'Sample Instructor 5', className: "break dance", threshold: 65, classLevel: "beginner", registrants: [
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      }
    ]}
  ],
  [
    { id: 1, name: 'Sample Instructor 3', className: "bollywood", threshold: 65,classLevel: "beginner", registrants: [
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      }
    ]},
    { id: 2, name: 'Sample Instructor 5', className: "break dance", threshold: 65, classLevel: "beginner", registrants: [
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      }
    ]},
    { id: 2, name: 'Sample Instructor 5', className: "break dance", threshold: 65, classLevel: "beginner", registrants: [
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      }
    ]},
    { id: 2, name: 'Sample Instructor 5', className: "random dance", threshold: 0, classLevel: "beginner", registrants: [
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      }
    ]},
    { id: 2, name: 'Sample Instructor 5', className: "break dance", threshold: 65, classLevel: "beginner", registrants: [
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      },
      {
        name: "Om Joshi 1",
        email: "omjoshi@umich.edu",
        uid: "uid value"
      }
    ]}
  ],
];




export default function dashboard() {
  const [email, setEmail] = useState<string>('');
  const [modalError, setModalError] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(true);
  const [alreadyRegistered, setIsRegistered] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);
  const [showInstructorModal, setShowInstructorModal] = useState(false);
  const [instructorModal, setShowInstructor] = useState(false);


  async function submitWaitlist() {
    try {
      const docuRef = doc(db, 'classregistrations', 'section-one');      

      await updateDoc(docuRef, {
        waitlist: arrayUnion(email)
      });
    } catch (error: any) {
      setModalError(error)
      console.log(error);
    }
  }

  const MyInstructorModal = ({ visible, onClose, data }: { visible: boolean, onClose: () => void, data: any }) => {
    if (!visible) return null;
  
    const handleOnClose = (e : any) => {
      if (e.target.id === "container") onClose();
    };
  
    return (
      <div
        id="container"
        onClick={handleOnClose}
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      >
        <div className="bg-white p-4 rounded">
          <h1 className="font-semibold text-center text-xl text-gray-700">
            {data.className} by {data.name}
          </h1>
          <p className="text-center text-gray-700 mb-5">Class Level: {data.classLevel}</p>
  
          <div className="flex flex-col">
              <p className="text-center text-gray-700 mb-5">Class Description: {data.classDescription}</p>
          </div>
        </div>
      </div>
    );
  };

  const MyModal = ({ visible, onClose, data }: { visible: boolean, onClose: () => void , data: any}) => {
    if (!visible) return null;
  
    const handleOnClose = (e : any) => {
      if (e.target.id === "container") onClose();
    };
  
    return (
      <div
        id="container"
        onClick={handleOnClose}
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      >
        <div className="bg-white p-4 rounded">
          <h1 className="font-semibold text-center text-xl text-gray-700">
            Get notified when spots are available. Register for the {data.className} waitlist.
          </h1>
          <p className="text-center text-gray-700 mb-5">Enter your email below</p>
  
          <div className="flex flex-col">
            <input
              type="text"
              className="border border-gray-700 p-2 rounded mb-5"
              placeholder="email@example.com"
              value={email}
              style={{color: "black"}}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button className="px-5 py-2 bg-gray-700 text-white rounded" onClick={() => {
              submitWaitlist()
              onClose()
            }}>
              Register
            </button>
          </div>
        </div>
      </div>
    );
  };


async function addData(name: string, uid: string, email: string, className: string){
  try {
    const docuRef = doc(db, 'individualRegistrations', 'person1uid');
    const docRef = await updateDoc(docuRef, {
      name: name,
      sectionOne: className,
    });

    console.log("Document written with ID: ");
    return true;
  } catch (error) {
    console.error("Error adding document: ", error);
    return false
  }
}
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
                <CardTitle>Add Your Time Slots</CardTitle>
                <CardDescription>Select your prefer time slots below. Press on the instructor icon to learn more about the class:</CardDescription>
              </CardHeader>
              <CardContent>
                
                <div className="mt-4 grid grid-cols-5 gap-4">
                  <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
                    {/* <div className="text-xs text-gray-500 mb-1 font-bold">9</div> */}
                    <p> </p>
                    {/* <div className="text-xs text-gray-500 mb-1">Mon, Mar 2022</div> */}
                    <div className="text-s text-gray-500 mb-1 font-bold">09:00 AM - 10:00 AM</div>
                  </div>
                  <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
                    {/* <div className="text-xs text-gray-500 mb-1">9</div>
                    <div className="text-xs text-gray-500 mb-1">Mon, Mar 2022</div> */}
                    <div className="text-s text-gray-500 mb-1 font-bold">10:00 AM - 11:00 AM</div>
                  </div>
                  <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
                    {/* <div className="text-xs text-gray-500 mb-1">10</div>
                    <div className="text-xs text-gray-500 mb-1">Mon, Mar 2022</div> */}
                    <div className="text-s text-gray-500 mb-1 font-bold">11:00 AM - 12:00 PM</div>
                  </div>
                  <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
                    {/* <div className="text-xs text-gray-500 mb-1">10</div>
                    <div className="text-xs text-gray-500 mb-1">Mon, Mar 2022</div> */}
                    <div className="text-s text-gray-500 mb-1 font-bold">1:00 PM - 2:00 PM</div>
                  </div>
                  <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
                    {/* <div className="text-xs text-gray-500 mb-1">10</div>
                    <div className="text-xs text-gray-500 mb-1">Mon, Mar 2022</div> */}
                    <div className="text-s text-gray-500 mb-1 font-bold">2:00 PM - 3:00 PM</div>
                  </div>
                </div>
                {instructors.map(column => (
                  <div className="mt-4 grid grid-cols-5 gap-4 mx-auto">
                    {column.map(datum => (
                    <div className="items-center justify-center bg-gray-100 p-4 rounded-lg mx-auto">
                    {/* <div className="text-xs text-gray-500 mb-1 font-bold">9</div> */}
                    <p> </p>
                    {/* <div className="text-xs text-gray-500 mb-1">Mon, Mar 2022</div> */}
                    <img
                      alt="Haircut"
                      height="120"
                      src="/pfp.jpg"
                      style={{
                        aspectRatio: "100/100",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                      className="rounded-lg mx-auto"
                      width="120"
                      onClick={() => setShowInstructor(true)}
                    />
                    <div className="text-xl text-gray-500 font-bold">{datum.className} </div>
                    <div className="text-sm text-gray-500 ">By {datum.name}</div>
                    
                    {/* <div className="text-L text-gray-500 font-bold"></div> */}
                    <p> .</p>
                    <Button variant="secondary" className="w-1/2" style={{background: "#342822"}}>{datum.classLevel}</Button>
                    {/* <p> .</p> */}
                    {/* <div className="text-xs text-gray-500 font-bold">Bhangra by Nabeel Markartia</div> */}
                    <Button variant="secondary" className="w-1/2" style={{background: "#342822"}}>{datum.registrants?.length}/65</Button>
                    <div className="text-xs text-gray-500 font-bold">spots available</div>
                    <p> .</p>
                  
                    {alreadyRegistered ? (
                      <Button 
                        variant="secondary" 
                        className="mx-auto w-full"
                        style={{background: "#342822"}}
                      >
                        Registered
                      </Button>
                    ) : (datum.registrants?.length ?? 0) > datum.threshold ? (
                      <>
                      <Button 
                      variant="secondary" 
                      className="mx-auto w-full"
                      onClick={() => setShowModal(true)}
                      style={{background: "#342822"}}
                    >
                      Register for Waitlist
                    </Button>
                    <MyModal onClose={() => setShowModal(false)} visible={showModal} data={datum}/>
                    <MyInstructorModal onClose={() => setShowInstructor(false)} visible={instructorModal} data={datum} />
                    </>
                    ) : (
                      <Button 
                        variant="secondary" 
                        className="mx-auto w-full" 
                        onClick={() => addData("Om Joshi", "213bgfued", "omjoshi@umich.edu", datum.className ?? "")}
                        style={{background: "#342822"}}
                       
                      >
                        + Add Class
                      </Button>
                    
                    )
                  }
                  </div>
                  ))} 
                  </div>
                ))} 


                {/* <Button variant="secondary">+</Button> */}
              </CardContent>
            </Card>
          </div>
          {/* <div className="mt-4 bg-gray-100 p-4 rounded-lg">
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
          </div> */}
        </div>
  )
}
