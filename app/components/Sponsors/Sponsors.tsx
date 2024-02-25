import React from 'react'
import  Image from 'next/image'
import Dell from '@/public/dell.webp'
import HP from '@/public/hp.png'
import Apple from '@/public/apple.png'
import MSI from '@/public/msi.png'
import Asus from '@/public/asus.png'
import Acer from '@/public/acer.png'
import Lenovo from '@/public/lenovo.webp'
import Microsoft from '@/public/microsoft.webp'
import Google from '@/public/google.png'
import GatesFoundation from '@/public/gates.png'
import ClintonFoundation from '@/public/clinton.png'
import ComputerAid from '@/public/compaid.png'

const Sponsors = () => {
  return (
    <>
        <div className="py-16 bg-white">
        <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
            <div className="m-auto text-center lg:w-7/12">
                <h2 className="text-2xl text-gray-700 font-bold md:text-4xl">These are just but some of our sponsors for this project.</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                <div className="p-4">
                    <Image src={Dell} className="" alt="dell logo"
                    width={150}
                    height={150}
                    />
                </div>
                <div className="p-4">
                    <Image src={Apple} className="" alt="dell logo"
                    width={150}
                    height={150}
                    />
                </div>
                <div className="p-4">
                    <Image src={MSI} className="" alt="dell logo"
                    width={150}
                    height={150}
                    />
                </div>
                <div className="p-4">
                    <Image src={HP} 
                    width={150}
                    height={150}
                    className="" alt="hp logo"
                    />
                </div>
                <div className="p-4">
                    <Image src={Asus} 
                    width={150}
                    height={150}
                    className="" alt="hp logo"
                    />
                </div>
                <div className="p-4">
                    <Image src={Acer} 
                    width={150}
                    height={150}
                    className="" alt="hp logo"
                    />
                </div>
                <div className="p-4">
                    <Image src={Microsoft} 
                    className="" alt="hp logo"
                    />
                </div>
                <div className="p-4">
                    <Image src={Lenovo} 
                    className="" alt="hp logo"
                    />
                </div>
                <div className="p-4">
                    <Image src={Google} 
                    className="" alt="hp logo"
                    />
                </div>
                <div className="p-4">
                    <Image src={GatesFoundation} 
                    className="" alt="hp logo"
                    />
                </div>
                <div className="p-4">
                    <Image src={ClintonFoundation} 
                    className="" alt="hp logo"
                    />
                </div>
                <div className="p-4">
                    <Image src={ComputerAid} 
                    className="" alt="hp logo"
                    />
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Sponsors



