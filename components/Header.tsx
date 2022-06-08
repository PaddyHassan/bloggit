import Image from 'next/image'
import React from 'react'
import {
    UserIcon,
  } from '@heroicons/react/outline'
  import {
      ChatAlt2Icon,
  } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import Avatar from './Avatar'
import Link from 'next/link'

function Header() {
    const { data: session } = useSession();
  return (
    <div className='sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm items-center place-content-between'>
        <Link href='/'>
            <div className='flex items-center cursor-pointer'>
                <div className='relative h-10 w-10 flex-shrink-0'>               
                    <ChatAlt2Icon className='h-10 w-10 text-red-500'/>                
                </div>
                <p className='ml-1 font-bold flex-1 inline text-red-500'>Bloggit</p>                
            </div>

        </Link>


        {/* Sign in Sign out button */}
        {session ? (
            <div onClick={() => signOut()} className='flex cursor-pointer items-center space-x-2 border border-gray-100 p-2'>
            <div className='relative h-5 w-5 flex-shrink-0'>

            </div>
            <div className='flex-1 text-xs'>
                <p className='truncate'>{session?.user?.name}</p>
                <p className='text-gray-400'>Sign Out</p>                
            </div>
                <Avatar />

        </div>  
        ): (
            <div onClick={() => signIn()} className='flex cursor-pointer items-center space-x-2 border border-gray-100 p-2'>
                <div className='relative h-5 w-5 flex-shrink-0'>
                    <UserIcon className='text-gray-400'/>
                </div>
                <p className='text-gray-400'>Sign In</p>
            </div>            
        )}
            

    </div>
  )
}

export default Header