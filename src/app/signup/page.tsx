import Image from "next/image"
import SignUpForm from "@/components/SignUpForm"
import Link from "next/link"






export default function SignUp() {


  return (
    <>
      <main className="flex flex-col min-h-screen items-center gap-10 p-24 text-white ">

        <Image src="/images/logo.svg" width={33} height={27} alt='logo' />

        <div className='w-[400px] p-8 bg-semi-dark-blue rounded-3xl '>

          <h1 className="text-4xl">Sign Up</h1>

          <SignUpForm />

          <p className="w-full text-center mt-6 text-sm">Already have an account?
            <Link href="/login" className="text-red"> Login</Link>
          </p>

        </div>
      </main>
    </>
  )
}