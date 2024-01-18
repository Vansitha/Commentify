import { PlusIcon } from "@heroicons/react/24/solid";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";

const ALLOWED_LANGUAGES = [".java"];
const MAX_FILES_LIMIT = 15;

export default function Uploader() {
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length === 0) {
      toast.error("Empty directory");
      return;
    }

    // if no java files then error
    // if total files java files is > 15 then  error
    // ignore . folders and node_modules
    console.log(acceptedFiles);
  }, []);

  const { getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <form className='mt-10 md:flex justify-center'>
      <label
        // {...getRootProps()}
        className='hover:bg-blue-100 hover:text-blue-900 font-body text-xs md:text-sm flex justify-center items-center me-2 w-full md:w-2/4 h-10 md:h-auto rounded-xl cursor-pointer border-2 border-dashed border-neutral-500 opacity-80 hover:border-blue-700'
      >
        <input
          {...getInputProps({
            webkitdirectory: "true",
            multiple: true,
          })}
        />
        {isDragActive ? (
          <p>Drop your folder here</p>
        ) : (
          <>
            <p className='md:block hidden '>
              Drag and drop your project here or click to upload
            </p>
            <p className='md:hidden'>Click to upload your project</p>
            <PlusIcon className='ms-1 h-3 w-3' />{" "}
          </>
        )}
      </label>
      <button
        disabled={isBtnDisabled}
        className='bg-zinc-900  border-zinc-900 border rounded-xl inline-flex mt-3 md:mt-0 w-full md:w-auto items-center justify-center py-3 px-14 text-center text-sm font-medium text-white hover:bg-zinc-800 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'
      >
        Commentify
      </button>
    </form>
  );
}
