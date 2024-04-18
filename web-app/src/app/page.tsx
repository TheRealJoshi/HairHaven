'use client'
import Image from "next/image";
import { redirect } from "next/navigation";

import { signOut, useSession } from "next-auth/react";

export default function Home(){
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });
  

  return (
    <>
      {/* <div>{session?.data?.user?.name}</div> */}
      <button onClick={() => signOut()}>404 Not Found</button>
    </>
  )
}