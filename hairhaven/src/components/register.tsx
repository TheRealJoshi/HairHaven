/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/vBuC6lL1Z7j
 */
'use client'
import React, { useState } from 'react';
import { Input } from "@/app/dashboard/ui/input"
import { Button } from "@/app/dashboard/ui/button"
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './.././app/fconfig'

export default function login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <div className="flex w-[400px] flex-col items-center space-y-8">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold text-[#342822]">ddcon</h1>
          <img src="@/assets/logo.png" alt="Centered" />
          <p className="text-sm text-[#342822]">where dancers come to play</p>
          <p className="text-sm text-[#342822]">Registration</p>
        </div>
        <div className="flex w-full flex-col space-y-4">
          <Input placeholder="email id" type="email" onChange ={(e) => setEmail(e.target.value)}/>
          <Input placeholder="password" type="password" onChange = {(e) => setPassword(e.target.value)} />
          <Button className="w-full text-white bg-[#342822] border-[#342822]" disabled = {!password || !email} onClick={() => createUserWithEmailAndPassword(auth, email, password)}>Register</Button>
          <Button className="w-full text-white bg-[#342822] border-[#342822]" onClick={() => signIn('google')}>Google Sign In</Button>
          <Button className="w-full text-white bg-[#342822] border-[#342822]" onClick ={() => router.push('login')}>Have an account?</Button>
        </div>
      </div>
    </div>
  )
}
