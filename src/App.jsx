import GithubLogo from "./assets/icons/github.png";
import Gear from "./assets/gear2.svg";
import { SparklesIcon } from "@heroicons/react/24/solid";

function App() {
  return (
    <div className='h-screen flex flex-col jusitfy-between'>
      <div className='container mx-auto font-body'>
        {/* Header Component start */}
        <div className='flex justify-between pt-5'>
          <div className='flex items-center'>
            <h1 className='font-title font-bold text-2xl cursor-pointer'>
              &lt;Commentify/&gt;
            </h1>
            <span className='ms-2 bg-sky-200 text-blue-600 text-xs w-10 h-5 px-10 py-3 flex items-center justify-center font-medium rounded-lg'>
              alpha
            </span>
          </div>
          <img
            className='cursor-pointer'
            width={30}
            height={30}
            src={GithubLogo}
            alt='Github Logo'
          />
        </div>
        {/* Header Component end */}
        {/* Main Section component */}
        <main className='mt-12 mb-60'>
          <div className='flex justify-center'>
            <img src={Gear} alt='Gear' height={150} width={150} />
          </div>
          <div className='mt-10 text-center font-title'>
            <h1 className='text-6xl font-extrabold'>Documenting Made Easy</h1>
            <h3 className='mt-4 text-2xl font-medium'>
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
          {/* file uploader component */}
          <div className='mt-10 flex justify-center'>
            <label className='font-title flex justify-center items-center me-2 w-1/2 rounded-xl cursor-pointer border-2 border-dashed border-neutral-500 opacity-50'>
              <p className=''>Drag your directory here or click to upload</p>
              <input type='file' hidden />
            </label>
            <button className='bg-stone-900 border-stone-900 border rounded-xl inline-flex items-center justify-center py-3 px-14 text-center text-base font-medium text-white hover:bg-stone-800 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
              Commentify
            </button>
          </div>
        </main>
      </div>
      {/* Footer component */}
      <footer className='py-16 font-title text-center text-sm bg-stone-900 text-gray-300'>
        <p>Designed and built by Vansitha Ratnayake</p>
        <p className='mt-1'>version 1.0.0-alpha</p>
      </footer>
    </div>
  );
}

export default App;
