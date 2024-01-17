import Logo from "../components/Logo";
import GearAnimation from "../components/GearAnimation";
import Footer from "../components/Footer";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function ProjectPage() {
  return (
    <div className='h-screen flex flex-col justify-between '>
      <div className='flex justify-between items-center container mx-auto mt-5 px-3 lg:px-0'>
        <Logo />
        <button className='bg-zinc-900 font-body border-zinc-900 border rounded-xl items-center justify-center py-3 px-6 text-center text-xs font-medium text-white hover:bg-zinc-800 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 md:block hidden'>
          Download
        </button>
        <ArrowDownTrayIcon className='h-6 w-6 text-zinc-900 md:hidden cursor-pointer' />
      </div>
      <main className='flex flex-col justify-center items-center'>
        <GearAnimation animate='loop' />
        <p className='mt-4 font-medium'>Commentifying your project</p>
      </main>
      <Footer />
    </div>
  );
}
