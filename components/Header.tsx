import Image from 'next/image'
import React from 'react'
import {
    BellIcon,
    ChatIcon,
    GlobeIcon,
    PlusIcon,
    SparklesIcon,
    SpeakerphoneIcon,
    UserIcon,
    VideoCameraIcon,
  } from '@heroicons/react/outline'
  import {
      ChatAlt2Icon,
    ChevronDownIcon,
    HomeIcon,
    MenuIcon,
    SearchIcon,
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
        {/* <div className='mx-7 flex items-center xl:min-w-[300px]'>
            <HomeIcon className='h-5 w-5'/> 
            <p className='ml-2 hidden flex-1 lg:inline'>Home</p>
            <ChevronDownIcon className='h-5 w-5' />
        </div> */}

        {/* Search Box */}
        {/* <form className='flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1 mx-3'>
            <SearchIcon className='h-6 w-6 text-gray-400'/>
            <input className='flex-1 bg-transparent outline-none' type="text" placeholder='Search Bloggit' />
            <button hidden type='submit'/>
        </form> */}

        {/* Icons */}
        {/* <div className='mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex'>
            <SparklesIcon className='icon'/>
            <GlobeIcon className='icon'/>
            <VideoCameraIcon className='icon'/>
            <hr className='h-10 border border-gray-100'/>
            <ChatIcon className='icon'/>
            <BellIcon className='icon'/>
            <PlusIcon className='icon'/>
            <SpeakerphoneIcon className='icon'/>
        </div>
        <div className='ml-5 flex items-center lg:hidden'>
            <MenuIcon className='icon'/>
        </div> */}

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
            {/* <ChevronDownIcon className='h-5 flex-shrink-0 text-gray-400' /> */}

        </div>  
        ): (
            <div onClick={() => signIn()} className='hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex '>
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