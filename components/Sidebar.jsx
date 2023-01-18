import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {RxSketchLogo} from 'react-icons/rx'

const Sidebar = ({children}) => {
return (


    <div className='flex'>
        <div className='fixed w-20 h-screen bg-white border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
                <Link href='/'>
                    <div>
                        <RxSketchLogo size={20} />
                    </div>
                </Link>
            </div>
        </div>
        <main className='ml-20 w-full'>
            {children}
        </main>

    </div>
)
}

export default Sidebar