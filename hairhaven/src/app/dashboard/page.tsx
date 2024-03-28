// /**
//  * This code was generated by v0 by Vercel.
//  * @see https://v0.dev/t/FJuNitQ5y4u
//  */
'use client'
// import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
// import Link from "next/link"

// export default function Dashboard() {
  

//   const session = useSession({
//     required: true,
//     onUnauthenticated() {
//       redirect('/signin');
//     },
//   });
//   return (
//     <div key="1" className="min-h-screen flex bg-white">
//       <nav className="w-64 flex flex-col bg-[#342822] p-6">
//         <div className="flex items-center space-x-2 text-white mb-10">
//           {/* <FlagIcon className="text-[#bd1e59] text-5xl" /> */}
//           <span className="text-3xl font-bold">ddcon</span>
//         </div>
//         <div className="flex items-center mb-6">
//           <Avatar>
//             <AvatarImage alt="Om Joshi" src="/placeholder.svg?height=40&width=40" />
//             <AvatarFallback>Om</AvatarFallback>
//           </Avatar>
//           <div className="ml-4 text-white">
//             <div className="font-semibold">Om Joshi</div>
//             <div className="text-sm opacity-50" style={{ overflowWrap: 'break-word', overflow: 'hidden'}}>om.joshi@desidancenetwork.com</div>
//           </div>
//         </div>
//         <ul className="flex flex-col space-y-2">
//           <li>
//             <Link className="text-white block py-2" href="#">
//               Dashboard
//             </Link>
//           </li>
//           <li>
//             <Link className="text-white block py-2" href="#">
//               Expenses
//             </Link>
//           </li>
//           <li>
//             <Link className="text-white block py-2" href="#">
//               Wallets
//             </Link>
//           </li>
//           <li>
//             <Link className="text-white block py-2" href="#">
//               Summary
//             </Link>
//           </li>
//           <li>
//             <Link className="text-white block py-2" href="#">
//               Accounts
//             </Link>
//           </li>
//           <li>
//             <Link className="text-white block py-2" href="#">
//               Settings
//             </Link>
//           </li>
//           <li>
//             <Link className="text-white block py-2" href="#" onClick={() => signOut()}>
//               Sign Out
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

// Dashboard.requireAuth = true;


// // function FlagIcon(props) {
// //   return (
// //     <svg
// //       {...props}
// //       xmlns="http://www.w3.org/2000/svg"
// //       width="24"
// //       height="24"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     >
// //       <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
// //       <line x1="4" x2="4" y1="22" y2="15" />
// //     </svg>
// //   )
// // }

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/z6Z4hBBT7g3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { Calendar } from "@/components/ui/calendar"

export default function Component() {
  return (
    <div key="1" className="min-h-screen flex">
      <nav className="w-64 flex flex-col bg-[#342822] p-6">
        <div className="flex items-center space-x-2 text-white mb-10">
          {/* <FlagIcon className="text-[#bd1e59] text-5xl" /> */}
          <span className="text-3xl font-bold">hairhaven</span>
        </div>
        <div className="flex items-center mb-6">
          <Avatar>
            <AvatarImage alt="Om Joshi" src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>Om</AvatarFallback>
          </Avatar>
          <div className="ml-4 text-white">
            <div className="font-semibold">Om Joshi</div>
            <div className="text-sm opacity-50">om.joshi@gmail.com</div>
          </div>
        </div>
        <ul className="flex flex-col space-y-2">
          <li>
            <Link className="text-white block py-2" href="#">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="text-white block py-2" href="#">
              Expenses
            </Link>
          </li>
          <li>
            <Link className="text-white block py-2" href="#">
              Wallets
            </Link>
          </li>
          <li>
            <Link className="text-white block py-2" href="#">
              Summary
            </Link>
          </li>
          <li>
            <Link className="text-white block py-2" href="#">
              Accounts
            </Link>
          </li>
          <li>
            <Link className="text-white block py-2" href="#">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex-1 bg-gray-100 p-6">
        <h2 className="text-2xl font-bold mb-4">Register for Classes</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="class-date">
              Select Date
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#bd1e59] focus:border-[#bd1e59] sm:text-sm"
              id="class-date"
              name="class-date"
              type="date"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="class-type">
              Select Class Type
            </label>
            <select
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#bd1e59] focus:border-[#bd1e59] sm:text-sm"
              id="class-type"
              name="class-type"
            >
              <option>Yoga</option>
              <option>Pilates</option>
              <option>Zumba</option>
            </select>
          </div>
        </div>
        <button className="mt-4 bg-[#bd1e59] text-white py-2 px-4 rounded-md hover:bg-[#8a1234] focus:outline-none focus:ring focus:ring-[#bd1e59] focus:ring-opacity-50">
          Register
        </button>
        <div className="mt-8">
          <Calendar initialFocus mode="single" />
        </div>
        <div className="grid grid-cols-4 gap-4 mt-8">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">Yoga</h3>
            <ul>
              <li>9am - 10am</li>
              <li>10am - 11am</li>
              <li>11am - 12pm</li>
              <li>12pm - 1pm</li>
              <li>1pm - 2pm</li>
              <li>2pm - 3pm</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">Pilates</h3>
            <ul>
              <li>9am - 10am</li>
              <li>10am - 11am</li>
              <li>11am - 12pm</li>
              <li>12pm - 1pm</li>
              <li>1pm - 2pm</li>
              <li>2pm - 3pm</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">Zumba</h3>
            <ul>
              <li>9am - 10am</li>
              <li>10am - 11am</li>
              <li>11am - 12pm</li>
              <li>12pm - 1pm</li>
              <li>1pm - 2pm</li>
              <li>2pm - 3pm</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
// function FlagIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
//       <line x1="4" x2="4" y1="22" y2="15" />
//     </svg>
//   )
// }