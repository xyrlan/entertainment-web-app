import UserProfilePopup from './userProfilePopup';
import { useEffect, useRef, useState } from 'react';
import 'react-image-crop/dist/ReactCrop.css';
import Link from 'next/link';



const UserIcon: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const isAuthenticated = typeof window !== 'undefined' && localStorage.getItem('email') !== null;

    const [isCloudOpen, setIsCloudOpen] = useState(false);

    const UserImage = typeof window !== 'undefined' && localStorage.getItem('selectedImage');

    const handleCloudToggle = () => {
        setIsCloudOpen(!isCloudOpen);
    };

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload(); // Ou use a função de refreshPage que mencionei anteriormente
    };

    const handleIconClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    
    
    

    return (
        <>

            <div
                onClick={handleCloudToggle}
                className="crop-container border-2 hover:scale-110 duration-300 ease-in cursor-pointer underline text-sm select-none"
                style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    position: 'relative'
                }}
            >
                <img
                    src={UserImage || "/images/user-icon.svg"}
                    alt="Cropped User Icon"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center center'
                    }}
                />
            </div>


            {isAuthenticated && (
                <UserProfilePopup isOpen={isPopupOpen} onClose={handleClosePopup} setSelectedImage={setSelectedImage} selectedImage={selectedImage} />
            )}

            <div className={` absolute duration-500 ease-in-out transition-all bg-semi-dark-blue rounded-lg max-lg:top-12 max-lg:-right-8 lg:bottom-0 p-4 lg:left-16 ${isCloudOpen ? 'w-40' : ' scale-0 lg:-left-10 max-lg:-top-5 w-40'}`}>
                <ul className=" space-y-2 flex flex-col">
                    {isAuthenticated && (
                        <li onClick={handleIconClick} className='flex gap-2 group hover:text-white text-greyish-blue font-semibold duration-300 cursor-pointer underline text-sm'>

                            <svg xmlns="http://www.w3.org/2000/svg" className='fill-greyish-blue group-hover:fill-white duration-300' width="20" height="20" viewBox="0 0 24 24"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
                            <p
                                className="">Profile</p>
                        </li>
                    )}
                    {!isAuthenticated && (
                        <Link href="/login">
                            <li className='flex gap-2 group hover:text-white text-greyish-blue font-semibold duration-300 cursor-pointer underline text-sm'>

                                <svg xmlns="http://www.w3.org/2000/svg" className='fill-greyish-blue group-hover:fill-white duration-300' width="20" height="20" viewBox="0 0 24 24" ><path d="m13 16 5-4-5-4v3H4v2h9z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg>

                                <p className="">Login</p>

                            </li>
                        </Link>
                    )}
                    {!isAuthenticated && (
                        <Link href="/signup">
                            <li className='flex gap-2 hover:text-white text-greyish-blue group font-semibold duration-300 cursor-pointer underline text-sm'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='fill-greyish-blue group-hover:fill-white' width="20" height="20" viewBox="0 0 24 24" ><path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 8a3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4 3.91 3.91 0 0 0-4 4zm6 0a1.91 1.91 0 0 1-2 2 1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2zM4 18a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h2v-1a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v1h2z"></path></svg>

                                <p className="">Sign Up</p>

                            </li>
                        </Link>
                    )}
                    {isAuthenticated && (
                        <li onClick={handleLogout} className='flex gap-2 group hover:text-white text-greyish-blue font-semibold duration-300 cursor-pointer underline text-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='fill-greyish-blue group-hover:fill-white duration-300' width="20" height="20" viewBox="0 0 24 24" ><path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg>
                            <p className="" >
                                Logout
                            </p>
                        </li>
                    )}
                </ul>
            </div>
            {/* )} */}

        </>
    );
};

export default UserIcon;