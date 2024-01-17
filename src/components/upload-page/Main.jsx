import { SparklesIcon } from "@heroicons/react/24/solid";
import GearAnimation from "../GearAnimation";

export default function Main() {
  return (
    <div>
      <div className='flex justify-center'>
        <GearAnimation animate='once' />
      </div>
      <div className='mt-10 text-center font-title'>
        <h1 className='text-5xl text-zinc-900 font-extrabold'>
          Documenting Code Made Easy
        </h1>
        <h3 className='mt-4 text-xl font-medium '>
          Upload your project directory and watch the&nbsp;
          <span className='font-extrabold  bg-gradient-to-r from-cyan-700 via-sky-500 to-emerald-500 bg-clip-text text-transparent'>
            AI
            <span className='relative'>
              <SparklesIcon className='absolute md:bottom-4 md:-right-4 inline h-3 w-3 md:h-5 md:w-5 text-cyan-600' />
            </span>
          </span>
          &nbsp;&nbsp;work its magic.
        </h3>
      </div>
    </div>
  );
}
