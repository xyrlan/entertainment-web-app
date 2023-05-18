"use client"
import Link from "next/link"
import Image from "next/image"
import UserIcon from "./userIcon"
import React from "react"
import { useState, useEffect } from "react"
import { usePathname } from 'next/navigation';


const Navbar: React.FC = () => {
    const [isCloudOpen, setIsCloudOpen] = useState(false);

    const handleCloudToggle = () => {
        setIsCloudOpen(!isCloudOpen);
    };

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload(); // Ou use a função de refreshPage que mencionei anteriormente
    };

    const pathname = usePathname();

    const UserName = typeof window !== 'undefined' && localStorage.getItem('name');

    return (
        <>
            <nav className="lg:h-[90%] lg:w-24 max-lg:w-[90%] max-lg:h-20 bg-semi-dark-blue flex lg:flex-col items-center sm:m-8 lg:py-8 max-lg:px-4 sm:rounded-2xl max-sm:rounded-b-2xl lg:fixed max-lg:absolute z-20 max-sm:w-full max-sm:justify-center ">

                <Link className="max-sm:absolute left-4" href={'/'}>
                    <Image className="" src="/images/logo.svg" width={33} height={27} alt='logo' />
                </Link>

                <div className="lg:w-5 lg:h-52 max-lg:h-5 max-lg:w-52 max-sm:w-36 lg:mt-20 max-lg:ml-10 max-sm:ml-0 flex lg:flex-col justify-between">

                    <Link href={'/'}>
                        <svg width="20" height="20" className={`fill-greyish-blue hover:fill-red duration-300 cursor-pointer ${pathname === "/" ? 'fill-white hover:fill-white' : ''}`} xmlns="http://www.w3.org/2000/svg"><path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z" /></svg>
                    </Link>

                    <Link href={'/movies'}>
                        <svg width="20" height="20" className={`fill-greyish-blue hover:fill-red duration-300 cursor-pointer ${pathname === "/movies" ? 'fill-white hover:fill-white' : ''}`} xmlns="http://www.w3.org/2000/svg"><path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" /></svg>
                    </Link>

                    <Link href={'/tvseries'}>
                        <svg width="20" height="20" className={`fill-greyish-blue hover:fill-red duration-300 cursor-pointer ${pathname === "/tvseries" ? 'fill-white hover:fill-white' : ''}`} xmlns="http://www.w3.org/2000/svg"><path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" /></svg>
                    </Link>

                    <Link href={'/bookmarks'}>
                        <svg width="17" height="20" className={`fill-greyish-blue hover:fill-red duration-300 cursor-pointer ${pathname === "/bookmarks" ? 'fill-white hover:fill-white' : ''}`} xmlns="http://www.w3.org/2000/svg"><path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z" /></svg>
                    </Link>
                </div>



                <div className="absolute lg:bottom-8 max-lg:right-8 max-sm:right-4 flex lg:flex-col items-center gap-4 ">
                    <UserIcon />
                    <p className="max-sm:hidden text-xs text-greyish-blue">{UserName}</p>
                </div>


            </nav >
        </>
    )
}

export default Navbar;