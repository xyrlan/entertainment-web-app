import React from 'react';
import { useEffect, useRef, useState } from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

type UserProfilePopupProps = {
    isOpen: boolean;
    onClose: () => void;
    selectedImage: string | null;
    setSelectedImage: any;
    UserImage: string | false | null;
};

const UserProfilePopup: React.FC<UserProfilePopupProps> = ({ isOpen, onClose, selectedImage, setSelectedImage, UserImage }) => {
    // const [selectedImage, setSelectedImage] = useState<string | null>(null);
    
    const popupRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        if (selectedImage) {
            localStorage.setItem('selectedImage', selectedImage);
        }
    }, [selectedImage]);

    if (!isOpen) {
        return null;
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageDataUrl = reader.result as string;
                setSelectedImage(imageDataUrl);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="popup-container" id="popup-container">
            <div className="popup-content flex relative gap-8 rounded-2xl" ref={popupRef}>

                <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} id="file-input" ref={fileInputRef} />
                <label className='flex flex-col items-center' htmlFor="file-input">

                    <div
                        className="crop-container border-2"
                        style={{
                            width: '60px',
                            height: '60px',
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

                    {/* <img className='' src={selectedImage || "/images/user-icon.svg"} alt="User Icon" /> */}
                    <button className='text-xs text-[#5A698F] underline mt-2 hover:text-white duration-300' onClick={() => document.getElementById('file-input')?.click()}>Change Image</button>
                </label>


                {/* <img className='h-16 w-16' src="/images/user-icon.svg" alt="User Icon" /> */}
                <div className='inline-flex flex-col gap-2'>

                    <h1 className='text-sm text-[#5A698F]'>Username:
                        <span className='text-white text-base'> {localStorage.name}</span>
                    </h1>
                    <h1 className='text-sm text-[#5A698F]'>Email:
                        <span className='text-white text-base'> {localStorage.email}</span>
                    </h1>

                </div>

            </div>
        </div>
    );
};

export default UserProfilePopup;