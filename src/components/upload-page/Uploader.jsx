import { PlusIcon } from "@heroicons/react/24/solid";

export default function Uploader() {
  return (
    <div className='mt-10 md:flex justify-center'>
      <label className='font-body text-xs md:text-sm flex justify-center items-center me-2 w-full md:w-2/4 h-10 md:h-auto rounded-xl cursor-pointer border-2 border-dashed border-neutral-500 opacity-50'>
        <p className='md:block hidden'>
          Drag your directory here or click to upload
        </p>
        <p className='md:hidden'>Click to upload your project</p>
        <PlusIcon className='ms-2 h-3 w-3' />
        <input type='file' hidden />
      </label>
      <button className='bg-zinc-900  border-zinc-900 border rounded-xl inline-flex mt-3 md:mt-0 w-full md:w-auto items-center justify-center py-3 px-14 text-center text-sm font-medium text-white hover:bg-zinc-800 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
        Commentify
      </button>
    </div>
  );
}
