import Logo from '@/components/Helper/Logo'
import { COMPANYLINKS } from '@/constant/constant'
import { link } from 'fs'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-white border-t border-gray-200 mt-20 ">
        <div className="w-[80%] mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
        <div >
        <Logo />
        <p className="text-gray-600 text-md mt-6 sm:w-4/5">
            We're the digital agency to create your digital presence for better conversion and sales.
        </p>
        </div>
        <div >
            <h3 className="text-lg text-gray-400 mb-6">
                Company
            </h3>
            {COMPANYLINKS.map((link)=>{
            return(
            <Link href={link.url} key={link.id}>
                <p className="text-sm text-gray-600 hover:text-black mt-1 items-center mb-6 ">{link.label}</p>
            </Link>
            );
})}
        </div>
        <div >
            <h3 className="text-lg text-gray-400 mb-6">
                Contact Details
            </h3>
            <ul className="space-y-5 text-sm text-shadow-gray-600 ">
                <li className="felx items-start gap-3 flex">
                    <span className="bg-pink-600 text-lg">📍</span>
                    <div>
                        <p>Amsterdam</p>
                        <p>Netherlands</p>
                    </div>
                </li>
                <li className="felx items-start gap-3 flex">
                    <span className="bg-pink-600 text-lg">📞</span>
                    <div>
                        <p>+31 45 54 123</p>
                        <p className="text-gray-400">7 Days - 8am - 10pm</p>
                    </div>
                </li>
                <li className="felx items-start gap-3 flex">
                    <span className=" text-lg">✉️</span>
                    <div>
                        <p>info@email.com</p>
                    </div>
                </li>
            </ul>

        </div>
        <div>
            <h3 className="text-lg text-gray-400 mb-6">
                Follow Us On Social Media
            </h3>
            <p className="text-sm text-gray-600 mb-6">Get the latest trends updates right at your inbox.</p>
            <div className="flex flex-wrap gap-2 text-sm text-gray-700 mb-6">
                <span className="hover:text-black cursor-pointer">Facebook</span>.
                <span className="hover:text-black cursor-pointer">Twitter</span>.
                <span className="hover:text-black cursor-pointer">Instagram</span>.
            </div>
            <img src={"/images/footer.png "} 
                alt="footer image"
                className="object-contain"
                height={200}
                width={200}/>
        </div>
        </div>
        <div className="border-t-2 border-gray-200 text-center text-gray-400 text-sm py-6">© 2025 Webdev warrios. All Rights Reserved</div>
    </div>
  )
}
export default Footer