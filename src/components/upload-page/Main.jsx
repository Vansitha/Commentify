import Gear from "../../assets/gear2.svg";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function Main() {
  return (
    <div>
      <div className='flex justify-center'>
        <img src={Gear} alt='Gear' height={140} width={140} />
      </div>
      <div className='mt-10 text-center font-title'>
        <h1 className='text-5xl font-extrabold'>Documenting Made Easy</h1>
        <h3 className='mt-4 text-xl font-medium'>
          Upload your project directory and watch the&nbsp;
          <span className='font-extrabold text-sky-600'>
            AI
            <span className='relative'>
              <SparklesIcon className='absolute bottom-4 -right-4 inline h-5 w-5 text-sky-600 ' />
            </span>
          </span>
          &nbsp;&nbsp;work its magic.
        </h3>
      </div>
    </div>
  );
}
