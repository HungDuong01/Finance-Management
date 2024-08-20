import Image from 'next/image'
import { SignUp, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'
export default function Page() {
    return (
        <div className='min-h-green grid grid-cols-1 lg:grid-cols-2'>
            <div className='h-full lg:flex flex-col items-center justify-center px-4'>
                <div className='text-center space-y-4 pt-16'>
                    <h1 className='font-bold text-3xl text-[#2E2A47]'>
                        Welcome to InterFin 
                    </h1>
                    <p className='text-base text-[#7E8CA0]'>
                        Log In or Sign Up to access the application 
                    </p>
                </div>
                <div className='flex items-center justify-center mt-8'>
                    <ClerkLoaded> 
                        <SignUp path="/sign-up" />
                    </ClerkLoaded>
                    <ClerkLoading>
                        <Loader2 className='animate-spin text-muted-foreground'/>
                    </ClerkLoading>
                </div>
            </div>

            <div className='h-full bg-white hidden lg:flex items-center justify-center'>
                <Image src="/logo.svg" height={100} width={350} alt='Logo'/>
            </div>
        </div>
        
    )
};