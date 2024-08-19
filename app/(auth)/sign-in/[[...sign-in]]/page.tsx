import { SignIn, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'

export default function Page() {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-col-2"> 
            <div className="h-full lg:flex flex-col items-center justify-center px4">
                <div className="text-center space-y-4 pt-16">
                    <h1 className="font-bold text-3xl text-[#2E2A47]"> 
                        Welcome to the Finance App
                    </h1>
                    <p className="text-based text-[#7E8CA0]">Please logIn or SignUp</p>
                    <div className="flex items-center justify center mt-8">
                        <SignIn path="/sign-in" />
                        </div>
                    </div>
            </div>
        </div>
    )
};