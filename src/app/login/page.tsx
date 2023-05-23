import Image from "next/image"
import LogInForm from "@/components/LogInForm"
import Link from "next/link"




export default function LogIn() {

    return (
        <main className="flex flex-col min-h-screen items-center gap-10 p-24 text-white ">

            <Image src="/images/logo.svg" width={33} height={27} alt='logo' />

            <div className='w-[400px] p-8 bg-semi-dark-blue rounded-3xl '>

                <h1 className="text-4xl">Log In</h1>

                <LogInForm  />

                <p className="w-full text-center mt-6 text-sm">Don&quot;t have an account?
                    <Link href="/signup" className="text-red hover:text-white duration-300"> Sign up</Link>
                </p>

            </div>
        </main>
    )
}