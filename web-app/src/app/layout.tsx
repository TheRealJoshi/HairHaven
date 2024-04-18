import type { Metadata } from "next";
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "./SessionProvider";
// wierd error when SessionProvider vs sessionProvider
// import Login from "./Login";
import Login from '@/components/login'
import Dashboard from '@/components/realdash'
import Events from '@/components/events';
// import Home from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DDCON",
  description: "where dancers come to play",
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {

//   return (
//     <html lang="en">
//       <body>
//         <SessionProvider>
//           {children}
//         </SessionProvider>
//       </body>
//     </html>
//   );
// }
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" className = "bg-white">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
            children
          ): (
            <Dashboard/>
            // <Events/>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}


