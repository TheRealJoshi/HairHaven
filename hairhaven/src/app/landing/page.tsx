/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/ULRyeKTY9hV
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function landing() {
  return (
    <div className="flex flex-col">
      <header className="py-4 md:py-6">
        <div className="container flex items-center mx-auto justify-between px-4 md:px-6">
          <Link className="flex items-center space-x-2" href="#">
            
            <span className="font-bold">HairHaven</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Link className="font-medium tracking-wide hover:underline" href="#">
              Features
            </Link>
            <Link className="font-medium tracking-wide hover:underline" href="#">
              Pricing
            </Link>
            <Link className="font-medium tracking-wide hover:underline" href="#">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              className="inline-flex items-center space-x-2 text-sm font-medium tracking-tighter rounded-lg bg-gray-100 px-3 py-1 hover:bg-gray-100/90 dark:bg-gray-800 dark:hover:bg-gray-800/90"
              href="#"
            >
              <UserIcon className="h-4 w-4" />
              Sign Up
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gray-900 py-12 md:py-24 lg:py-64 text-gray-100 dark:bg-gray-100 dark:text-gray-900">
          <div className="container flex flex-col items-center justify-center mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
                Shape Success
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 via-yellow-400 dark:from-amber-300 dark:to-amber-500 dark:via-amber-400">
                  Snip by Snip
                </span>
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The platform for rapid communication. Let your team focus on their craft while we handle communicating exactly what your clients want, scheduling and processing.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-12 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/logo.png"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Faster communication. More innovation.
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    HairHaven translates your client's needs into a seamless experience, allowing your team to focus on their craft and your clients to focus on their hair.
                    With clicks of the button, you can see, visualize and communicate with your clients needs, saving time and money.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Ensure customers are satisfied with their haircuts.
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Automate your workflow with continuous integration and delivery.
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Connect with customers on products, habits and hair needs.
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Contact Sales
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                    href="#"
                  >
                    Tour the Platform
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 border-t mx-auto">
          <div className="container flex flex-col items-center justify-center mx-auto">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features to Accelerate Innovation</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The platform for rapid progress. Let your team focus on shipping features instead of managing
                infrastructure with automated CI/CD, built-in testing, and integrated collaboration.
              </p>
            </div>
            <p> </p>
            <div className="grid gap-12 md:gap-24 lg:grid-cols-2 lg:gap-16 mx-auto">
              <div className="flex flex-col items-center space-y-2">
                <CheckCircleIcon className="h-10 w-10" />
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Visualizations</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Collaborate seamlessly with clients visualizations to ensure perfection, saving you and your clients time and money.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <CheckCircleIcon className="h-10 w-10" />
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Automation</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Automate your workflow and business communication between your clients, saving time over minute tasks.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <CheckCircleIcon className="h-10 w-10" />
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Ease</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Find all your business tools in one spot, allowing for easy integration between scheduling and barber payment.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <CheckCircleIcon className="h-10 w-10" />
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Loyalty</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Build customer loyalty with an integrated, flexible platform to account for all of your client's hair needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 px-4 md:px-6 space-y-4 mx-auto">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features to Accelerate Innovation</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The platform for rapid customer communication. Let your hair salon focus on your craft instead of navigating software infrastructure
              and constant client feedback.
            </p>
          </div>
          <form className="flex flex-col gap-2 max-[400px]:flex-row mx-auto">
            <Input className="w-full lg:max-w-[5000]" placeholder="Enter your email" type="email" />
            <Button className="w-full sm:max-w-[150px] mx-auto" type="submit">
              Sign Up
            </Button>
          </form>
        </div>
        <div className="bg-gray-100">
          <div className="container flex items-center justify-between px-4 md:px-6">
            <span className="text-sm text-gray-500 dark:text-gray-400">© 2024 HairHaven. All rights reserved.</span>
            <nav className="flex items-center space-x-4">
              <Link className="font-medium tracking-wide hover:underline" href="#">
                Features
              </Link>
              <Link className="font-medium tracking-wide hover:underline" href="#">
                Pricing
              </Link>
              <Link className="font-medium tracking-wide hover:underline" href="#">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}


function SquareIcon(props: any) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  )
}


function UserIcon(props: any) {
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


function CheckIcon(props: any) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function CheckCircleIcon(props: any) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
