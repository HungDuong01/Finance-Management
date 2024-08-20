import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
   
    <div>
      <UserButton afterSignOutUrl="/" /> 
      <div className="min-h-h-full lg:flex flex-col items-center ">
        This is the homepage aka authenticated route
        </div>
    </div>

    );
}
