export default function Uploader() {
  return (
    <div className='mt-10 md:flex justify-center'>
      <label className='font-title flex justify-center items-center me-2 w-full md:w-2/4 h-10 md:h-auto rounded-xl cursor-pointer border-2 border-dashed border-neutral-500 opacity-50'>
        <p className=''>Drag your directory here or click to upload</p>
        <input type='file' hidden />
      </label>
      <button className='bg-zinc-900  border-zinc-900 border rounded-xl inline-flex mt-3 md:mt-0 w-full md:w-auto items-center justify-center py-3 px-14 text-center text-sm font-medium text-white hover:bg-zinc-800 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
        Commentify
      </button>
    </div>
  );
}
